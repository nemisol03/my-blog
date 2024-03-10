// import { saveToken } from '~/utils/auth';

// const { axiosPublic } = require('~/config/axiosConfig');

// export default class AuthService {
//     static async verifyTFA(data) {
//         console.log('🚀 ~ AuthService ~ verifyTFA ~ data:', data);
//         try {
//             const res = await axiosPublic.post('auth/verify', data);
//             return res.data;
//         } catch (e) {
//             console.log('��� ~ AuthService ~ verifyTFA=async ~ e:', e);
//         }
//     }

//     getUrlParameter(name, search) {
//         name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//         var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//         var results = regex.exec(search);
//         return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//     }

//     handleRedirect(location) {
//         const token = this.getUrlParameter('token', location.search);
//         const refreshToken = this.getUrlParameter('refreshToken', location.search);
//         // const error = this.getUrlParameter('error', location.search);

//         if (token) {
//             saveToken(token, refreshToken);
//             window.location.href = '/';
//         } else {
//             window.location.href = '/login';
//         }
//     }
// }

import { saveToken } from '~/utils/auth';

// const { axiosPublic } = require('~/config/axiosConfig');
import axios from 'axios';
import { GOOGLE_AUTH_URL } from '~/constants';
import { axiosPublic } from '~/config/axiosConfig';

export default class AuthService {
    static async verifyTFA(data) {
        console.log('🚀 ~ AuthService ~ verifyTFA ~ data:', data);
        try {
            const res = await axiosPublic.post('auth/verify', data);
            return res.data;
        } catch (e) {
            console.log('��� ~ AuthService ~ verifyTFA=async ~ e:', e);
        }
    }

   

    // getUrlParameter(name) {
    //     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    //     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    //     var results = regex.exec(this.props.location.search);
    //     console.log("🚀 ~ AuthService ~ getUrlParameter ~ this.props.location.search:", this.props.location.search)
    //     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    // };

    // static handleRedirect() {
    //     string search = 
    //     const token = this.getUrlParameter('token', search);
    //     const refreshToken = this.getUrlParameter('refreshToken', search);

    //     if (token && refreshToken) {
    //         console.log('co token khong')
    //         saveToken(token, refreshToken);
    //         window.location.href = '/';
    //     } else {
    //         window.location.href = '/login';
    //     }
    // }
}
