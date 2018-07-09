import React from 'react';

// The Buttons component contains the logic to render the buttons, and modify their text as needed.
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