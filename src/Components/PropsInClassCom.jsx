// props in class component

//*note that props can change in only parent component

//write this code in its parent component like index.js or app.js from which se send props to this component
// so that props can changere 
/* import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anil"
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student name={this.state.name} email="anil@test.com"></Student>
       <button onClick={()=>this.setState({name:"Sidhu"})} >Update Name</button>
      </div>
    );
  }
} */


import React from "react";



class PropsInClassCom extends React.Component {
   
   

    render() {

        console.log(this.props);
        return (
            <div style={{backgroundColor:"skyblue"}}>
                <h1>props in class component</h1>
                <h1>name is : {this.props.name}</h1>
                <h4>email is : {this.props.email}</h4>
            </div>
        )
    }
}

export default PropsInClassCom;


// it is this file code when we want to change props  write this same in props in functional componetn
// and above code is parent component code be care full