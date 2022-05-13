import React from "react";
import ShowWeather from "./showWeather";

const Weather = ({ data: weatherData }) => {
  return <ShowWeather data={weatherData} />;
};

export default Weather;
