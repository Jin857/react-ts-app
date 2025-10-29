// types/routes.ts
export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
    auth?: boolean;
    roles?: string[];
}

export type AppRoutes = {
    HOME: '/';
    ABOUT: '/about';
    CONTACT: '/contact';
    USER: {
        PROFILE: '/user/:id';
        SETTINGS: '/user/settings';
    };
    PRODUCT: {
        LIST: '/products';
        DETAIL: '/product/:id';
    };
    ADMIN: '/admin';
};

export type RouteParams = {
    '/user/:id': { id: string };
    '/product/:id': { id: string };
    '/product/:category/:id': { category: string; id: string };
};