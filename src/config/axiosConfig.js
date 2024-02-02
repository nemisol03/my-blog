import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    
});




instance.interceptors.request.use(
    (config) => {
        if (
            config.url.indexOf('/login') >= 0 ||
            config.url.indexOf('/refresh-token') >= 0 ||
            config.url.indexOf(process.env.REACT_APP_IMGBB_API_UPLOAD) >= 0
        ) {
            return config;
        }
        // // const token = getLocalToken();
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

// instance.interceptors.response.use( async (config) => {

//     // const token = getLocalToken();
//     // const decoded = jwtDecode(token);
//     // if(decoded.exp * 1000  < new Date().getTime()) {
//     //     const token = decoded
//     // }

//     return config;
// },async err => {
//     const originalRequest = err.config;
//     if(err.response.status === 401 && !originalRequest._retry){
//         originalRequest._retry = true;
//        try {
//         const refreshToken = getLocalRefreshToken();
//         console.log('refress token here ....')
//         originalRequest.headers.Authorization = `Bearer ${refreshToken}`;
//         const response = await instance.post('/refresh-token');
//         const {token } = response.data;
//         localStorage.setItem('token',token);
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return axios(originalRequest);
//        }catch(err) {
//             console.log(err);
//        }
//     }

//     return Promise.reject(err);

// })

export default instance;
