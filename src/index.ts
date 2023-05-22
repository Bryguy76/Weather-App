import { currentWeather, weatherReport } from "./fetchCity";
import { processCurrent, processForecast } from "./processData";

// const test = currentWeather("denver");

// const test2 = weatherReport("shanghai");
// test.then((data) => console.log(data));

// test.then((data) => processCurrent(data)).then((output) => console.log(output));

// test2.then((data) => console.log(data));

// test2
//   .then((data) => processForecast(data))
//   .then((output) => console.log(output));

const inputCity = document.querySelector("input");
const submitCity = document.querySelector("button");

submitCity.addEventListener("click", function () {
  if (inputCity.value != "") {
    const searchCurrent = currentWeather(inputCity.value);
    searchCurrent
      .then((data) => processCurrent(data))
      .then((output) => console.log(output));
    const searchForecast = weatherReport(inputCity.value);
    searchForecast
      .then((data) => processForecast(data))
      .then((output) => console.log(output));
  }
});
