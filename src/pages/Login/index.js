import { useForm } from 'react-hook-form';
import { Input } from '~/components/Form';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '~/store/auth/authSlice';
import IconArrowLeft from '~/components/icons/IconArrowLeft';
import { saveToken } from '~/utils/auth';
import AuthService from '~/services/auth.service';
const schema = Yup.object({
    email: Yup.string().email('invalid email address').required("Email can't be empty"),
    password: Yup.string().required("Password can't be empty"),
});

function Login() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState('');
    // const [email,setEmail] = useState('')
    const navigate = useNavigate();
    const mfaEnabled = localStorage.getItem('mfaEnabled');
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false,
            });
        }
    }, [errors]);

    const onSubmit = async (data) => {
        localStorage.setItem('email', data.email);
        // setEmail(data.email);
        try {
            dispatch(authLogin(data));
        } catch (error) {
            toast.error('Failed to log in. Please try again.');
        }
    };

    const handleVerifyCode = async () => {
        try {
            const res = await AuthService.verifyTFA({ code: verificationCode, email: localStorage.getItem('email') });
            console.log('🚀 ~ handleVerifyCode ~ res:', res);
            saveToken(res.token, res.refreshToken);
            console.log('login thành công: ' + res);
            localStorage.removeItem('mfaEnabled');
            localStorage.removeItem('secretImageUri');
            localStorage.removeItem('email');
            window.location.href = '/';
        } catch (error) {
            console.log('🚀 ~ handleVerifyCode ~ error:', error);
        }
    };

    return (
        <div className="page-container h-[100vh]  mx-auto mt-[200px]  ">
            <span onClick={() => navigate('/')} className=" top-0 cursor-pointer " title="Back to homepage">
                <IconArrowLeft />
            </span>
            {!mfaEnabled && (
                <div>
                    <h2 className="text-center text-primary font-medium text-2xl">Sign in form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto rounded-md p-3 w-full">
                        <Input label="Email" placeholder="Enter your email" name="email" control={control} />
                        <Input
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            name="password"
                            control={control}
                        />

                        <Button primary wFull>
                            Sign in
                        </Button>
                        <p className="text-slate-500 text-sm my-3 float-right">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-primary ">
                                register now
                            </Link>
                        </p>
                    </form>
                </div>
            )}
            {mfaEnabled && (
                <div className="m-auto w-[300px]  my-20">
                    <h3>Two-factor authentication</h3>
                    <img src={localStorage.getItem('secretImageUri')} alt="" />
                    <div className="mt-10">
                        verification code
                        <input
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            type="text"
                            placeholder="please enter your verification code"
                            className="w-[300px] rounded border-black border py-3 px-4"
                        />
                        <button
                            onClick={handleVerifyCode}
                            type="button"
                            className="rounded w-full py-4  text-white bg-blue-500 mt-6"
                        >
                            Verify
                        </button>
                        <p>Open your two-factor authenticator (TOTP) app or browser extension to view your authentication code.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Login;
