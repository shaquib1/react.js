
// this method call after rendre mehtod this is 3rd mehtod in lifecycle method 
//when all html and css and dom are ready than thid method called


import React, { Component } from 'react'

export default class ComponentDidMountMethod extends Component {

   constructor(){

    super();
    this.state={
   name:'nafisha'

    }
   }

    componentDidMount(){
        console.warn("this is component did mount method");
    }

  render() {

    //never upadate state in render method because it go in loop 
    //console.warn(this.setState({name:'shaquib'}));

    console.warn("this is render mehtod");
    return (
      <div>
   <h1>ComponentDidMountMethod</h1>
   <h2> Name is: {this.state.name}</h2>
   <button onClick={()=>{this.setState({name:'shaquib'})}}>click here</button>

      </div>
    )
  }
}
