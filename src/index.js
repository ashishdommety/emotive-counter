import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'; // import applyMiddleware from redux
// import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import counter from './reducers';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

/* Create a function that will act as a middleware
    Here, logger is a function takes the 'store' as an argument, which takes 'next' as an argument, which takes the 'action' as an argument.
*/
const logger = (store) => (next) => (action) => {
  console.log("action fired", action); // as soon as the action is dispatched the middleware intercepts it.
  next(action); // using next(action) allows the action to proceed.
}

const middleware = applyMiddleware(logger); // create a middleware const that uses applyMiddleware

const store = createStore(counter, middleware); // add middleware as an argument to the store.

ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
registerServiceWorker();
