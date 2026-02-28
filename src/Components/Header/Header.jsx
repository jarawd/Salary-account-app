import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="header__title">Registro de empleados y depósitos</h1>
        <MdMenu
          className="header__menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <nav className={`header__navbar ${menuOpen ? 'active' : ''}`}>
        <Link
          className="header__navbar-link"
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </Link>
        <Link
          className="header__navbar-link"
          to="/registered"
          onClick={() => setMenuOpen(false)}
        >
          Registros
        </Link>
      </nav>
    </div>
  );
}
