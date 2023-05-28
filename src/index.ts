import { currentWeather, weatherReport } from "./fetchCity";
import { processCurrent, processForecast } from "./processData";
import { displayCurrent, displayForecast } from "./displayUpdater";
import "./reset.css";
import "./style.css";

const inputCity = document.querySelector("input");
const submitCity = document.querySelector("button");
let preference = true;

let currentResultData: any;
let forecastResultData: any;

submitCity.addEventListener("click", function () {
  if (inputCity.value != "") {
    const searchCurrent = currentWeather(inputCity.value);
    searchCurrent
      .then((data) => processCurrent(data))
      .then((output) => (currentResultData = output))
      .then(() => displayCurrent(currentResultData, preference));
    const searchForecast = weatherReport(inputCity.value);
    searchForecast
      .then((data) => processForecast(data))
      .then((output) => (forecastResultData = output));
    displayForecast(forecastResultData);
  }
});
