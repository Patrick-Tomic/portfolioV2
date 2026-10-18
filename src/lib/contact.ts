import emailjs from '@emailjs/browser'

// EmailJS sends these to Patrick's inbox (and triggers the auto-reply, if one is set up in EmailJS)
const SERVICE_ID = 'service_dpnvezf'
const TEMPLATE_ID = 'template_iyh9k4z'
const PUBLIC_KEY = 'XAK6Zs6QJdrC_Ywy0'

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

export function sendContactMessage({ name, email, subject, message }: ContactMessage) {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, from_email: email, subject, message }, PUBLIC_KEY)
}
