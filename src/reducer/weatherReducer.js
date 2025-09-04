import {SET_CITY, SET_ERROR, SET_WEATHER} from "../actions/weatherActions.js";

const initialState={
    city:"",
    weather: null,
    error: null
};


export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CITY:
            return { ...state, city: action.payload };

        case SET_WEATHER:
            return { ...state, weather: action.payload, error: null };

        case SET_ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};