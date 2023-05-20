import { currentWeather, weatherReport } from "./fetchCity";

const test = currentWeather("denver");

const test2 = weatherReport("shanghai");

test.then((data) => console.log(data));
test2.then((data) => console.log(data));
