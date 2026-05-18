"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital@1&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  background-color: #000000;
  padding: 0;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
}
body header {
  background-color: white;
  position: relative;
  height: 20vh;
  box-shadow: 1px 0px 5px 5px black;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
body header h1 {
  font-size: 60px;
  font-family: "Anton", system-ui;
}
body .gold {
  background-color: #b69460;
  width: 20px;
  height: 20px;
}
body .maroon {
  background-color: maroon;
  width: 20px;
  height: 20px;
}
body .instruction {
  box-shadow: 1px 0px 5px 5px white;
  font-family: "Anton", system-ui;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  font-size: 26px;
  z-index: 1;
  position: absolute;
  width: 90%;
  height: 75%;
  left: 5%;
  top: 15%;
}
body .instruction ol {
  display: flex;
  flex-direction: column;
}
body .instruction ol li {
  margin-top: 5vh;
}
body .instruction ol li ul li {
  margin-top: 15px;
  list-style: inside;
}
body .instruction ol li ul li button {
  position: absolute;
  margin-left: 16%;
  margin-top: 12px;
}
body .instruction .close {
  cursor: pointer;
  width: 5vw;
  margin-top: 5vh;
  height: 4vh;
  border: none;
  background-color: #b69460;
}
body .instruction #close:hover {
  background-color: maroon;
  color: white;
}
body main {
  opacity: 0.33;
  height: 83%;
  background-color: #B2BEB5;
  display: flex;
  flex-direction: column;
}
body main #reset {
  align-self: center;
  display: none;
  font-family: "Anton", system-ui;
  cursor: pointer;
  width: 10vw;
  height: 6vh;
  font-size: 35px;
  background-color: #B2BEB5;
  border: none;
}
body main .menuBar {
  z-index: auto;
  position: absolute;
  margin-top: 2vh;
  align-self: center;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  width: 30vw;
}
body main .menuBar .title {
  font-family: "Anton", system-ui;
  font-size: 40px;
  position: absolute;
  margin-left: 6vw;
}
body main .menuBar button {
  font-family: "Anton", system-ui;
  cursor: pointer;
  width: 10vw;
  height: 6vh;
  font-size: 35px;
  background-color: #B2BEB5;
  border: none;
}
body main .menuBar .startBtn {
  display: none;
}
body main .menuBar button:hover {
  color: navy;
}
body main .gridContainer {
  margin-top: 15vh;
  display: flex;
  justify-content: space-around;
}
body main .gridContainer div h2 {
  text-align: center;
  font-family: "Anton", system-ui;
}
body main .gridContainer .computer {
  display: grid;
  grid-template-columns: repeat(10, 3vw);
  gap: 0;
  width: auto;
}
body main .gridContainer .computer .compCell {
  border: 1px solid black;
  background-color: #6082B6;
  width: 3vw;
  height: 5vh;
}
body main .gridContainer .computer .compCell:hover {
  background-color: yellow;
}
body main .gridContainer .player {
  display: grid;
  grid-template-columns: repeat(10, 3vw);
  gap: 0;
  width: auto;
}
body main .gridContainer .player .playerCell {
  background-color: #6082B6;
  border: 1px solid #000000;
  width: 3vw;
  height: 5vh;
}
body footer {
  background-color: white;
  box-shadow: 0px 0px 5px 5px;
  border-top: 1px black solid;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
}
body footer h3 {
  margin-top: 5vh;
  font-size: 35px;
  font-family: "Teko", sans-serif;
  width: 20vw;
}
body footer svg:hover {
  transform: scale(1.5);
}
body footer svg {
  cursor: pointer;
  transition: transform 0.5s ease-in-out 0.1s;
  transform: scale(1);
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,YAAA;EACE,UAAA;EACA,SAAA;AAAJ;;AAEA;EACI,yBAAA;EACA,UAAA;EACD,cAAA;EACA,iBAAA;EACF,YAAA;AACD;AACA;EACI,uBAAA;EACA,kBAAA;EAED,YAAA;EACC,iCAAA;EACA,YAAA;EACA,aAAA;EACC,uBAAA;EACA,mBAAA;AAAL;AACI;EACK,eAAA;EACA,+BAAA;AACT;AAGA;EACI,yBAAA;EACA,WAAA;EACA,YAAA;AADJ;AAIA;EACI,wBAAA;EACA,WAAA;EACA,YAAA;AAFJ;AAIA;EACI,iCAAA;EACA,+BAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EAEA,eAAA;EACJ,UAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,QAAA;EACA,QAAA;AAHA;AAIA;EACI,aAAA;EACA,sBAAA;AAFJ;AAGI;EACI,eAAA;AADR;AAGY;EAMI,gBAAA;EACA,kBAAA;AANhB;AAAgB;EACC,kBAAA;EACA,gBAAA;EACA,gBAAA;AAEjB;AAMA;EACI,eAAA;EACA,UAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AAJJ;AAMA;EACA,wBAAA;EACA,YAAA;AAJA;AAOA;EACI,aAAA;EAYH,WAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;AAhBD;AAEI;EACI,kBAAA;EACA,aAAA;EACH,+BAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;AAAL;AAOC;EACI,aAAA;EACD,kBAAA;EAOC,eAAA;EACA,kBAAA;EACA,kBAAA;EAEA,aAAA;EACA,uBAAA;EACA,WAAA;AAZL;AAAK;EACI,+BAAA;EACA,eAAA;EACD,kBAAA;EACC,gBAAA;AAET;AAOK;EAEI,+BAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;AANT;AAQK;EACC,aAAA;AANN;AAQK;EACI,WAAA;AANT;AASC;EAOG,gBAAA;EACC,aAAA;EACA,6BAAA;AAbL;AAMS;EACI,kBAAA;EACA,+BAAA;AAJb;AAUK;EACI,aAAA;EACA,sCAAA;EACA,MAAA;EACA,WAAA;AART;AAUS;EACI,uBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;AARb;AAWS;EACI,wBAAA;AATb;AAYC;EACI,aAAA;EACA,sCAAA;EACA,MAAA;EACA,WAAA;AAVL;AAYK;EACI,yBAAA;EACA,yBAAA;EACA,UAAA;EACA,WAAA;AAVT;AAiBA;EACG,uBAAA;EACC,2BAAA;EACA,2BAAA;EACC,UAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfL;AAgBI;EACI,eAAA;EACA,eAAA;EACA,+BAAA;EACC,WAAA;AAdT;AAiBI;EAEE,qBAAA;AAhBN;AAmBI;EACI,eAAA;EACC,2CAAA;EACD,mBAAA;AAjBR","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital@1&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap\");\nhtml{\n  height: 100%;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    background-color: #000000;\n    padding: 0;\n   margin: 0 auto;\n   min-height: 100vh;\n height: 100%;\n\nheader{\n    background-color: white;\n    position: relative;\n    \n   height: 20vh;\n    box-shadow: 1px 0px 5px 5px black;\n    height: 10vh;\n    display: flex;\n     justify-content: center;\n     align-items: center;\n    h1{\n         font-size: 60px;\n         font-family: 'Anton', system-ui;\n        \n    }\n}\n.gold{\n    background-color:#b69460 ;\n    width: 20px;\n    height: 20px;\n     \n}\n.maroon{\n    background-color: maroon;\n    width: 20px;\n    height: 20px;\n}\n.instruction{\n    box-shadow: 1px 0px 5px 5px white;\n    font-family: 'Anton', system-ui;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    align-items: center;\n     \n    font-size: 26px;\nz-index: 1;\nposition: absolute;\nwidth: 90%;\nheight: 75%;\nleft: 5%;\ntop: 15%;\nol{\n    display: flex;\n    flex-direction: column;\n    li{\n        margin-top: 5vh;\n        ul{\n            li{\n                button{\n                 position: absolute;\n                 margin-left: 16%;\n                 margin-top: 12px;\n                }\n                margin-top: 15px;\n                list-style:inside;\n            }\n        }\n    }\n}\n.close{\n    cursor: pointer;\n    width: 5vw;\n    margin-top: 5vh;\n    height: 4vh;\n    border: none;\n    background-color:#b69460  ;\n}\n#close:hover{\nbackground-color: maroon;\ncolor: white;\n }\n}\nmain{\n    opacity: 0.33;\n    #reset{\n        align-self: center;\n        display: none;\n     font-family: 'Anton', system-ui;\n     cursor: pointer;;\n     width: 10vw;\n     height: 6vh;\n     font-size: 35px;\n     background-color: #B2BEB5;\n     border: none;\n }\n height: 83%;\n background-color: #B2BEB5;\n display: flex;\n flex-direction: column;\n \n .menuBar{\n     z-index: auto;\n    position: absolute;\n     .title{\n         font-family: 'Anton', system-ui;\n         font-size: 40px;\n        position: absolute;\n         margin-left: 6vw;\n     }\n     margin-top: 2vh;\n     align-self: center;\n     margin-bottom: 5vh;\n   \n     display: flex;\n     justify-content: center;\n     width: 30vw;\n     button{\n        \n         font-family: 'Anton', system-ui;\n         cursor: pointer;;\n         width: 10vw;\n         height: 6vh;\n         font-size: 35px;\n         background-color: #B2BEB5;\n         border: none;\n     }\n     .startBtn{\n      display: none;\n      }\n     button:hover{\n         color:navy;\n     }\n }\n .gridContainer{ \n     div{\n         h2{\n             text-align: center;\n             font-family: 'Anton', system-ui;\n         }\n     }\n    margin-top: 15vh;\n     display: flex;\n     justify-content: space-around;\n     .computer{\n         display: grid;\n         grid-template-columns: repeat(10, 3vw);\n         gap: 0;\n         width: auto;\n     \n         .compCell{        \n             border:1px solid black;\n             background-color: #6082B6;\n             width: 3vw;\n             height: 5vh;\n             \n         }\n         .compCell:hover{\n             background-color: yellow;\n         }\n     }\n .player{\n     display: grid;\n     grid-template-columns: repeat(10, 3vw);\n     gap: 0;\n     width: auto;\n \n     .playerCell{        \n         background-color:#6082B6;\n         border:1px solid #000000;\n         width: 3vw;\n         height: 5vh;\n     }\n      \n    }\n    }\n   \n}\nfooter{\n   background-color: white;\n    box-shadow: 0px 0px 5px 5px ;\n    border-top: 1px black solid;\n     height: 7%;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n    h3{\n        margin-top: 5vh;\n        font-size: 35px;\n        font-family: 'Teko', sans-serif;\n         width: 20vw;\n    }\n    \n    svg:hover{\n         \n      transform: scale(1.5);\n    \n    }\n    svg{\n        cursor: pointer;\n         transition: transform .5s ease-in-out .1s;\n        transform: scale(1);  \n      }\n   \n}\n}\n "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameBoard.ts":
/*!**************************!*\
  !*** ./src/gameBoard.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ship_1 = __importDefault(__webpack_require__(/*! ./ship */ "./src/ship.ts"));
class GameBoard {
    constructor() {
        this.missedShot = [];
        this.board = [];
        this.initialize();
        this.ships = [];
    }
    initialize() {
        const board = this.board;
        const missedShot = this.missedShot;
        for (let i = 0; i < 100; i++) {
            board.push('');
            missedShot.push('');
        }
        this.board = board;
        this.missedShot = missedShot;
    }
    createBoat(position, length, direction) {
        if (this.board[position] != '') {
            console.log('position taken');
            return false;
        }
        else {
            switch (length) {
                case 2:
                    this.ships.push(new ship_1.default(length, 'Destroyer'));
                    break;
                case 3:
                    if (this.ships.length) {
                        this.ships.forEach((boat) => {
                            if (boat.name === 'Submarine') {
                                this.ships.push(new ship_1.default(length, 'Cruiser'));
                            }
                        });
                        if (this.ships[this.ships.length - 1].name === 'Cruiser')
                            break;
                    }
                    this.ships.push(new ship_1.default(length, 'Submarine'));
                    break;
                case 4:
                    this.ships.push(new ship_1.default(length, 'Battleship'));
                    break;
                case 5:
                    this.ships.push(new ship_1.default(length, 'Carrier'));
                    break;
                default:
                    console.log('not valid length');
                    return false;
            }
            let height = 0;
            let sub = 1;
            let bool = false;
            if (direction === 'horizontal') {
                // y == 9
                if (position % 10 === 9) {
                    while (height != length) {
                        if (this.board[position - height] != '') {
                            return false;
                        }
                        height++;
                    }
                    height = 0;
                    while (height != length) {
                        this.ships[this.ships.length - 1].positions.push(position - height);
                        this.board[position - height] = 'O';
                        height++;
                    }
                    height = 0;
                    return true;
                }
                //if y == 0
                else if (position % 10 === 0) {
                    while (height != length) {
                        if (this.board[position + height] != '') {
                            return false;
                        }
                        height++;
                    }
                    height = 0;
                    while (height != length) {
                        this.ships[this.ships.length - 1].positions.push(position + height);
                        this.board[position + height] = 'O';
                        height++;
                    }
                    height = 0;
                    return true;
                }
                // for all other occasions but y cant hit 9 or not valid
                else {
                    while (height != length) {
                        if (position + height % 10 === 0) {
                            bool = true;
                        }
                        if (bool === false) {
                            if (this.board[position + height] != '') {
                                return false;
                            }
                        }
                        if (bool === true) {
                            if (this.board[position - sub] != '') {
                                return false;
                            }
                            sub++;
                        }
                        height++;
                    }
                    height = 0;
                    sub = 1;
                    bool = false;
                    while (height != length) {
                        if ((position + height) % 10 === 0) {
                            bool = true;
                        }
                        if (bool === false) {
                            this.ships[this.ships.length - 1].positions.push(position + height);
                            this.board[position + height] = 'O';
                        }
                        else if (bool === true) {
                            this.ships[this.ships.length - 1].positions.push(position - sub);
                            this.board[position - sub] = 'O';
                            sub++;
                        }
                        height++;
                    }
                }
                return true;
            }
            else if (direction === 'vertical') {
                let width = 0;
                let count = 0;
                sub = 1;
                bool = false;
                if (position >= 90 && position <= 99) {
                    while (count != length) {
                        if (this.board[position - width] != '') {
                            return false;
                        }
                        width += 10;
                        count++;
                    }
                    width = 0;
                    count = 0;
                    while (count != length) {
                        this.ships[this.ships.length - 1].positions.push(position - width);
                        this.board[position - width] = 'O';
                        width += 10;
                        count++;
                    }
                    return true;
                }
                else if (position <= 9) {
                    count = 0;
                    width = 0;
                    while (count != length) {
                        if (this.board[position + width] != '') {
                            return false;
                        }
                        width += 10;
                        count++;
                    }
                    width = 0;
                    count = 0;
                    while (count != length) {
                        this.ships[this.ships.length - 1].positions.push(position + width);
                        this.board[position + width] = 'O';
                        width += 10;
                        count++;
                    }
                    return true;
                }
                else if (position >= 10 && position <= 89) {
                    sub = 10;
                    count = 0;
                    bool = false;
                    while (count != length) {
                        if (position + width >= 100) {
                            bool = true;
                        }
                        if (bool === false && this.board[position + width] != '') {
                            return false;
                        }
                        else if (bool === true) {
                            if (this.board[position - sub] != '') {
                                return false;
                            }
                            sub += 10;
                        }
                        width += 10;
                        count++;
                    }
                    width = 0;
                    sub = 10;
                    count = 0;
                    bool = false;
                    while (count != length) {
                        if (position + width >= 100) {
                            bool = true;
                        }
                        if (bool === false) {
                            this.ships[this.ships.length - 1].positions.push(position + width);
                            this.board[position + width] = 'O';
                        }
                        else if (bool === true) {
                            this.ships[this.ships.length - 1].positions.push(position - sub);
                            this.board[position - sub] = 'O';
                            sub += 10;
                        }
                        width += 10;
                        count++;
                    }
                    return true;
                }
            }
        }
    }
    shipsSunk() {
        let isSunk = true;
        const boats = this.ships;
        while (boats.length) {
            if (this.ships[0].Sunk == false) {
                isSunk = false;
                return isSunk;
            }
            boats.shift();
        }
        console.log('Game Over');
        return isSunk;
    }
}
exports["default"] = GameBoard;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.scss */ "./src/style.scss");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./src/user.ts"));
const main = document.querySelector('main');
const body = document.querySelector('body');
const instructions = document.querySelector('.instruction');
const player = new user_1.default('Player');
const computer = new user_1.default('Computer');
const close = document.querySelector('.close');
close === null || close === void 0 ? void 0 : close.addEventListener('click', () => {
    body === null || body === void 0 ? void 0 : body.setAttribute('style', 'background-color:white');
    main === null || main === void 0 ? void 0 : main.setAttribute('style', 'opacity:1');
    instructions === null || instructions === void 0 ? void 0 : instructions.setAttribute('style', 'display:none');
});
console.log(computer.board());
/*  player.createBoat(56,5,'horizontal')
 player.createBoat(71,4,'vertical')
 player.createBoat(33,2,'horizontal')
 player.createBoat(99,3,'vertical')
 player.createBoat(74,3,'horizontal')
 */
for (let i = 0; i < player.board().length; i++) {
    const div = document.createElement('div');
    div.classList.add('playerCell');
    div.id = `${i}`;
    if (player.boardCell(i) != '') {
        div.setAttribute('style', 'background-color:maroon');
    }
    else {
        div.innerHTML = '';
    }
    (_a = document.querySelector('.player')) === null || _a === void 0 ? void 0 : _a.appendChild(div);
}
computer.randomCreateBoats();
for (let i = 0; i < computer.board().length; i++) {
    const div = document.createElement('div');
    div.classList.add('compCell');
    div.id = `${i}`;
    if (computer.boardCell(i) != '') {
        div.classList.add('boat');
    }
    (_b = document.querySelector('.computer')) === null || _b === void 0 ? void 0 : _b.appendChild(div);
}
let playerCount = 1;
const axis = document.querySelector('.axis');
let direction = axis.id;
axis.addEventListener('click', () => {
    if (axis.id === 'horizontal') {
        axis.id = 'vertical';
        axis.innerHTML = 'Y-Axis';
        direction = axis.id;
        return;
    }
    else if (axis.id === 'vertical') {
        axis.id = 'horizontal';
        axis.innerHTML = 'X-Axis';
        direction = axis.id;
        return;
    }
});
const menuBar = document.querySelector('.menuBar');
const start = document.querySelector('.startBtn');
const playerCells = document.querySelectorAll('.playerCell');
let array = [5, 4, 3, 3, 2];
playerCells.forEach(cell => {
    let Xpositions = []; //horizontal
    let Ypositions = []; //vertical
    let position = parseInt(cell.id);
    let Xcells = [];
    let Ycells = [];
    cell.addEventListener('mouseover', () => {
        if (!array.length) {
            axis.setAttribute('style', 'display:none');
            start.setAttribute('style', 'display:block');
            return;
        }
        if (cell.className === 'playerCell boat') {
            cell.setAttribute('style', 'background-color:maroon; cursor:not-allowed');
            return;
        }
        if (direction === 'vertical') {
            if (Ypositions.length === 0 || Ypositions.length > array[0]) {
                Ypositions = [];
                placeBoats(cell, Ypositions, position, array[0]);
                Ycells = [];
            }
            for (let i = 0; i < Ypositions.length; i++) {
                const cells = document.getElementById(Ypositions[i]);
                if (cells.className === 'playerCell boat') {
                    const Cell = document.getElementById(Ypositions[0]);
                    Cell.setAttribute('style', 'background-color:maroon; cursor:not-allowed');
                    return;
                }
            }
            Ypositions.forEach((position) => {
                const cell = document.getElementById(position);
                Ycells.push(cell);
                cell.setAttribute('style', 'background-color:#36454F');
            });
        }
        else if (direction === 'horizontal') {
            if (Xpositions.length === 0 || Xpositions.length > array[0]) {
                Xpositions = [];
                placeBoats(cell, Xpositions, position, array[0]);
                Xcells = [];
            }
            for (let i = 0; i < Xpositions.length; i++) {
                const cell = document.getElementById(Xpositions[i]);
                if (cell.className === 'playerCell boat') {
                    const Cell = document.getElementById(Xpositions[0]);
                    Cell.setAttribute('style', 'background-color:maroon; cursor:not-allowed');
                    return;
                }
            }
            Xpositions.forEach((position) => {
                const cell = document.getElementById(position);
                Xcells.push(cell);
                cell.setAttribute('style', 'background-color:#36454F');
            });
        }
    });
    cell.addEventListener('mouseleave', () => {
        if (!array.length) {
            return;
        }
        if (cell.className === 'playerCell boat') {
            cell.setAttribute('style', 'background-color:#36454F');
            return;
        }
        if (direction === 'vertical') {
            Ypositions.forEach((position) => {
                const cell = document.getElementById(position);
                if (cell.className === 'playerCell boat') {
                    cell.setAttribute('style', 'background-color:#36454F');
                }
                else {
                    cell.setAttribute('style', 'background-color:#6082B6');
                }
            });
        }
        else if (direction === 'horizontal') {
            Xpositions.forEach((position) => {
                const cell = document.getElementById(position);
                if (cell.className === 'playerCell boat') {
                    cell.setAttribute('style', 'background-color:#36454F');
                }
                else {
                    cell.setAttribute('style', 'background-color:#6082B6');
                }
            });
        }
    });
    cell.addEventListener('click', () => {
        if (!array.length) {
            return;
        }
        if (cell.className === 'playerCell boat') {
            alert('Cell taken');
            return;
        }
        if (direction === 'vertical') {
            for (let i = 0; i < Ycells.length; i++) {
                if (Ycells[i].className === 'playerCell boat') {
                    alert('position taken');
                    return;
                }
            }
            Ycells.forEach((cell) => {
                cell.classList.add('boat');
                cell.setAttribute('style', 'background-color:#36454F');
            });
            if (player.createBoat(Ypositions[0], array[0], 'vertical') === false) {
                alert('Tile unavailable');
                return;
            }
            player.createBoat(Ypositions[0], array[0], 'vertical');
            array.shift();
            return;
        }
        else if (direction === 'horizontal') {
            for (let i = 0; i < Xcells.length; i++) {
                if (Xcells[i].className === 'playerCell boat') {
                    alert('position taken');
                    return;
                }
            }
            Xcells.forEach((cell) => {
                cell.classList.add('boat');
                cell.setAttribute('style', 'background-color:#36454F');
            });
            if (player.createBoat(Xpositions[0], array[0], 'horizontal') === false) {
                alert('Tile unavailable');
                return;
            }
            player.createBoat(Xpositions[0], array[0], 'horizontal');
            array.shift();
            return;
        }
    });
});
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    window.location.reload();
});
start.addEventListener('click', () => {
    const ships = player.ships();
    ships.forEach((ship) => console.log(typeof (ship.positions[0])));
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.removeChild(start);
    const compCells = document.querySelectorAll('.compCell');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = "Begin!";
    menuBar === null || menuBar === void 0 ? void 0 : menuBar.appendChild(title);
    let position;
    compCells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (player.flag === false) {
                console.log(computer.name + ' wins');
                return;
            }
            if (computer.flag === false) {
                console.log(player.name + ' wins');
                return;
            }
            title.innerHTML = '';
            position = parseInt(cell.id);
            computer.recieveAttack(position, cell, computer, player);
            if (player.shipsSunk() === false) {
                title.innerHTML = computer.name + ' wins';
                reset.setAttribute('style', 'display:block');
                return;
            }
            if (computer.shipsSunk() === false) {
                title.innerHTML = player.name + ' wins';
                reset.setAttribute('style', 'display:block');
                return;
            }
        });
    });
});
/* cell.setAttribute('style', 'background-color:#36454F') */
function placeBoats(cell, positions, position, length) {
    let count = 0;
    let sub = 1;
    let bool = false;
    if (direction === 'horizontal') {
        if (position % 10 === 9) {
            while (count != length) {
                if (player.board()[position - count] != '') {
                    return false;
                }
                count++;
            }
            count = 0;
            while (count != length) {
                positions.push(position - count);
                count++;
            }
            return true;
        }
        else if (position % 10 === 0) {
            while (count != length) {
                if (player.board()[position + count] != '') {
                    return false;
                }
                count++;
            }
            count = 0;
            while (count != length) {
                positions.push(position + count);
                count++;
            }
            return true;
        }
        else {
            while (count != length) {
                if (position + count % 10 === 0) {
                    return false;
                    bool = true;
                }
                if (bool === false) {
                    if (player.board()[position + count] != '') {
                        return false;
                    }
                }
                /*  if(bool === true){
                     if(player.board()[position -sub] != ''){
                         return false
                     }
                     sub++
                 } */
                count++;
            }
            count = 0;
            sub = 1;
            bool = false;
            while (count != length) {
                if ((position + count) % 10 === 0) {
                    bool = true;
                }
                if (bool === false) {
                    positions.push(position + count);
                }
                else if (bool === true) {
                    positions.push(position - sub);
                    sub++;
                }
                count++;
            }
            return true;
        }
    }
    else if (direction === 'vertical') {
        count = 0;
        let width = 0;
        sub = 1;
        bool = false;
        if (position >= 90 && position <= 99) {
            while (count != length) {
                if (player.board()[position - width] != '') {
                    return false;
                }
                width += 10;
                count++;
            }
            width = 0;
            count = 0;
            while (count != length) {
                positions.push(position - width);
                width += 10;
                count++;
            }
            return true;
        }
        else if (position <= 9) {
            width = 0;
            count = 0;
            while (count != length) {
                if (player.board()[position + width] != '') {
                    return false;
                }
                width += 10;
                count++;
            }
            width = 0;
            count = 0;
            while (count != length) {
                positions.push(position + width);
                width += 10;
                count++;
            }
            return true;
        }
        else if (position >= 10 && position <= 89) {
            while (count != length) {
                if (position + width >= 100) {
                    bool = true;
                }
                if (bool === false && player.board()[position + width] != '') {
                    return false;
                }
                else if (bool === true) {
                    if (player.board()[position - sub] != '') {
                        return false;
                    }
                    sub += 10;
                }
                width += 10;
                count++;
            }
            count = 0;
            sub = 10;
            width = 0;
            bool = false;
            while (count != length) {
                if (position + width >= 100) {
                    bool = true;
                }
                if (bool === false) {
                    positions.push(position + width);
                }
                else if (bool === true) {
                    positions.push(position - sub);
                    sub += 10;
                }
                width += 10;
                count++;
            }
            return true;
        }
    }
}


/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Ship {
    constructor(length, name) {
        this.length = length;
        this.Sunk = false;
        this.hits = 0;
        this.name = name;
        this.positions = [];
    }
    hit() {
        return this.hits++;
    }
    isSunk(user) {
        const title = document.querySelector('.title');
        if (this.hits === this.length) {
            this.Sunk = true;
            title.innerHTML = user.name + " has sunk your " + this.name;
            return true;
        }
        else {
            return false;
        }
    }
}
exports["default"] = Ship;


/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const gameBoard_1 = __importDefault(__webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts"));
class User {
    constructor(name) {
        this.gameBoard = new gameBoard_1.default;
        this.flag = true;
        this.area = null;
        this.chances = ['left', 'right', 'up', 'down'];
        this.vertical = false;
        this.horizontal = false;
        this.opposite = false;
        this.direction = null;
        this.marker = 0;
        this.name = name;
    }
    randomCreateBoats(lengthVals = [2, 3, 3, 4, 5]) {
        if (lengthVals.length < 1) {
            return;
        }
        const values = lengthVals;
        const position = Math.floor(Math.random() * 99 + 1);
        const choice = Math.floor((Math.random() * 2) + 1);
        let bool = false;
        if (choice === 1) {
            bool = this.createBoat(position, values[0], 'horizontal');
        }
        else if (choice === 2) {
            bool = this.createBoat(position, values[0], 'vertical');
        }
        if (bool === false) {
            this.randomCreateBoats(values);
        }
        else if (bool === true) {
            values.shift();
            this.randomCreateBoats(values);
        }
    }
    recieveAttack(position, cell, computer, player) {
        const reset = document.getElementById('reset');
        const title = document.querySelector('.title');
        if (computer.board()[position] === 'M' || computer.board()[position] === 'H') {
            return;
        }
        else {
            if (this.flag === false) {
                return;
            }
            let count = 0;
            let bool = false;
            while (computer.ships().length != count) {
                const ship = computer.ships()[count];
                const length = ship.positions.length;
                for (let i = 0; i < length; i++) {
                    if (position === ship.positions[i]) {
                        cell.setAttribute('style', 'background-color:#800020;');
                        ship.hit();
                        ship.isSunk(player);
                        computer.board()[position] = 'H';
                        bool = true;
                    }
                }
                if (bool === true) {
                    computer.randomAttack(player, computer);
                    return;
                }
                count++;
            }
            if (bool === false) {
                computer.board()[position] = 'M';
                cell.setAttribute('style', 'background-color:#B69460;');
            }
            computer.randomAttack(player, computer);
        }
    }
    randomAttack(player, computer) {
        const reset = document.getElementById('reset');
        const title = document.querySelector('.title');
        if (player.shipsSunk() === false) {
            title.innerHTML = computer.name + ' wins';
            reset.setAttribute('style', 'display:block');
            return;
        }
        if (computer.shipsSunk() === false) {
            title.innerHTML = player.name + ' wins';
            reset.setAttribute('style', 'display:block');
            return;
        }
        console.log(this.chances);
        if (!this.chances.length) {
            this.area = null;
            this.vertical = false;
            this.horizontal = false;
            this.opposite = false;
            this.direction = null;
            this.chances = ['left', 'right', 'up', 'down'];
            this.marker = 0;
        }
        let position = 0;
        if (this.opposite === false) {
            if (this.horizontal === true) {
                if (this.direction === 'left') {
                    if (this.area % 10 === 0) {
                        position = this.area + 1;
                    }
                    else {
                        position = this.area - 1;
                    }
                }
                else if (this.direction === 'right') {
                    if (this.area % 10 === 9) {
                        position = this.area - 1;
                    }
                    else {
                        position = this.area + 1;
                    }
                }
                if (player.board()[position] === 'M' || player.board()[position] === 'H') {
                    this.direction = null;
                    this.opposite = false;
                    this.horizontal = false;
                    this.area = this.marker;
                }
            }
            else if (this.vertical === true) {
                if (this.direction === 'up') {
                    if (this.area >= 0 && this.area <= 9) {
                        position = this.area + 10;
                    }
                    else {
                        position = this.area - 10;
                    }
                }
                else if (this.direction === 'down') {
                    if (this.area >= 90 && this.area <= 99) {
                        position = this.area - 10;
                    }
                    else {
                        position = this.area + 10;
                    }
                }
                if (player.board()[position] === 'M' || player.board()[position] === 'H') {
                    this.direction = null;
                    this.opposite = false;
                    this.vertical = false;
                    this.area = this.marker;
                }
            }
            else if (this.area != null) {
                if (this.chances[0] === 'left') {
                    if (this.area % 10 === 0) {
                        this.chances.shift();
                        return this.randomAttack(player, computer);
                    }
                    else {
                        position = this.area - 1;
                    }
                }
                else if (this.chances[0] === 'up') {
                    if (this.area >= 0 && this.area <= 9) {
                        this.chances.shift();
                        return this.randomAttack(player, computer);
                    }
                    else {
                        position = this.area - 10;
                    }
                }
                else if (this.chances[0] === 'right') {
                    if (this.area % 10 === 9) {
                        this.chances.shift();
                        return this.randomAttack(player, computer);
                    }
                    position = this.area + 1;
                }
                else if (this.chances[0] === 'down') {
                    if (this.area >= 90 && this.area <= 99) {
                        this.chances.shift();
                        return this.randomAttack(player, computer);
                    }
                    else {
                        position = this.area + 10;
                    }
                }
                if (player.board()[position] === 'M' || player.board()[position] === 'H') {
                    this.chances.shift();
                    return this.randomAttack(player, computer);
                }
            }
            else {
                position = Math.floor((Math.random() * 100));
            }
        }
        else if (this.opposite === true) {
            if (this.horizontal === true) {
                if (this.direction === 'left') {
                    position = this.marker + 1;
                }
                else if (this.direction === 'right') {
                    position = this.marker - 1;
                }
            }
            else if (this.vertical === true) {
                if (this.direction === 'up') {
                    position = this.marker + 10;
                }
                else if (this.direction === 'down') {
                    position = this.marker - 10;
                }
            }
        }
        const playerCells = document.querySelectorAll('.playerCell');
        const cell = playerCells[position];
        let count = 0;
        if (player.board()[position] === 'M' || player.board()[position] === 'H') {
            if ((this.horizontal === true || this.vertical === true) && this.opposite != true) {
                this.opposite = true;
                return this.randomAttack(player, computer);
            }
            else if (this.horizontal === false || this.vertical === false) {
                return this.randomAttack(player, computer);
            }
            return this.randomAttack(player, computer);
        }
        else {
            console.log(position);
            while (player.ships().length != count) {
                const ship = player.ships()[count];
                const length = ship.positions.length;
                for (let i = 0; i < length; i++) {
                    if (ship.positions[i] === position) {
                        console.log('hit!');
                        player.board()[position] = 'H';
                        cell.setAttribute('style', 'background-color:#800020;');
                        ship.hit();
                        ship.isSunk(computer);
                        if (ship.isSunk(computer) === true) {
                            this.area = null;
                            this.vertical = false;
                            this.horizontal = false;
                            this.opposite = false;
                            this.direction = null;
                            this.chances = ['left', 'right', 'up', 'down'];
                            this.marker = 0;
                            return;
                        }
                    }
                }
                if (player.board()[position] === 'H') {
                    if (this.opposite === true) {
                        this.marker = position;
                        return;
                    }
                    if (this.vertical != true || this.horizontal != true) {
                        if (this.area != null) {
                            if (this.chances[0] === 'left' || this.chances[0] === 'right') {
                                this.horizontal = true;
                                this.direction = this.chances[0];
                            }
                            else if (this.chances[0] === 'up' || this.chances[0] === 'down') {
                                this.vertical = true;
                                this.direction = this.chances[0];
                            }
                            this.area = position;
                            return;
                        }
                    }
                    if (this.area === null) {
                        this.marker = position;
                    }
                    this.area = position;
                    return;
                }
                count++;
            }
            if (player.board()[position] != 'H') {
                player.board()[position] = 'M';
                cell.setAttribute('style', 'background-color:#B69460;');
                if (this.area === null) {
                    return;
                }
                else {
                    if (this.horizontal != true || this.vertical != true) {
                        this.chances.shift();
                        return;
                    }
                    else if (this.horizontal === true || this.vertical === true) {
                        this.opposite = true;
                        return;
                    }
                }
            }
            if (player.shipsSunk() === false) {
                console.log(computer.name + ' wins');
                reset.setAttribute('style', 'display:block');
                return;
            }
            if (computer.shipsSunk() === false) {
                console.log(player.name + ' wins');
                reset.setAttribute('style', 'display:block');
                return;
            }
        }
        console.log('here');
    }
    createBoat(position, length, direction) {
        return this.gameBoard.createBoat(position, length, direction);
    }
    boardCell(position) {
        return this.gameBoard.board[position];
    }
    board() {
        return this.gameBoard.board;
    }
    ships() {
        return this.gameBoard.ships;
    }
    shipsSunk() {
        const boats = this.ships();
        while (boats.length) {
            if (boats[0].Sunk == false) {
                return;
            }
            boats.shift();
        }
        console.log('Game Over');
        this.flag = false;
        return this.flag;
    }
}
exports["default"] = User;
const computer = new User('Computer');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix3SUFBd0k7QUFDeEksMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUs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RUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO0lBQzdELENBQUM7SUFDRCxTQUFTLENBQUMsUUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO0lBQy9CLENBQUM7SUFDRCxLQUFLO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7SUFDL0IsQ0FBQztJQUVHLFNBQVM7UUFFTCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFFekIsT0FBTTtZQUNWLENBQUM7WUFDRCxLQUFLLENBQUMsS0FBSyxFQUFFO1FBQ2pCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUNwQixDQUFDO0NBQ0o7QUE3VEwsMEJBNlRLO0FBR0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1Sb2JvdG86aXRhbEAxJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRla286d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwJTtcbn1cbmJvZHkgaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3gtc2hhZG93OiAxcHggMHB4IDVweCA1cHggYmxhY2s7XG4gIGhlaWdodDogMTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ib2R5IGhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xufVxuYm9keSAuZ29sZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNjk0NjA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5ib2R5IC5tYXJvb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5ib2R5IC5pbnN0cnVjdGlvbiB7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggNXB4IDVweCB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzUlO1xuICBsZWZ0OiA1JTtcbiAgdG9wOiAxNSU7XG59XG5ib2R5IC5pbnN0cnVjdGlvbiBvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5ib2R5IC5pbnN0cnVjdGlvbiBvbCBsaSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbn1cbmJvZHkgLmluc3RydWN0aW9uIG9sIGxpIHVsIGxpIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbGlzdC1zdHlsZTogaW5zaWRlO1xufVxuYm9keSAuaW5zdHJ1Y3Rpb24gb2wgbGkgdWwgbGkgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTYlO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuYm9keSAuaW5zdHJ1Y3Rpb24gLmNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNXZ3O1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGhlaWdodDogNHZoO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNjk0NjA7XG59XG5ib2R5IC5pbnN0cnVjdGlvbiAjY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXJvb247XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmJvZHkgbWFpbiB7XG4gIG9wYWNpdHk6IDAuMzM7XG4gIGhlaWdodDogODMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJCRUI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYm9keSBtYWluICNyZXNldCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc3lzdGVtLXVpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDZ2aDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJCRUI1O1xuICBib3JkZXI6IG5vbmU7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIge1xuICB6LWluZGV4OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzB2dztcbn1cbmJvZHkgbWFpbiAubWVudUJhciAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJBbnRvblwiLCBzeXN0ZW0tdWk7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNnZ3O1xufVxuYm9keSBtYWluIC5tZW51QmFyIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHN5c3RlbS11aTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiA2dmg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IyQkVCNTtcbiAgYm9yZGVyOiBub25lO1xufVxuYm9keSBtYWluIC5tZW51QmFyIC5zdGFydEJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5IG1haW4gLm1lbnVCYXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IG5hdnk7XG59XG5ib2R5IG1haW4gLmdyaWRDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciBkaXYgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHN5c3RlbS11aTtcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciAuY29tcHV0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgM3Z3KTtcbiAgZ2FwOiAwO1xuICB3aWR0aDogYXV0bztcbn1cbmJvZHkgbWFpbiAuZ3JpZENvbnRhaW5lciAuY29tcHV0ZXIgLmNvbXBDZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDgyQjY7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogNXZoO1xufVxuYm9keSBtYWluIC5ncmlkQ29udGFpbmVyIC5jb21wdXRlciAuY29tcENlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5ib2R5IG1haW4gLmdyaWRDb250YWluZXIgLnBsYXllciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xuICBnYXA6IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuYm9keSBtYWluIC5ncmlkQ29udGFpbmVyIC5wbGF5ZXIgLnBsYXllckNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA4MkI2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDV2aDtcbn1cbmJvZHkgZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweDtcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xuICBoZWlnaHQ6IDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJvZHkgZm9vdGVyIGgzIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRla29cIiwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDIwdnc7XG59XG5ib2R5IGZvb3RlciBzdmc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5ib2R5IGZvb3RlciBzdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0IDAuMXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFlBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0QsY0FBQTtFQUNBLGlCQUFBO0VBQ0YsWUFBQTtBQUNEO0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBRUQsWUFBQTtFQUNDLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQyx1QkFBQTtFQUNBLG1CQUFBO0FBQUw7QUFDSTtFQUNLLGVBQUE7RUFDQSwrQkFBQTtBQUNUO0FBR0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFJQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjtBQUlBO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0osVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUhBO0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUdJO0VBQ0ksZUFBQTtBQURSO0FBR1k7RUFNSSxnQkFBQTtFQUNBLGtCQUFBO0FBTmhCO0FBQWdCO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRWpCO0FBTUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBSko7QUFNQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUpBO0FBT0E7RUFDSSxhQUFBO0VBWUgsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBaEJEO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDSCwrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBTDtBQU9DO0VBQ0ksYUFBQTtFQUNELGtCQUFBO0VBT0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBWkw7QUFBSztFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNELGtCQUFBO0VBQ0MsZ0JBQUE7QUFFVDtBQU9LO0VBRUksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBTlQ7QUFRSztFQUNDLGFBQUE7QUFOTjtBQVFLO0VBQ0ksV0FBQTtBQU5UO0FBU0M7RUFPRyxnQkFBQTtFQUNDLGFBQUE7RUFDQSw2QkFBQTtBQWJMO0FBTVM7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0FBSmI7QUFVSztFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBUlQ7QUFVUztFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVJiO0FBV1M7RUFDSSx3QkFBQTtBQVRiO0FBWUM7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQVZMO0FBWUs7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFWVDtBQWlCQTtFQUNHLHVCQUFBO0VBQ0MsMkJBQUE7RUFDQSwyQkFBQTtFQUNDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZMO0FBZ0JJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNDLFdBQUE7QUFkVDtBQWlCSTtFQUVFLHFCQUFBO0FBaEJOO0FBbUJJO0VBQ0ksZUFBQTtFQUNDLDJDQUFBO0VBQ0QsbUJBQUE7QUFqQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZmFtaWx5PVJvYm90bzppdGFsQDEmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VGVrbzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5odG1se1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgbWFyZ2luOiAwIGF1dG87XFxuICAgbWluLWhlaWdodDogMTAwdmg7XFxuIGhlaWdodDogMTAwJTtcXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgIGhlaWdodDogMjB2aDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCA1cHggNXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGgxe1xcbiAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgICAgICBmb250LWZhbWlseTogJ0FudG9uJywgc3lzdGVtLXVpO1xcbiAgICAgICAgXFxuICAgIH1cXG59XFxuLmdvbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2I2OTQ2MCA7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICBcXG59XFxuLm1hcm9vbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb257XFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggNXB4IDVweCB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHN5c3RlbS11aTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbnotaW5kZXg6IDE7XFxucG9zaXRpb246IGFic29sdXRlO1xcbndpZHRoOiA5MCU7XFxuaGVpZ2h0OiA3NSU7XFxubGVmdDogNSU7XFxudG9wOiAxNSU7XFxub2x7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpe1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICAgICAgdWx7XFxuICAgICAgICAgICAgbGl7XFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNiU7XFxuICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6aW5zaWRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4uY2xvc2V7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiNjk0NjAgIDtcXG59XFxuI2Nsb3NlOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IG1hcm9vbjtcXG5jb2xvcjogd2hpdGU7XFxuIH1cXG59XFxubWFpbntcXG4gICAgb3BhY2l0eTogMC4zMztcXG4gICAgI3Jlc2V0e1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzeXN0ZW0tdWk7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7O1xcbiAgICAgd2lkdGg6IDEwdnc7XFxuICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNCMkJFQjU7XFxuICAgICBib3JkZXI6IG5vbmU7XFxuIH1cXG4gaGVpZ2h0OiA4MyU7XFxuIGJhY2tncm91bmQtY29sb3I6ICNCMkJFQjU7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuIFxcbiAubWVudUJhcntcXG4gICAgIHotaW5kZXg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgIC50aXRsZXtcXG4gICAgICAgICBmb250LWZhbWlseTogJ0FudG9uJywgc3lzdGVtLXVpO1xcbiAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICBtYXJnaW4tbGVmdDogNnZ3O1xcbiAgICAgfVxcbiAgICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgIFxcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgd2lkdGg6IDMwdnc7XFxuICAgICBidXR0b257XFxuICAgICAgICBcXG4gICAgICAgICBmb250LWZhbWlseTogJ0FudG9uJywgc3lzdGVtLXVpO1xcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjs7XFxuICAgICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCMkJFQjU7XFxuICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgfVxcbiAgICAgLnN0YXJ0QnRue1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcbiAgICAgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgIGNvbG9yOm5hdnk7XFxuICAgICB9XFxuIH1cXG4gLmdyaWRDb250YWluZXJ7IFxcbiAgICAgZGl2e1xcbiAgICAgICAgIGgye1xcbiAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzeXN0ZW0tdWk7XFxuICAgICAgICAgfVxcbiAgICAgfVxcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xcbiAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgLmNvbXB1dGVye1xcbiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDN2dyk7XFxuICAgICAgICAgZ2FwOiAwO1xcbiAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgXFxuICAgICAgICAgLmNvbXBDZWxseyAgICAgICAgXFxuICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDgyQjY7XFxuICAgICAgICAgICAgIHdpZHRoOiAzdnc7XFxuICAgICAgICAgICAgIGhlaWdodDogNXZoO1xcbiAgICAgICAgICAgICBcXG4gICAgICAgICB9XFxuICAgICAgICAgLmNvbXBDZWxsOmhvdmVye1xcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgICAgICAgfVxcbiAgICAgfVxcbiAucGxheWVye1xcbiAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xcbiAgICAgZ2FwOiAwO1xcbiAgICAgd2lkdGg6IGF1dG87XFxuIFxcbiAgICAgLnBsYXllckNlbGx7ICAgICAgICBcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MDgyQjY7XFxuICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICAgICAgIHdpZHRoOiAzdnc7XFxuICAgICAgICAgaGVpZ2h0OiA1dmg7XFxuICAgICB9XFxuICAgICAgXFxuICAgIH1cXG4gICAgfVxcbiAgIFxcbn1cXG5mb290ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCA7XFxuICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG4gICAgIGhlaWdodDogNyU7XFxuICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoM3tcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgd2lkdGg6IDIwdnc7XFxuICAgIH1cXG4gICAgXFxuICAgIHN2Zzpob3ZlcntcXG4gICAgICAgICBcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIFxcbiAgICB9XFxuICAgIHN2Z3tcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0IC4xcztcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7ICBcXG4gICAgICB9XFxuICAgXFxufVxcbn1cXG4gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCB7IGRpciB9IGZyb20gXCJjb25zb2xlXCJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBib2FyZDogYW55W11cbiAgICBzaGlwczogU2hpcFtdXG4gICAgbWlzc2VkU2hvdCA6IGFueVtdID0gW11cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuXG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5ib2FyZFxuICAgICAgICBjb25zdCBtaXNzZWRTaG90ID0gdGhpcy5taXNzZWRTaG90XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwxMDA7IGkrKykge1xuICAgICAgICAgIFxuICAgICAgICAgIGJvYXJkLnB1c2goJycpXG4gICAgICAgICAgbWlzc2VkU2hvdC5wdXNoKCcnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgICAgICB0aGlzLm1pc3NlZFNob3QgPSBtaXNzZWRTaG90XG4gICAgfVxuICAgIGNyZWF0ZUJvYXQocG9zaXRpb246bnVtYmVyLCBsZW5ndGg6IG51bWJlciwgZGlyZWN0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnICk6IGFueSB7XG4gICAgICAgIFxuICAgICAgIGlmICh0aGlzLmJvYXJkW3Bvc2l0aW9uXSAhPSAnJykge1xuICAgICAgICBjb25zb2xlLmxvZygncG9zaXRpb24gdGFrZW4nKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCggbGVuZ3RoICkge1xuICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgsICdEZXN0cm95ZXInKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgaWYodGhpcy5zaGlwcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoYm9hdC5uYW1lID09PSAnU3VibWFyaW5lJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoLCAnQ3J1aXNlcicpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5uYW1lID09PSAnQ3J1aXNlcicpIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgsICdTdWJtYXJpbmUnKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6IFxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCwgJ0JhdHRsZXNoaXAnKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCwgJ0NhcnJpZXInKSlcbiAgICAgICAgICAgICAgICBicmVhayBcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIGxlbmd0aCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhlaWdodCA9IDBcbiAgICAgICAgbGV0IHN1YiA9IDFcbiAgICAgICAgbGV0IGJvb2wgPSBmYWxzZVxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgLy8geSA9PSA5XG4gICAgICAgICAgICBpZiAoIHBvc2l0aW9uICUgMTAgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2hpbGUoaGVpZ2h0ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLWhlaWdodF0gIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUoaGVpZ2h0ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbi1oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uLWhlaWdodF0gPSAnTydcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCsrXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgfVxuICAgICAgICAgICAvL2lmIHkgPT0gMFxuICAgICAgICAgICBlbHNlIGlmKCBwb3NpdGlvbiAlIDEwID09PSAwICkge1xuICAgICAgICAgICAgd2hpbGUoIGhlaWdodCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlaWdodCA9IDBcbiAgICAgICAgICAgIHdoaWxlIChoZWlnaHQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLnNoaXBzLmxlbmd0aC0xXS5wb3NpdGlvbnMucHVzaChwb3NpdGlvbitoZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdID0gJ08nXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICB9XG4gICAgICAgICAgIC8vIGZvciBhbGwgb3RoZXIgb2NjYXNpb25zIGJ1dCB5IGNhbnQgaGl0IDkgb3Igbm90IHZhbGlkXG4gICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICB3aGlsZShoZWlnaHQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYocG9zaXRpb24raGVpZ2h0ICUxMCA9PT0wKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uK2hlaWdodF0gIT0nJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbcG9zaXRpb24tc3ViXSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWIrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWlnaHQrK1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBoZWlnaHQgPSAwXG4gICAgICAgICAgICAgc3ViID0gMVxuICAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgICAgIHdoaWxlKGhlaWdodCAhPSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoKHBvc2l0aW9uK2hlaWdodCkgJSAxMCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uK2hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbitoZWlnaHRdID0gJ08nXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXN1YilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbi1zdWJdID0gJ08nXG4gICAgICAgICAgICAgICAgICAgIHN1YisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhlaWdodCsrXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IDBcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgICAgIHN1YiA9IDFcbiAgICAgICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHBvc2l0aW9uID49OTAgJiYgcG9zaXRpb24gPD05OSkge1xuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLXdpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXdpZHRoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Bvc2l0aW9uLXdpZHRoXSA9ICdPJ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGVsc2UgaWYgKCBwb3NpdGlvbiA8PTkpe1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgd2lkdGggPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbcG9zaXRpb24rd2lkdGhdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2lkdGggPSAwXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbdGhpcy5zaGlwcy5sZW5ndGgtMV0ucG9zaXRpb25zLnB1c2gocG9zaXRpb24rd2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24rd2lkdGhdID0gJ08nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9ZWxzZSBpZihwb3NpdGlvbiA+PSAxMCAmJiBwb3NpdGlvbiA8PSA4OSkge1xuICAgICAgICAgICAgICAgIHN1YiA9IDEwXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uICsgd2lkdGggPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSAmJiB0aGlzLmJvYXJkW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlICBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3Bvc2l0aW9uLXN1Yl0gIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViKz0xMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgICAgIHN1YiA9IDEwXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uK3dpZHRoID49IDEwMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihib29sID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uK3dpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtwb3NpdGlvbit3aWR0aF0gPSAnTydcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihib29sID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW3RoaXMuc2hpcHMubGVuZ3RoLTFdLnBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXN1YilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcG9zaXRpb24tc3ViXSA9ICdPJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViKz0xMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cblxufVxuICAgIH1cbiAgICBcbiAgICBzaGlwc1N1bmsoKSB7XG4gICAgICAgIGxldCBpc1N1bmsgPSB0cnVlXG4gICAgICAgIGNvbnN0IGJvYXRzID0gdGhpcy5zaGlwc1xuICAgICAgICB3aGlsZSggYm9hdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwc1swXS5TdW5rID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaXNTdW5rID0gZmFsc2UgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3Vua1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hdHMuc2hpZnQoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgICAgICByZXR1cm4gaXNTdW5rXG4gICAgfVxufVxuXG5cbiIsImltcG9ydCAgJy4vc3R5bGUuc2NzcydcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcidcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbmNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbicpXG5jb25zdCBwbGF5ZXIgPSBuZXcgVXNlcignUGxheWVyJylcbmNvbnN0IGNvbXB1dGVyID0gbmV3IFVzZXIoJ0NvbXB1dGVyJylcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpXG4gICAgY2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBib2R5Py5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYmFja2dyb3VuZC1jb2xvcjp3aGl0ZScpXG4gICAgICAgIG1haW4/LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnb3BhY2l0eToxJylcbiAgICAgICAgaW5zdHJ1Y3Rpb25zPy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpXG4gICAgfSlcbiAgY29uc29sZS5sb2coY29tcHV0ZXIuYm9hcmQoKSlcbi8qICBwbGF5ZXIuY3JlYXRlQm9hdCg1Niw1LCdob3Jpem9udGFsJylcbiBwbGF5ZXIuY3JlYXRlQm9hdCg3MSw0LCd2ZXJ0aWNhbCcpXG4gcGxheWVyLmNyZWF0ZUJvYXQoMzMsMiwnaG9yaXpvbnRhbCcpXG4gcGxheWVyLmNyZWF0ZUJvYXQoOTksMywndmVydGljYWwnKVxuIHBsYXllci5jcmVhdGVCb2F0KDc0LDMsJ2hvcml6b250YWwnKSBcbiAqL1xuZm9yKGxldCBpID0gMDsgaSA8IHBsYXllci5ib2FyZCgpLmxlbmd0aDsgaSsrKSB7ICBcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJDZWxsJylcbiAgICBkaXYuaWQgPSBgJHtpfWBcbiAgICBpZiAoIHBsYXllci5ib2FyZENlbGwoaSkgIT0gJycpIHtcbiAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYmFja2dyb3VuZC1jb2xvcjptYXJvb24nKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnJ1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyJyk/LmFwcGVuZENoaWxkKGRpdilcbn1cblxuY29tcHV0ZXIucmFuZG9tQ3JlYXRlQm9hdHMoKVxuZm9yKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmJvYXJkKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBDZWxsJylcbiAgICAgICAgZGl2LmlkID0gYCR7aX1gXG4gICAgICAgICBpZihjb21wdXRlci5ib2FyZENlbGwoaSkgIT0gJycpIHsgXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYm9hdCcpICAgICAgXG4gICAgICAgICAgXG4gICAgIH0gICAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXInKT8uYXBwZW5kQ2hpbGQoZGl2KSAgICBcbn1cbmxldCBwbGF5ZXJDb3VudCA9IDFcbiBcbmNvbnN0IGF4aXM6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF4aXMnKVxuXG5sZXQgZGlyZWN0aW9uID0gYXhpcy5pZFxuYXhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgaWYoYXhpcy5pZCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgYXhpcy5pZCA9ICd2ZXJ0aWNhbCdcbiAgICAgICAgYXhpcy5pbm5lckhUTUwgPSAnWS1BeGlzJ1xuICAgICAgICBkaXJlY3Rpb24gPSBheGlzLmlkXG4gICAgICAgIFxuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYoYXhpcy5pZCA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgIGF4aXMuaWQgPSAnaG9yaXpvbnRhbCdcbiAgICAgICAgYXhpcy5pbm5lckhUTUwgPSAnWC1BeGlzJ1xuICAgICAgICBkaXJlY3Rpb24gPSBheGlzLmlkXG4gICAgICBcbiAgICAgICAgcmV0dXJuXG4gICAgfVxufSlcbmNvbnN0IG1lbnVCYXI6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCYXInKVxuIFxuY29uc3Qgc3RhcnQ6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJylcbmNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllckNlbGwnKVxubGV0IGFycmF5OmFueSA9IFs1LDQsMywzLDJdXG5wbGF5ZXJDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgXG4gICAgbGV0IFhwb3NpdGlvbnM6YW55ID0gW10gLy9ob3Jpem9udGFsXG4gICAgbGV0IFlwb3NpdGlvbnM6YW55ID0gW10gLy92ZXJ0aWNhbFxuICAgIGxldCBwb3NpdGlvbiA9IHBhcnNlSW50KGNlbGwuaWQpXG4gICAgbGV0IFhjZWxsczphbnkgPSBbXVxuICAgIGxldCBZY2VsbHM6IGFueSA9IFtdXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCgpPT57XG4gICAgICAgIGlmKCFhcnJheS5sZW5ndGgpe1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIGF4aXMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6bm9uZScpXG4gICAgICAgICAgICBzdGFydC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2snKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBpZihjZWxsLmNsYXNzTmFtZSA9PT0gJ3BsYXllckNlbGwgYm9hdCcpe1xuICAgICAgICAgIFxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnYmFja2dyb3VuZC1jb2xvcjptYXJvb247IGN1cnNvcjpub3QtYWxsb3dlZCcpXG4gICAgICAgICAgICByZXR1cm5cbn1cbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIGlmKFlwb3NpdGlvbnMubGVuZ3RoID09PSAwIHx8IFlwb3NpdGlvbnMubGVuZ3RoID4gYXJyYXlbMF0pe1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBZcG9zaXRpb25zID0gW11cbiAgICAgICAgICAgICAgICBwbGFjZUJvYXRzKGNlbGwsIFlwb3NpdGlvbnMsIHBvc2l0aW9uLCBhcnJheVswXSkgIFxuICAgICAgICAgICAgICAgIFljZWxscyA9IFtdXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgWXBvc2l0aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbHM6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoWXBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgICAgICBpZihjZWxscy5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IENlbGw6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoWXBvc2l0aW9uc1swXSlcbiAgICAgICAgICAgICAgICBDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOm1hcm9vbjsgY3Vyc29yOm5vdC1hbGxvd2VkJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBZcG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uOiBzdHJpbmcpID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGw6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9zaXRpb24pXG4gICAgICAgICAgICAgICAgWWNlbGxzLnB1c2goY2VsbClcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgaWYoWHBvc2l0aW9ucy5sZW5ndGggPT09IDAgfHwgWHBvc2l0aW9ucy5sZW5ndGggPiBhcnJheVswXSl7XG4gICAgICAgICAgICBYcG9zaXRpb25zID0gW11cbiAgICAgICAgICAgIHBsYWNlQm9hdHMoY2VsbCwgWHBvc2l0aW9ucywgcG9zaXRpb24sIGFycmF5WzBdKSBcbiAgICAgICAgICAgWGNlbGxzID0gW11cbiAgICAgICAgfSAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBYcG9zaXRpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGw6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoWHBvc2l0aW9uc1tpXSlcbiAgICAgICAgICAgIGlmKGNlbGwuY2xhc3NOYW1lID09PSAncGxheWVyQ2VsbCBib2F0Jyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBDZWxsOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFhwb3NpdGlvbnNbMF0pXG4gICAgICAgICAgICBDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdiYWNrZ3JvdW5kLWNvbG9yOm1hcm9vbjsgY3Vyc29yOm5vdC1hbGxvd2VkJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBYcG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uOiBzdHJpbmcpID0+e1xuICAgICAgICAgICAgY29uc3QgY2VsbDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbilcbiAgICAgICAgICAgIFhjZWxscy5wdXNoKGNlbGwpXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJylcbiAgICAgICAgfSkgICAgXG4gICAgXG4gICAgIH1cbiAgICBcbiAgICB9KVxuICAgIFxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCkgPT57XG4gICAgICAgIGlmKCFhcnJheS5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYoY2VsbC5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiMzNjQ1NEYnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIFlwb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb246IHN0cmluZykgPT57XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbilcbiAgICAgICAgICAgICAgICBpZihjZWxsLmNsYXNzTmFtZSA9PT0gJ3BsYXllckNlbGwgYm9hdCcpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnICwnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiM2MDgyQjYnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICBYcG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uOiBzdHJpbmcpID0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGw6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9zaXRpb24pXG4gICAgICAgICAgICAgICAgaWYoY2VsbC5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyAsJ2JhY2tncm91bmQtY29sb3I6IzM2NDU0RicpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojNjA4MkI2JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgICAgICAgaWYoIWFycmF5Lmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgaWYoY2VsbC5jbGFzc05hbWUgPT09ICdwbGF5ZXJDZWxsIGJvYXQnKXtcbiAgICAgICAgYWxlcnQoJ0NlbGwgdGFrZW4nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgICBpZihkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpeyAgIFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFljZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoWWNlbGxzW2ldLmNsYXNzTmFtZSA9PT0gJ3BsYXllckNlbGwgYm9hdCcpe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgncG9zaXRpb24gdGFrZW4nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgIFljZWxscy5mb3JFYWNoKChjZWxsOmFueSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYm9hdCcpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiMzNjQ1NEYnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYoICBwbGF5ZXIuY3JlYXRlQm9hdChZcG9zaXRpb25zWzBdLCBhcnJheVswXSwgJ3ZlcnRpY2FsJykgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RpbGUgdW5hdmFpbGFibGUnKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY3JlYXRlQm9hdChZcG9zaXRpb25zWzBdLCBhcnJheVswXSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgICAgICBhcnJheS5zaGlmdCgpICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFhjZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihYY2VsbHNbaV0uY2xhc3NOYW1lID09PSAncGxheWVyQ2VsbCBib2F0Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncG9zaXRpb24gdGFrZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgWGNlbGxzLmZvckVhY2goKGNlbGw6YW55KSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib2F0JylcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IzM2NDU0RicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuY3JlYXRlQm9hdChYcG9zaXRpb25zWzBdLCBhcnJheVswXSwgJ2hvcml6b250YWwnKSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGlsZSB1bmF2YWlsYWJsZScpXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgcGxheWVyLmNyZWF0ZUJvYXQoWHBvc2l0aW9uc1swXSwgYXJyYXlbMF0sICdob3Jpem9udGFsJykgIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGFycmF5LnNoaWZ0KCkgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcbn0pXG4gXG4gICAgICAgIFxuIFxuIGNvbnN0IHJlc2V0OmFueT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0JylcbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxufSlcblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBwbGF5ZXIuc2hpcHMoKVxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IGNvbnNvbGUubG9nKHR5cGVvZihzaGlwLnBvc2l0aW9uc1swXSkpKVxuICAgIG1lbnVCYXI/LnJlbW92ZUNoaWxkKHN0YXJ0KVxuICAgIGNvbnN0IGNvbXBDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wQ2VsbCcpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKVxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQmVnaW4hXCJcbiAgICBtZW51QmFyPy5hcHBlbmRDaGlsZCh0aXRsZSlcbmxldCBwb3NpdGlvbjphbnkgXG5jb21wQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT57ICAgICAgICBcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIGlmKHBsYXllci5mbGFnID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXIubmFtZSArJyB3aW5zJylcbiAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9IFxuICAgICAgICAgaWYoY29tcHV0ZXIuZmxhZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5uYW1lICsnIHdpbnMnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnXG4gICAgICAgXG4gICAgICAgIHBvc2l0aW9uID0gcGFyc2VJbnQoY2VsbC5pZClcbiAgICAgICAgY29tcHV0ZXIucmVjaWV2ZUF0dGFjayhwb3NpdGlvbiwgY2VsbCwgY29tcHV0ZXIsIHBsYXllcilcbiAgICAgICAgaWYocGxheWVyLnNoaXBzU3VuaygpID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBjb21wdXRlci5uYW1lICsnIHdpbnMnXG4gICAgICAgICAgICByZXNldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2snKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9IFxuICAgICAgICAgaWYoIGNvbXB1dGVyLnNoaXBzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcGxheWVyLm5hbWUgKycgd2lucydcbiAgICAgICAgICAgIHJlc2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jaycpXG4gICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSlcbn0pXG59KVxuXG4vKiBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojMzY0NTRGJykgKi9cbmZ1bmN0aW9uIHBsYWNlQm9hdHMoY2VsbDphbnksIHBvc2l0aW9uczphbnlbXSwgcG9zaXRpb246YW55LCBsZW5ndGg6bnVtYmVyKXtcblxuICAgIGxldCBjb3VudCA9IDBcbiAgICBsZXQgc3ViID0gMVxuICAgIGxldCBib29sID0gZmFsc2UgICBcbiAgICBpZihkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZihwb3NpdGlvbiAlMTAgPT09IDkpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb24gLSBjb3VudCBdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24tY291bnQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBvc2l0aW9uICUxMCA9PT0gMCl7XG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uK2NvdW50XSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24rY291bnQpXG4gICAgICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBvc2l0aW9uK2NvdW50ICUxMCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbitjb3VudF0gIT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAvKiAgaWYoYm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uIC1zdWJdICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YisrXG4gICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgc3ViID0gMVxuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKChwb3NpdGlvbitjb3VudCkgJSAxMCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24rY291bnQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGJvb2wgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbi1zdWIpXG4gICAgICAgICAgICAgICAgICAgIHN1YisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAndmVydGljYWwnKXtcbiAgICAgICAgIFxuICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgbGV0IHdpZHRoID0gMFxuICAgICAgICBzdWIgPSAxXG4gICAgICAgIGJvb2wgPSBmYWxzZVxuICAgICAgICBpZihwb3NpdGlvbiA+PSA5MCAmJiBwb3NpdGlvbiA8PSA5OSl7XG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uLXdpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgd2hpbGUoY291bnQhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uLXdpZHRoKVxuICAgICAgICAgICAgICAgIHdpZHRoKz0xMFxuICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwb3NpdGlvbiA8PSA5KXtcbiAgICAgICAgICAgIHdpZHRoID0gMFxuICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICB3aGlsZShjb3VudCAhPSBsZW5ndGgpe1xuICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgd2hpbGUoY291bnQgIT0gbGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbit3aWR0aClcbiAgICAgICAgICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgICAgICAgICBjb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYocG9zaXRpb24gPj0gMTAgJiYgcG9zaXRpb24gPD0gODkpe1xuICAgICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICBpZihwb3NpdGlvbit3aWR0aD49IDEwMCl7XG4gICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlICYmIHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uK3dpZHRoXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9IGVsc2UgaWYoYm9vbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb24tc3ViXSAhPSAnJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIHN1Yis9MTBcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCs9MTBcbiAgICAgICAgY291bnQrK1xuICAgICAgICB9XG4gICAgICAgIGNvdW50ID0gMFxuICAgICAgICBzdWIgPSAxMFxuICAgICAgICB3aWR0aCA9IDBcbiAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgIHdoaWxlKGNvdW50ICE9IGxlbmd0aCl7XG4gICAgICAgICAgICBpZihwb3NpdGlvbit3aWR0aCA+PTEwMCl7XG4gICAgICAgICAgICAgICAgYm9vbCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbit3aWR0aClcbiAgICAgICAgICAgIH0gZWxzZSBpZihib29sID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbi1zdWIpXG4gICAgICAgICAgICAgICAgc3ViKz0xMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2lkdGgrPTEwXG4gICAgICAgICAgICBjb3VudCsrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXB7XG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICBTdW5rOiBib29sZWFuXG4gICAgaGl0czogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgcG9zaXRpb25zOiBhbnlbXVxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyLCBuYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgICAgICB0aGlzLlN1bmsgPSBmYWxzZVxuICAgICAgICB0aGlzLmhpdHMgPSAwXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBbXVxuICAgIH1cbiAgICBoaXQoKSB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzKytcblxuICAgIH1cblxuICAgIGlzU3Vuayh1c2VyOlVzZXIpIHtcbiAgICAgICAgY29uc3QgdGl0bGU6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJylcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLlN1bmsgPSB0cnVlXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB1c2VyLm5hbWUrXCIgaGFzIHN1bmsgeW91ciBcIiArIHRoaXMubmFtZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBnYW1lQm9hcmQgOiBHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZmxhZzogYm9vbGVhbiA9IHRydWVcbiAgICBhcmVhOmFueSA9IG51bGxcbiAgICBjaGFuY2VzIDogc3RyaW5nW10gPSBbJ2xlZnQnLCAncmlnaHQnLCAndXAnLCAnZG93biddXG4gICAgdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGhvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZVxuICAgIG9wcG9zaXRlOmJvb2xlYW4gPSBmYWxzZVxuICAgIGRpcmVjdGlvbjphbnkgPSBudWxsXG4gICAgbWFya2VyOm51bWJlciA9IDBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiAnUGxheWVyJyB8ICdDb21wdXRlcicpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuICAgIFxuICAgIHJhbmRvbUNyZWF0ZUJvYXRzKGxlbmd0aFZhbHM6IG51bWJlcltdID0gWzIsMywzLDQsNV0gKSB7XG4gICAgICAgIGlmKGxlbmd0aFZhbHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVzID0gbGVuZ3RoVmFsc1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5OSsxKVxuICAgICAgICAgY29uc3QgY2hvaWNlID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoyKSsxKVxuICAgICAgICAgbGV0IGJvb2w6IGZhbHNlIHwgdHJ1ZSA9IGZhbHNlXG4gICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XG4gICAgICAgICAgICAgYm9vbCA9IHRoaXMuY3JlYXRlQm9hdChwb3NpdGlvbix2YWx1ZXNbMF0sJ2hvcml6b250YWwnKX1cbiAgICAgICAgZWxzZSBpZihjaG9pY2UgPT09IDIpIHtcbiAgICAgICAgICAgICBib29sID0gdGhpcy5jcmVhdGVCb2F0KHBvc2l0aW9uLHZhbHVlc1swXSwndmVydGljYWwnKVxuICAgICAgICB9XG4gICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbUNyZWF0ZUJvYXRzKHZhbHVlcylcbiAgICAgICAgfSBlbHNlIGlmKGJvb2wgPT09IHRydWUpe1xuICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZXMuc2hpZnQoKVxuICAgICAgICAgICAgdGhpcy5yYW5kb21DcmVhdGVCb2F0cyh2YWx1ZXMpXG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgcmVjaWV2ZUF0dGFjayhwb3NpdGlvbjpudW1iZXIsIGNlbGw6YW55LCBjb21wdXRlcjpVc2VyLCBwbGF5ZXI6VXNlcikge1xuICAgICAgICBjb25zdCByZXNldDphbnk9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpXG4gICAgICAgIGNvbnN0IHRpdGxlOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgICAgIGlmKGNvbXB1dGVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnTScgfHxjb21wdXRlci5ib2FyZCgpW3Bvc2l0aW9uXSA9PT0gJ0gnKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBpZih0aGlzLmZsYWcgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgICAgICAgbGV0IGJvb2wgPSBmYWxzZVxuICAgICAgICAgICAgICAgICB3aGlsZShjb21wdXRlci5zaGlwcygpLmxlbmd0aCAhPSBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwOiBTaGlwID0gY29tcHV0ZXIuc2hpcHMoKVtjb3VudF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBzaGlwLnBvc2l0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwb3NpdGlvbiA9PT0gc2hpcC5wb3NpdGlvbnNbaV0pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojODAwMDIwOycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaXNTdW5rKHBsYXllcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5ib2FyZCgpW3Bvc2l0aW9uXSA9ICdIJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIsY29tcHV0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50KytcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJvb2wgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPSAnTSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6I0I2OTQ2MDsnKSAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyLGNvbXB1dGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbUF0dGFjayhwbGF5ZXI6VXNlciwgY29tcHV0ZXI6VXNlcik6YW55e1xuICAgICAgICBjb25zdCByZXNldDphbnk9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpXG4gICAgICAgIGNvbnN0IHRpdGxlOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgICAgIGlmKHBsYXllci5zaGlwc1N1bmsoKSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY29tcHV0ZXIubmFtZSArJyB3aW5zJ1xuICAgICAgICAgICAgcmVzZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrJylcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfSBcbiAgICAgICAgIGlmKCBjb21wdXRlci5zaGlwc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHBsYXllci5uYW1lICsnIHdpbnMnXG4gICAgICAgICAgICByZXNldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2snKVxuICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoYW5jZXMpXG4gICAgICAgIGlmKCF0aGlzLmNoYW5jZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuYXJlYSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb3NpdGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5jZXMgPSBbJ2xlZnQnLCAncmlnaHQnLCd1cCcsICdkb3duJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyID0gMFxuICAgICAgICB9XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IDBcbiAgICAgICAgaWYodGhpcy5vcHBvc2l0ZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgIGlmKHRoaXMuaG9yaXpvbnRhbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmVhICUxMCA9PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmFyZWErMVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhLTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5kaXJlY3Rpb24gPT09J3JpZ2h0Jyl7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSAlMTAgPT09IDkpe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYS0xXG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhICsxfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnTScgfHwgcGxheWVyLmJvYXJkKClbcG9zaXRpb25dID09PSAnSCcpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMub3Bwb3NpdGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhID0gdGhpcy5tYXJrZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYodGhpcy52ZXJ0aWNhbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ3VwJyl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFyZWEgPj0gMCAmJiB0aGlzLmFyZWEgPD0gOSl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhICsxMFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhLTEwfVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcmVhID49IDkwICYmIHRoaXMuYXJlYSA8PSA5OSl7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhIC0xMFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhICsxMH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSA9PT0gJ00nIHx8IHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSA9PT0gJ0gnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9zaXRlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWEgPSB0aGlzLm1hcmtlclxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFyZWEgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYodGhpcy5jaGFuY2VzWzBdID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSAlMTAgPT09MCl7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuY2VzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2socGxheWVyLGNvbXB1dGVyKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhLTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNoYW5jZXNbMF0gPT09ICd1cCcpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSA+PSAwICYmIHRoaXMuYXJlYSA8PSA5KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuY2VzLnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2socGxheWVyLGNvbXB1dGVyKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhLTEwfVxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jaGFuY2VzWzBdID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFyZWEgJTEwID09PSA5KXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5jZXMuc2hpZnQoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbUF0dGFjayhwbGF5ZXIsY29tcHV0ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5hcmVhICsxXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5jaGFuY2VzWzBdID09PSdkb3duJyl7XG4gICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSA+PSA5MCAmJiB0aGlzLmFyZWEgPD0gOTkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5jZXMuc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2socGxheWVyLGNvbXB1dGVyKVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuYXJlYSArMTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdNJyB8fCBwbGF5ZXIuYm9hcmQoKVtwb3NpdGlvbl0gPT09ICdIJyl7XG4gICAgICAgICAgICB0aGlzLmNoYW5jZXMuc2hpZnQoKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKHBsYXllcixjb21wdXRlcilcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgIGVsc2V7XG4gICAgICAgIHBvc2l0aW9uID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkpICAgIFxuICAgICBcbiAgIH0gfWVsc2UgaWYodGhpcy5vcHBvc2l0ZSA9PT0gdHJ1ZSl7XG4gICAgaWYodGhpcy5ob3Jpem9udGFsID09PSB0cnVlKXtcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMubWFya2VyICsgMVxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMubWFya2VyIC0xXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy52ZXJ0aWNhbCA9PT0gdHJ1ZSl7XG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKXtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5tYXJrZXIgKyAxMFxuICAgICAgICB9IGVsc2UgaWYodGhpcy5kaXJlY3Rpb24gPT09ICdkb3duJyl7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMubWFya2VyIC0gMTBcbiAgICAgICAgfVxuICAgIH1cbiAgICAgfSBcbiAgICBcbiAgICAgICAgIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllckNlbGwnKVxuICAgICAgIFxuICAgICAgICBjb25zdCBjZWxsID0gcGxheWVyQ2VsbHNbcG9zaXRpb25dXG4gICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSA9PT0gJ00nIHx8IHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSA9PT0gJ0gnKSB7XG4gICAgICAgIGlmKCh0aGlzLmhvcml6b250YWwgPT09IHRydWUgfHwgdGhpcy52ZXJ0aWNhbCA9PT0gdHJ1ZSkgJiYgdGhpcy5vcHBvc2l0ZSAhPSB0cnVlICl7XG4gICAgICAgICAgICB0aGlzLm9wcG9zaXRlID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKHBsYXllcixjb21wdXRlcilcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaG9yaXpvbnRhbCA9PT0gZmFsc2UgfHwgdGhpcy52ZXJ0aWNhbCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2socGxheWVyLCBjb21wdXRlcilcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKHBsYXllcixjb21wdXRlcilcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbilcbiAgICAgICAgd2hpbGUocGxheWVyLnNoaXBzKCkubGVuZ3RoICE9IGNvdW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyLnNoaXBzKClbY291bnRdXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLnBvc2l0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoc2hpcC5wb3NpdGlvbnNbaV0gPT09IHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQhJylcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmJvYXJkKClbcG9zaXRpb25dID0gJ0gnICBcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IzgwMDAyMDsnKVxuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaXNTdW5rKGNvbXB1dGVyKVxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwLmlzU3Vuayhjb21wdXRlcikgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcmVhID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvc2l0ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmNlcyA9IFsnbGVmdCcsICdyaWdodCcsJ3VwJywgJ2Rvd24nXVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXIgPSAwXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSA9PT0gJ0gnKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHBvc2l0ZSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMudmVydGljYWwgIT0gdHJ1ZSB8fCB0aGlzLmhvcml6b250YWwgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFyZWEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jaGFuY2VzWzBdID09PSAnbGVmdCcgfHwgdGhpcy5jaGFuY2VzWzBdID09PSAncmlnaHQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNoYW5jZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmNoYW5jZXNbMF0gPT09ICd1cCcgfHwgdGhpcy5jaGFuY2VzWzBdID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNoYW5jZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJlYSA9IHBvc2l0aW9uICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJlYSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlciA9IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyZWEgPSBwb3NpdGlvbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvdW50KytcbiAgICB9XG4gICAgaWYocGxheWVyLmJvYXJkKClbcG9zaXRpb25dICE9ICdIJyl7ICAgICAgICAgXG4gICAgICAgIHBsYXllci5ib2FyZCgpW3Bvc2l0aW9uXSA9ICdNJ1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojQjY5NDYwOycpXG4gICAgICAgIGlmKHRoaXMuYXJlYSA9PT0gbnVsbCl7ICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICBpZih0aGlzLmhvcml6b250YWwgIT0gdHJ1ZSB8fCB0aGlzLnZlcnRpY2FsICE9IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5jaGFuY2VzLnNoaWZ0KClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ob3Jpem9udGFsID09PSB0cnVlIHx8IHRoaXMudmVydGljYWwgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5vcHBvc2l0ZSA9IHRydWUgICAgXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cbn1cbiAgXG4gICAgIGlmKHBsYXllci5zaGlwc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXIubmFtZSArJyB3aW5zJylcbiAgICAgICAgcmVzZXQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrJylcbiAgICAgICAgcmV0dXJuIFxuICAgIH0gXG4gICAgIGlmKCBjb21wdXRlci5zaGlwc1N1bmsoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyLm5hbWUgKycgd2lucycpXG4gICAgICAgIHJlc2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jaycpXG4gICAgICAgcmV0dXJuICBcbiAgICB9IFxuICAgICAgICBcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2hlcmUnKSBcbn1cbiAgICBjcmVhdGVCb2F0KHBvc2l0aW9uOm51bWJlciwgbGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyApOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmdhbWVCb2FyZC5jcmVhdGVCb2F0KHBvc2l0aW9uLCBsZW5ndGgsIGRpcmVjdGlvbilcbiAgICB9XG4gICAgYm9hcmRDZWxsKHBvc2l0aW9uOm51bWJlcik6YW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmJvYXJkW3Bvc2l0aW9uXVxuICAgIH1cbiAgICBib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkLmJvYXJkXG4gICAgfVxuICAgIHNoaXBzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQm9hcmQuc2hpcHNcbiAgICB9XG4gICAgIFxuICAgICAgICBzaGlwc1N1bmsoKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYm9hdHMgPSB0aGlzLnNoaXBzKClcbiAgICAgICAgICAgIHdoaWxlKCBib2F0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hdHNbMF0uU3VuayA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2F0cy5zaGlmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mbGFnXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbmNvbnN0IGNvbXB1dGVyID0gbmV3IFVzZXIoJ0NvbXB1dGVyJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==