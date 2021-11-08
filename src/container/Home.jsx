import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Products from "../components/Products";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Products />
      </Grid>
    </Grid>
  );
};

export default Home;
