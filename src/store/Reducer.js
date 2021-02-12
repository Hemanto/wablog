import { combineReducers } from "redux";
import Authentication from "./reducer/Authentication";
import FetchAPI from './reducer/FetchAPI'
import ReadLater from "./reducer/ReadLater";
import LogOut from './reducer/LogOut'

const RootReducer = combineReducers({
    FetchAPI,
    ReadLater,
    Authentication
    // LogOut

})


export default RootReducer