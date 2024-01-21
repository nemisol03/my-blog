import { useController } from 'react-hook-form';

function Input({ label,errors, control, ...props }) {
    const { field } = useController({ control, name: props.name });
    return (
        <div className="flex flex-col gap-3 mb-5 ">
            <label htmlFor={props.id || props.name} className="">
                {label}
            </label>
            <input
                id={props.id || props.name}
                className="p-3 w-full rounded-lg  border  transition-all ring-1 border-gray-100 outline-none  focus:border-primary placeholder:text-placeholder placeholder:text-[15px]  "
                {...field}
                {...props}
            />
        </div>
    );
}

export default Input;
