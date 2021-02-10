import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/recipeActionCreator";
import { getRecipeSelector } from "../../selector/recipeSelector";

import { Link } from "react-router-dom";

function RecipeDetail({ match }) {
  const dispatch = useDispatch();
  let recipe = useSelector(getRecipeSelector);

  useEffect(() => {
    dispatch(getRecipe(match.params.index));
  }, [recipe]);

  return (
    <div>
      <h1>{recipe && recipe.name}</h1>
      <h3>How to prepare</h3>
      {recipe.ingredients &&
        recipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <span>{ingredient.quantity}</span>
            <span>{ingredient.name}</span>
            <span>{ingredient.type}</span>
          </div>
        ))}
      <h3>How to prepare</h3>
      <ol>
        {recipe.steps &&
          recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
      </ol>
      <Link to="/">Back to receipes</Link>
    </div>
  );
}

export default RecipeDetail;
