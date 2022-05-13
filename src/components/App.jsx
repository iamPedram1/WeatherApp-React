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
    previousSearch: "",
    currentSearch: "",
  };

  handleChange = (e) => {
    const { city } = this.state;
    city.name = e.currentTarget.value;
    const currentSearch = city.name;
    this.setState({ city, currentSearch });
  };

  handleGetData = async () => {
    try {
      const { city, previousSearch, currentSearch } = this.state;
      if (previousSearch !== currentSearch) {
        const apiEndPoint = `http://api.weatherapi.com/v1/forecast.json?key=97de37820e0e4a29b9c90051221604&q=${city.name}&days=3&aqi=no&alerts=no`;
        const { data } = await http.get(apiEndPoint);
        city.info = data;
        const previousSearch = currentSearch;
        this.setState({ city, previousSearch });
      }
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
    const { handleChange, handleGetData } = this;
    return (
      <React.Fragment>
        <ToastContainer />
        <InputSearch
          stateCityName={city.name}
          onChanges={handleChange}
          onGettingData={handleGetData}
        />
        <Weather data={city.info} />
      </React.Fragment>
    );
  }
}

export default App;
