export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/pages/Login.page',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'smile',
    component: './dashboard/pages/Dashboard',
  },
  {
    path: '/list',
    name: 'list.table-list',
    icon: 'table',
    component: './other/pages/ListTableList',
  },
  {
    path: '/task',
    name: 'task',
    icon: 'smile',
    component: './task/pages/Task.page',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './error/404',
  },
];
