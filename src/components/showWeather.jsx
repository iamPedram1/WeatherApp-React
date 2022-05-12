import React, { Component } from "react";
import DaysContainer from "./common/daysContainer";

const ShowWeather = (props) => {
  const { data: weatherData } = props;
  const thereIsData = Object.keys(weatherData).length > 0;

  return (
    <div className="container">
      <div className="row text-center">
        {/* {thereIsData &&
          weatherData.forecast.forecastday.map((item) => {
            console.log("Map", item);
            return <DaysContainer data={item} />;
          })} */}
        <DaysContainer day="Today" data={weatherData} index={0} />
        <DaysContainer day="Tomorrow" data={weatherData} index={1} />
        <DaysContainer day="The Day After" data={weatherData} index={2} />
      </div>
    </div>
  );
};

export default ShowWeather;
