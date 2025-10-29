// config/routes.ts
import { lazy } from 'react';
import type { RouteConfig } from '../types/routes';

// 懒加载组件
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const AdminPanel = lazy(() => import('../pages/AdminPanel'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />, // 直接使用 JSX
    auth: false,
  },
  {
    path: '/about',
    element: <About />,
    auth: false,
  },
  {
    path: '/contact',
    element: <Contact />,
    auth: false,
  },
  {
    path: '/user/:id',
    element: <UserProfile />,
    auth: true,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
    auth: false,
  },
  {
    path: '/admin',
    element: <AdminPanel />,
    auth: true,
    roles: ['admin', 'superadmin'],
  },
  {
    path: '*',
    element: <NotFound />,
    auth: false,
  },
];