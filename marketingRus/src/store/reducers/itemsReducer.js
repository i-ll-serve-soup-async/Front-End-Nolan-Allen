import {
    FETCH_ITEMS,
    FETCH_SUCCESS,
    ADD_SUCCESS,
    DELETE_SUCCESS
} from '../actions';

const iniState = {
    items: [],
    fetchingItems: false,
    addingItem: false
}

const itemsReducer = (state = iniState, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                fetchingItems: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                items: [
                    ...action.payload
                ],
                fetchingItems: false
            }
        case ADD_SUCCESS:
            return {
                ...state,
                items: [
                    ...action.payload
                ],
                error: '',
                addingItem: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                item: [
                    ...action.payload
                ]
            }
        default:
            return state
    }
}

export default itemsReducer;