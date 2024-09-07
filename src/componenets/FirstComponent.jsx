import React, { Component } from 'react'

export default class FirstComponent extends Component {
constructor(){
    super();
    this.state = {
        name:"",
    }
}
  render() {
    const ChangeName = () => {
        const inputVal = document.getElementById("input-id").value;
        this.setState({name:inputVal})
    }
    return (
      <div>
        <input type="text" onChange={ChangeName} id='input-id' placeholder='enter your name'/>
        <br />
        {this.state.name}
      </div>
    )
  }
}
