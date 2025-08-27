import React, {useState} from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";

const Data = () => {
    const [weather,setWeather] = useState(null);


    return (
        <div>
            <Form onWeatherLoaded={setWeather}/>
            <Weather weather={weather}/>
        </div>
    );
};

export default Data;