import React from 'react'
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter} from 'react-router-dom';
// import{Routes,Route,Link} from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  
  render(){

    return (
      <ErrorBoundary>
        <BrowserRouter>
          {/* <ErrorBoundary> */}
            <Navbar/>
          {/* </ErrorBoundary> */}
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

function Navbar(){
  // throw new Error('crash!') 
  return (
    <div className="App">
       <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </ul>
    {/* navlinkler routerin icerisinde olmali */}
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
    </Routes>
      </div>
  )
}

function HomeScreen(){
  return <h2>Home</h2>
}

function ProfileScreen(){
  return <h2>Profile</h2>
}

function ShopScreen(){
  // throw new Error('error!') 
  return <h2>Shop</h2>
}



export default App;
