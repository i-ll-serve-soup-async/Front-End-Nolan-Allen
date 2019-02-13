import React from 'react';

function ItemList(props) {
    function routeToItem(e, item) {
        e.preventDefault();
        props.history.push(`/item-list/${item.id}`);
        this.getItemById(item.id);
    }

    return (
        <div>
            {props.items.map(item => (
                <div
                    onClick={e => routeToItem(e, item)}
                    key={item.id}
                >
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList;