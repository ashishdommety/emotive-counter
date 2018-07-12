import React from 'react';

const Images = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      {props.pictures.map((x,arr,i) => <img src={x} key={'apple' + i}/>)}
    </div>
  )
}

export default Images;