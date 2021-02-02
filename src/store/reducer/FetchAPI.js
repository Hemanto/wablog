import { VALUE_UPDATE } from '../actions/Action'

const initialState = {
    post: []
}

const FetchAPI = (state = initialState, action) => {
    switch (action.type) {
        case VALUE_UPDATE:
            // action.data => map => return {...item, bookmark: false}
            const updatedData = action.data.map(item => ({ ...item, bookMark: false }))
            return { ...state, post: updatedData };
        default:
            return state;
    }
}


export default FetchAPI;