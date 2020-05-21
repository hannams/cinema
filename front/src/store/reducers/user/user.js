import {
    GET_USER_SUCCESS,
    LOGIN_USER_SUCCESS,
} from '../../actions/';
// import {getToken, saveToken, removeToken} from '../../../utils';

const initialState = {
    userDetails: {},
    token: ""
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                userDetails: action.payload,
            };
        case LOGIN_USER_SUCCESS:
            // saveToken(action.payload);
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};