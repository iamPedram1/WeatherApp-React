import React, { Component } from "react";
import ListGroup from "./listGroup";

const DaysContainer = ({ day, data, index }) => {
  // Check if there is data to render containers
  const thereIsData = Object.keys(data).length > 0;

  if (thereIsData) {
    // Weather Data
    const { country, region, name: cityName } = data.location;
    const { avgtemp_c: temprature } = data.forecast.forecastday[index].day;
    const { icon, text: weatherStatus } =
      data.forecast.forecastday[index].day.condition;

    return (
      <div className="col new">
        <div className="card" style={{ width: "21rem" }}>
          <span className="span1">
            <img src={icon} className="card-img-top icon" />
            <span className="temp">{Math.round(temprature)}°</span>
          </span>
          <div className="card-body">
            <h1 className="card-title">{day}</h1>
            <h4 className="card-title text-muted weather__status">
              {weatherStatus}
            </h4>
            <h6 className="card-title">
              {country} \ {region} \ {cityName}
            </h6>
          </div>
          <ListGroup data={data} index={index} />
        </div>
      </div>
    );
  }
};

export default DaysContainer;
