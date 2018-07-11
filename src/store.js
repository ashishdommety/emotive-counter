import { createStore } from 'redux'; // import createStore from redux

import counter from './reducers'; // import the counter reducer

export default createStore(counter);

