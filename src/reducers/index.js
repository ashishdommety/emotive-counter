
// intial state goes here
const initialState = {
  images: [],
  message: 'Would you like some apples?'
};

function counter(state = initialState, action){
  let images = state.images;

  switch(action.type){
    case 'start':
      return { images, message: 'recieving apples..' };
    case 'broken':
      return { images, message: 'error in ajax call' };
    case 'end':
      return { images: action.pictures, message: 'apples recieved!' };
    default:
      return state;
  }
}

export default counter;