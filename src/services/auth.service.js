const { axiosPublic } = require("~/config/axiosConfig")

export default class AuthService {
    static async verifyTFA(data) {
        console.log("🚀 ~ AuthService ~ verifyTFA ~ data:", data)
        try {
            const res =  await axiosPublic.post('auth/verify', data)
            return res.data
        }catch (e) {
            console.log("��� ~ AuthService ~ verifyTFA=async ~ e:", e)
        }
    } 
}