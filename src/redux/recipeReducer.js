import { recipes } from "../recipes";
export default (state = { recipes, recipe: {} }, action) => {
    switch (action.type) {
        case 'GET_RECIPE':
            return {
                ...state,
                recipe: state.recipes[action.payload]
            };
        case 'DELETE_RECIPE':                  
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            };
        case 'UPDATE_FAVORITE_RECIPE':             
            return {
                ...state,
                recipes: state
                            .recipes
                            .map(recipe => {
                                return  recipe.id === action.payload ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
                            })
            }
        case 'FILTER_RECIPE':           
            return {
                ...state,
                recipes: action.payload === '' ? 
                            recipes : 
                            recipes.filter(recipe =>  recipe
                                                        .name
                                                        .toLowerCase()
                                                        .includes(action.payload.toLowerCase()))
            }
        default:
            return state;
    }
};
