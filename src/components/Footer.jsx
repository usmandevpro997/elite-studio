import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" aria-labelledby="footer-headline">
      <div className="footer__inner">
        {/* Large Headline */}
        <div className="footer__headline-wrap">
          <h2 id="footer-headline" className="footer__headline">
            LET&apos;S BUILD
            <br />
            <span className="footer__headline-accent">SOMETHING GREAT.</span>
          </h2>
          <div className="footer__headline-line" aria-hidden="true" />
        </div>

        {/* Main Grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__wordmark" aria-label="Elite Studio - Back to top" onClick={handleBackToTop}>
              <span className="footer__wordmark-top">ELITE<span className="footer__wordmark-slash"> /</span></span>
              <span className="footer__wordmark-bottom">STUDIO</span>
            </a>
            <p className="footer__desc">
              Independent digital agency crafting premium websites for brands
              that care about taste, clarity, and conversion. Design as strategy.
              Code as craft.
            </p>
            <div className="footer__status">
              <span className="footer__status-dot" aria-hidden="true" />
              <span>Available for new projects — {year}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-col">
              <h3 className="footer__nav-title">Navigate</h3>
              <ul className="footer__nav-list">
                <li><a href="#" className="footer__link" onClick={handleBackToTop}>Home</a></li>
                <li><a href="#services" className="footer__link">Services</a></li>
                <li><a href="#work" className="footer__link">Work</a></li>
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
              </ul>
            </div>

            <div className="footer__nav-col">
              <h3 className="footer__nav-title">Connect</h3>
              <ul className="footer__nav-list">
                <li><a href="#contact" className="footer__link footer__link--accent">Start a Project →</a></li>
                <li><a href="#" className="footer__link" onClick={handleBackToTop}>Back to top ↑</a></li>
                <li><span className="footer__text-muted">Lahore, PK — Remote Worldwide</span></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span>© {year} Elite Studio. Portfolio concept — all work is conceptual.</span>
          </div>
          <div className="footer__bottom-right">
            <span className="footer__bottom-tag">Design / Build / Ship</span>
            <span className="footer__bottom-dot" aria-hidden="true" />
            <span className="footer__bottom-tag">No templates. No bloat.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;