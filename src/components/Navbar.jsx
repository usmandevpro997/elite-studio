import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '#services', num: '01' },
  { label: 'Work', href: '#work', num: '02' },
  { label: 'About', href: '#about', num: '03' },
  { label: 'Contact', href: '#contact', num: '04' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const openBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
      if (openBtnRef.current) {
        openBtnRef.current.focus();
      }
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <a href="#" className="brand" aria-label="Elite Studio - Home">
            <span className="brand-top">ELITE <span className="brand-slash">/</span></span>
            <span className="brand-bottom">STUDIO</span>
          </a>
          <nav className="nav-desktop" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">Start a Project</a>
          </nav>
          <button
            ref={openBtnRef}
            className="btn-menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            MENU <span className="menu-dot" aria-hidden="true" />
          </button>
        </div>
      </header>
      <div
        id="mobile-menu"
        className={`mobile-overlay ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
      >
        <div className="container mobile-overlay-header">
          <a href="#" className="brand" onClick={handleNavClick} aria-label="Elite Studio - Home">
            <span className="brand-top">ELITE <span className="brand-slash">/</span></span>
            <span className="brand-bottom">STUDIO</span>
          </a>
          <button
            ref={closeBtnRef}
            className="btn-menu"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            CLOSE <span className="menu-dot" aria-hidden="true" />
          </button>
        </div>
        <div className="container mobile-nav">
          <nav aria-label="Mobile primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="mobile-nav-link" onClick={handleNavClick}>
                <span>{link.num}</span>{link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="container mobile-footer">
          <span className="eyebrow">Independent Studio © 2026</span>
          <span className="eyebrow">Portfolio Concept — No Fake Clients</span>
        </div>
      </div>
    </>
  );
}