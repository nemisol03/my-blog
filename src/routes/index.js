import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/signin',
        component: SignIn,
        layout: null,
    },
    {
        path: '/signup',
        component: SignUp,
        layout: null,
    },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
