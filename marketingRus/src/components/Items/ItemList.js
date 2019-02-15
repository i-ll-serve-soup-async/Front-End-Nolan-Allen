import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../../store/actions';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 24px;
    border: 1px solid pink;
`;

const CardBlock = styled.div`
    width: 190px;
    height: 220px;
    margin: 8px;
    display: flex;
    flex-direction: column;
    img: {
        width: 100%;
        height: 190px;
        margin-bottom: 8px;
    }
    border: 1px solid maroon;
`

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <ItemsWrapper>
                {this.state.items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </ItemsWrapper>
        )
    }
}

function ItemCard({ item }) {
    return (
        <Link key={item.id} to={`/item/${item.id}`}>
            <CardBlock>
                <div>
                    <img src={item.imageUrl} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
            </CardBlock>
        </Link>
    )
}

const mapPropsToState = state => ({
    items: state.items,
    fetchingItems: state.fetchingItems
})

export default connect(mapPropsToState, { getItems })(ItemList);