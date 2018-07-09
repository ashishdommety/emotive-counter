// 'connect' from react-redux connects the container component to the presentational one
import { connect } from 'react-redux';
import Display from '../components/Display';
// import the actions relevant to this particular component
import { touch, reset } from '../actionCreators/index'; 

// mapStateToProps is a function that takes the global state (or the store) and creates props that map to it. 
function mapStateToProps(state){
  return {
    value: state.count,
    feelings: state.emotions
  }
}

// mapDispatchToProps is a function that attaches particular behaviours (or the ability to dispatch actions) to the presentational component i.e. in this case, the 'Display' component
function mapDispatchToProps(dispatch){
  return{
    interact: () => dispatch(touch()),
    reset: () => dispatch(reset())
  }
}

// finally, we use connect to send the desired state and behavior to the Display component
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

export default CounterContainer;
