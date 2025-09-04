import {weatherReducer} from "../reducer/weatherReducer.js";
import {applyMiddleware,legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";


export const store = createStore(
    weatherReducer,
    applyMiddleware(thunk, logger)
);