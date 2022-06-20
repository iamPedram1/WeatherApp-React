import React from "react";
import { Grid, AppBar, Box, Toolbar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#212529" }}>
          <Toolbar variant="dense">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <a className="website__name">AzWeather</a>
              <a href="https://github.com/iamPedram1">
                <GitHubIcon
                  sx={{
                    color: "white",
                    marginRight: "1rem",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </a>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
