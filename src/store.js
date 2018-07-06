import { createStore } from 'redux'; // import applyMiddleware from redux

import counter from './reducers';

export default createStore(counter);

