import React from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    }
    const apiKey = "e450bc345a80a08ada69fd5c714d871d"; // Replace with your OpenWeather API key
    const units = "metric"; // Use 'imperial' for Fahrenheit
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
    return(
        <ClipLoader
        color='blue'
        loading='betLoader'
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    );
}