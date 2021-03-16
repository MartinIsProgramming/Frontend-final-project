import Link from 'next/link';

// FONTAWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },

    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Cars',
      path: '/cars',
    },
  ];
  return (
    <nav className="navigation">
      <div className="logo">
        <Link href="/">
          <a className="link">CARSHOP</a>
        </Link>
      </div>
      <ul className={isOpen ? 'nav-menu nav-open' : 'nav-menu'}>
        {navLinks.map((link, index) => {
          return (
            <li key={index} onClick={() => setIsOpen(!isOpen)}>
              <Link href={link.path}>
                <a className="link">{link.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon style={{ width: '20px' }} icon={faBars} />
      </div>
    </nav>
  );
};

export default Navigation;
