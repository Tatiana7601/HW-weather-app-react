import React, {useState} from 'react';

const Form = ({onWeatherLoaded}) => {
    const [city, setCity] = useState("");
    // eslint-disable-next-line no-undef
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const handleSearch = () => {
        if (!city) {
            alert("Please enter a city name!");
            return;
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                onWeatherLoaded(data);
            })
            .catch(err => console.error("ERROR:", err));
    };

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