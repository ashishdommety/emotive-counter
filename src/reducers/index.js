import Emotions from '../data/Emotions';

function counter(state = { count : 0, emotions: Emotions }, action){
  const count = state.count;

  // console.log(emotions);
  switch(action.type){
    case 'increment':
      return { count: count + 1, emotions: Emotions };
    case 'decrement':
      return { count: count - 1, emotions: Emotions };
    default:
      return state;
  }
}

export default counter;