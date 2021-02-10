import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useSelector } from "react-redux";
import { allRecipes } from "../../selector/recipeSelector";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 15,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function RecipeHeader() {
  const recipes = useSelector(allRecipes);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Recipes
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default RecipeHeader;
