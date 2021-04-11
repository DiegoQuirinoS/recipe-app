import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


import { useDispatch, useSelector } from "react-redux";
import { allRecipes } from "../../selector/recipeSelector";
import RecipeReviewCard from "../RecipeReviewCard";
import { Button, TextField } from "@material-ui/core";
import { filterRecipe } from "../../redux/recipeActionCreator";
import { useHistory } from "react-router-dom";


function RecipeContent() {
  const history = useHistory();

  const recipes = useSelector(allRecipes);
  const dispatch = useDispatch();

  const edit = () => history.push('/edit')

  return (
    <div>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid container item xs={10}>
            <TextField               
                fullWidth='false'
                id="outlined-basic" 
                label="Filter" 
                variant="outlined" 
                onChange={e => dispatch(filterRecipe(e.target.value))}
            />             
          </Grid>
          <Grid container item xs={2}>
            <Button variant="contained" color="primary" onClick={edit}>
                Add Recipe
            </Button>           
          </Grid>          
        </Grid>        
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
