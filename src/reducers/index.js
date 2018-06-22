import Emotions from '../data/Emotions';

function counter(state = { count: 0, emotions: Emotions, message: 'apple-untouched' }, action){
  const count = state.count;

  switch(action.type){
    case 'poke':
      return { count: count + 1, emotions: Emotions, message: 'apple-untouched' };
    case 'start':
      return { count: count, emotions: Emotions, message: 'apple touched' };
    case 'broken':
      return { count: count, emotions: Emotions, message: 'error in ajax call' };
    case 'end':
      return { count: count, emotions: Emotions, message: 'apple recieved' };
    default:
      return state;
  }
}

export default counter;