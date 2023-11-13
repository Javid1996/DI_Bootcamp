import React from "react";
import {connect} from 'react-redux';
import {insert,update} from '../actions/index.js'




class TransactionForm extends React.Component{
    constructor(props){
        
        super(props)
        // let { submittedForm } = this.props.value;
        // console.log(submittedForm);

        // this.state = {value: props.value}
     }
     handleSubmit(e){
        e.preventDefault();

        // this.props.submit()
        let form = e.target
        console.log(form);
        // console.log(this.props.data);
        let payload = {}
        const formData = new FormData(form);
        
        for (let [key, value] of formData) {
           payload[key]=value;
        }
        console.log(payload);
        this.props.submit(payload)
     }

    //  handleInputChange(){
    //     this.props.change()
    //  }
    

     render(){
         console.log(this.props.data);
        return(
            <div>
                <h2>Financial Transactions:</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name='AccountNumber' placeholder="Account Number"></input>
                    <input  name = 'FSC'placeholder="FSC"></input>
                    <input  name = 'HolderName' placeholder="A/C Holder Name"></input>
                    <input  name = 'amount' placeholder="Amount"></input>
                    <button>Submit</button>
                </form>
    
               
                {/* <ul>{this.props.data}</ul> */}
            </div>
        )
    }

}




const mapStateToProps = (state) =>{
    return {data:state}
};

const mapDispatchToProps = dispatch =>{
    return{
        submit:(param)=> dispatch(insert(param))
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);