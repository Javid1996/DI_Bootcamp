import React from 'react';

import { increasing, decreasing , increaseOdd} from "../actions/actions";
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

     incrementIfOdd(){
        if (this.props.count % 2 ===1){

            this.props.increaseOdd()
        }
     }

     asyncIncrement(){

     }
       
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>Counter</h2>
                <p>{this.props.count}</p>
                <button type="submit" onClick={this.handleIncrease.bind(this)}>increase</button>
    
                <button type="submit" onClick={this.handleDecrease.bind(this)}>decrease</button>

                <button type='submit' onClick={this.incrementIfOdd.bind(this)} >Increment if odd</button>

                <button type='submit' onClick={this.asyncIncrement.bind(this)}>Increment async</button>
            </div>
        )
    }
    
    }
    
    const mapStateToProps = (state) =>{
        return {count:state.count}
    };
    
    const mapDispatchToProps = dispatch =>{
        return{
            increase:()=> dispatch(increasing()),
            decrease:()=>dispatch(decreasing()),
            increaseOdd:()=>dispatch(increaseOdd())
        }
    }
    
    
    export default connect(mapStateToProps,mapDispatchToProps)(Counter);