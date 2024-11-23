import { mkElem, tdClass, appendMultip } from "./fn.js";

function makeTable(obj) {
  let row = mkElem("tr");

  const date = tdClass("date", obj.datetime);
  const tempMax = tdClass("temp-max", obj.tempmax);
  const tempMin = tdClass("temp-min", obj.tempmin);
  const temp = tdClass("temp", obj.temp);
  const feelMax = tdClass("feel-max", obj.feelslikemax);
  const feelMin = tdClass("feel-min", obj.feelslikemin);
  const feel = tdClass("feel", obj.feelslike);
  const precip = tdClass("precip", obj.precip);
  const precipProb = tdClass("precip-prob", obj.precipprob);
  const precipType = tdClass("precip-type", obj.preciptype);
  const windGust = tdClass("wind-gu", obj.windgust);
  const windSpeed = tdClass("wind-sp", obj.windspeed);
  const windDirection = tdClass("wind-di", obj.winddir);
  const cloudCover = tdClass("cloud-cov", obj.cloudcover);
  const visibility = tdClass("visib", obj.visibility);
  const condition = tdClass("cond", obj.conditions);
  const description = tdClass("desc", obj.description);

  row = appendMultip(
    row,
    date,
    tempMax,
    tempMin,
    temp,
    feelMax,
    feelMin,
    feel,
    precip,
    precipProb,
    precipType,
    windGust,
    windSpeed,
    windDirection,
    cloudCover,
    visibility,
    condition,
    description,
  );

  return row;
}

export { makeTable };
