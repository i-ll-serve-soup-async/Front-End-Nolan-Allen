import React from 'react';

const Item = ({ item }) => (
    <div>
        <h4>{item.name}</h4>
        <p>{item.type}</p>
        <p>{item.weight}</p>
        <p>{item.quantity}</p>
    </div>
);

export default Item;