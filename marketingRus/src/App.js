import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/LoginRegister/Login';
import Authenticate from './components/LoginRegister/Authentication';
import Home from './components/Home/Home';

class App extends React.Component {
    render() {
        return (
        <div>
            <Route exact path='/' component={Home} />
        </div>
        );
    }
}

// export default App;
export default Authenticate(App)(Login);