import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import SearchReducer from './CompanySearchReducer'

export default combineReducers({
    auth: AuthReducer,
    search: SearchReducer,
})