import React from 'react';
import { useState } from "react";

const Color = () =>{
    const [color, setColor] = useState('red')


    return(
        <h2>My Favorite Color is {color}</h2>

    )
}

export default Color;