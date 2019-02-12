import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { getItems } from '../actions';
import Login from './Login/Login';

class App extends Component {
  state = {
    soupItem: ''
  }

  render() {
    return (
      <div>
        <Login />
        {/* {this.state.soupItem.map(item => (
          <p>item.name</p>
        ))} */}
      </div>
    );
  }
}

const mapPropsToState = state => ({
  fetchingItems: state.fetchingItems
})

export default connect(mapPropsToState, { getItems })(App);
