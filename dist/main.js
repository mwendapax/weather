(()=>{"use strict";var n={288:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\ttab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct font weight in Chrome and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\nCorrect table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\tborder-color: currentcolor;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","",{version:3,sources:["webpack://./node_modules/modern-normalize/modern-normalize.css"],names:[],mappings:"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;CACC,sHAAsH;CACtH;;;;;;;;kBAQiB;CACjB,iBAAiB,EAAE,gDAAgD;CACnE,8BAA8B,EAAE,0EAA0E;CAC1G,WAAW,EAAE,mDAAmD;AACjE;;AAEA;;;CAGC;;AAED;CACC,SAAS,EAAE,uCAAuC;AACnD;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,0BAA0B;AAC3B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;;;CAIC,0BAA0B;AAC3B;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB",sourcesContent:["/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\ttab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct font weight in Chrome and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\nCorrect table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\tborder-color: currentcolor;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],sourceRoot:""}]);const A=a},208:(n,e,t)=>{t.d(e,{A:()=>f});var r=t(354),o=t.n(r),i=t(314),a=t.n(i),A=t(417),s=t.n(A),l=new URL(t(88),t.b),c=new URL(t(558),t.b),d=a()(o()),p=s()(l),u=s()(c);d.push([n.id,`/* fonts */\n\n\n@font-face {\n  font-family: "lexend_exaregular";\n  src:\n    url(${p})\n      format("woff2"),\n    url(${u})\n      format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  height: 100vh;\n  background: linear-gradient(to bottom, #a1d6b2, #cedf9f, #f1f3c2);\n}\n\n.flx-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#search-one {\n  appearance: none;\n  height: 60px;\n  padding: 10px;\n  border-radius: 30px 0 0 30px;\n  width: 500px;\n  border: 4px solid rgb(236, 179, 101, 0.1);\n  border-right: 1px solid rgba(74, 73, 71, 0.2);\n}\n\n.search-bar {\n  display: flex;\n}\n\n.search-img {\n  min-height: 100%;\n  background-color: white;\n  width: 80px;\n  border-left: none;\n  border-radius: 0 30px 30px 0;\n  background:#FDA403;\n\n  > img {\n    height: 35px;\n    border-radius: 50%;\n    width: auto;\n  }\n}\n\n\n\ninput:focus,\ninput:active {\n  appearance: none;\n  border: 0px;\n}\n\ntable {\n  font-family:\n    "lexend_exaregular",\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    "Open Sans",\n    "Helvetica Neue",\n    sans-serif;\n  width: 95%;\n  margin: auto;\n  border-collapse: collapse;\n  background-color: rgba(241, 240, 232, 0.6);\n}\n\ntr > * {\n  border: 1px solid #9ec8b9;\n  text-align: center;\n}\n\ntr > :not(:last-child) {\n  width: calc(100% / 18);\n}\n\ntr:first-of-type {\n  color: #40534c;\n}\ntr:nth-of-type(2) {\n  color: rgba(64, 83, 76, 0.8);\n}\n\ntd {\n  color: #fbf6ee;\n  height: 10px;\n  font-size: calc(1rem - 5px);\n}\n\ntd:not(:first-child) {\n  background-color: rgba(251, 246, 238, 0.3);\n  color: rgba(2, 21, 38, 0.8);\n}\n\nth,\ntd {\n  height: 45px;\n}\n\nnav {\n  width: 95%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  height: 90px;\n  display: none;\n\n  > div {\n    flex: 1;\n  }\n\n  #search-one {\n    appearance: none;\n    height: 40px;\n    padding: 10px;\n    width: 500px;\n    border-radius: 5px 0 0 5px;\n    border: 4px solid rgb(236, 179, 101, 0.1);\n    border-right: 1px solid rgba(74, 73, 71, 0.2);\n    margin-left: auto;\n  }\n}\n\n.address {\n  display: flex;\n  gap: 2px;\n}\n\n.addr {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  background-color: #006a67;\n  text-transform: capitalize;\n}\n\n.temps {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  background-color: #ff204e;\n}\n\n.addr,\n.temps {\n  padding-inline: 10px;\n  color: white;\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  > table {\n    align-self: flex-end;\n  }\n}\n\ntr > :first-child:not([scope="col"]) {\n  background-color: #006769;\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,UAAU;;;AAGV;EACE,gCAAgC;EAChC;;;;oBAIkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iEAAiE;AACnE;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,YAAY;EACZ,yCAAyC;EACzC,6CAA6C;AAC/C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,4BAA4B;EAC5B,kBAAkB;;EAElB;IACE,YAAY;IACZ,kBAAkB;IAClB,WAAW;EACb;AACF;;;;AAIA;;EAEE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE;;;;;;;;;;;;cAYY;EACZ,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,0CAA0C;AAC5C;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,4BAA4B;AAC9B;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,0CAA0C;EAC1C,2BAA2B;AAC7B;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;;EAEb;IACE,OAAO;EACT;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,0BAA0B;IAC1B,yCAAyC;IACzC,6CAA6C;IAC7C,iBAAiB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;EAEE,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:['/* fonts */\n\n\n@font-face {\n  font-family: "lexend_exaregular";\n  src:\n    url("./assets/fonts/lexendexa-variablefont_wght-webfont.woff2")\n      format("woff2"),\n    url("./assets/fonts/lexendexa-variablefont_wght-webfont.woff")\n      format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  height: 100vh;\n  background: linear-gradient(to bottom, #a1d6b2, #cedf9f, #f1f3c2);\n}\n\n.flx-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#search-one {\n  appearance: none;\n  height: 60px;\n  padding: 10px;\n  border-radius: 30px 0 0 30px;\n  width: 500px;\n  border: 4px solid rgb(236, 179, 101, 0.1);\n  border-right: 1px solid rgba(74, 73, 71, 0.2);\n}\n\n.search-bar {\n  display: flex;\n}\n\n.search-img {\n  min-height: 100%;\n  background-color: white;\n  width: 80px;\n  border-left: none;\n  border-radius: 0 30px 30px 0;\n  background:#FDA403;\n\n  > img {\n    height: 35px;\n    border-radius: 50%;\n    width: auto;\n  }\n}\n\n\n\ninput:focus,\ninput:active {\n  appearance: none;\n  border: 0px;\n}\n\ntable {\n  font-family:\n    "lexend_exaregular",\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    "Open Sans",\n    "Helvetica Neue",\n    sans-serif;\n  width: 95%;\n  margin: auto;\n  border-collapse: collapse;\n  background-color: rgba(241, 240, 232, 0.6);\n}\n\ntr > * {\n  border: 1px solid #9ec8b9;\n  text-align: center;\n}\n\ntr > :not(:last-child) {\n  width: calc(100% / 18);\n}\n\ntr:first-of-type {\n  color: #40534c;\n}\ntr:nth-of-type(2) {\n  color: rgba(64, 83, 76, 0.8);\n}\n\ntd {\n  color: #fbf6ee;\n  height: 10px;\n  font-size: calc(1rem - 5px);\n}\n\ntd:not(:first-child) {\n  background-color: rgba(251, 246, 238, 0.3);\n  color: rgba(2, 21, 38, 0.8);\n}\n\nth,\ntd {\n  height: 45px;\n}\n\nnav {\n  width: 95%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  height: 90px;\n  display: none;\n\n  > div {\n    flex: 1;\n  }\n\n  #search-one {\n    appearance: none;\n    height: 40px;\n    padding: 10px;\n    width: 500px;\n    border-radius: 5px 0 0 5px;\n    border: 4px solid rgb(236, 179, 101, 0.1);\n    border-right: 1px solid rgba(74, 73, 71, 0.2);\n    margin-left: auto;\n  }\n}\n\n.address {\n  display: flex;\n  gap: 2px;\n}\n\n.addr {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  background-color: #006a67;\n  text-transform: capitalize;\n}\n\n.temps {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  background-color: #ff204e;\n}\n\n.addr,\n.temps {\n  padding-inline: 10px;\n  color: white;\n}\n\n.weather-info {\n  display: flex;\n  flex-direction: column;\n  > table {\n    align-self: flex-end;\n  }\n}\n\ntr > :first-child:not([scope="col"]) {\n  background-color: #006769;\n}\n'],sourceRoot:""}]);const f=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},549:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r=t(72),o=t.n(r),i=t(825),a=t.n(i),A=t(659),s=t.n(A),l=t(56),c=t.n(l),d=t(540),p=t.n(d),u=t(113),f=t.n(u),C=t(288),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(C.A,m);const h=C.A&&C.A.locals?C.A.locals:void 0},511:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r=t(72),o=t.n(r),i=t(825),a=t.n(i),A=t(659),s=t.n(A),l=t(56),c=t.n(l),d=t(540),p=t.n(d),u=t(113),f=t.n(u),C=t(208),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(C.A,m);const h=C.A&&C.A.locals?C.A.locals:void 0},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],l=r.base?s[0]+r.base:s[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=r(n,o),l=0;l<i.length;l++){var c=t(i[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},558:(n,e,t)=>{n.exports=t.p+"290fd718469355a23f99.woff"},88:(n,e,t)=>{n.exports=t.p+"c9e5792015e27bbbb640.woff2"},158:(n,e,t)=>{n.exports=t.p+"6ebade6af61cb975fddc.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}async function r(n){let e="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+n+"?key=657BNQHER95TL8PD9BRM6JJY9";try{let n=await fetch(e,{mode:"cors"});return await n.json()}catch(n){return n}}function o(n){return document.createElement(n)}function i(n,e){let t=document.createElement(n);return t.classList.add(e),t}function a(n,e){let t=document.createElement("td");return t.classList.add(n),t.textContent=e,t}function A(n,...e){let t=[...arguments];for(let e of t)e!==t[0]&&n.appendChild(e);return n}function s(n){let e=document.createElement("th");return e.setAttribute("scope","col"),e.textContent=n,e}function l(n,e,t){let r=document.createElement("th");return r.setAttribute("rowspan",n),r.setAttribute("scope",e),r.textContent=t,r}function c(n,e,t){let r=document.createElement("th");return r.setAttribute("colspan",n),r.setAttribute("scope",e),r.textContent=t,r}function d(n){let e=o("tr");return e=A(e,a("date",n.datetime),a("temp-max",n.tempmax),a("temp-min",n.tempmin),a("temp",n.temp),a("feel-max",n.feelslikemax),a("feel-min",n.feelslikemin),a("feel",n.feelslike),a("precip",n.precip),a("precip-prob",n.precipprob),a("precip-type",n.preciptype),a("wind-gu",n.windgust),a("wind-sp",n.windspeed),a("wind-di",n.winddir),a("cloud-cov",n.cloudcover),a("visib",n.visibility),a("cond",n.conditions),a("desc",n.description)),e}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;let p=t(158);const u=i("div","search-bar"),f=function(){let n=document.createElement("input");return n.setAttribute("id","search-one"),n}();f.setAttribute("type","search"),f.setAttribute("placeholder","Enter location");const C=i("div","search-img");C.classList.add("flx-center");const m=o("img");m.setAttribute("src",p),m.setAttribute("alt","position icon"),C.appendChild(m);let h=A(u,f,C),b=o("table"),g=o("tr");g=A(g,l(2,"colgroup","Date"),c(3,"colgroup","Temperature"),c(3,"colgroup","Feels like"),c(3,"colgroup","Precipitation"),c(3,"colgroup","Wind"),l(2,"col","Cloud cover"),l(2,"col","Visibility"),l(2,"col","Conditions"),l(2,"col","Description"));let E=o("tr");E=A(E,s("Temp max"),s("Temp min"),s("Temp"),s("Feels like max"),s("Feels like min"),s("Feels like"),s("Precip"),s("Precip prob"),s("Preciptype"),s("Windgust"),s("Wind speed"),s("Wind dir")),b=A(b,g,E),t(511),t(549);const y=document.querySelector("body"),x=document.querySelector("#search-two"),B=document.querySelector("nav"),v=document.querySelector(".temps"),w=document.querySelector(".addr");y.classList.add("flx-center"),y.appendChild(h),document.querySelector(".search-img").addEventListener("click",(()=>{!async function(){let n=document.querySelector("#search-one").value;const e=document.querySelector("#search-one");let t=await r(n),o=function(n){let e=[];for(let t=0;t<=14;t++)e.push(n.days[t]);return e}(t);if(w.textContent=t.address,document.querySelector(".temp")){let n=b.querySelectorAll("tr");for(let e=2;e<n.length;e++)b.removeChild(n[e])}else y.removeChild(h),y.classList.remove("flx-center"),y.appendChild(b);x.appendChild(h),B.style.display="flex";for(let n of o){let e=d(n);b.appendChild(e)}e.value=""}()})),v.addEventListener("click",(n=>{const e=document.querySelectorAll(".temp-max"),t=document.querySelectorAll(".temp-min"),r=document.querySelectorAll(".temp"),o=document.querySelectorAll(".feel-max"),i=document.querySelectorAll(".feel-min"),a=[...e,...r,...t,...document.querySelectorAll(".feel"),...o,...i];"°F"===n.target.textContent?(a.map((n=>{console.log(n);let e=5*(Number(n.textContent)-32)/9;n.textContent=e.toFixed(1)})),n.target.textContent="°C"):(a.map((n=>{let e=9*Number(n.textContent)/5+32;n.textContent=e.toFixed(1)})),n.target.textContent="°F")})),r("nairobi")})();
//# sourceMappingURL=main.js.map