import axios from 'axios';
import { getToken, saveToken } from '~/utils/auth';

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    'Content-Type': 'application/json',
});

export const axiosPublic = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    'Content-Type': 'application/json',
});

axiosPrivate.interceptors.request.use(
    (config) => {
        if (
            config.url.indexOf('/auth/login') >= 0 ||
            // config.url.indexOf('/auth/refresh-token') >= 0 ||
            config.url.indexOf(process.env.REACT_APP_IMGBB_API_UPLOAD) >= 0
        ) {
            return config;
        }
        const { access_token } = getToken();
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);


axiosPrivate.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { refresh_token } = getToken();
                originalRequest.headers.Authorization = `Bearer ${refresh_token}`;
                const response = await axiosPrivate.post('/auth/refresh-token');
                const { token } = response.data;
                saveToken(token, refresh_token);
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return axiosPrivate(originalRequest);
            } catch (err) {
                console.log(err);
            }
        }

        return Promise.reject(error);
    },
);
