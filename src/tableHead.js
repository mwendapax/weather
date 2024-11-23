import { mkElem, thColspan, thRowSpan, thScope, appendMultip } from "./fn.js";

let table = mkElem("table");

let firstTR = mkElem("tr");

const date = thRowSpan(2, "colgroup", "Date");
const temp = thColspan(3, "colgroup", "Temperature");
const FeelsLike = thColspan(3, "colgroup", "Feels like");
const precipitation = thColspan(3, "colgroup", "Precipitation");
const wind = thColspan(3, "colgroup", "Wind");
const cloudCover = thRowSpan(2, "col", "Cloud cover");
const visibility = thRowSpan(2, "col", "Visibility");
const conditions = thRowSpan(2, "col", "Conditions");
const description = thRowSpan(2, "col", "Description");

firstTR = appendMultip(
  firstTR,
  date,
  temp,
  FeelsLike,
  precipitation,
  wind,
  cloudCover,
  visibility,
  conditions,
  description,
);

let secondTR = mkElem("tr");

const tempMax = thScope("Temp max");
const tempMin = thScope("Temp min");
const Temp = thScope("Temp");
const feelsLikeMax = thScope("Feels like max");
const feelsLikeMin = thScope("Feels like min");
const feelsLike = thScope("Feels like");
const precip = thScope("Precip");
const PrecipProb = thScope("Precip prob");
const precipType = thScope("Preciptype");
const windGust = thScope("Windgust");
const WindSpeed = thScope("Wind speed");
const windDir = thScope("Wind dir");

secondTR = appendMultip(
  secondTR,
  tempMax,
  tempMin,
  Temp,
  feelsLikeMax,
  feelsLikeMin,
  feelsLike,
  precip,
  PrecipProb,
  precipType,
  windGust,
  WindSpeed,
  windDir,
);

table = appendMultip(table, firstTR, secondTR);

export { table };
