export function displayCurrent(input: any, preference: boolean) {
  let backGround: string;
  if (input.is_day == 1) {
    document.querySelector("body").classList.add("dayTime");
  } else {
    document.querySelector("body").classList.add("nightTime");
  }
  const container = document.querySelector(".container");
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
  const localle = document.createElement("p");
  localle.classList.add("localle");
  localle.textContent = `${input.region}, ${input.country}`;
  container.appendChild(cityName);
  container.appendChild(temp);
  container.appendChild(localle);
}

export function displayForecast(input: any) {}
