import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'web-design',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Design',
    tagline: 'Beautiful interfaces that convert',
    desc: 'We design visually stunning, conversion-focused websites tailored to your brand. From wireframes to pixel-perfect prototypes, every design decision is intentional.',
    features: ['Custom UI/UX Design', 'Mobile-First Responsive Layouts', 'Landing Pages & Funnels', 'Figma Prototypes', 'Design System Creation', 'User Flow Optimization'],
    color: '#00f0a0',
  },
  {
    id: 'web-development',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Web Development',
    tagline: 'Fast, scalable, and reliable',
    desc: 'We build robust, high-performance websites and web applications. Our code is clean, maintainable, and built on modern tech stacks that scale with your business.',
    features: ['React / Next.js Apps', 'WordPress Development', 'E-Commerce (Shopify/WooCommerce)', 'API Integration', 'Speed & SEO Optimization', 'CMS Setup & Training'],
    color: '#00c8ff',
  },
  {
    id: 'logo-design',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Logo Design',
    tagline: 'Make your first impression unforgettable',
    desc: 'A great logo is the foundation of your brand identity. We design timeless, versatile logos that communicate your values and resonate with your target audience.',
    features: ['Logo Concepts & Variations', 'Vector Files (SVG/AI/EPS)', 'Dark & Light Versions', 'Favicon & App Icon', 'Usage Guidelines', '3 Revision Rounds'],
    color: '#a855f7',
  },
  {
    id: 'brand-identity',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Brand Identity',
    tagline: 'A complete brand system, not just a logo',
    desc: 'Beyond logos, we craft full brand identities — color palettes, typography, imagery styles, and brand guidelines that ensure consistency across every touchpoint.',
    features: ['Brand Strategy & Positioning', 'Color Palette & Typography', 'Business Card Design', 'Social Media Kit', 'Brand Guidelines PDF', 'Stationery Design'],
    color: '#f59e0b',
  },
]

const process = [
  { step: '01', title: 'Brief & Discovery', desc: 'Deep-dive into your goals, audience, and competitors.' },
  { step: '02', title: 'Research & Strategy', desc: 'We develop a creative direction and content strategy.' },
  { step: '03', title: 'Design & Development', desc: 'We build, review, and refine until it\'s perfect.' },
  { step: '04', title: 'Delivery & Support', desc: 'Launch with full handoff and ongoing support.' },
]

export default function Services() {
  return (
    <main className="services-page" style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section className="services-hero section">
        <div className="services-hero__orb" />
        <div className="container">
          <div className="section-tag">Our Services</div>
          <h1 className="section-title" style={{ maxWidth: 640 }}>
            Everything You Need to <span>Dominate Online</span>
          </h1>
          <p className="section-subtitle">
            From concept to launch — web design, development, and brand identity services crafted to grow your business in Ghaziabad and beyond.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.id} className={`services-card card ${i % 2 === 1 ? 'services-card--alt' : ''}`}>
                <div className="services-card__content">
                  <div className="services-card__icon" style={{ '--service-color': s.color }}>
                    {s.icon}
                  </div>
                  <div className="services-card__tag">{s.tagline}</div>
                  <h2 className="services-card__title">{s.title}</h2>
                  <p className="services-card__desc">{s.desc}</p>
                  <ul className="services-card__features">
                    {s.features.map(f => (
                      <li key={f}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#00f0a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary" style={{ marginTop: 28 }}>
                    Get a Quote →
                  </Link>
                </div>
                <div className="services-card__visual" style={{ '--service-color': s.color }}>
                  <div className="services-visual-circle" />
                  <div className="services-visual-icon">{s.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section services-process">
        <div className="container">
          <div className="section-tag">Our Process</div>
          <h2 className="section-title">How We <span>Work</span></h2>
          <div className="services-process-grid">
            {process.map(p => (
              <div key={p.step} className="services-process-card card">
                <span className="services-process-num">{p.step}</span>
                <h4 className="services-process-title">{p.title}</h4>
                <p className="services-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta">
        <div className="container services-cta-inner">
          <h2 className="section-title">Not Sure Which Service<br />You <span>Need?</span></h2>
          <p className="section-subtitle">
            Drop us a message and we'll help you figure out the best plan of action for your goals.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 30px' }}>
              Book a Free Call →
            </Link>
            <Link to="/pricing" className="btn-secondary">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
