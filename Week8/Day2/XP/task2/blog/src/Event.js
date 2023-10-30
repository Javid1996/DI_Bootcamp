import React from 'react';
import { useState } from "react";


function Event(){

    const clickMe = ()=>{
    alert('i was clicked')
    }

    const handleKeyDown = event => {
    
        // console.log(event.target.value);
        // console.log(event.key);

    if (event.key === 'Enter') {
     alert(event.target.value)
    }
    }

    const [isToggleon, setToggle] = useState(true)
    console.log(isToggleon);
    
    const updateToggle = () => {
        setToggle(previousState => !previousState );
      }

    return(
        <>
       <button type='button' onClick={clickMe} style={{width:100,height:40}} >Click Me</button>

       <input onKeyDown={handleKeyDown}/>

       <button type='button' onClick={updateToggle}>{isToggleon ? 'ON' : 'OFF'}</button>
        </>
       
    )
}



export default Event