import React from 'react';
// import { Route } from 'react-router-dom';
// import axios from 'axios';

// function Item({ items, deleteItem, history, editItem, match }) {
//     const item = items.find(thing => `${thing.id}` === match.params.id);

//     if(!item) {
//         return <h2>Loading requested item...</h2>
//     }

//     return (
//         <div>
//             <div>
//                 <div>
//                     <img
//                         src={item.imageUrl}
//                         alt={item.name}
//                     />
//                 </div>
//                 <div>
//                     <h4>{item.name}</h4>
//                     <p>${item.price}</p>
//                 </div>
//             </div>
//             <button
//                 onClick={e => {
//                     editItem(e, item);
//                     history.push('/item-form');
//                 }}
//             >Edit Item</button>
//             <button
//                 onClick={e => {
//                     deleteItem(e, item.id);
//                 }}
//             >Delete Item</button>
//         </div>
//     )
// }

const Item = ({ item }) => (
    <div>
        <h4>{item.name}</h4>
        {/* <p>{item.type}</p>
        <p>{item.weight}</p>
        <p>{item.quantity}</p> */}
    </div>
);

export default Item;