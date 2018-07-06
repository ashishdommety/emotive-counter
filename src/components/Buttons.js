import React from 'react';

const Buttons = (props) => {
  return (
    <div>
      <button
        onClick={props.poke}
      >{((props.count < 12) || (props.count > 16)) ? 'Poke' : 'Apologize'}</button>
    </div>
  )
}

export default Buttons;