import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  footer: {
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    height: 50,
    color: "white",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#3f51b5",
  },
});

function RecipeFooter() {
  const classes = useStyles();

  return <div className={classes.footer}></div>;
}

export default RecipeFooter;
