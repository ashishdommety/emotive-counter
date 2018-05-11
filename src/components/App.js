import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from './Display';
// import '../containers/counterContainer';
import './App.css';

function mapStateToProps(state){
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch){
  return{
    onIncreaseClick: () => dispatch({type:'increment'}),
    onDecreaseClick: () => dispatch({type: 'decrement'})
  }
}
const App = connect(mapStateToProps, mapDispatchToProps)(Display);

export default App;
