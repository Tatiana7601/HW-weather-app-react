import React, {useEffect, useState} from 'react';

const Form = ({onWeatherLoaded}) => {
    const [city, setCity] = useState("");
    // eslint-disable-next-line no-undef
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const REFRESH_INTERVAL =120000;

    const fetchWeather = () => {
        if(!city) return;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === "404") {
                    alert("City not found! Please check the spelling.");
                    return;
                }
                onWeatherLoaded(data);
            })
            .catch(err => console.error("ERROR:", err));

    };

    const handleSearch = () => {
        if (!city) {
            alert("Please enter a city name!");
            return;
        }
        fetchWeather();
    };

    useEffect(() =>{
        if (!city) return;
        const interval = setInterval(() =>{
            fetchWeather()
        }, REFRESH_INTERVAL);
        return () => clearInterval(interval);
        },[city]);

    return (
        <div>
            <input type="text"
                   placeholder="Please enter your сity"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Form;