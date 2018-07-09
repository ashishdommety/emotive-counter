import Emotions from '../data/Emotions';

// the initial state
const initialState = {
  count: 0,
  emotions: Emotions
};

function counter(state = initialState, action){
  const count = state.count;

  switch(action.type){
    case 'touch':
      // notice we return the complete state below
      return { count: count + 1, emotions: Emotions };
    case 'reset':
      return {count: 0, emotions: Emotions }
    default:
      return state;
  }
}

export default counter;