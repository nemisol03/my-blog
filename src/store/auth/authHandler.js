import { call } from "redux-saga/effects";
import { authRequestLogin, authRequestRegister } from "./authRequest";
import { saveToken } from "~/utils/auth";

export function* handleAuthRegister(action) {
    const {payload} = action;
    try {
        yield call(authRequestRegister,payload);
    }catch(error) {
            console.log(error);
    }
}
export  function* handleAuthLogin(action) {
    const {payload} = action;
    try {
        const res  = yield call(authRequestLogin,payload);
        console.log(res);
        saveToken(res.data.token,res.data.refreshToken);
    }catch(error) {
            console.log(error);
    }
}