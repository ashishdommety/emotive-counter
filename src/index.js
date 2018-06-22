import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import axios from 'axios';
import { Provider} from 'react-redux';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

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
