import React, { Component } from 'react'

export default class Constructor1stLifeCycleMethod extends Component {

// constructor method 1st call when we create class conoponent then cosntructor method execute
constructor(){

    console.warn("hello testing")
super();

this.state={

    data:'shaquib'
}


}

  render() {

    console.warn("this is rendig")
    return (
      <div>

  
   <h1>Constructor1stLifeCycleMethod  in class component</h1>
   <h4>name is {this.state.data}</h4>

      </div>
    )
  }
}
