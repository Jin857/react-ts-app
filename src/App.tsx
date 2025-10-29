// App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './config/routes';
import Layout from './menuDesign/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route, index) => {
              const element = route.auth ? (
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  requiredRoles={route.roles}
                  userRole={user?.role}
                  key={index}
                >
                  {route.element}
                </ProtectedRoute>
              ) : (
                route.element
              );
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={element}
                />
              );
            })}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;