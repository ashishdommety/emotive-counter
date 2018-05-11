import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';

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
