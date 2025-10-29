// hooks/useAuth.ts
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = (): AuthState & {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
} => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // 检查本地存储的认证状态
    const token = localStorage.getItem('authToken');
    if (token) {
      // 验证 token 并获取用户信息
      const user: User = {
        id: '1',
        email: 'user@example.com',
        name: '示例用户',
        role: 'user',
      };
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // 模拟登录 API 调用
    const user: User = {
      id: '1',
      email,
      name: '示例用户',
      role: email.includes('admin') ? 'admin' : 'user',
    };

    localStorage.setItem('authToken', 'fake-token');
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
};