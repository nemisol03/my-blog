function PostItem() {
    return (
        <div className="">
          <div className="h-[202px]">
                <img
                    src="https://i.pinimg.com/564x/50/e7/6e/50e76edb2155f5dec0a2485ad8c0a1e9.jpg"
                    alt=""
                    className="rounded-xl w-full h-full object-cover block"
                />
          </div>
            <div className="feature-item-content mt-6">
                <span className="text-sm rounded-full text-lightGray bg-[#F3EDFF]  px-3 py-1 ">Sunset</span>
                <h3 className=" text-sm leading-relaxed mt-2 ">
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

export default PostItem;
