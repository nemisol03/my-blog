import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined,
        accessToken: null,
    },
    reducers: {
        authLogin: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        authRegister: (state, action) => ({ ...state, ...action.payload }),
        authUpdateUserInfo: (state, action) => ({ ...state, user: action.payload.user,
        accessToken: action.payload.token }),
    },
});

export const { authLogin, authRegister, authUpdateUserInfo } = authSlice.actions;

export default authSlice.reducer;
