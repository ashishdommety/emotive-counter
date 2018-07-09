import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'; // import the store
import { Provider} from 'react-redux'; // import Provider to connect react and redux
import App from './components/App';

// Pass the store as a prop to the Provider component
ReactDOM.render(
<Provider store={store}> 
  <App/>
</Provider>, document.getElementById('root')
);
