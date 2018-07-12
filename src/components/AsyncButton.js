import React from 'react';

const AsyncButton = (props) => {
  return (
    <div>
      <p>{props.note}</p>
      <button
        onClick={props.collectApples}
      >get apples</button>
    </div>
  )
}

export default AsyncButton;