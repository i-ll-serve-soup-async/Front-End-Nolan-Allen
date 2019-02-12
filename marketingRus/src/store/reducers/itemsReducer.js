import {
    FETCH_SUCCESS,
    ADD_SUCCESS,
    DELETE_SUCCESS
} from '../actions';

const iniState = {
    items: [],
    addingItem: false
}

const itemsReducer = (state = iniState, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                items: [
                    ...action.payload
                ]
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