import { bindActionCreators } from 'redux';
import { VALUE_UPDATE } from '../actions/Action'

const inital = {
    post: ""
}

const fetchReducer = (state = inital) => {
    switch (action.type) {
        case VALUE_UPDATE:
            return { ...state, post: action.data }
        default:
            return state;
    }
}