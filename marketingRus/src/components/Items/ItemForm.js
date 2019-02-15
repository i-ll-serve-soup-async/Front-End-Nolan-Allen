import React from 'react';

export default class ItemForm extends React.Component {
    state = {
        id: '',
        name: '',
        amount: '',
        unit: '',
        imageUrl: '',
        categoryId: ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        if(this.state.name && this.state.amount && this.state.unit) {
            this.props.changeHandler({
                name: this.state.name,
                amount: this.state.amount,
                unit: this.state.unit,
                imageUrl: this.state.imageUrl,
                categoryId: this.state.categoryId
            })
        }
        this.setState({
            name: '',
            amount: '',
            unit: '',
            imageUrl: '',
            categoryId: ''
        })
    }

    render() {
        return (
            <form>
                <input
                    type="image"
                    name="image"
                    alt={this.state.name}
                    value={this.state.imageUrl}
                    placeholder="Item Image URL"
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Item Name"
                    onChange={this.changeHandler}
                    required
                />
                <input
                    type="number"
                    name="amount"
                    value={this.state.amount}
                    placeholder="Item Quantity"
                    onChange={this.changeHandler}
                    required
                />
                <input
                    type="text"
                    name="unit"
                    value={this.state.unit}
                    placeholder="Unit Measurement"
                    onChange={this.changeHandler}
                    required
                />
                <input
                    type="number"
                    name="categoryId"
                    value={this.state.categoryId}
                    placeholder="Category ID Number"
                    onChange={this.changeHandler}
                />
                <input type="submit" value="Add Item" onClick={this.submitHandler} />
            </form>
        )
    }
}