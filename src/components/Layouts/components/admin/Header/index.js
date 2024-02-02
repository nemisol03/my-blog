import { Link } from "react-router-dom";
import Button from "~/components/Button";

function Header() {
return <header>
    <div className="header flex items-center justify-between px-[16px] max-h-[66px] mt-10  border-b-[1px] border-b-slate-300 pb-5">
        <div className="nav-left flex items-center gap-10 h-full ">
            <Link to="/dashboard">
                <img
                    className="w-[60px] "
                    src="https://i.pinimg.com/564x/82/74/c4/8274c45adcf0b0781ab95f9f6692bb2d.jpg"
                    alt="logo"
                />
            </Link>
           </div>

           <div className="flex gap-x-10">
            <Button to="/manage/add-post" >Write new Post</Button>
            <div className="flex gap-x-4 items-center"><span>Hello, </span>
            <img src="https://i.pinimg.com/474x/ce/ab/31/ceab31cd8574fba3e690a5e1232b9904.jpg" className="w-[40px] h-[40px] object-cover rounded-full" alt="avatar" />
            </div>
           </div>
           </div>
</header>
}

export default Header;