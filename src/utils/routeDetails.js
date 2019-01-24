import { lazy } from 'react';

const AsyncTodo = lazy(() => import('../screens/Todo'));
const AsyncHome = lazy(() => import('../screens/Home'));
const AsyncAbout = lazy(() => import('../screens/About'));
const AsyncCourses = lazy(() => import('../screens/Courses'));

export default [
  {
    id: 1,
    path: '/',
    component: AsyncHome,
    label: 'Home',
    isExact: true,
    isPrivate: false,
  },
  {
    id: 2,
    path: '/about',
    component: AsyncAbout,
    label: 'About',
    isExact: false,
    isPrivate: false,
  },
  {
    id: 3,
    path: '/courses',
    component: AsyncCourses,
    label: 'Courses',
    isExact: false,
    isPrivate: false,
  },
  {
    id: 4,
    path: '/todo',
    component: AsyncTodo,
    label: 'Todo',
    isExact: false,
    isPrivate: true,
  },
];
