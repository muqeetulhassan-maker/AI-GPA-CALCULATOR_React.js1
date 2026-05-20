// src/components/Header/page.tsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import boltIcon from '../../assets/icon-bolt.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <img
          src={boltIcon}
          alt="AI GPA Calculator Logo"
          width="24"
          height="24"
        />
        AI GPA CALC
      </Link>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/history" onClick={closeMenu}>Semester History</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={closeMenu}>Grading Scale</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={closeMenu}>Settings</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
