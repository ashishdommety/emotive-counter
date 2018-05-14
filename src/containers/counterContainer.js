import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';
import { increment, decrement } from '../actions/index'; // need to figure out how to export the actions in so they can be used here

// console.log(increment);

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
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
