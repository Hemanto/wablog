import axios from "axios"
import { REGISTER } from "../actions/Action"

const initialState = {
    authenticated: false,
    user: {},
    userToken: "",
    //authentication error message
}


const Authentication = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            console.log(action.data)
            const user = action.data
            return {
                authenticated: true,
                user: user.user,
                userToken: user.token,
            }
        // console.log(user)
        default:
            return state;
    }
}

export default Authentication
