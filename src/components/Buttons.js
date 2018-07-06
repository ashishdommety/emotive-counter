import React from 'react';

const Buttons = (props) => {
  return (
    <div>
      {props.count <= 18 ? 
        <button
        onClick={props.touch}
        >{((props.count < 12) || (props.count > 16)) ? 'Poke' : 'Apologize'}
        </button> : 
        <button
        onClick={props.reset}>
          Reset
        </button>}
    </div>
  )
}

export default Buttons;