import React from "react";


class StateInClassCom extends React.Component {

  constructor() {
    super();
    this.state = {
      data: "shaquib"
    }
  }

  updatedata() {
    this.setState({ data: "Alam" })
  }
  render() {
    return (

      <div>
        <h1>state in class component</h1>
        <h1>here shaquib change into {this.state.data}</h1>
        <button onClick={() => this.updatedata()}>click here</button>
      </div>
    )

  }

}


export default StateInClassCom;