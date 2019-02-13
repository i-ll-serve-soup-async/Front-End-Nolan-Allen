import React from 'react';
import Home from '../components/Home/Home';
import ItemListView from './ItemListView'

const HomeView = props => {
    return (
        <div>
            <Home history={props.history} />
            <ItemListView />
        </div>
    );
}

export default HomeView;