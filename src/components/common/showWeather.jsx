import React, { Component } from "react";
import DaysContainer from "./daysContainer";

const ShowWeather = (props) => {
  console.log("Show Weather", props);
  const { data: weatherData } = props;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row text-center">
          <DaysContainer day="Today" data={weatherData} index={0} />
          <DaysContainer day="Tomorrow" data={weatherData} index={1} />
          <DaysContainer day="The Day After" data={weatherData} index={2} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShowWeather;
