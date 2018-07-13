import React from 'react';
import FontAwesome from 'react-fontawesome';

const AsyncButton = (props) => {
  return (
    <div>
      <p>{props.note}</p>
      <button
        onClick={props.collectApples}
      >Get Apples <FontAwesome name='apple'/> 
      </button>
    </div>
  )
}

export default AsyncButton;