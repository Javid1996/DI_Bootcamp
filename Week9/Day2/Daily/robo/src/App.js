import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import Robot from './components/Robot';
import RobotContainer from './components/RobotContainer.js';

const imageUrl = "https://robohash.org/3?200x200";
const userUrl = "https://jsonplaceholder.typicode.com/users"; 


class App extends React.Component {
  constructor(props){
    super(props);

this.state={users:[]}

  }
  
  componentDidMount(){
    fetch(userUrl)
    .then(res => res.json())
    .then((users)=>this.setState({users: users }))
    .catch(console.error)
  }
handleChange(e){
  // console.log(e.target.value);
  // let searchString = e.target.value;
  this.props.onInputChange(e)
}


  render(){
    return (
      <div>
        {/* {JSON.stringify(this.state.users)} */}
        <div className='header'>
          <h1 className='title'> ROBOFRIENDS</h1>
            <input type='text' className='roboSearch' placeholder='Search Robots' onChange={this.handleChange.bind(this)}></input>
            
        </div>
        <RobotContainer users={this.state.users}/>
      </div>
      
    );


  }
  
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onInputChange:(params)=>dispatch({type:'SEARCH_ROBOTS',payload:params.target.value})
  }
}
export default connect(null,mapDispatchToProps)(App);
