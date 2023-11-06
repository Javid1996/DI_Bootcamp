import React from 'react';

import { increasing, decreasing } from "../actions/index.js";
import {connect} from 'react-redux';






class Counter extends React.Component{
constructor(props){
    
    super(props)
 }
 handleIncrease(){
this.props.increase()
 }

 handleDecrease(){
    this.props.decrease()
 }
   
render(){
    console.log(this.props);
    return(
        <div>
            <h2>Counter</h2>
            <button type="submit" onClick={this.handleIncrease.bind(this)}>+++</button>

            <button type="submit" onClick={this.handleDecrease.bind(this)}>---</button>
            <p>{this.props.count}</p>
        </div>
    )
}

}

const mapStateToProps = (state) =>{
    return {count:state.count}
};

const mapDispatchToProps = dispatch =>{
    return{
        submit:()=> dispatch(increasing()),
        decrease:()=>dispatch(decreasing())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);