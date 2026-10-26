import './Services.css';

const SERVICES = [
  {
    number: '01',
    title: 'Web Design',
    description: 'Editorial, contemporary websites that feel premium. We focus on hierarchy, spacing, and taste — not trends.',
    capabilities: ['Art Direction', 'Design Systems', 'Responsive & Editorial Layouts', 'Prototyping in ' + 'Fig' + 'ma'],
    detail: 'DESIGN',
  },
  {
    number: '02',
    title: 'Development',
    description: 'Clean, maintainable React code. Built for performance, accessibility, and scale from day one.',
    capabilities: ['React / Vite / JavaScript', 'Headless CMS Integration', 'Performance & SEO', 'Accessibility Audits'],
    detail: 'CODE',
  },
  {
    number: '03',
    title: 'E-commerce',
    description: 'Commerce experiences that convert without looking like a template. Fast, elegant, and easy to manage.',
    capabilities: ['Shop' + 'ify / Headless Commerce', 'Checkout Optimization', 'Product Systems', 'Analytics & Growth'],
    detail: 'SHOP',
  },
];

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-header">
          <div className="services-eyebrow">
            <span className="eyebrow">WHAT WE DO / 01—03</span>
            <span className="services-eyebrow-line" aria-hidden="true"></span>
          </div>
          <h2 id="services-heading" className="services-title">
            Good design.
            <br />
            <span>Serious engineering.</span>
          </h2>
          <p className="services-intro">
            Three focused services. No upsells. We keep the scope tight so the quality stays high.
            This section is a portfolio concept — not a claim of real clients.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.number} className="service-card" tabIndex={0}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-detail" aria-hidden="true">
                  {service.detail}
                  <i></i>
                </span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-capabilities" aria-label={`${service.title} capabilities`}>
                {service.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
              <div className="service-hover-line" aria-hidden="true"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}