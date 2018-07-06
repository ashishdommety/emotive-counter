import React from 'react';

const Buttons = (props) => {
  return (
    <div>
      <button
        onClick={props.poke}
      >Poke</button>
    </div>
  )
}

export default Buttons;