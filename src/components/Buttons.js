import React, { Component } from 'react';
import {increment, decrement} from '../actions';


class Buttons extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <button
          onClick={this.props.increase}
        >+</button>
        <button
          onClick={this.props.decrease}  
        >-</button>
      </div>
    )
  }
}


export default Buttons;