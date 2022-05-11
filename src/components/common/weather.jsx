import React, { Component } from "react";
import DayButton from "./dayButton";
import ButtonGroup from "./buttonGroup";

class Weather extends Component {
  render() {
    console.log("Props from weather.jsx", this.props);
    return (
      <React.Fragment>
        <ButtonGroup />
      </React.Fragment>
    );
  }
}

export default Weather;
