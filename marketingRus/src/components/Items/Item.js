import React from 'react';
import axios from 'axios';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }

    componentDidMount() {
        axios
            .get(`https://soup-kitchen-backend.herokuapp.com/api/items/item/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ item: res.data });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.item.imageUrl} alt={this.state.item.name} />
                </div>
                <h3>{this.state.item.name}</h3>
                <div>
                    {this.state.item.amount}{" "}{this.state.item.unit}
                </div>
            </div>
        )
    }
}

// import React from 'react';

// const Item = ({ item }) => (
//     <div>
//         <h4>{item.name}</h4>
//     </div>
// );

// export default Item;