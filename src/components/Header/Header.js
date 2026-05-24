import { useState } from 'react';
import logo from '../../assets/logos/polko-logo-primary.png';
import LoginModal from '../LoginModal/LoginModal';
import './Header.css';

const navLinks = [
  { label: 'Aseguradoras', href: '#aseguradoras' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);
  const openModal = () => { setModalOpen(true); setMenuOpen(false); };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#inicio" className="header__logo-link" aria-label="Polko — inicio">
          <img src={logo} alt="Polko" className="header__logo" width="140" height="52" />
        </a>

        <nav
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__nav-link" onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn btn--primary header__cta" onClick={openModal}>
            Quiero unirme
          </button>
        </nav>

        <button
          className="header__hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className={`header__hamburger-bar${menuOpen ? ' header__hamburger-bar--open' : ''}`} />
          <span className={`header__hamburger-bar${menuOpen ? ' header__hamburger-bar--open' : ''}`} />
          <span className={`header__hamburger-bar${menuOpen ? ' header__hamburger-bar--open' : ''}`} />
        </button>
      </div>
      <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
