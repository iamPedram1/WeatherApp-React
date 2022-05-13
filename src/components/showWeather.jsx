import React, { Component } from "react";
import DaysContainer from "./common/daysContainer";

const ShowWeather = ({ data: weatherData }) => {
  return (
    <div className="container">
      <div className="row text-center">
        <DaysContainer day="Today" data={weatherData} index={0} />
        <DaysContainer day="Tomorrow" data={weatherData} index={1} />
        <DaysContainer day="The Day After" data={weatherData} index={2} />
      </div>
    </div>
  );
};

export default ShowWeather;
