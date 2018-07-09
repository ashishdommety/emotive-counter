import React from 'react';
// we then pass the CounterContainer as a child to App. We don't have to pass down the Display component to render, as it is already a child of the container component.
import CounterContainer from '../containers/CounterContainer';


const App = () => {
  return(
    <div>
      <CounterContainer/> 
    </div>
  )
}

export default App;