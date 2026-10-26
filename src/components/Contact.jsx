import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email address';
    if (!form.type) newErrors.type = 'Select a project type';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSuccess(true);
      setForm({ name: '', email: '', type: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-eyebrow">
              <span className="eyebrow">GET IN TOUCH / 08—09</span>
              <span className="contact-eyebrow-line" aria-hidden="true"></span>
            </div>
            <h2 id="contact-heading" className="contact-title">
              Let's make it
              <br />
              <span>expensive.</span>
            </h2>
            <p className="contact-intro">
              Tell us about your project. We reply within 24 hours on weekdays.
              This is a portfolio concept — no messages are sent to a server in this demo.
            </p>

            <div className="contact-meta">
              <div className="contact-meta-item">
                <strong>Portfolio Demo</strong>
                <span>Frontend validation only — honest behavior</span>
              </div>
              <div className="contact-meta-item">
                <strong>Response</strong>
                <span>Concept: Typically within one business day</span>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {isSuccess && (
                <div className="contact-success" role="status" aria-live="polite">
                  <strong>Message validated — demo mode active.</strong>
                  <p>
                    This form is frontend-only. In production, this would connect to your API,
                    email service, or headless CMS. Your data was checked locally and not sent anywhere.
                  </p>
                </div>
              )}

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    required
                  />
                  {errors.name && <span id="error-name" className="form-error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    required
                  />
                  {errors.email && <span id="error-email" className="form-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="type">Project Type *</label>
                <select
                  id="type"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  aria-invalid={!!errors.type}
                  aria-describedby={errors.type ? 'error-type' : undefined}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Development">Development</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
                {errors.type && <span id="error-type" className="form-error">{errors.type}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals, timeline, and budget range..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  required
                ></textarea>
                {errors.message && <span id="error-message" className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="contact-submit">
                Send Message <span aria-hidden="true">→</span>
              </button>

              <p className="form-hint">
                By submitting, you agree this is a demo with no backend. No data is stored.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}