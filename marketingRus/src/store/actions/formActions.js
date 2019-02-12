import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export const addItem = item => dispatch => {
    dispatch({ type: ADD_ITEM });
    axios
        .post('https://soup-kitchen-backend.herokuapp.com/api/items', item)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ADD_ERROR, payload: err });
        })
}