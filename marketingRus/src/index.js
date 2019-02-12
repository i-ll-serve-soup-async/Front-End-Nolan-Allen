import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));