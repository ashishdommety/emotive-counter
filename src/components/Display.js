import React from 'react';
import Buttons from './Buttons';
import Numbers from './Numbers';

const Display = (props) => {
    return(
    <div id='display'>
      <Buttons touch={props.interact} count={props.value} reset={props.reset}/>
      <Numbers count={props.value} emotions={props.feelings}/>
    </div>
    )
}

export default Display;