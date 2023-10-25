
// const myelement = <h1>I Love JSX!</h1>;

import React from 'react';
import logo from './logo.svg';
// class MyElement extends React.Component {
//     render() {
//         return <h2>Hi, I am a Car!</h2>;
//     }
// }
const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };


class Exercise extends React.Component{
    render(){
    //    console.log(this.props);
    //    console.log(this.props.testprops);
        return (
            // const htmlElements = (
       <>
        <h1 className="h1" >This is a Header</h1>
        <p>This is Paragraph</p>
        <a href='#'>This is Link</a>
        <h2>This is a Form</h2>
        <form>
            <label>Enter your name:</label>
            <input type='text'></input>
            <button type='submit' >submit</button>
        </form>
        <h3>Here is an Image:</h3>
        <img src={logo} width={300}/>
            <h4>This is a List:</h4>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </>
        )
    // )

    }
}




export default Exercise;