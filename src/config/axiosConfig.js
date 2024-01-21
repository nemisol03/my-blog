import axios from "axios";

const instance = axios.create({
    
    baseURL:process.env.REACT_APP_API_BASE_URL,
    timeout:3000,
    headers: {
        'Content-Type':'application/json'
    }
})

instance.interceptors.request.use(config => {
    console.log('before requests')
    console.log(config);

    return config;
},err => {
    return Promise.reject(err);
});

instance.interceptors.request.use( async (config) => {
    if(config.url.indexOf('/login') >=0 || config.url.indexOf('/refresh-token') >=0) {
        return config;
    }

    return config;
})


export default instance;
