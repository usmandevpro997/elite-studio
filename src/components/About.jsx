import './About.css';

const PRINCIPLES = [
  {
    number: '01',
    label: 'DESIGN',
    title: 'Taste over trends.',
    text: 'We study hierarchy, spacing, and typography before color. Every decision has to earn its place. If it does not improve clarity or conversion, we remove it.',
  },
  {
    number: '02',
    label: 'BUILD',
    title: 'Code as craft.',
    text: 'Clean React, semantic HTML, accessible by default. We build for 60fps, for screen readers, and for the next developer who will maintain it.',
  },
  {
    number: '03',
    label: 'RESULTS',
    title: 'Business, not decoration.',
    text: 'A premium site must convert. We balance aesthetic restraint with clear user journeys, fast loads, and honest messaging that respects the customer.',
  },
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-top">
          <div className="about-eyebrow">
            <span className="eyebrow">ABOUT THE STUDIO / 06—07</span>
            <span className="about-eyebrow-line" aria-hidden="true"></span>
          </div>

          <div className="about-head-grid">
            <h2 id="about-heading" className="about-title">
              Independent by
              <br />
              <span>design. Intentional</span>
              <br />
              by nature.
            </h2>

            <div className="about-intro-wrap">
              <p className="about-intro">
                Elite Studio is a fictional independent studio built as a portfolio concept.
                No fake clients, no inflated awards. Just a demonstration of how a high-end agency
                should present itself: quiet confidence, editorial discipline, and serious engineering.
              </p>
              <div className="about-meta">
                <div className="about-meta-item">
                  <strong>Independent</strong>
                  <span>Remote-first, async, no middle managers</span>
                </div>
                <div className="about-meta-item">
                  <strong>Focused</strong>
                  <span>3 services only. We do less, better.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-principles">
          {PRINCIPLES.map((p) => (
            <article key={p.number} className="principle-card" tabIndex={0}>
              <div className="principle-top">
                <span className="principle-number">{p.number}</span>
                <span className="principle-label">{p.label}<i aria-hidden="true"></i></span>
              </div>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-text">{p.text}</p>
              <span className="principle-line" aria-hidden="true"></span>
            </article>
          ))}
        </div>

        <div className="about-manifesto">
          <div className="manifesto-left">
            <span className="eyebrow">Manifesto</span>
            <p>We believe premium feels like nothing is extra.</p>
          </div>
          <div className="manifesto-right">
            <span className="manifesto-mark" aria-hidden="true">ELITE / STUDIO ©26</span>
          </div>
        </div>
      </div>
    </section>
  );
}