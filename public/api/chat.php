<?php
// Portfolio chat endpoint. POST { messages: [{ role, content }, ...] } → { reply }.

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Anthropic\Client;
use Anthropic\Core\Exceptions\APIConnectionException;
use Anthropic\Core\Exceptions\APIStatusException;
use Anthropic\Core\Exceptions\RateLimitException;

header('Content-Type: application/json');

$config = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$apiKey = $config['anthropic_api_key'] ?? getenv('ANTHROPIC_API_KEY');
$allowedOrigins = $config['allowed_origins'] ?? ['https://atomicconsulting.org', 'https://www.atomicconsulting.org'];

const MAX_MESSAGES = 20;
const MAX_CHARS = 1000;
const RATE_LIMIT = 20;          // requests…
const RATE_WINDOW = 600;        // …per 10 minutes, per IP

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed']);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? null;
if ($origin !== null && !in_array($origin, $allowedOrigins, true)) {
    respond(403, ['error' => 'Forbidden']);
}

if (!$apiKey) {
    respond(500, ['error' => 'Chat is not configured']);
}

// ── Per-IP rate limit (file-based; good enough for shared hosting) ──
$bucket = sys_get_temp_dir() . '/portfolio-chat-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? '');
$now = time();
$hits = is_file($bucket) ? (json_decode((string) file_get_contents($bucket), true) ?: []) : [];
$hits = array_values(array_filter($hits, fn($t) => $t > $now - RATE_WINDOW));
if (count($hits) >= RATE_LIMIT) {
    respond(429, ['error' => "You're sending messages too quickly. Please wait a few minutes."]);
}
$hits[] = $now;
file_put_contents($bucket, json_encode($hits), LOCK_EX);

// ── Validate conversation ──
$input = json_decode((string) file_get_contents('php://input'), true);
$messages = $input['messages'] ?? null;
if (!is_array($messages) || $messages === [] || count($messages) > MAX_MESSAGES) {
    respond(400, ['error' => 'Invalid conversation']);
}
$clean = [];
foreach ($messages as $i => $m) {
    $role = $m['role'] ?? null;
    $content = $m['content'] ?? null;
    $expected = $i % 2 === 0 ? 'user' : 'assistant';
    if ($role !== $expected || !is_string($content) || trim($content) === '' || mb_strlen($content) > MAX_CHARS * 4) {
        respond(400, ['error' => 'Invalid conversation']);
    }
    $clean[] = ['role' => $role, 'content' => $content];
}
$last = end($clean);
if ($last['role'] !== 'user' || mb_strlen($last['content']) > MAX_CHARS) {
    respond(400, ['error' => 'Message too long']);
}

// ── Ask Claude ──
$client = new Client(apiKey: $apiKey);

try {
    $message = $client->messages->create(
        model: 'claude-haiku-4-5',
        maxTokens: 1024,
        system: require __DIR__ . '/system-prompt.php',
        messages: $clean,
        cacheControl: ['type' => 'ephemeral'],
    );
} catch (RateLimitException) {
    respond(503, ['error' => 'The assistant is busy right now. Please try again in a moment.']);
} catch (APIStatusException | APIConnectionException $e) {
    error_log('portfolio chat: ' . $e->getMessage());
    respond(502, ['error' => 'The assistant is unavailable right now. Please use the contact form instead.']);
}

if ($message->stopReason === 'refusal') {
    respond(200, ['reply' => "I can't help with that one, but feel free to ask about Patrick's work, services or pricing."]);
}

$reply = '';
foreach ($message->content as $block) {
    if ($block->type === 'text') {
        $reply .= $block->text;
    }
}

respond(200, ['reply' => trim($reply)]);
