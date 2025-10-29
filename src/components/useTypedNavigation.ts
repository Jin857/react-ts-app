// hooks/useTypedNavigation.ts
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import type { RouteParams, AppRoutes } from '../types/routes';

type NavigateOptions = {
    replace?: boolean;
    state?: unknown;
};

export const useTypedNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const navigateTo = <T extends keyof AppRoutes>(
        path: T,
        options?: NavigateOptions
    ) => {
        navigate(path as string, options);
    };

    const navigateWithParams = <T extends keyof RouteParams>(
        path: T,
        params: RouteParams[T],
        options?: NavigateOptions
    ) => {
        let url = path as string;
        Object.entries(params).forEach(([key, value]) => {
            url = url.replace(`:${key}`, value as string);
        });
        navigate(url, options);
    };

    const getQueryParam = (key: string): string | null => {
        return searchParams.get(key);
    };

    const setQueryParam = (key: string, value: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(key, value);
        setSearchParams(newSearchParams);
    };

    const getParams = <T extends keyof RouteParams>(): RouteParams[T] => {
        return params as RouteParams[T];
    };

    return {
        navigateTo,
        navigateWithParams,
        getQueryParam,
        setQueryParam,
        getParams,
        currentPath: location.pathname,
        state: location.state,
        searchParams,
    };
};