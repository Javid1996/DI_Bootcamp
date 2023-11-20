import React from "react";
import { useEffect,useRef,useState } from "react";



function Main(){
    const [weather,setweather] = useState()
    const cityInput = useRef()

    const setInput =(e)=> {
        e.preventDefault()
        const inputValue = cityInput.current.value

        console.log(inputValue)
        
        if (inputValue !== ""){
            getWeather(inputValue)
        }
        
    }


    const getWeather = async(value)=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=e17e918a1e2284f46e2a998219fad299`
        
    let fetchResult = await fetch(url);
    let data = await fetchResult.json();
    // console.log(data);
    setweather(data);
    console.log(weather);
    }

    return(
        <main>
            <div>
                <form>
                <input  type='text' ref={cityInput} placeholder="city"/>
                <input  type='text' placeholder="country"/>
                <button  className="button" type="submit" onClick={setInput}>Get Weather</button>
                </form>
            {weather?
                <div>
                    <h2>Location:{weather.name},</h2>
                    <h2>Temperature:{weather.main?.temp}</h2>
                    <h2>Humidity:{weather.main?.humidity}</h2>
                    <h2>Condition:{weather.weather[0]?.description}</h2>
                </div>:''
            
            
            }

            </div>
        </main>
    )
}

// ,{weather.sys.country}
export default Main