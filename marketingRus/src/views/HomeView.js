import React from 'react';
import Login from '../components/Home/Login';
import Home from '../components/Home/Home';

const HomeView = props => {
    return (
        <div>
            <Login />
            <Home history={props.history} />;
        </div>
    );
}

export default HomeView;