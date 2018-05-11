import React, { Component } from 'react';
// import logo from './logo.svg';
import Buttons from './Buttons';
import Numbers from './Numbers';
// import '../containers/counterContainer';
import './App.css';

const App = (props) => {
  console.log(props.store.getState());
  return(
  <div>
    <Buttons store={props.store}/>
    <Numbers count={props.store.getState().count} />
  </div>
  )
}

export default App;
