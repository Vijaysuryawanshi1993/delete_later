import {
    LOGIN_USER,
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, user: action.payload};

        case LOGIN_USER:
            return {...state, loading: true, error: ''};

        case LOGIN_FAILED:
            return {...state, loading: false, error: 'Login Failed'};

        default:
            return state;
    }
}