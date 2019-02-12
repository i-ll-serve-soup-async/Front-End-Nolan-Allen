import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export const getItems = () => dispatch => {
    dispatch({ type: FETCH_ITEMS });
    axios
        .get("https://soup-kitchen-backend.herokuapp.com/api/items")
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: FETCH_ERROR, payload: err });
        });
}

export const deleteItem = id => dispatch => {
    dispatch({ type: DELETE_ITEM });
    axios
        .delete(`https://soup-kitchen-backend.herokuapp.com/api/items/${id}`)
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: DELETE_ERROR, payload: err });
        });
}