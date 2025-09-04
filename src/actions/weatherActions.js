export const SET_CITY ="SET_CITY";
export const SET_WEATHER="SET_WEATHER";
export const SET_ERROR = "SET_ERROR";
// eslint-disable-next-line no-undef
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


export const setCity = (city) => ({
    type: SET_CITY,
    payload: city,
});

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});



export const fetchWeather = (city) => {
    return (dispatch) => {
        if (!city) return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === "404") {
                    dispatch(setError("City not found! Please check the spelling."));
                    return;
                }
                dispatch(setWeather(data));
                dispatch(setError(null));
            })
            .catch(() => dispatch(setError("Something went wrong!")));
    };
};



