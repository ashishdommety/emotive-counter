import connect from 'react-redux';
import { increment, decrement } from '../actions';
import Numbers from '../components/Numbers';

const CounterContainer = () => {
  return(
    <Numbers />
  )
}
const mapStateToProps = state  => {
  return {
    value: state.count
  }
}

export default connect(
  mapStateToProps
)(Numbers);