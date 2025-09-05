import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector((state) => state.weather);
    const error = useSelector((state) => state.error);

    if (error) {
        return <p style={{color: "red"}}>{error}</p>;
    }

    if (!weather){
        return <p> Loading... </p>
    }

    return (
        <div>
            <h2>Weather in {weather.name}</h2>
            <p>🌡 Temperature: {weather.main.temp}°C</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬 Wind: {weather.wind.speed} m/s, direction {weather.wind.deg}°</p>
            <p>☁️ Cloudiness: {weather.clouds.all}%</p>
            <p>🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>🌇 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
            <p>🔽 Pressure: {weather.main.pressure} hPa</p>

        </div>
    );
};

export default Weather;