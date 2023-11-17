import React, { useEffect, useState, useRef } from "react";
import SearchBox from "./SearchBox";

const WeatherBox = (props)=>{
    const {city,key} = props
    
     const getCurrentWeather = async (city,key) =>{
        const url =  `http://www.accuweather.com/en/az/${city}/${key}/current-weather/${key}?lang=en-us`

         let currentWeatherBox = await fetch(url);
          
        let objectslist = await currentWeatherBox.json();

    }








    return(
        <div onClick={getCurrentWeather} className="weatherBox">


        </div>
    )



}


export default WeatherBox