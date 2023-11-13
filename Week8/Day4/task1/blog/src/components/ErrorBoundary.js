import React from "react";

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { hasError: false};
    }
    componentDidCatch(error,errorInfo){
        this.setState({hasError:true})
    }

    render(){
      if(this.state.hasError){
        return(
            <div>Some Error happens</div>
        )
      } else{
        return this.props.children
      } 
    }
}