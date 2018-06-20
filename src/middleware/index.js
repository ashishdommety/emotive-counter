/* Create a function that will act as a middleware
    Here, logger is a function takes the 'store' as an argument, which takes 'next' as an argument, which takes the 'action' as an argument.
*/
const logger = (store) => (next) => (action) => {
  console.log("action fired", action); // as soon as the action is dispatched the middleware intercepts it.
  next(action); // using next(action) allows the action to proceed.
}

export default logger;