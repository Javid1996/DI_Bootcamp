// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Car from './Car';
import Garage from './Garage';



function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
   <>

   <Car brand={carinfo} />
   <Garage size="small"/>

   </>
  );
}

export default App;
