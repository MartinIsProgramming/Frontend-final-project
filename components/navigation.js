import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Cars',
      path: '/cars',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];
  return (
    <nav className="navigation">
      <div className="logo">
        <Link href="/">
          <a className="link">CARSHOP</a>
        </Link>
      </div>
      <ul className="nav-menu">
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>
                <a className="link">{link.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
