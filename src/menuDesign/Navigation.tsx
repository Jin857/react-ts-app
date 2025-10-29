import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于' },
    { path: '/contact', label: '联系' },
  ] as const;

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;