import { recipes } from "../recipes";
export default (state = { recipes, recipe: {} }, action) => {
    switch (action.type) {
        case 'GET_RECIPE':
            return {
                ...state,
                recipe: state.recipes[action.payload]
            };
        case 'DELETE_RECIPE':
            state.recipes.splice(action.payload, 1);            
            return {
                ...state,
                recipes: [...state.recipes]
            };
        case 'UPDATE_FAVORITE_RECIPE':  
            let favoriteRecipe = state.recipes[action.payload];
            favoriteRecipe.isFavorite = !favoriteRecipe.isFavorite;
            let newRecipes = state
                                .recipes
                                .map(recipe => recipe === favoriteRecipe ? recipe = favoriteRecipe : recipe);
            return {
                ...state,
                recipes: [...newRecipes]
            }
        default:
            return state;
    }
};
