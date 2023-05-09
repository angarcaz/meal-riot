import { combineReducers } from "redux";
import UserReducer from "./users/reducer";
import RecipeReducer from "./recipes/reducer";

const rootReducer = combineReducers({
    UserReducer,
    RecipeReducer
});

export default rootReducer