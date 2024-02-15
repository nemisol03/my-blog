import { call } from 'redux-saga/effects';
import { authRequestLogin, authRequestRefreshToken, authRequestRegister } from './authRequest';
import { saveToken } from '~/utils/auth';
import { toast } from 'react-toastify';

export function* handleAuthRegister(action) {
    const { payload } = action;
    try {
        yield call(authRequestRegister, payload);
    } catch (error) {
        if (error.response.status === 400) {
            toast.error('Failed to log in. Please try again.');
        } else {
            console.log('🚀 ~ function*handleAuthRegister ~ error:', error);
        }
    }
}
export function* handleAuthLogin(action) {
    const { payload } = action;
    try {
        const res = yield call(authRequestLogin, payload);
        if (res.status === 200) {
            saveToken(res.data.token, res.data.refreshToken);
            window.location.href = '/';
        }
        // yield call(handleAuthFetchMe, { payload: res.data.token });
    } catch (error) {
        if (error.response.status === 400) {
            toast.error('Failed to log in. Please try again.');
        } else {
            console.log('🚀 ~ function*handleAuthLogin ~ error:', error);
        }
    }
}



export function* hanleAuthRefreshToken({ payload }) {
    try {
        const response = yield call(authRequestRefreshToken, payload);
        console.log('response refresh duoc lam moi' + response);
        if (response.data) {
            console.log("🚀 ~ function*hanleAuthRefreshToken ~ response.data:", response.data)
            
            saveToken(response.data.token, response.data.refreshToken);
            
        }
    } catch (e) {
    console.log("🚀 ~ function*hanleAuthRefreshToken ~ e:", e)
    }
}
