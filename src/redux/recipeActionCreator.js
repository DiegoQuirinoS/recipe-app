export const getRecipe = (index) => {
    return {
        type: 'GET_RECIPE',
        payload: index,
    }
}

export const deleteRecipe = (index) => {   
    return {
        type: 'DELETE_RECIPE',
        payload: index
    }
}

export const updateFavoriteRecipe = (index) => {
    return{
        type: 'UPDATE_FAVORITE_RECIPE',
        payload: index
    }
}

export const filterRecipe = (name) => {
    return{
        type: 'FILTER_RECIPE',
        payload: name
    }
}