import Emotions from '../data/Emotions';

// intial state goes here
const initialState = {
  count: 0,
  emotions: Emotions
};

function counter(state = initialState, action){
  const count = state.count;

  switch(action.type){
    case 'touch':
      return { count: count + 1, emotions: Emotions };
    case 'reset':
      return {count: 0, emotions: Emotions }
    default:
      return state;
  }
}

export default counter;