import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { Input } from "antd";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = ({ stateCityName, onChanges, onGettingData }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "1rem" }}
      >
        <form onSubmit={onGettingData}>
          <ButtonGroup sx={{ backgroundColor: "#fff", marginTop: "1rem" }}>
            <Input
              placeholder="Enter City Name"
              value={stateCityName}
              onChange={onChanges}
            />
            <Button type="submit" sx={{ borderRadius: "0px" }}>
              <SearchIcon />
            </Button>
          </ButtonGroup>
        </form>
      </Grid>
    </>
  );
};

InputSearch.propTypes = {
  stateCityName: PropTypes.string,
  onChanges: PropTypes.func,
  onGettingData: PropTypes.func,
};

export default InputSearch;
