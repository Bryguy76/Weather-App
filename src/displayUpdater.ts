import { contentWiper } from "./contentWiper";
import { currentWeather, weatherReport } from "./fetchCity";
import { processCurrent, processForecast } from "./processData";
import { preference } from "./globals";

export function displayCurrent(input: any, preference: boolean) {
  document.querySelector("body").classList.remove("dayTime");
  document.querySelector("body").classList.remove("nightTime");

  let backGround: string;

  if (input.is_day == 1) {
    document.querySelector("body").classList.add("dayTime");
  } else {
    document.querySelector("body").classList.add("nightTime");
  }
  const container = document.querySelector(".container");
  contentWiper(container);
  container.innerHTML = `
  <h1 class="heading">Weather App</h1>
  <div class="search">
    <input
      type="search
        "
    />
    <button type="button">search</button>
    <p class="metric">${
      preference ? "Display Celcius" : "Display Farenheight"
    }</p>
  `;
  const cityName = document.createElement("h2");
  cityName.classList.add("cityName");
  cityName.textContent = input.name;
  const temp = document.createElement("h2");
  temp.classList.add("temp");
  if (preference) {
    temp.textContent = `${Math.trunc(input.farenheight)}° F`;
  } else {
    temp.textContent = `${Math.trunc(input.celcius)}° C`;
  }
  const condition = document.createElement("p");
  condition.classList.add("condition");
  condition.textContent = input.condition;

  const localle = document.createElement("p");
  localle.classList.add("localle");
  localle.textContent = `${input.region ? `${input.region},` : ""} ${
    input.country
  }`;
  container.appendChild(cityName);
  container.appendChild(temp);
  container.appendChild(condition);
  container.appendChild(localle);

  const inputCity = document.querySelector("input");
  const submitCity = document.querySelector("button");

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

  const metric = document.querySelector(".metric");
  metric.addEventListener("click", function () {
    preference = !preference;
    if (document.querySelector(".temp")) {
      if (preference) {
        metric.textContent = "Display Celcius";
        temp.textContent = `${Math.trunc(input.farenheight)}° F`;
      } else {
        temp.textContent = `${Math.trunc(input.celcius)}° C`;
        metric.textContent = "Display Farenheight";
      }
    }
  });
}

export function displayForecast(input: any) {}
