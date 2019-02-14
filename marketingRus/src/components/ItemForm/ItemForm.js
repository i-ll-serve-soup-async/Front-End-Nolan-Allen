import React from 'react';

export default class ItemForm extends React.Component {
    state = {
        name: '',
        price: ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        if(this.state.name && this.state.price) {
            this.props.changeHandler({
                name: this.state.name,
                price: this.state.price
            })
        }
        this.setState({
            name: '',
            price: ''
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    onChange={this.changeHandler}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Item Price"
                    onChange={this.changeHandler}
                    required
                />
                <input type="submit" value="Add Item" />
            </form>
        )
    }
}