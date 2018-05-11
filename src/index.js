import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import counter from './reducers';
import App from './components/App';
// import CounterContainer from './containers/CounterContainer';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter);

ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
registerServiceWorker();
