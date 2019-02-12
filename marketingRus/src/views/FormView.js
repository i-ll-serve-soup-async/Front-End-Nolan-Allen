import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ACTION_ERROR = 'ACTION_ERROR';

export const getItems = () => dispatch => {
    dispatch({ type: FETCH_ITEMS });
    axios
        .get("https://soup-kitchen-backend.herokuapp.com/api/items")
        .then(res => {
            dispatch({ type: FETCH_ITEMS_SUCCESS, results: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ACTION_ERROR, error: err });
        });
}

export const addItem = item => dispatch => {
    dispatch({ type: ADD_ITEM });
    axios
        .post("https://soup-kitchen-backend.herokuapp.com/api/items", item)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, results: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ACTION_ERROR, error: err });
        })
}