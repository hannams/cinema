import {getUserSuccess} from '../store/actions';
import {getUserData} from '../api';

export const thunkGetUserData = () => async(dispatch) => {
    try {
        const response = await getUserData();
        dispatch(getUserSuccess(response));
    }catch(error)
    {
        console.log("не удалось, так скажем");
    }
};