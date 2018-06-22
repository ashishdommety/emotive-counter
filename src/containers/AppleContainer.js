import { connect } from 'react-redux';
import AsyncButton from '../components/AsyncButton';
import { getApples } from '../actions/asyncs'; 

function mapStateToProps(state){
  return {
    note: state.message
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchApples: () => dispatch(getApples())
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(AsyncButton);

export default CounterContainer;
