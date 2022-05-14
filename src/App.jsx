import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import http from "./services/httpService";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/navBar";
import LoadingSpinner from "./components/common/loadingSpinner";
import InputSearch from "./components/inputSearch";
import Weather from "./components/weather";
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

  handleGetData = async () => {
    try {
      const { city, previousSearch, currentSearch } = this.state;
      // Running Loading Spinner
      let { loading } = this.state;
      loading = true;
      this.setState({ loading });
      //

      if (previousSearch !== currentSearch) {
        const apiEndPoint = `http://api.weatherapi.com/v1/forecast.json?key=97de37820e0e4a29b9c90051221604&q=${city.name}&days=3&aqi=no&alerts=no`;
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
    const { handleChange, handleGetData, handleChangeClass } = this;

    return (
      <React.Fragment>
        <NavBar />
        {loading === true ? <LoadingSpinner /> : null}
        <div className={handleChangeClass()}>
          <ToastContainer />
          <InputSearch
            stateCityName={city.name}
            onChanges={handleChange}
            onGettingData={handleGetData}
          />
          <Weather data={city.info} />
        </div>
      </React.Fragment>
    );
  }

  handleChangeClass = () => {
    const { info } = this.state.city;

    if (Object.keys(info).length > 0) {
      const { text } = info.current.condition;
      const weatherDescribe = text.toLowerCase().trim();

      const isDay = info.current.is_day === 1 ? true : false,
        isRainy = weatherDescribe.includes("rain" || "shower" || "rainy"),
        isSnowy = weatherDescribe.includes(
          "snow" || "snowy" || "freezing" || "freeze"
        ),
        isSunny = weatherDescribe.includes("sunny" || "sun" || "hot"),
        isCloudy = weatherDescribe.includes("cloudy" || "cloud" || "overcast"),
        isMist = weatherDescribe.includes("mist" || "misty"),
        isFoggy = weatherDescribe.includes("fog" || "foggy");

      if (isCloudy) {
        return "cloudy";
      }
      if (isSunny) {
        return "sunny__day";
      }
      if (isMist) {
        return "mist";
      }
      if (isFoggy) {
        return "mist";
      }
      if (isDay && isRainy) {
        return "rainy__day";
      }
      if (!isDay && isRainy) {
        return "rainy__night";
      }
      if (isDay && isSnowy) {
        return "snowy__day";
      }
      if (!isDay && isRainy) {
        return "snowy__night";
      }
    } else return null;
  };
}

export default App;
