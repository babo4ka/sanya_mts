import { createStore } from "redux";
import { tariffBtnReducer } from "./tariffBtnReducer";

export const store = createStore(tariffBtnReducer);