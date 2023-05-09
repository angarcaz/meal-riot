import {
    SIGN_UP,
    SIGN_UP_OK,
    SIGN_UP_FAIL,
} from "./actionTypes";

const initialState = {
    user: {},
    loadingUser: false,
    userAuth: false, 
    error: {
        message: "",
    }
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            state = {...state, loadingUser:true};
            break;
        case SIGN_UP_OK:
            state = {...state, loadingUser:false, userAuth: true, user: action.payload};
            break;
        case SIGN_UP_FAIL:
            state = {...state, loadingUser:false, userAuth: false, user: {}, error: {message:action.payload}}
            break;
        default:
            break;
    }
return state
}