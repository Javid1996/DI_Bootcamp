import datas from '../data.json';
import React from 'react'
import { Routes, Route, Link} from "react-router-dom";

function Example1(props){
    

    const media = datas.SocialMedias.map((data)=><li>{data}</li>)
    return media;
    


} 

export default Example1