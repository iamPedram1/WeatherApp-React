import React, { Component } from "react";
import InputSearch from "./common/inputSearch";

class Weather extends Component {
  state = {
    city: {
      name: "",
      info: [],
    },
  };

  handleChange = (e) => {
    const city = this.state.city;
    city.name = e.currentTarget.value;
    this.setState({ city });
  };

  render() {
    return (
      <React.Fragment>
        <InputSearch
          stateCityName={this.state.city.name}
          onChanges={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default Weather;
