import {
    FETCH_ITEMS,
    FETCH_SUCCESS,
    ADD_ITEM,
    ADD_SUCCESS,
    DELETE_ITEM,
    DELETE_SUCCESS,
    ACTION_ERROR
} from '../actions';

const iniState = {
    items: [],
    currentItem: null,
    fetchingItems: false,
    addingItem: false,
    additionSuccessful: false,
    edtingItem: false,
    editingSuccessful: false,
    deletingItem: false,
    deletionSuccessful: false,
    error: null
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
                items: {
                    ...action.payload
                },
                fetchingItems: false,
                addingItem: false,
                edtingItem: false,
                deletingItem: false,
                error: null
            }
        case ADD_ITEM:
            return {
                ...state,
                addingItem: true
            }
        case ADD_SUCCESS:
            return {
                ...state,
                additionSuccessful: true,
                currentItem: action.result
            }
        case DELETE_ITEM:
            return {
                ...state,
                deletingItem: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                deletionSuccessful: true,
                deletingItem: false
            }
        case ACTION_ERROR:
            return {
                ...state,
                fetchingItems: false,
                addingItem: false,
                edtingItem: false,
                deletingItem: false,
                error: action.error
            }
        default:
            return state
    }
}

export default itemsReducer;