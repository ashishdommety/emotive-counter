import { createStore } from 'redux'; // imprort createStore from redux

import counter from './reducers'; // import the counter reducer

export default createStore(counter);

