import {
    RANDOM_RECIPE,
    RANDOM_RECIPE_OK,
    RANDOM_RECIPE_FAIL
} from "./actionTypes";

const initialState = {
    recipe: {},
    loadingRecipe: false
}

export default function RecipeReducer(state = initialState, action) {
    switch (action.type) {
        case RANDOM_RECIPE:
            state = {...state, loadingRecipe: true}
            break;
        case RANDOM_RECIPE_OK:
            state = {...state, loadingRecipe: false, recipe: action.payload}
            break;
        case RANDOM_RECIPE_FAIL:
            state = {...state, loadingRecipe: false, recipe: {}, error: {message: action.payload}}
            break;
        default:
            break;
    }

    return state
}