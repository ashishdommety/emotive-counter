import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import counter from './reducers';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}

const middleware = applyMiddleware(logger);

const store = createStore(counter, middleware);

ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
registerServiceWorker();
