import { connect } from 'react-redux';
import Display from '../components/Display';
import { getApples } from '../actions/asyncs'; 

function mapStateToProps(state){
  return {
    note: state.message,
    pics: state.images
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchApples: () => dispatch(getApples())
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
