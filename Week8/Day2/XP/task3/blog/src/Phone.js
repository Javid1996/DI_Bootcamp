import React from 'react';
import { useState } from "react";

const Phone = ()=>{
    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: "2020",
      }); 

      
      const changeColor = () =>{
        setPhone ((previousState)=>{
          return(
            {...previousState,color:'blue'}
          )
      
        })
      
      }
        // x`
      return(
        <>
        <p> Brand is {phone.brand}</p>
        <p> Model is {phone.model}</p>
        <p> Color is {phone.color}</p>
        <p> Year is {phone.year}</p>
        
        <h2>My phone is a {phone.brand}</h2>
        <p>It is a {phone.color} {phone.model} from {phone.year}</p>

        <button type='button' onClick={changeColor}>Change color</button>
        
        </>


      )
}


export default Phone