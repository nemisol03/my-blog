import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '~/components/Form';
import * as Yup from 'yup';

import { yupResolver } from "@hookform/resolvers/yup"
import Button from '~/components/Button';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '~/contexts/authContext';
const schema = Yup.object(
    {
      
        email: Yup.string().email("invalid email address")
                .required("Email can't be empty"),
        password: Yup.string().required("Password can't be empty"),
    }
)


function Login() {
    const {setUserInfo} = useAuth();
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if(arrErrors.length >0) {
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false
            });
        }
    },[errors])

    const onSubmit = (data) => {
        const login = async () => {
            try {
                const res = await axios.post('http://localhost:8080/api/v1/auth/login', 
                    data
                );
                console.log(res.token);
                toast.success('Congratulation! You have just logged in successfully')
                // navigate('/')
            } catch (error) {
                console.error('Error during registration:', error);
            }
        };
    
        login();
    };
    
    return (
        <div className="page-container h-[100vh]  mx-auto mt-[200px]  ">
            <h2 className="text-center text-primary font-medium text-2xl">Sign in form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto rounded-md p-3 w-full">
               
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    control={control}

                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    control={control}

                />

                <Button primary wFull  >Sign in</Button>
            </form>
        </div>
    );
}
export default Login;
