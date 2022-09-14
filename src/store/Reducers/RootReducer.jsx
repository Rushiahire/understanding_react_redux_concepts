import { combineReducers } from "redux";
import { FormReducer } from '../Reducers/FormReducers';
import { AddDataReducer } from "./AddDataReducer";

const RootReducer = combineReducers({
    FormReducer,
    AddDataReducer
});

export default RootReducer;