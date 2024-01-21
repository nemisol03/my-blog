import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '~/components/Form';
import * as Yup from 'yup';

import { yupResolver } from "@hookform/resolvers/yup"
import Button from '~/components/Button';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
import { getLocalToken, register } from '~/services/authService';
import { useAuth } from '~/contexts/authContext';

const schema = Yup.object(
    {
        firstname: Yup.string().required("fullname cannot be empty")
                .max(10,"Fullname must be less than 10 characters"),
        lastname: Yup.string().required("lastname cannot be empty")
                .max(10,"Lastname must be less than 10 characters"),
        email: Yup.string().email("invalid email address")
                .required("Email can't be empty"),
        password: Yup.string().required("Password can't be empty"),
    }
)


function Register() {
   const {setUserInfo} = useAuth();
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstname: "",
            lastname: "",
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

    const onSubmit = async (data) => {

        const payload = await register(data);
        setUserInfo(payload);
        navigate('/')

    
    };
    
    return (
        <div className="page-container h-[100vh]  mx-auto mt-[200px]  ">
            <h2 className="text-center text-primary font-medium text-2xl">Sign up form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto rounded-md p-3 w-full">
               

                <Input
                    type="text"
                    label="Firstname"
                    placeholder="Enter your firstname"
                    name="firstname"
                    control={control}

                />
                <Input
                    type="text"
                    label="Lastname"
                    placeholder="Enter your lastname"
                    name="lastname"
                    control={control}

                />
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

                <Button primary wFull  >Sign up</Button>
            </form>
        </div>
    );
}
export default Register;
