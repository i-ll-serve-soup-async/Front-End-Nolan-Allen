import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getItems } from '../actions';
import Login from './Login/Login';

class App extends Component {
  state = {
    soupItem: ''
  }

  // loggedIn() {
  //   // ...
  // }

  // requiresAuth() {
  //   if(!loggedIn()) {
  //     replace({
  //       pathname: '/login'
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <Login />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route exact path="/" component={Presentations} /> */}
        {/* <Route path="/">
          <Route path="login" component={Login} />
        </Route> */}
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
