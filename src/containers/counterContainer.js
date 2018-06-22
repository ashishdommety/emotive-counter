import { connect } from 'react-redux';
import Display from '../components/Display';
import { poke } from '../actions/index'; 

function mapStateToProps(state){
  return {
    value: state.count,
    feelings: state.emotions
  }
}

function mapDispatchToProps(dispatch){
  return{
    pokeThing: () => dispatch(poke())
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
