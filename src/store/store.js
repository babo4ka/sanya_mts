import { createStore, combineReducers } from "redux";
import { consultationReducer } from "./consultationReducer";
import { funcsReducer } from "./funcsReducer";
import { tariffBtnReducer } from "./tariffBtnReducer";
import { tariffCardReducer } from "./tariffCardReducer";

const rootReducer = combineReducers({
    btns:tariffBtnReducer,
    cards:tariffCardReducer,
    consultation:consultationReducer,
    funcs:funcsReducer
})

export const store = createStore(rootReducer);