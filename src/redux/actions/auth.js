import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS
} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserProfile = (userData, navigate) => {
    return async (dispatch) => {
        if (userData) {
            dispatch({ type: USER_LOGIN_SUCCESS, userData: userData, userToken: userData.access_token })
            await AsyncStorage.setItem('USER', JSON.stringify(userData))
            navigate('Main')
        }
    }
};

const removeUser = (navigate) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGOUT_SUCCESS })
        AsyncStorage.removeItem('USER');
        navigate('Auth')
    }
};

export const authActions = {
    setUserProfile,
    removeUser
};