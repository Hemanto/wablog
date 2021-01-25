import { VALUE_UPDATE } from '../actions/Action'

const initialState = {
    post: []
}

const FetchAPI = (state = initialState, action) => {
    switch (action.type) {
        case VALUE_UPDATE:
            return { ...state, post: action.data };
        default:
            return state;
    }
}


export default FetchAPI;