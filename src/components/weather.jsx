import React from "react";
import ShowWeather from "./showWeather";

const Weather = ({ data: weatherData }) => {
  console.log(typeof weatherData);
  return <ShowWeather data={weatherData} />;
};

export default Weather;
