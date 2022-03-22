import { createStore, combineReducers } from "redux";
import { tariffBtnReducer } from "./tariffBtnReducer";
import { tariffCardReducer } from "./tariffCardReducer";

const rootReducer = combineReducers({
    btns:tariffBtnReducer,
    cards:tariffCardReducer
})

export const store = createStore(rootReducer);