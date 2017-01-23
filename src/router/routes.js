var routes = [
    {
        path: '/',
        redirect: { name: 'index' }
    },
    {
        path: '/index',
        name: 'index',
        component: resolve => {
            require.ensure(['../components/index.vue'], () => {
                resolve(require('../components/index.vue'))
            })
        }
    }
]

export default routes;