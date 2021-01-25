import { READ_LATER } from "../actions/Action";

const initialState = {
    readLaterPost: []
}

const ReadLater = (state = initialState, action) => {
    switch (action.type) {
        case READ_LATER:
            // localStorage.setItem('Readlater', [...state.readLaterPost, action.data])
            return { ...state, readLaterPost: [...state.readLaterPost, action.data] }
        default:
            return state;
    }
}

export default ReadLater;