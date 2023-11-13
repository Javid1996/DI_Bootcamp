import React from 'react'


export class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {inputValue:''}
    }

    handlesubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    render(){
        return(
            <form onClick={this.handlesubmit}>
                <input 
                    type='text' placeholder='Something here'
                    onChange={(e)=>this.setState({inputValue: e.target.value})}
                />
                <input type='submit' placeholder='Submit'/>
            </form>
        )
    }
}