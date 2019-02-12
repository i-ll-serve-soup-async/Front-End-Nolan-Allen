import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/reducers';

import HomeView from './views/HomeView';
// import ItemListView from './views/ItemListView';
// import ItemView from './views/ItemView';
// import FormView from './views/FormView';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingID: null,
            activeItem: null
        }
    }

    render() {
        return (
        <div>
            <nav>
                <h1>Generic Soups</h1>
                <div>
                    <NavLink to='/item-form'>
                        {this.state.isEditing ? 'Updating Item' : 'Add Item'}
                    </NavLink>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/menu'>Menu</NavLink>
                </div>
            </nav>
            <Route exact path='/' component={HomeView} />
            {/* <Route
                exact path='/items-list'
                render={props => (
                    <ItemListView
                        {...props}
                        items={this.state.items}
                        getItemById={this.getItemById}
                    />
                )}
            />
            <Route exact path='/items-list/:id' component={ItemView} />
            <Route
                exact path='/item-form'
                render={props => (
                    <FormView {...props} />
                )}
            /> */}
        </div>
        );
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <Router>
                <App />
        </Router>
    </Provider>,
    rootElement
);