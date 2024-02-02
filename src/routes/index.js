import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import PageNotFound from '~/pages/PageNotFound';
import Dashboard from '~/pages/Dashboard';
import { AddPost } from '~/pages/Posts/manage';
import ManagePosts from '~/pages/Posts/manage/ManagePosts';
import PostDetail from '~/pages/Posts/display/PostDetail';
import UpdatePost from '~/pages/Posts/manage/Update';
import ManageTags from '~/pages/Tags/manage/ManageTags';
import AddTag from '~/pages/Tags/manage/Add';
import ManageUsers from '~/pages/Users/manage/ManageUsers';

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
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/manage/add-post',
        component: AddPost,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/manage/update-post/:id',
        component: UpdatePost,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/manage/posts',
        component: ManagePosts,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/manage/tags',
        component: ManageTags,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/manage/add-tag',
        component: AddTag,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/manage/users',
        component: ManageUsers,
        meta: {
            requiresAuth: true,
            permissions: 'ADMIN',
        },
    },
    {
        path: '/posts/:slug',
        component: PostDetail,
    },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
