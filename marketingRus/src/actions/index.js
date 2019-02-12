import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCESS = 'FETCH_ITEMS_SUCCESS';
export const ACTION_ERROR = 'ACTION_ERROR';

export const getItems = () => dispatch => {
    dispatch({ type: FETCH_ITEMS });
    axios
        .get("https://soup-kitchen-backend.herokuapp.com/api/items")
        .then(res => {
            dispatch({ type: FETCH_ITEMS_SUCESS, results: res.data });
        })
        .catch(err => {
            console.error(err)
            dispatch({ type: ACTION_ERROR, error: err });
        });
}