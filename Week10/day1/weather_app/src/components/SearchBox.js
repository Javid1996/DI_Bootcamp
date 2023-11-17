import React, { useEffect, useState, useRef } from "react";
import WeatherBox from "./WeatherBox";




// const url =  `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hUxAhN6MfSGcxqOsFVLobTWwzvk3qXfN&q=${value}&language=en-us`
const SearchBox = ()=> {
    
    const [current_result, setcurrentresult] = useState([]);
    const [nameandkey, setnameandkey] = useState([]);
    const [cities_list, setcurrentcities] = useState([]);
    const searchInput = useRef()
    
    
    async function getAutoCompleteList(value) {
        const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Kc8D929PB5lrFWDQM9Wivqydivv8BL3z&q=${value}&language=en-us`
        let auto_complete_result = await fetch(url);
          
        let objectslist = await auto_complete_result.json();
        let nameAndKeyArray = [];
        let city_string_list = [];
        let city_keys = [];
        console.log("Searchbox.js--->Current City Results are--->", objectslist);
        objectslist.forEach(i => {
          city_string_list.push(i.LocalizedName);
          city_keys.push(i.Key);
          nameAndKeyArray.push({
            city: i.LocalizedName,
            country: i.Country.LocalizedName,
            key: i.Key,
            
          });
        });
        console.log(city_string_list.join());
        console.log("Name and key arr", nameAndKeyArray);

        setcurrentresult(objectslist);
        setcurrentcities(city_string_list);
        setnameandkey(nameAndKeyArray);
        console.log('nameandkey',nameandkey)
    }

    const setText = e => {
        e.preventDefault()
        const inputValue = searchInput.current.value

        console.log(inputValue)
        
        if (inputValue !== "") {getAutoCompleteList(inputValue)};
        
    }

    
    
   

    return(
        <>
        <div className="box">
            <form onSubmit={setText}> 
                <input type="text" ref={searchInput}  id="searchInput" name="searchInput" />
                
                
               { nameandkey.map((el)=> {
                console.log(el.key);
                return(
                    //  <p  onClick={getCurrentWeather}  key={el.key}>{el.city} ,  {el.country}</p> 
                    <WeatherBox  key={el.key} city={el.city}/>
                     )
                    })
                }
                
            </form>
       </div>
       
        </>
    )
}




export default SearchBox;