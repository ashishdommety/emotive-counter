import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import counter from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter);

ReactDOM.render(
<Provider store={store}> 
  <App store={store} />
</Provider>, document.getElementById('root')
);
registerServiceWorker();
