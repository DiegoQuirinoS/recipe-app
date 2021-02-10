import { recipes } from "../recipes";
export default (state = { recipes, recipe: {} }, action) => {
    switch (action.type) {
        case 'GET_RECIPE':
            return {
                ...state,
                recipe: recipes[action.payload]
            };
        default:
            return state;
    }
};
