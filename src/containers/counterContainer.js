import { connect } from 'react-redux';
import Display from '../components/Display';
import { touch, reset } from '../actionCreators/index'; 

function mapStateToProps(state){
  return {
    value: state.count,
    feelings: state.emotions
  }
}

function mapDispatchToProps(dispatch){
  return{
    interact: () => dispatch(touch()),
    reset: () => dispatch(reset())
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
