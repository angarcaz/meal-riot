import axios from "axios";
import {
    RANDOM_RECIPE,
    RANDOM_RECIPE_OK,
    RANDOM_RECIPE_FAIL
} from "./actionTypes";

const APIKEY = "7ab86af5e81543dfa01abd6addab1304";

//ACTIONS GET RANDOM RECIPE

export function actionGetRandomRecipe(){
    return {
        type: RANDOM_RECIPE
    }
}

export function actionGetRandomRecipeOk(recipe){
    return {
        type: RANDOM_RECIPE_OK,
        payload: recipe
    }
}

export function actionGetRandomRecipeFail(error){
    return {
        type: RANDOM_RECIPE_FAIL,
        payload: error
    }
}

export function getRandomRecipe(){
    return async(dispatch) => {
        dispatch(actionGetRandomRecipe());
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${APIKEY}`)
            dispatch(actionGetRandomRecipeOk(response.data.recipes[0]))
            console.log(response.data.recipes[0])
        } catch (error) {
            dispatch(actionGetRandomRecipeFail(error))
        }
    }
}