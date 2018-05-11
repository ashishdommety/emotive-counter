function counter(state = { count : 0 }, action){
  const count = state.count;
  switch(action.type){
    case 'increment':
      console.log('i hear you')
      return { count: count + 1 };
    case 'decrement':
      return { count: count - 1 };
    default:
      return state;
  }
}

export default counter;