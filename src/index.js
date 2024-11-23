/* eslint-disable no-undef */
require("./style.css");
require("modern-normalize");

import { getByLocation } from "./fetch.js";
import { getDate } from "./days.js";
import { makeTable } from "./table.js";
import { searchBody } from "./home.js";
import { changeToDeg, changeToFahr } from "./fn.js";
import { table } from "./tableHead.js";

const body = document.querySelector("body");
const searchBoxTwo = document.querySelector("#search-two");
const nav = document.querySelector("nav");
const temps = document.querySelector(".temps");
const addr = document.querySelector(".addr");

async function addTable() {
  let location = document.querySelector("#search-one").value;
  const searchBox = document.querySelector("#search-one");

  let itemObj = await getByLocation(location);
  let tableItems = getDate(itemObj);
  addr.textContent = itemObj.address;

  let hasTemp = !document.querySelector(".temp");

  if (hasTemp) {
    body.removeChild(searchBody);
    body.classList.remove("flx-center");
    body.appendChild(table);

  } else {
    let items = table.querySelectorAll('tr');

    for (let i = 2; i < items.length; i++) {
        table.removeChild(items[i]);
    }
  }

  searchBoxTwo.appendChild(searchBody);
  nav.style.display = "flex";

  for (let item of tableItems) {
    let rowItem = makeTable(item);
    table.appendChild(rowItem);
  }

  searchBox.value = "";
}

(function addHome() {
  body.classList.add("flx-center");
  body.appendChild(searchBody);

  let searchBtn = document.querySelector(".search-img");
  searchBtn.addEventListener("click", () => {
    addTable();
  });
})();

temps.addEventListener("click", (e) => {
  const tempMax = document.querySelectorAll(".temp-max");
  const tempMin = document.querySelectorAll(".temp-min");
  const temp = document.querySelectorAll(".temp");
  const feelMax = document.querySelectorAll(".feel-max");
  const feelMin = document.querySelectorAll(".feel-min");
  const feel = document.querySelectorAll(".feel");

  const TEMP_ITEMS = [
    ...tempMax,
    ...temp,
    ...tempMin,
    ...feel,
    ...feelMax,
    ...feelMin,
  ];

  if (e.target.textContent === "°F") {
    changeToDeg(TEMP_ITEMS);
    e.target.textContent = "°C";
  } else {
    changeToFahr(TEMP_ITEMS);
    e.target.textContent = "°F";
  }
});

getByLocation("nairobi");
