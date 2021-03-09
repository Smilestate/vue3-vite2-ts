const register_login = [
    { path: '/login', name: 'Login', component: () => import('../view/register_login/login.vue') },
    { path: '/register', name: 'Register', component: () => import('../view/register_login/register.vue') },
]

export default register_login
