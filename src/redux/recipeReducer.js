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
            let favoriteRecipe = state.recipes.splice(action.payload, 1);
            favoriteRecipe[0].isFavorite = !favoriteRecipe[0].isFavorite;
            return {
                ...state,
                recipes: [...state.recipes, favoriteRecipe[0]]
            }
        default:
            return state;
    }
};
