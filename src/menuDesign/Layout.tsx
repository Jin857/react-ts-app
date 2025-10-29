import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <Navigation />
            <main className="main-content">
                {children || <Outlet />}
            </main>
            <footer className="app-footer">
                <p>&copy; 2024 My App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;