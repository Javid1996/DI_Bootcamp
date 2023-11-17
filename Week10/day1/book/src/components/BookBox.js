import React, { useEffect, useState, useRef } from "react";
import Search from "./Search";

const BookBox = (props)=>{
    const {author,key,title,year} = props
   
    
    
    return(
        <div className="books" >
            <p>Author: {author}</p>
            <p>Book name: {title}</p>
            <p>year: {year}</p>
            
        </div>
    )



}


export default BookBox