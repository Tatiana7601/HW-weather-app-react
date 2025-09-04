import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCity, fetchWeather } from "../actions/weatherActions.js";

const Form = () => {
    const dispatch = useDispatch();
    const city = useSelector((state) => state.city);
    const [cityInput, setCityInput] = useState("");
    const REFRESH_INTERVAL =120000;

    const handleSearch = () => {
        if (!cityInput) {
            alert("Please enter a city name!");
            return;
        }
        dispatch(setCity(cityInput));
        dispatch(fetchWeather(cityInput));
    };


    useEffect(() =>{
        if (!city) return;
        const interval = setInterval(() =>{
            dispatch(fetchWeather(city));
        }, REFRESH_INTERVAL);
        return () => clearInterval(interval);
        },[city,dispatch]);

    return (
        <div>
            <input type="text"
                   placeholder="Please enter your сity"
                   value={city}
                   onChange={(e) => setCityInput(e.target.value)}
            />

            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Form;