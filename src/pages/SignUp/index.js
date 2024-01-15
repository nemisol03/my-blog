import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '~/components/Form';
import * as Yup from 'yup';

import { yupResolver } from "@hookform/resolvers/yup"
const schema = Yup.object(
    {
        fullname: Yup.string().required("fullname cannot be empty")
                .max(10,"Fullname must be less than 10 characters")
    }
)

function SignUp() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullname: ""
        }
    });

    const onSubmit = (data) => console.log(data);
    return (
        <div className="page-container h-[100vh]  mx-auto mt-[200px]">
            <h2 className="text-center text-primary font-medium text-2xl">Sign up form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto rounded-md p-3 w-full">
               

                <Input
                    type="text"
                    label="Fullname"
                    placeholder="Enter your fullname"
                    name="fullname"
                    control={control}

                />
                <Input
                    type="email"
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

                <button className="text-white font-medium text-lg bg-primary rounded-lg py-3 w-full mt-4 hover:opacity-80 ">Sign up</button>
            </form>
        </div>
    );
}
export default SignUp;
