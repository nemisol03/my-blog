import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import PageNotFound from '~/pages/PageNotFound';

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
        path: '/login',
        component: Login,
        layout: null,
    },
    {
        path: '/register',
        component: Register,
        layout: null,
    },
    {
        path: '*',
        component: PageNotFound,
        layout: null,
    },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
