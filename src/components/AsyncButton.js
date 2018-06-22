import React from 'react';

const AsyncButton = (props) => {
  return (
    <div>
      <p>{props.note}</p>
      <button
        onClick={props.fetchApples}
      >get apples</button>
    </div>
  )
}

export default AsyncButton;