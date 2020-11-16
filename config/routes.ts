export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'smile',
    component: './dashboard/Dashboard',
  },
  {
    path: '/list',
    name: 'list.table-list',
    icon: 'table',
    component: './other/ListTableList',
  },
  {
    path: '/task',
    name: 'task',
    icon: 'smile',
    component: './task/Task',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './error/404',
  },
];
