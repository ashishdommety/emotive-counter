import React from 'react';
import Buttons from './Buttons';
import Numbers from './Numbers';

const Display = (props) => {
    return(
    <div>
      <Buttons increase={props.onIncreaseClick} decrease={props.onDecreaseClick}/>
      <Numbers count={props.value}/>
    </div>
    )
}

export default Display;