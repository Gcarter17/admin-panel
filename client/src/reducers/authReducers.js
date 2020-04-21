import {
    SET_CURRENT_USER,
    USER_ADD,
    USER_LOADING,
    USER_UPDATE,
    LOGOUT_USER
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_ADD:
            return {
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_UPDATE:
            return {
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}
