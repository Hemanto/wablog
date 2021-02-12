import { REGISTER, LOG_OUT } from "../actions/Action"

const initialState = {
    authenticated: false,
    user: {},
    userToken: "",
    //authentication error message
}


const Authentication = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            console.log('actions', action.data)
            const user = action.data
            console.log('firstname', user.first_name);
            return {
                authenticated: true,
                user: user.user,
                userToken: user.token,
            }
        case LOG_OUT:
            return initialState;
        // console.log(user)
        default:
            return state;
    }
}

export default Authentication
