import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../store/actions';
import ItemList from '../components/ItemList/ItemList';

class ItemListView extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.props.getItems();
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
    items: state.items
})

export default connect(mapPropsToState, { getItems })(ItemListView);