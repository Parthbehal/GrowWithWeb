import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Bloom Boutique',
    category: 'Web Design & Development',
    tag: 'E-Commerce',
    desc: 'A full e-commerce store for a premium fashion boutique in Delhi. Features include product filters, wishlist, and Razorpay payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    color: '#ec4899',
    emoji: '👗',
    metrics: [{ label: 'Sales Increase', value: '+140%' }, { label: 'Load Time', value: '1.2s' }],
  },
  {
    id: 2,
    title: 'UrbanSpace Interiors',
    category: 'Web Design',
    tag: 'Portfolio Site',
    desc: 'A visually stunning portfolio site for an interior design firm. Focuses on showcasing projects with a cinematic, full-screen gallery experience.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    color: '#f59e0b',
    emoji: '🏠',
    metrics: [{ label: 'Bounce Rate', value: '-42%' }, { label: 'Lighthouse', value: '97' }],
  },
  {
    id: 3,
    title: 'TechStart India',
    category: 'Brand Identity',
    tag: 'Branding',
    desc: 'Complete brand identity for a Noida-based B2B SaaS startup — logo, color system, typography, pitch deck templates, and social media kit.',
    tech: ['Figma', 'Illustrator', 'Brand Guide'],
    color: '#6366f1',
    emoji: '🚀',
    metrics: [{ label: 'Brand Assets', value: '40+' }, { label: 'Revisions', value: '2 rounds' }],
  },
  {
    id: 4,
    title: 'FreshBite Restaurant',
    category: 'Web Design & Development',
    tag: 'Restaurant',
    desc: 'Online ordering system for a multi-location restaurant chain in Ghaziabad. Includes table booking, menu management, and an admin dashboard.',
    tech: ['React', 'Express.js', 'PostgreSQL'],
    color: '#10b981',
    emoji: '🍽️',
    metrics: [{ label: 'Orders/Day', value: '+85' }, { label: 'Uptime', value: '99.9%' }],
  },
  {
    id: 5,
    title: 'Zenith Fitness',
    category: 'Web Design',
    tag: 'Fitness',
    desc: 'High-energy landing page and membership portal for a premium gym chain. Features class scheduling, trainer profiles, and subscription management.',
    tech: ['React', 'Stripe', 'Firebase'],
    color: '#00c8ff',
    emoji: '💪',
    metrics: [{ label: 'Sign-ups', value: '+230%' }, { label: 'Mobile Score', value: '95' }],
  },
  {
    id: 6,
    title: 'LegalEdge Consultants',
    category: 'Web Design & Development',
    tag: 'Legal / B2B',
    desc: 'Professional website and client portal for a law firm. Includes appointment booking, document upload, and a secure client dashboard.',
    tech: ['Next.js', 'TypeScript', 'AWS S3'],
    color: '#00f0a0',
    emoji: '⚖️',
    metrics: [{ label: 'Enquiries', value: '+95%' }, { label: 'SEO Rank', value: 'Page 1' }],
  },
]

const filters = ['All', 'Web Design & Development', 'Web Design', 'Brand Identity']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section className="portfolio-hero section">
        <div className="portfolio-hero__orb" />
        <div className="container">
          <div className="section-tag">Portfolio</div>
          <h1 className="section-title">Work That <span>Speaks</span> for Itself</h1>
          <p className="section-subtitle">
            Real projects, real results. Browse our collection of websites, apps, and brand identities delivered to clients across India.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container portfolio-filters-wrap">
        <div className="portfolio-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`portfolio-filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="portfolio-grid">
            {filtered.map(p => (
              <div key={p.id} className="portfolio-card card">
                <div className="portfolio-card__visual" style={{ '--proj-color': p.color }}>
                  <div className="portfolio-card__emoji">{p.emoji}</div>
                  <div className="portfolio-card__glow" />
                  <span className="portfolio-card__tag">{p.tag}</span>
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__category">{p.category}</div>
                  <h3 className="portfolio-card__title">{p.title}</h3>
                  <p className="portfolio-card__desc">{p.desc}</p>
                  <div className="portfolio-card__tech">
                    {p.tech.map(t => (
                      <span key={t} className="portfolio-tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="portfolio-card__metrics">
                    {p.metrics.map(m => (
                      <div key={m.label} className="portfolio-metric">
                        <span className="portfolio-metric__value">{m.value}</span>
                        <span className="portfolio-metric__label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section portfolio-cta">
        <div className="container portfolio-cta-inner">
          <h2 className="section-title">Your Project Could Be<br /><span>Next on This List</span></h2>
          <p className="section-subtitle">
            Let's create something remarkable together. Get a free consultation today.
          </p>
          <Link to="/contact" className="btn-primary" style={{ marginTop: 32, fontSize: 16, padding: '15px 30px' }}>
            Start Your Project →
          </Link>
        </div>
      </section>
    </main>
  )
}
