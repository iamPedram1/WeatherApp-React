import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import http from "./services/httpService";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navBar";
import InputSearch from "./components/inputSearch";
import ShowWeather from "./components/showWeather";
import { CircularProgress, Grid } from "@mui/material";

class App extends Component {
  state = {
    city: {
      name: "",
      info: [],
    },
    loading: false,
    previousSearch: "",
    currentSearch: "",
  };

  handleChange = (e) => {
    const { city } = this.state;
    city.name = e.currentTarget.value;
    const currentSearch = city.name;
    this.setState({ city, currentSearch });
  };

  handleGetData = async (e) => {
    e.preventDefault();
    const inputIsEmpty = this.state.city.name.length === 0;
    //
    if (inputIsEmpty) return;
    //
    try {
      const { city, previousSearch, currentSearch } = this.state;
      // Running Loading Spinner
      let { loading } = this.state;
      loading = true;
      this.setState({ loading });
      //

      if (previousSearch !== currentSearch) {
        const apiEndPoint = `https://api.weatherapi.com/v1/forecast.json?key=97de37820e0e4a29b9c90051221604&q=${city.name}&days=3&aqi=no&alerts=no`;
        const { data } = await http.get(apiEndPoint);
        loading = false;
        city.info = data;
        const previousSearch = currentSearch;
        this.setState({ city, previousSearch, loading });
        //
      }
    } catch (e) {
      const expectedError =
        e.response.status && e.response.status > 400 && e.response.status < 500;
      if (expectedError) {
        toast.error("Something failed while getting Data");
      }
      const loading = false;
      this.setState({ loading });
    }
  };

  render() {
    const { city, loading } = this.state;
    const { handleChange, handleGetData } = this;

    return (
      <>
        <NavBar />
        <div>
          <ToastContainer />
          <InputSearch
            stateCityName={city.name}
            onChanges={handleChange}
            onGettingData={handleGetData}
          />
          {loading && (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ margin: "3rem 0" }}
            >
              <CircularProgress />
            </Grid>
          )}
          <ShowWeather data={city.info} />
        </div>
      </>
    );
  }
}

export default App;
