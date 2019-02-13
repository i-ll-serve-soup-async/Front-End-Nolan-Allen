import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/LoginRegister/Login';
import Authenticate from './components/LoginRegister/Authentication';
import HomeView from './views/HomeView';

class App extends React.Component {
    render() {
        return (
        <div>
            <Route exact path='/' component={HomeView} />
        </div>
        );
    }
}

export default Authenticate(App)(Login);