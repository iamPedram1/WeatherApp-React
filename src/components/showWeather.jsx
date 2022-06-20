import React from "react";
import { Grid } from "@mui/material";
import DaysContainer from "./common/daysContainer";

const ShowWeather = ({ data: weatherData }) => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item>
          <DaysContainer day="Today" data={weatherData} index={0} />
        </Grid>
        <Grid item>
          <DaysContainer day="Tomorrow" data={weatherData} index={1} />
        </Grid>
        <Grid item className="dayAfter">
          <DaysContainer day="The Day After" data={weatherData} index={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default ShowWeather;
