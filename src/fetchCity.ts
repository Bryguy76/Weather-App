export async function currentWeather(
  city: string,
  apiKey: string = "5b9c49dc56774936acb35747231105"
) {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?" +
      new URLSearchParams({
        key: apiKey,
        q: city,
      }),
    {
      mode: "cors",
    }
  );
  const json = await response.json();
  return json;
}

export async function weatherReport(
  city: string,
  apiKey: string = "5b9c49dc56774936acb35747231105",
  days: number = 7
) {
  const response = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?" +
      new URLSearchParams({
        key: apiKey,
        q: city,
        days: days.toString(),
      })
  );
  const json = await response.json();
  return json;
}
