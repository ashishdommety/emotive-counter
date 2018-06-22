import React from 'react';

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