import React from 'react';
import AsyncButton from './AsyncButton';
import Images from './Images';

const Display = (props) => {
  return(
    <div>
      <AsyncButton collectApples={props.fetchApples}/>
      <Images pictures={props.pics} message={props.note}/>
    </div>
  )
}

export default Display;