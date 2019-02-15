import React from 'react';
import { Route } from 'react-router-dom';
import ItemList from './Items/ItemList';
import ItemForm from './Items/ItemForm'
import Item from './Items/Item';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemList: []
    };
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={ItemList} />
        <Route path='/item-form' component={ItemForm} />
        <Route path='/item/:id' component={Item} />
      </div>
    )
  }
}

// import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getItems, addItem } from '../store/actions';
// import ItemList from './Items/ItemList';
// import ItemForm from './Items/ItemForm'

// class Home extends React.Component {
//   state = {
//     items: []
//   }

//   addItems() {
//     this.props.addItem();
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <Link to='/'>Home</Link>
//           <Link to='/'>Add New Item</Link>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/item-form' component={ItemForm} />
//         </div>
//         <div>
//           {this.props.fetchingItems ? (
//             <p>Loading items . . .</p>
//           ) : (
//             <ItemList
//               history={this.props.history}
//               getItemById={this.props.getItemById}
//               items={this.props.items}
//             />
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// const mapPropsToState = state => ({
//   items: state.items,
//   fetchingItems: state.fetchingItems
// })

// export default connect(mapPropsToState, { getItems, addItem })(Home);