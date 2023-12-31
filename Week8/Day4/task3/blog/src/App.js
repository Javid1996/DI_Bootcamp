import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom'
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';

function App() {
  return (
    <div className="App">
     <ul>
      <li>
        <Link to="/ex1">Example1</Link>
      </li>
      <li>
        <Link to="/ex2">Example2</Link>
      </li>
      <li>
        <Link to="/ex3">Example3</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/ex1" element={<Example1/>} />
      <Route path="/ex2" element={<Example2/>} />
      {/* <Route path="/ex3" element={<Example3 />} /> */}
    </Routes>


    </div>
  );
}

export default App;
