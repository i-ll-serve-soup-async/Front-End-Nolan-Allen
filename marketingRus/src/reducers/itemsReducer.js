import { FETCH_ITEMS, FETCH_ITEMS_SUCESS } from '../actions';

const iniState = {
    items: [],
    fetchingItems: false,
    error: null
}

const itemsReducer = (state = iniState, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                fetchingItems: true
            };
        case FETCH_ITEMS_SUCESS:
            return {
                ...state,
                items: [
                    ...action.results
                ],
                fetchingItems: false
            }
        default:
            return state
    }
}

export default itemsReducer;