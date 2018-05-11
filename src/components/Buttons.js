import React, { Component } from 'react';
import {increment, decrement} from '../actions';


class Buttons extends Component {
  constructor(props){
    super(props);
  }
  increaseNum = () => {
    // store.dispatch(increment);
    // console.log(this.props.store);
    this.props.store.dispatch({type:'increment'});
  }

  render(){
    return(
      <div>
        <button
          onClick={()=>this.increaseNum()} 
        >+</button>
        <button>-</button>
      </div>
    )
  }
}


export default Buttons;