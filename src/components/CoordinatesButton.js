// Code CoordinatesButton Component Here

import React, { Component } from "react";

export default class CoordinatesButton extends Component {


   handleClick=(e)=>{
        const arr =[]
        // debugger
        arr.push(e.clientX, e.clientY)
        this.props.onReceiveCoordinates(arr)
    }
  render() {
      
    return (
        <div>
            <button onClick={this.handleClick}> Botton </button>
        </div>
    );
  }
}
