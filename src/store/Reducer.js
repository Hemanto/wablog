import { combineReducers } from "redux";
import Authentication from "./reducer/Authentication";
import FetchAPI from './reducer/FetchAPI'
import ReadLater from "./reducer/ReadLater";

const RootReducer = combineReducers({
    FetchAPI,
    ReadLater,
    Authentication

})


export default RootReducer