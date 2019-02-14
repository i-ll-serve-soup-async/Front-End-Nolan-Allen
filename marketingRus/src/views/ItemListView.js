import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getItems } from '../store/actions';
import ItemList from '../components/ItemList/ItemList';

class ItemListView extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        let auth = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        axios
            .get("https://soup-kitchen-backend.herokuapp.com/api/items", auth)
            .then(res => {
                console.log(res.data);
                this.setState({ items: res.data.items });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <ItemList
                history={this.props.history}
                getItemById={this.props.getItemById}
                items={this.props.items}
            />
        )
    }
}

const mapPropsToState = state => ({
    items: state.items,
    fetchingItems: state.fetchingItems
})

export default connect(mapPropsToState, { getItems })(ItemListView);