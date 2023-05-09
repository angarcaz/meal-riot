import axios from "axios";
import {
    SIGN_UP,
    SIGN_UP_OK,
    SIGN_UP_FAIL,
} from "./actionTypes";

//ACTIONS SIGN_UP:

export function actionDoSignUp(){
    return {
        type: SIGN_UP
    }
}

export function actionDoSignUpOk(newUser){
    return {
        type: SIGN_UP_OK,
        payload: newUser
    }
}

export function actionDoSignUpFail(error){
    return {
        type: SIGN_UP_FAIL,
        payload: error
    }
}

export function doSignUp(newUserData) {
    return async (dispatch) => {
      dispatch(actionDoSignUp());
      try {
        await axios.post("http://localhost:3000/register", newUserData);
        dispatch(actionDoSignUpOk())
      } catch (error) {
        dispatch(actionDoSignUpFail(error))
      }
  }}
  