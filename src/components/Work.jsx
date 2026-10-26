import './Work.css';

const PROJECTS = [
  {
    number: '01',
    title: 'AUREL',
    category: 'Luxury Skincare — E-commerce',
    type: 'CONCEPT PROJECT',
    description: 'Editorial product system focused on type, texture, and quiet conversion.',
    visual: 'aurel',
  },
  {
    number: '02',
    title: 'FORM & FIELD',
    category: 'Furniture & Interiors',
    type: 'CONCEPT PROJECT',
    description: 'A calm, grid-driven showcase for objects that deserve space.',
    visual: 'form',
  },
  {
    number: '03',
    title: 'OBJECTS',
    category: 'Contemporary Lifestyle Brand',
    type: 'CONCEPT PROJECT',
    description: 'A modular brand world built from abstract forms and precise spacing.',
    visual: 'objects',
  },
  {
    number: '04',
    title: 'SIGNAL',
    category: 'SaaS Analytics Dashboard',
    type: 'CONCEPT PROJECT',
    description: 'Dense data made legible. No charts for decoration, only clarity.',
    visual: 'signal',
  },
];

export default function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="work-header">
          <div className="work-eyebrow">
            <span className="eyebrow">SELECTED WORK / 02—05</span>
            <span className="work-eyebrow-line" aria-hidden="true"></span>
          </div>
          <h2 id="work-heading" className="work-title">
            A few ideas, <br />
            <span>made tangible.</span>
          </h2>
          <p className="work-intro">
            Four fictional concepts to demonstrate taste and system thinking.
            Not real clients — just how we would approach them.
          </p>
        </div>

        <div className="work-grid">
          {PROJECTS.map((project) => (
            <article key={project.number} className="work-card" tabIndex={0}>
              <div className="work-card-visual-wrap">
                <div className={`work-visual work-visual--${project.visual}`}>
                  {project.visual === 'aurel' && (
                    <>
                      <span className="v-aurel-circle"></span>
                      <span className="v-aurel-line"></span>
                      <span className="v-aurel-label">AUREL / 01</span>
                    </>
                  )}
                  {project.visual === 'form' && (
                    <>
                      <div className="v-form-grid">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      <span className="v-form-block"></span>
                    </>
                  )}
                  {project.visual === 'objects' && (
                    <>
                      <span className="v-objects-circle"></span>
                      <span className="v-objects-square"></span>
                      <span className="v-objects-dot"></span>
                    </>
                  )}
                  {project.visual === 'signal' && (
                    <>
                      <div className="v-signal-lines">
                        <i></i><i></i><i></i><i></i>
                      </div>
                      <span className="v-signal-bar"></span>
                    </>
                  )}
                </div>
                <div className="work-card-top">
                  <span className="work-number">{project.number}</span>
                  <span className="work-type">{project.type}</span>
                </div>
              </div>

              <div className="work-card-content">
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-category">{project.category}</p>
                <p className="work-card-desc">{project.description}</p>
              </div>

              <span className="work-card-hover" aria-hidden="true"></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}