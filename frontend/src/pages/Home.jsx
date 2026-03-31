import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3+', label: 'Years Experience' },
  { value: '24/7', label: 'Support Available' },
]

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Web Design',
    desc: 'Pixel-perfect, responsive interfaces that captivate visitors and convert them into customers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Fast, scalable, and SEO-optimised websites built with modern technologies.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Logo & Branding',
    desc: 'Memorable logos and brand identities that tell your story and stand out from the crowd.',
  },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStart India',
    text: 'GrowWithWeb transformed our online presence completely. The website they built is not just beautiful — it\'s a sales machine. Our enquiries tripled within the first month.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'CEO, Bloom Boutique',
    text: 'The branding work they did for us was exceptional. Parth and Paras truly understood our vision. Professional, creative, and always on time.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    role: 'Director, UrbanSpace Interiors',
    text: 'From ideation to delivery, the team was amazing. The website speed and design quality surpassed all our expectations. Highly recommended!',
    rating: 5,
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const handler = e => {
      const { clientX, clientY } = e
      const { width, height, left, top } = el.getBoundingClientRect()
      const x = ((clientX - left) / width - 0.5) * 12
      const y = ((clientY - top) / height - 0.5) * 12
      el.style.setProperty('--tx', `${x}px`)
      el.style.setProperty('--ty', `${y}px`)
    }
    el.addEventListener('mousemove', handler)
    return () => el.removeEventListener('mousemove', handler)
  }, [])

  return (
    <main className="home">
      {/* Hero */}
      <section className="home__hero" ref={heroRef}>
        <div className="home__hero-orb home__hero-orb--1" />
        <div className="home__hero-orb home__hero-orb--2" />
        <div className="home__hero-grid" />

        <div className="container home__hero-content">
          <div className="home__hero-badge">
            <span className="badge-dot" />
            Available for projects · Ghaziabad, UP
          </div>

          <h1 className="home__hero-title">
            We Build Websites<br />
            That <span className="hero-highlight">
              Grow
              <svg className="hero-underline" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9 C40 3, 100 1, 198 8" stroke="#00f0a0" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> Your Business
          </h1>

          <p className="home__hero-sub">
            GrowWithWeb is a Ghaziabad-based web design & development agency. We craft stunning, high-performance websites and brand identities that convert visitors into customers.
          </p>

          <div className="home__hero-actions">
            <Link to="/contact" className="btn-primary home__hero-cta">
              Start a Project
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
              </svg>
            </Link>
          </div>

          <div className="home__hero-trust">
            <div className="trust-avatars">
              {[0,1,2,3].map(i => (
                <div key={i} className="trust-avatar" style={{ background: `hsl(${i*60+140}, 60%, 30%)` }}>
                  {['R','A','P','S'][i]}
                </div>
              ))}
            </div>
            <p><strong>50+ happy clients</strong> from across India</p>
          </div>
        </div>

        {/* Floating card */}
        <div className="home__hero-card">
          <div className="hero-card-header">
            <div className="hero-card-dot" />
            <span>Latest Project</span>
          </div>
          <p className="hero-card-title">E-Commerce Store</p>
          <p className="hero-card-sub">Built in 7 days · 98% Lighthouse score</p>
          <div className="hero-card-bars">
            <div className="hero-card-bar" style={{width:'90%'}}>Performance <span>90</span></div>
            <div className="hero-card-bar" style={{width:'98%'}}>Accessibility <span>98</span></div>
            <div className="hero-card-bar" style={{width:'100%'}}>Best Practices <span>100</span></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home__stats">
        <div className="container home__stats-grid">
          {stats.map(s => (
            <div key={s.label} className="home__stat">
              <span className="home__stat-value">{s.value}</span>
              <span className="home__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section home__services">
        <div className="container">
          <div className="home__services-header">
            <div>
              <div className="section-tag">What We Do</div>
              <h2 className="section-title">Services Built to<br /><span>Accelerate Growth</span></h2>
            </div>
            <Link to="/services" className="btn-secondary">
              All Services →
            </Link>
          </div>
          <div className="home__services-grid">
            {services.map(s => (
              <div key={s.title} className="home__service-card card">
                <div className="home__service-icon">{s.icon}</div>
                <h3 className="home__service-title">{s.title}</h3>
                <p className="home__service-desc">{s.desc}</p>
                <Link to="/services" className="home__service-link">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section home__process">
        <div className="container">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">From Idea to <span>Launch</span></h2>
          <p className="section-subtitle" style={{marginBottom:'56px'}}>
            Our streamlined 4-step process ensures your project is delivered on time, on budget, and beyond expectations.
          </p>
          <div className="home__process-steps">
            {[
              { n:'01', title:'Discovery Call', desc:'We understand your goals, audience, and competition to define the perfect strategy.' },
              { n:'02', title:'Design & Prototype', desc:'Our designers craft visually stunning wireframes and prototypes for your approval.' },
              { n:'03', title:'Build & Develop', desc:'We turn the approved design into a fast, responsive, SEO-ready website.' },
              { n:'04', title:'Launch & Support', desc:'Go live with confidence. We provide post-launch support and ongoing maintenance.' },
            ].map((step, i) => (
              <div key={step.n} className="home__process-step">
                <div className="process-step-num">{step.n}</div>
                {i < 3 && <div className="process-step-line" />}
                <h4 className="process-step-title">{step.title}</h4>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home__testimonials">
        <div className="container">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">What Our <span>Clients Say</span></h2>
          <div className="home__testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="home__testimonial card">
                <div className="testimonial-stars">
                  {Array.from({length: t.rating}).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home__cta-banner">
        <div className="home__cta-banner-glow" />
        <div className="container home__cta-banner-inner">
          <div>
            <h2 className="home__cta-banner-title">Ready to Build<br />Something <span>Incredible?</span></h2>
            <p className="home__cta-banner-sub">Get a free consultation and project quote from our team today.</p>
          </div>
          <div className="home__cta-banner-actions">
            <Link to="/contact" className="btn-primary" style={{fontSize:'16px', padding:'16px 32px'}}>
              Get Free Consultation
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a href="https://wa.me/917007736647" target="_blank" rel="noreferrer" className="btn-secondary home__cta-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
