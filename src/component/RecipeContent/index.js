import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { useDispatch, useSelector } from "react-redux";
import { allRecipes } from "../../selector/recipeSelector";
import RecipeReviewCard from "../RecipeReviewCard";
import { Box, TextField } from "@material-ui/core";
import { filterRecipe } from "../../redux/recipeActionCreator";

function RecipeContent() {

  const recipes = useSelector(allRecipes);
  const dispatch = useDispatch();

  return (
    <div>
      <CssBaseline />
      <Container>
      <Typography component="div">
        <TextField 
            margin='dense'
            fullWidth='true'
            id="outlined-basic" 
            label="Filter" 
            variant="outlined" 
            onChange={e => dispatch(filterRecipe(e.target.value))}
        />
        </Typography>
        <Typography component="div">
          <Grid container spacing={2}>
            {recipes.map((recipe, index) => (
              <Grid key={recipe.id} item xs={12} sm={6} lg={4} xl={4} >
                <RecipeReviewCard recipe={recipe} index={index} />
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}

export default RecipeContent;
