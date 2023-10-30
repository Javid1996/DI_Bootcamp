import React from "react";
import { useState } from "react";

// !!! componentleri component folderinde yerlesdir

const Container = ({content})=>{

    // console.log(content);
    const [quote, setquote] = useState({})
    const [color, setColor] = useState('')

    let colorArray = ['red','green','blue','yellow','grey','black','brown','orange','maroon','lightblue'];


    
    const randomColor = ()=>{
        return colorArray[Math.floor(Math.random()*colorArray.length)];
        
    }
    
    function getRandom(arr){
        let index = Math.floor(Math.random()*arr.length);
        console.log(index);
        setquote(arr[index])
        console.log(quote);
        let colorResult = randomColor();
        setColor(colorResult);
        console.log(color);
        return arr[index]
    }


    
  

    
    return(
        
    <div style={{backgroundColor:color ,height:'90vh',display:"flex",justifyContent:"center",alignItems:"center"}} >
          <div style={{backgroundColor:'white',margin:'100px auto',width:'50%'}}>
        <h2 style={{color:color}}>{quote.quote}</h2>
        <p style={{color:color}}>{quote.author}</p>
        <button style={{backgroundColor:color ,width: 150,height:60}}  onClick={()=>getRandom(content)} >New quote</button>
      

        </div>
            
    </div>


    )
}


export default Container;