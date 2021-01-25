import { combineReducers } from "redux";
import FetchAPI from './reducer/FetchAPI'
import ReadLater from "./reducer/ReadLater";

const RootReducer = combineReducers({
    FetchAPI,
    ReadLater
})


export default RootReducer