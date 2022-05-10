import React, { Component } from "react";
import InputSearch from "./common/inputSearch";

class Weather extends Component {
  state = {
    city: {
      name: "",
      info: [],
    },
  };

  render() {
    return (
      <React.Fragment>
        <InputSearch />
      </React.Fragment>
    );
  }
}

export default Weather;
