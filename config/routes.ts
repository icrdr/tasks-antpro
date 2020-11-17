export default [
  {
    path: '/login',
    component: '@/layouts/Base.layout',
    layout: false,
    routes: [{ component: 'Login' }],
  },
  {
    path: '/exception',
    layout: false,
    routes: [
      {
        path: '/exception/404',
        component: '404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    component: 'Dashboard',
  },
  {
    path: '/list',
    name: 'list.table-list',
    icon: 'table',
    component: 'ListTableList',
  },
  {
    path: '/task',
    name: 'task',
    icon: 'smile',
    component: 'Task',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    redirect: '/exception/404',
  },
];
