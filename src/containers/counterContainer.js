import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';
import Emotions from '../reducers/index';
import { increment, decrement } from '../actions/index'; 

// console.log(emotions);
function mapStateToProps(state){
  return {
    value: state.count,
    feelings: state.emotions
  }
}

function mapDispatchToProps(dispatch){
  return{
    onIncreaseClick: () => dispatch(increment),
    onDecreaseClick: () => dispatch(decrement)
  }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
