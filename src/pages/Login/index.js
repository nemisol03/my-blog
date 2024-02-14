import { useForm } from 'react-hook-form';
import { Input } from '~/components/Form';
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '~/components/Button';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authLogin } from '~/store/auth/authSlice';
import IconArrowLeft from '~/components/icons/IconArrowLeft';
const schema = Yup.object({
    email: Yup.string().email('invalid email address').required("Email can't be empty"),
    password: Yup.string().required("Password can't be empty"),
});

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        try {
            dispatch(authLogin(data));
            
        } catch (error) {
            console.error(error);
            toast.error('Failed to log in. Please try again.');
        }
    };

    return (
        <div className="page-container h-[100vh]  mx-auto mt-[200px]  ">
            <span onClick={() => navigate('/')} className=" top-0 cursor-pointer " title="Back to homepage">
                <IconArrowLeft />
            </span>
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
    );
}
export default Login;
