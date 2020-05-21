export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";


export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
});

export const loginUserSuccess = (token) => ({
    type: LOGIN_USER_SUCCESS,
    payload: token,
});