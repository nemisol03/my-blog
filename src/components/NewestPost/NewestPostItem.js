function NewestPostItem() {
    return (
        <div className="flex items-center p-5 bg-[#F3EDFF] border-[0.7px] border-b-slate-300 last:border-b-0 ">
            <div>
                <img
                    src="https://i.pinimg.com/564x/50/e7/6e/50e76edb2155f5dec0a2485ad8c0a1e9.jpg"
                    alt=""
                    className="rounded-xl w-full h-full object-cover block"
                />
            </div>
            <div className="ml-4">
                <span className="text-sm rounded-full text-lightGray bg-white  px-3 py-1 ">Sunset</span>
                <h3 className=" text-xs leading-relaxed mt-2 text-lightGray ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ad dicta blanditiis voluptas.
                </h3>
                <p className=" flex items-center gap-4 mt-3 text-sm text-lightGray ">
                    <span className="rounded-separate separate-gray relative">2024-01-23</span>
                    <span>John Doe</span>
                </p>
            </div>
        </div>
    );
}

export default NewestPostItem;
