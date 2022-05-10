import React, { Component } from "react";
import InputSearch from "./common/inputSearch";
import axios from "axios";

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

  handleGetData = async () => {
    const city = this.state.city;
    const apiEndPoint = `http://api.weatherapi.com/v1/forecast.json?key=97de37820e0e4a29b9c90051221604&q=${city.name}&days=3&aqi=no&alerts=no`;
    const { data } = await axios.get(apiEndPoint);
    city.info = data;
    console.log(city);
    this.setState({ city });
  };

  render() {
    return (
      <React.Fragment>
        <InputSearch
          stateCityName={this.state.city.name}
          onChanges={this.handleChange}
          onGettingData={this.handleGetData}
        />
      </React.Fragment>
    );
  }
}

export default Weather;
