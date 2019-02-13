import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <Router>
                <App />
        </Router>
    </Provider>,
    rootElement
);