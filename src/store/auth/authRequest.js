import instance from "~/config/axiosConfig"
export const authRequestRegister= (data)=> {
    return instance.post('/auth/register',data);
}

export const authRequestLogin= (data)=> {
    return instance.post('/auth/login',data);
}