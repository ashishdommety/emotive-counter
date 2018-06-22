import { createStore, applyMiddleware } from 'redux'; // import applyMiddleware from redux

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import counter from './reducers';

const middleware = applyMiddleware(logger, thunk); // create a middleware const that uses applyMiddleware

export default createStore(counter, middleware);

