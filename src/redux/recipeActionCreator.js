export const getRecipe = (index) => {
    return {
        type: 'GET_RECIPE',
        payload: index,
    }
}