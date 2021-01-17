import { combineReducers } from "redux";

import keywordsReducer from "../pages/optimization/keywords/reducer";

const rootReducer = combineReducers({
    keywords: keywordsReducer
});

export default rootReducer;