import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import Button from '~/components/Button';

const menuLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'About',
        path: '/about',
    },
];

function Header() {
    return (
        <header className="header flex items-center justify-between page-container max-h-[66px]   mt-10">
            <div className="nav-left flex items-center gap-10 h-full">
                <Link to="/">
                    <img
                        className="w-[60px] "
                        src="https://i.pinimg.com/564x/82/74/c4/8274c45adcf0b0781ab95f9f6692bb2d.jpg"
                        alt="logo"
                    />
                </Link>
                <ul className="menu flex items-center gap-10">
                    {menuLinks.map((item, index) => {
                        return (
                            <li key={index} className="">
                                <NavLink to={item.path}>{item.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="nav-right flex items-center gap-10 ">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className=" border border-slate-300 py-3 px-5 outline-none rounded-lg pr-12 input-search caret-primary"
                    />
                    <span className="absolute translate-y-2/4 right-0 text-slate-400 px-4 cursor-pointer">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </div>
                <Button primary to="/register" > Sign Up </Button>
            </div>
        </header>
    );
}

export default Header;
