import React from 'react';
import './App.css';
import { UserForm } from './components/UserForm';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {message:null}
  }

  async componentDidMount(){
    const url= "http://localhost:3000/api/hello"
  
      const resText = await fetch(url);
      const res = await resText.text();
      this.setState({message:res})
    
  }

  render(){
    
    return (
      <>

      <UserForm/>
      <div className="App">
        Message:{this.state.message}
      </div>
      
      </>

    );

  }
}

export default App;
