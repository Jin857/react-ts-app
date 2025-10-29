// hooks/useTypedParams.ts
import { useParams } from 'react-router-dom';
import type { RouteParams } from '../types/routes';

export const useTypedParams = <T extends keyof RouteParams>() => {
    const params = useParams();
    return params as RouteParams[T];
};