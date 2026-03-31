import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    icon: '🎯',
    title: 'Results First',
    desc: 'We don\'t just build beautiful websites — we build websites that work. Every design decision is driven by your business goals.',
  },
  {
    icon: '💡',
    title: 'Creative Excellence',
    desc: 'We push creative boundaries while staying true to your brand. Memorable, distinctive, and always on-point.',
  },
  {
    icon: '⚡',
    title: 'Speed & Quality',
    desc: 'We deliver projects on time without compromising on quality. Fast turnarounds, zero shortcuts.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    desc: 'We treat every client like a partner. Your success is our success — we\'re in it for the long run.',
  },
]

const team = [
  {
    name: 'Parth',
    role: 'Co-Founder · Lead Designer',
    bio: 'Parth leads all design work at GrowWithWeb — from UI/UX to brand identities. With a sharp eye for detail and a passion for clean, purposeful design, he turns ideas into visuals that captivate.',
    whatsapp: '917007736647',
    initials: 'P',
    color: '#00f0a0',
    skills: ['UI/UX Design', 'Brand Identity', 'Figma', 'Motion Design'],
  },
  {
    name: 'Paras Jain',
    role: 'Co-Founder · Lead Developer',
    bio: 'Paras is the technical powerhouse behind every GrowWithWeb project. He architects robust, scalable web applications and ensures every site is fast, secure, and SEO-optimised.',
    whatsapp: '917820047480',
    initials: 'PJ',
    color: '#00c8ff',
    skills: ['React / Next.js', 'Node.js', 'SEO', 'Performance'],
  },
]

const milestones = [
  { year: '2021', title: 'Founded in Ghaziabad', desc: 'GrowWithWeb was started with a simple mission — help local businesses build a strong digital presence.' },
  { year: '2022', title: '20 Projects Delivered', desc: 'Crossed our first 20 clients, ranging from startups to established local businesses across NCR.' },
  { year: '2023', title: 'Expanded to Branding', desc: 'Added logo design and brand identity to our services after consistent client demand.' },
  { year: '2024', title: '50+ Happy Clients', desc: 'Delivered 50+ projects and built a reputation for quality, speed, and transparent communication.' },
]

export default function About() {
  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section className="about-hero section">
        <div className="about-hero__orb1" />
        <div className="about-hero__orb2" />
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <div className="section-tag">About Us</div>
            <h1 className="section-title">
              Two Builders.<br />
              One Mission.<br />
              <span>Grow Your Business.</span>
            </h1>
            <p className="section-subtitle">
              GrowWithWeb is a Ghaziabad-based web design & development agency founded by Parth and Paras Jain. We help businesses across India establish a powerful online presence through stunning websites and memorable brand identities.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
              <Link to="/contact" className="btn-primary">Work With Us →</Link>
              <Link to="/portfolio" className="btn-secondary">See Our Work</Link>
            </div>
          </div>
          <div className="about-hero__stats">
            {[
              { v: '50+', l: 'Projects' },
              { v: '3+', l: 'Years' },
              { v: '98%', l: 'Satisfaction' },
              { v: '24/7', l: 'Support' },
            ].map(s => (
              <div key={s.l} className="about-stat-card card">
                <span className="about-stat-val">{s.v}</span>
                <span className="about-stat-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story-inner">
          <div className="about-story__tag-col">
            <div className="section-tag">Our Story</div>
            <div className="about-story__line" />
          </div>
          <div className="about-story__text">
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Started Small,<br /><span>Thinking Big</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
              GrowWithWeb was born out of a simple frustration — too many local businesses in Ghaziabad had no online presence, or worse, a website that was doing them more harm than good.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>
              Parth and Paras, childhood friends and co-founders, decided to change that. Starting in 2021 with just two laptops and an internet connection, they began helping neighborhood businesses get found online.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Fast-forward to today — we've delivered 50+ projects across India, expanded into brand identity, and built a reputation for delivering world-class work at honest prices. We're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-tag">Our Values</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>What We <span>Stand For</span></h2>
          <div className="about-values-grid">
            {values.map(v => (
              <div key={v.title} className="about-value-card card">
                <span className="about-value-icon">{v.icon}</span>
                <h4 className="about-value-title">{v.title}</h4>
                <p className="about-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team">
        <div className="container">
          <div className="section-tag">Meet the Team</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>The People <span>Behind the Work</span></h2>
          <div className="about-team-grid">
            {team.map(member => (
              <div key={member.name} className="about-team-card card">
                <div className="team-card-avatar" style={{ '--member-color': member.color }}>
                  {member.initials}
                  <div className="team-card-avatar-glow" />
                </div>
                <div className="team-card-info">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-bio">{member.bio}</p>
                  <div className="team-card-skills">
                    {member.skills.map(s => (
                      <span key={s} className="team-skill-tag">{s}</span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/${member.whatsapp}?text=Hi ${member.name}! I'd like to discuss a project.`}
                    target="_blank"
                    rel="noreferrer"
                    className="team-wa-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section-tag">Our Journey</div>
          <h2 className="section-title" style={{ marginBottom: 56 }}>How Far We've <span>Come</span></h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-dot">
                  <span>{m.year}</span>
                </div>
                <div className="timeline-content card">
                  <h4 className="timeline-title">{m.title}</h4>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="about-cta-glow" />
        <div className="container about-cta-inner">
          <h2 className="section-title">Let's Build Something<br /><span>Great Together</span></h2>
          <p className="section-subtitle">
            Whether you're a startup or an established business, we'd love to hear about your project.
          </p>
          <Link to="/contact" className="btn-primary" style={{ marginTop: 32, fontSize: 16, padding: '15px 30px' }}>
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  )
}
