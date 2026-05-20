// src/components/Navbar/page.tsx
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import boltIcon from '../../assets/icon-bolt.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        <img src={boltIcon} alt="Logo" width="24" height="24" />
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
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup" onClick={closeMenu}>Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
