/* Create a function that will act as a middleware
    Here, logger is a function takes the 'store' as an argument, which takes 'next' as an argument, which takes the 'action' as an argument.
*/

import axios from 'axios';

const allFuncs = {
  logger: (store) => (next) => (action) => {
    console.log("action fired", action); // as soon as the action is dispatched the middleware intercepts it.
    next(action); // using next(action) allows the action to proceed.
  },
  getApples: (store) => (next) => (action) => {
    //dispatch action to let user know that search started (loading)
    axios.get('https://pixabay.com/api/?key=5207088-f6eeef2e4b8e5be697c01704f&q=apples&image_type=photo&pretty=true')
          .then((response) => {
            // dispatch action to let user know that response came in
            console.log(response.data);
          })
          .catch((err) => {
             // dispatch action to let user know that error came in
            console.log(err);
          })
  }
}

export default allFuncs;