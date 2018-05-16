import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';
import Emotions from '../reducers/index';
import { poke } from '../actions/index'; 

// console.log(emotions);
function mapStateToProps(state){
  return {
    value: state.count,
    feelings: state.emotions
  }
}

function mapDispatchToProps(dispatch){
  return{
    pokeThing: () => dispatch(poke)
  }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
