import { combineReducers } from "@reduxjs/toolkit";
import { useReducer } from "react";
import themeReducer from "./slices/themeSlice"

const rootReducer=combineReducers({
    user:useReducer,
    theme:themeReducer
});

export default rootReducer;