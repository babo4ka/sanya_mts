import { createStore, combineReducers } from "redux";
import { consultationReducer } from "./consultationReducer";
import { tariffBtnReducer } from "./tariffBtnReducer";
import { tariffCardReducer } from "./tariffCardReducer";

const rootReducer = combineReducers({
    btns:tariffBtnReducer,
    cards:tariffCardReducer,
    consultation:consultationReducer
})

export const store = createStore(rootReducer);