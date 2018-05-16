import React, { Component } from 'react';
import { increment, decrement } from '../actions';

const Buttons = (props) => {
  return (
    <div>
      <button
        onClick={props.poke}
      >poke</button>
    </div>
  )
}

export default Buttons;