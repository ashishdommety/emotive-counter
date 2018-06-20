import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import counter from './reducers';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter,
                         compose(
                           applyMiddleware(thunk),
                           typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
                         )
                        );

ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
registerServiceWorker();
