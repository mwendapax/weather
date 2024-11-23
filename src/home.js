import { mkElem, mkElemC, appendMultip, mkElemD } from "./fn.js";

// eslint-disable-next-line no-undef
let searchIcon = require("./assets/target.png");

const searchBox = mkElemC("div", "search-bar");

const input = mkElemD("input", "search-one");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Enter location");

const searchImg = mkElemC("div", "search-img");
searchImg.classList.add("flx-center");

const image = mkElem("img");
image.setAttribute("src", searchIcon);
image.setAttribute("alt", "position icon");

searchImg.appendChild(image);

let searchBody = appendMultip(searchBox, input, searchImg);

export { searchBody };
