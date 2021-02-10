import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { useSelector } from "react-redux";
import { allRecipes } from "../../selector/recipeSelector";
import RecipeReviewCard from "../RecipeReviewCard";
import { Box } from "@material-ui/core";

function RecipeContent() {
  const recipes = useSelector(allRecipes);
  return (
    <div>
      <CssBaseline />
      <Container>
        <Typography component="div">
          <Grid container spacing={2}>
            {recipes.map((recipe, index) => (
              <Grid key={index} item xs={12} sm={6} lg={4} xl={1} >
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
