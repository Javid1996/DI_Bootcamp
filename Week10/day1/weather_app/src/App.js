import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {connect} from 'react-redux'
import './App.css';
import SearchBox from "./components/SearchBox";


// const url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hUxAhN6MfSGcxqOsFVLobTWwzvk3qXfN&q"


const App = ()=> {
 
 
    return (
      <>
      <SearchBox/>
      <div>
       
        {/* <div className='App'>
          <h1 className='title'> WeatherApp</h1>
            <input type='text' className='LocationSearch' placeholder='Search Location' onChange={handleChange(input.value)}></input>
            
        </div> */}
        
      </div>
      </>
      
    );


  
  
}

export default App;
