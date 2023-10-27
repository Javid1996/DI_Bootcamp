
import './App.css';
import React from 'react';
import VoteLanguages from './VoteLanguages.js';
import { useState } from "react";



function App() {

  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])


function increment(name){
  // state name e uygun objecti tapib onun vote u 1 artirmaq
  // set state arrow func
  const arrCopy = [...languages]

  const updatedArr = arrCopy.map((item,index)=>{
    if (item.name===name){
      item.votes++
    }
    return item

  })


  setLanguages([...updatedArr])
  
  }



  return (
 
 languages.map((item)=>{
  return <VoteLanguages name={item.name} votes={item.votes} counter={increment} />
// propslari oturmek name vote
  
})
)}
  



  


export default App;
