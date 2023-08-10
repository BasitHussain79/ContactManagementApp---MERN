import { Grid } from "@mui/material";
import React from "react";
import Contacts from "../components/feature/Contacts";

const Home = () => {
  return (
    <Grid container>
      <Grid item md={6}>
        Contact will display here
      </Grid>
      <Grid item md={6}>
        <Contacts />
      </Grid>
    </Grid>
  );
};

export default Home;
