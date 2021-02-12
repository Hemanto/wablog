import { LOG_OUT } from "../actions/Action"

const initialState = {
    authenticated: false,
    user: {},
    userToken: "",
    //authentication error message
}


const LogOut = (state = initialState, action) => {
    switch (action.type) {
        case LogOut:
            const user = action.data
            return {
                authenticated: false,
                user: '',
                userToken: '',
            }
        // console.log(user)
        default:
            return state;
    }
}

export default LogOut
