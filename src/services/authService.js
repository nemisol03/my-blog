import { jwtDecode } from "jwt-decode";
import instance from "~/config/axiosConfig";
import { useAuth } from "~/contexts/authContext";




const register = async (data) => {
    try {
        const res = await instance.post('/auth/register',data);
        const {token,refreshToken} =  res.data;
        saveTokenToStorage(token, refreshToken);
        const payload = jwtDecode(token);
        return payload
    }catch(err) {
        console.error(err);
    }
}
const login = async (data) => {
    try {
        const res = await instance.post('/auth/login',data);
        const {token,refreshToken} =  res.data;
        saveTokenToStorage(token, refreshToken);
        const payload = jwtDecode(token);
        return payload
    }catch(err) {
        console.error(err);
    }
}




function saveTokenToStorage(token, refreshToken) {
    const tokenExp = jwtDecode(token);
    const refreshTokenExp = jwtDecode(refreshToken);
    localStorage.setItem('token',{token,tokenExp});
    localStorage.setItem('refreshToken',{refreshToken,refreshTokenExp});
}

const getLocalToken = () => {
    return JSON.parse(localStorage.getItem('token'));
}

const getLocalRefreshToken = () => {
    return JSON.parse(localStorage.getItem('refreshToken'));
}
export {register,getLocalToken,getLocalRefreshToken};