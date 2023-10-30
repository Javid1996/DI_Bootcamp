import React from 'react';
import { useState } from "react";
import Garage from './Garage';

const Car = ({brand}) => {
    const [color, setColor] = useState("red");
    console.log(brand);
    return(
        <>
        <h2>This car is {brand.model}</h2>
        <p> This car is {color} {brand.model}.</p>

        <p>Who lives in my   Garage?</p>

        <Garage size="medium"/>
        
        </>
        
        ) 
}


export default Car;