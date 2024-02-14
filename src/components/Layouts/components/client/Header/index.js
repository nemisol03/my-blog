import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import IconProfile from '~/components/icons/IconProfile';
import { IconDashBoard, IconLogout } from '~/components/icons';
import { logOut } from '~/utils/auth';
import { toast } from 'react-toastify';
import { axiosPrivate } from '~/config/axiosConfig';

const menuLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '#',
    },
    {
        title: 'About Me',
        path: '#about',
    },
];

function Header() {
    const { user, role } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const handleLogout = async () => {
        const res = await axiosPrivate.post('/logout');
        toast.success('Logged out successfully');
        window.location.href = '/login';
        logOut();
    };

    const userLinks = [
        {
            title: 'Profile',
            icon: <IconProfile />,
            onClick: () => navigate('/me/profile'),
        },
        role == 'ADMIN' && {
            title: 'Dashboard',
            icon: <IconDashBoard />,
            onClick: () => navigate('/dashboard'),
            meta: {
                requiresAuth: true,
                permissions: 'ADMIN',
            },
        },
        {
            title: 'Logout',
            icon: <IconLogout />,
            onClick: handleLogout,
        },
    ];

    return (
        <header className="header flex items-center justify-between page-container max-h-[66px]   mt-10">
            <div className="nav-left flex items-center gap-10 h-full">
                <Link to="/">
                    <img
                        className="w-[70px]"
                        src="https://cdn.dribbble.com/users/1769954/screenshots/3821455/media/54be0f77b13471a85cb7e55e90a2de7c.png?resize=400x300&vertical=center"
                        alt="logo"
                    />
                </Link>
                <ul className="menu flex items-center gap-10">
                    {menuLinks.map((item, index) => {
                        return (
                            <li key={index} className="">
                                <a href={item.path}>{item.title}</a>
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
                    <span className="absolute translate-y-2/4 right-0 text-slate-400 px-4 ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </div>

                {user && (
                    <Menu items={userLinks}>
                        <div className="actions">
                            <div className="flex gap-x-4 items-center">
                                <span>
                                    Hello,
                                    <span className="font-medium capitalize">
                                        {user.first_name + ' ' + user.last_name}
                                    </span>
                                </span>
                                <img
                                    src={user.avatar || '/thumb-default.jpg'}
                                    className="w-[45px] h-[45px] object-cover border rounded-full"
                                    alt="avatar"
                                />
                            </div>
                        </div>
                    </Menu>
                )}

                {!user && (
                    <Button primary to="/login">
                        Sign In
                    </Button>
                )}
            </div>
        </header>
    );
}

export default Header;
