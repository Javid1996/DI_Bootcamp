import React from 'react'
import Robot from './Robot'
import {connect} from 'react-redux'


class RobotContainer extends React.Component{
    constructor(props){
        super(props)
        // this.props.dispatch({type:'GET_ROBOTS'})
    }


    render(){
        return(
        <div className='robot-container'>
            {/* Current search term: {this.props.search} */}
            
            {this.props.users
            .filter((user)=>user.name.toLowerCase().includes(this.props.search?.toLowerCase()|| ''))
            .map((user) => (
                <Robot key={user.id} name={user.name} email={user.email} id={user.id}/>
            ))}
        
        </div>
        )
    }
}

export default connect((state)=> state)(RobotContainer)