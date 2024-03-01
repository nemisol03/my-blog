import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconDelete, IconLock } from '~/components/icons';
import IconDashboard from '~/components/icons/IconDashBoard';
import IconDocument from '~/components/icons/IconDocument';
import IconGroupUser from '~/components/icons/IconGroupUser';
import IconTag from '~/components/icons/IconTag';
import IconToggleBar from '~/components/icons/IconToggleBar';

const sidebarLinks = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <IconDashboard />,
    },
    {
        name: 'Tags',
        path: '/manage/tags',
        icon: <IconTag />,
    },
    {
        name: 'Posts',
        path: '/manage/posts',
        icon: <IconDocument />,
    },
    {
        name: 'Users',
        path: '/manage/users',
        icon: <IconGroupUser />,
    },

    {
        name: 'Trash',
        path: '/manage/trash',
        icon: <IconDelete />,
    },
];

function SideBar() {
    const [show, setShow] = useState(true);

    return (
        <div
            className={`flex flex-col items-center max-w-[300px] w-full shadow-md rounded-lg min-h-screen ${
                show ? '' : '-translate-x-[30%] max-w-[80px] w-full'
            }`}
        >
            <div className="flex w-full items-center py-2 px-6">
                <h3
                    className={`text-xl text-center text-primary font-medium overflow-hidden transition-all ${
                        show ? 'w-full' : 'w-0'
                    }`}
                >
                    Nemisol
                </h3>
                <span className="ml-auto cursor-pointer hover:text-primary" onClick={() => setShow(!show)}>
                    <IconToggleBar />
                </span>
            </div>
            {sidebarLinks.map((link) => (
                <NavLink
                    to={link.path}
                    key={link.name}
                    className={({ isActive }) =>
                        isActive
                            ? `text-center flex items-center h-12 w-full gap-x-5 px-5 rounded-lg mb-2   overflow-hidden transition-all  ${
                                  show ? 'w-full text-primary bg-primary bg-opacity-20' : 'w-[56px]'
                              } `
                            : `text-center flex items-center h-12 w-full gap-x-5 px-5 rounded-lg mb-2   overflow-hidden transition-all ${
                                  show ? 'hover:bg-primary hover:text-primary hover:bg-opacity-20 ' : ''
                              }  `
                    }
                >
                    <span className={` transition-all  overflow-hidden ${show ? '' : 'w-0'}`}>{link.icon}</span>
                    <span className={`overflow-hidden transition-all ${show ? '' : 'w-0'}`}>{link.name}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default SideBar;
