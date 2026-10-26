import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow">Elite Studio — Independent Digital Agency</span>
            <span className="hero-live">
              <span className="live-dot" aria-hidden="true"></span> Available for new projects
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Websites that
            <br />
            <span className="hero-title-accent">feel expensive.</span>
          </h1>

          <p className="hero-copy">
            We design and build premium websites for brands that care about taste.
            No templates. No bloat. Just considered design, clean code, and sites that convert.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary hero-btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Start a Project <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <strong>03</strong>
              <span>Services / Design, Development, Commerce</span>
            </div>
            <div className="hero-meta-item">
              <strong>100%</strong>
              <span>Independent / No fake clients</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrap" aria-hidden="true">
          <div className="hero-visual">
            <div className="geo-frame"></div>
            <div className="geo-card">
              <div className="geo-card-top">
                <span className="geo-dots">
                  <i></i><i></i><i></i>
                </span>
                <span className="geo-label">ELITE / STUDIO — CONCEPT</span>
              </div>
              <div className="geo-circle"></div>
              <div className="geo-line"></div>
              <div className="geo-line geo-line-short"></div>
              <div className="geo-footer">
                <div className="geo-bar"></div>
                <div className="geo-orange-block"></div>
              </div>
            </div>
            <div className="geo-badge">©26</div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-border" aria-hidden="true"></div>
    </section>
  );
}