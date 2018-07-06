import Emotions from '../data/Emotions';

// intial state goes here
const initialState = {
  count: 0,
  emotions: Emotions
};

function counter(state = initialState, action){
  const count = state.count;

  switch(action.type){
    case 'poke':
      return { count: count + 1, emotions: Emotions };
    case 'start':
      return { count: count, emotions: Emotions };
    case 'broken':
      return { count: count, emotions: Emotions };
    case 'end':
      return { count: count, emotions: Emotions };
    default:
      return state;
  }
}

export default counter;