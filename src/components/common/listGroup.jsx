import React from "react";
import List from "./list";
import PropTypes from "prop-types";

const ListGroup = ({ data, index }) => {
  const {
    avghumidity: humidty,
    avgtemp_c: temprature,
    totalprecip_mm: preceip,
    uv,
  } = data.forecast.forecastday[index].day;

  const roundIt = (data) => {
    return Math.round(data);
  };

  return (
    <ul className="list-group list-group-flush">
      <List text="Feels Like" listData={roundIt(temprature)} />
      <List text="Humidty" listData={roundIt(humidty)} />
      <List text="Preceip" listData={roundIt(preceip)} />
      <List text="UV Index" listData={roundIt(uv)} />
    </ul>
  );
};

ListGroup.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ListGroup;
