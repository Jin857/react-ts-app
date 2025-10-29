// hooks/useTypedNavigation.ts
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';

interface NavigateOptions {
  replace?: boolean;
  state?: unknown;
}

export const useTypedNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // 方法1：宽松的 navigateTo
  const navigateTo = (path: string, options?: NavigateOptions) => {
    navigate(path, options);
  };

  // 方法2：类型安全的 navigateTo（可选）
  const navigateToTyped = <T extends string>(path: T, options?: NavigateOptions) => {
    navigate(path, options);
  };

  const navigateWithParams = (path: string, params: Record<string, string>, options?: NavigateOptions) => {
    let url = path;
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`:${key}`, value);
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

  return {
    navigateTo,           // 宽松版本
    navigateToTyped,      // 严格版本（可选）
    navigateWithParams,
    getQueryParam,
    setQueryParam,
    getParams: params,
    currentPath: location.pathname,
    state: location.state,
    searchParams,
  };
};