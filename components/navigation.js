import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];
  return (
    <nav className="navigation">
      <div className="logo">
        <Link href="/">CARSHOP</Link>
      </div>
      <ul className="nav-menu">
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="nav-link">
              <Link href={link.path}>
                <a>{link.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
