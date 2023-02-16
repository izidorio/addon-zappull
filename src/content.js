"use strict";

const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL("src/modules/main.js"));
const body = document.body || document.getElementsByTagName("body")[0];
body.append(script);
