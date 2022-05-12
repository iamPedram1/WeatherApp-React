import React, { Component } from "react";
import ShowWeather from "./showWeather";

const Weather = ({ data }) => {
  return (
    <React.Fragment>
      <ShowWeather data={data} />
    </React.Fragment>
  );
};

export default Weather;
