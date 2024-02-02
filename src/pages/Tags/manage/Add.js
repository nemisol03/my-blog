import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import { Input } from '~/components/Form';
import Textarea from '~/components/TextArea';
import instance from '~/config/axiosConfig';

import {yupResolver} from  '@hookform/resolvers/yup'
import * as Yup from 'yup';


const schema = Yup.object({
    name: Yup.string().required("Name cannot be empty").min(2,"Name must be at least 2 characters"),
    description: Yup.string().required("Description cannot be empty"),
})

function AddTag() {

    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, reset,formState:{errors} } = useForm({
        mode: onchange,
        resolver: yupResolver(schema),

        defaultValues: {
            name: '',
            description: '',
        },
    });

    
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if(arrErrors.length >0) {
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false
            },
           );
        }
    },[errors])

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = await instance.post('tags', data);
            setLoading(false);
            if (res.status === 201) {
                toast.success('Create a new tag successfully', { pauseOnHover: false });
                reset({
                    name: '',
                    description: '',
                });
            }
        } catch (error) {
            setLoading(false);
            if (error.response.status === 400) {
                toast.error(error.response.data?.message);
            }
            console.error('Error uploading tag:', error);
        }
    };

    return (
        <div className='page-container mb-10'>
            <h1 className="text-primary font-medium text-2xl text-center mb-10">Add new tag</h1>
            

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Name" name="name" control={control} placeholder="tag's name" />
                   
                
            
                <div className="flex flex-col gap-y-4 entry-content mb-10">
                    <label className="">Description</label>
                    <Textarea name='description' control={control} placeholder="something here..."></Textarea>

                </div>
                <Button primary>{loading ? <PulseLoader color="#fff" size={8} /> : 'Add'}</Button>
            </form>
        </div>
    );
}
export default AddTag;
