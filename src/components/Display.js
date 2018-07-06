import React from 'react';
import Buttons from './Buttons';
import Numbers from './Numbers';

const Display = (props) => {
    return(
    <div id='display'>
      <Buttons poke={props.pokeThing}/>
      <Numbers count={props.value} emotions={props.feelings}/>
    </div>
    )
}

export default Display;