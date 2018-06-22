import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'; // import applyMiddleware from redux
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import counter from './reducers';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(logger, thunk); // create a middleware const that uses applyMiddleware

const store = createStore(counter, middleware); // add middleware as an argument to the store.

// dispatch these actions on page load (making async happen with redux)
store.dispatch((dispatch) =>{
  dispatch({type:'start'});
  axios.get('https://pixabay.com/api/?key=5207088-f6eeef2e4b8e5be697c01704f&q=apples&image_type=photo&pretty=true')
        .then((response) => {
          dispatch({type:'end'});
          console.log(response.data);
        })
        .catch((err) => {
          dispatch({type:'broken'})
        })
})

ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
registerServiceWorker();
