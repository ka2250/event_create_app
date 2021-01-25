import { combineReducers } from "redux";

import eventReducer from "./eventReducer";
import operationReducer from "./operationReducer";

export default combineReducers({
	eventReducer,
	operationReducer,
});
