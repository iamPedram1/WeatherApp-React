import React, { Component } from "react";
import InputSearch from "./common/inputSearch";
import http from "../services/httpService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Weather from "./weather";

class App extends Component {
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
    try {
      const city = this.state.city;
      const apiEndPoint = `http://api.weatherapi.com/v1/forecast.json?key=97de37820e0e4a29b9c90051221604&q=${city.name}&days=3&aqi=no&alerts=no`;
      const { data } = await http.get(apiEndPoint);
      city.info = data;
      this.setState({ city });
      console.log(city.info);
    } catch (e) {
      const expectedError =
        e.response.status && e.response.status > 400 && e.response.status < 500;
      if (expectedError) {
        toast.error("Something failed while getting Data");
      }
    }
  };

  render() {
    const { city } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <InputSearch
          stateCityName={city.name}
          onChanges={this.handleChange}
          onGettingData={this.handleGetData}
        />
        <Weather data={city.info} />
      </React.Fragment>
    );
  }
}

export default App;
