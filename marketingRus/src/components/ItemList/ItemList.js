import React from 'react';
import styled from 'styled-components';
import Item from '../Item/Item';

// const Grid = styled.div`
//     width: 100%;
// `

// const GridItem = styled.div``

const ItemList = props => {
    return (
        <div>
            {props.items.map((item) => (
                <div key={item.id}>
                    <Item item={item}/>
                </div>
            ))}
        </div>
    )
}

export default ItemList;


// function ItemList(props) {
//     function routeToItem(e, item) {
//         e.preventDefault();
//         props.history.push(`/item-list/${item.id}`);
//         this.getItemById(item.id);
//     }

//     return (
        // <div>
        //     {props.items.map(item => (
        //         <div
        //             onClick={e => routeToItem(e, item)}
        //             key={item.id}
        //         >
        //             <img
        //                 src={item.imageUrl}
        //                 alt={item.name}
        //             />
        //             <p>{item.name}</p>
        //             <p>${item.price}</p>
        //         </div>
        //     ))}
        // </div>
//     )
// }

// export default ItemList;