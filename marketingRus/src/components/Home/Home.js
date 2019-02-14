import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems, addItem } from '../../store/actions';
import ItemList from '../ItemList/ItemList';
import ItemForm from '../ItemForm/ItemForm'

class Home extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.props.getItems();
  }

  addItems() {
    this.props.addItem();
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/'>Add New Item</Link>
          <Route exact path='/' component={Home} />
          <Route exact path='/item-form' component={ItemForm} />
        </div>
        <div>
          {this.props.fetchingItems ? (
            <p>Loading items . . .</p>
          ) : (
            <ItemList
              history={this.props.history}
              getItemById={this.props.getItemById}
              items={this.props.items}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapPropsToState = state => ({
  items: state.items,
  fetchingItems: state.fetchingItems
})

export default connect(mapPropsToState, { getItems, addItem })(Home);