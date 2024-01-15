function SignIn() {
    return <div className="page-container h-[100vh] flex justify-center items-center">
        <form action="" className="max-w-[600px] border border-slate-300 rounded-md p-3 w-full">
            <h2 className="text-center text-primary font-bold text-3xl">Sign up form</h2>

            <div  className="flex flex-col gap-3 font-semibold">
                <label htmlFor="" >Email</label>
                <input type="email" className="p-3 w-full rounded-lg  border-2 focus:border-primary  " placeholder="Enter your email..." />
            </div>
            <div  className="flex flex-col gap-3 font-semibold">
                <label htmlFor="" >Password</label>
                <input type="email" className="p-3 w-full rounded-lg  border-2 focus:border-primary  " placeholder="Enter your email..." />
            </div>

        </form>
    </div>;
}
export default SignIn;
