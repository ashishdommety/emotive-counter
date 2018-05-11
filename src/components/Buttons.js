import React, { Component } from 'react';
import { increment, decrement } from '../actions';

const Buttons = (props) => {
  return (
    <div>
      <button
        onClick={props.increase}
      >+</button>
      <button
        onClick={props.decrease}
      >-</button>
    </div>
  )
}

export default Buttons;