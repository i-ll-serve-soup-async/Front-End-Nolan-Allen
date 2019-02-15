import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const ACTION_ERROR = 'ACTION_ERROR';

export const getItems = () => dispatch => {
    dispatch({ type: FETCH_ITEMS });
    let auth = {
        headers: {
            authorization: localStorage.getItem("token")
        }
    };
    axios
        .get("https://soup-kitchen-backend.herokuapp.com/api/items", auth)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SUCCESS, result: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ACTION_ERROR, result: err });
        });
}

export const addItem = item => dispatch => {
    dispatch({ type: ADD_ITEM });
    axios
        .post('https://soup-kitchen-backend.herokuapp.com/api/items', item)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, result: res.data });
            this.props.history.push("/");
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ACTION_ERROR, result: err });
        })
}

export const deleteItem = item => dispatch => {
    dispatch({ type: DELETE_ITEM });
    axios
        .delete('https://soup-kitchen-backend.herokuapp.com/api/items', item)
        .then(res => {
            dispatch({ type: DELETE_SUCCESS, result: res.data });
        })
        .catch(err => {
            console.error(err);
            dispatch({ type: ACTION_ERROR, result: err });
        });
}