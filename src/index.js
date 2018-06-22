import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'; // import applyMiddleware from redux
// import thunk from 'redux-thunk';
import allFuncs from './middleware';
import { Provider} from 'react-redux';
import counter from './reducers';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(allFuncs.logger, allFuncs.getApples); // create a middleware const that uses applyMiddleware

const store = createStore(counter, middleware); // add middleware as an argument to the store.

ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
registerServiceWorker();
