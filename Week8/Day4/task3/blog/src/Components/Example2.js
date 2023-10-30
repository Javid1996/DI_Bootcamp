import datas from '../data.json';
import React from 'react'
import { Routes, Route, Link} from "react-router-dom";



function Example2(){
    

   return(
    datas.Skills.map((skill)=>{
    const area = skill.Area;
    const skillSet = skill.SkillSet;
   return( <>
   <p>{area}</p>
   {skillSet.map((set)=><li>{set.Name}</li>)}
   </>
   
   )

})) 
    
    


} 

export default Example2