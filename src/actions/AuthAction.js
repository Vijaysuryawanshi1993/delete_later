import {LOGIN_USER, LOGIN_FAILED, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS, REGISTER_USER} from "./types";
import {Actions} from 'react-native-router-flux';

export const loginUser = (username, password) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        Actions.main();
    }
};



