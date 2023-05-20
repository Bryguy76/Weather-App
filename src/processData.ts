interface currentWeather {
  name: string;
  region: string;
  country: string;
  farenheight: number;
  celcius: number;
  condition: string;
  is_day: number;
  precip_in: number;
}

interface weatherForecast {
  forecast: Array<any>;
}

export function processCurrent(input: any): currentWeather {
  return {
    name: input.location.name,
    region: input.location.region,
    country: input.location.country,
    farenheight: input.current.temp_f,
    celcius: input.current.temp_c,
    condition: input.current.condition.text,
    is_day: input.current.is_day,
    precip_in: input.current.precip_in,
  };
}

export function processForecast(input: any): weatherForecast {
  return {
    forecast: input.forecast.forecastday,
  };
}
// export function processForecast(input: {}) {
//   console.log(input);
// }
