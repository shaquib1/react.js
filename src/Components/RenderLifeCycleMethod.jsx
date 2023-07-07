  
  // after constructor method render method called so this in second method
  //as we know render method used in class component only not in function component
  // render method update in three times only 1-when component ready 2-when state and props are update

// we can also update render method sending props from parent component practice it

  import React, { Component } from 'react'
  
  export default class RenderLifeCycleMethod extends Component {

    constructor(){
        super();
        this.state={
            name:'Alam'
        }
    }

    render() {


        console.warn("render method" , this.state.name)
      return (
        <div>

  <h2>RenderLifeCycleMethod</h2>

   <button onClick={()=>this.setState({name:'Nafisha'})}>clik here</button>

        </div>
        
      )
    }
  }
  