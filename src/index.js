import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'                                                                                                                                                    
import reducers from './reducers/reducer'
import thunk from 'redux-thunk'

const initialState = {}

const store = createStore(
	reducers,
    initialState,
    applyMiddleware(
    	thunk,
    )
)

ReactDOM.render((
    <Provider store={store}>
      <App />   
    </Provider>
  ), document.getElementById('root'));

serviceWorker.unregister();
