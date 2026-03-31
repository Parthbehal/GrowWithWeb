import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Perfect for small businesses & startups',
    price: null,
    highlight: false,
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Setup',
      'Google Analytics',
      '1 Month Free Support',
      'Logo Design (1 concept)',
      'Social Media Banner (2)',
    ],
    notIncluded: ['E-Commerce Setup', 'Custom Animations', 'Priority Support', 'Brand Identity Kit'],
    cta: 'Get Basic Quote',
    icon: '🌱',
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Ideal for growing businesses',
    price: null,
    highlight: true,
    features: [
      'Up to 10 Pages',
      'Custom UI/UX Design',
      'Advanced SEO Setup',
      'Blog / CMS Integration',
      'Speed Optimization',
      '3 Months Free Support',
      'Logo Design (3 concepts)',
      'Brand Color & Typography',
      'Social Media Kit (10 assets)',
      'WhatsApp Chat Integration',
    ],
    notIncluded: ['E-Commerce Setup', 'Priority Support'],
    cta: 'Get Standard Quote',
    icon: '⚡',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Full-scale digital transformation',
    price: null,
    highlight: false,
    features: [
      'Unlimited Pages',
      'E-Commerce Integration',
      'Custom Animations & Effects',
      'Full Brand Identity Kit',
      'Advanced SEO + Blog',
      'Payment Gateway Integration',
      '6 Months Free Support',
      'Logo + Full Brand Guide',
      'Social Media Kit (25 assets)',
      'Admin Dashboard',
      'Priority Support (24/7)',
      'Performance Monitoring',
    ],
    notIncluded: [],
    cta: 'Get Premium Quote',
    icon: '🚀',
  },
]

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'A basic website typically takes 7–10 days. Standard projects take 2–3 weeks, and premium builds can take 4–6 weeks depending on complexity. We always deliver on the agreed timeline.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes! Basic plans include 2 revision rounds, Standard includes 3, and Premium includes unlimited revisions until you\'re 100% satisfied.',
  },
  {
    q: 'What information do you need to get started?',
    a: 'We need your business details, brand assets (if any), content (text/images), and a reference for the style you like. If you don\'t have these, we can help create them.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Absolutely. Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices — tested across all major browsers.',
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'We can guide you on choosing the best hosting and domain for your needs, and help set everything up. Hosting costs are separate and billed directly to you.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes, you can upgrade at any time. We\'ll quote the difference and seamlessly scale your project to the next tier.',
  },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section className="pricing-hero section">
        <div className="pricing-hero__orb" />
        <div className="container">
          <div className="section-tag">Pricing</div>
          <h1 className="section-title">Transparent Pricing,<br /><span>Zero Surprises</span></h1>
          <p className="section-subtitle">
            Every project is unique, so we offer custom quotes tailored to your exact needs. Choose a plan that fits, and we'll send you a detailed proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-grid">
            {plans.map(plan => (
              <div key={plan.id} className={`pricing-card card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
                {plan.highlight && (
                  <div className="pricing-card__popular">Most Popular</div>
                )}
                <div className="pricing-card__icon">{plan.icon}</div>
                <h3 className="pricing-card__name">{plan.name}</h3>
                <p className="pricing-card__tagline">{plan.tagline}</p>

                <div className="pricing-card__price">
                  <span className="pricing-card__price-label">Custom Quote</span>
                  <span className="pricing-card__price-sub">based on your requirements</span>
                </div>

                <Link
                  to={`/contact?plan=${plan.id}`}
                  className={plan.highlight ? 'btn-primary' : 'btn-secondary'}
                  style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
                >
                  {plan.cta} →
                </Link>

                <div className="pricing-divider" />

                <ul className="pricing-features">
                  {plan.features.map(f => (
                    <li key={f} className="pricing-feature pricing-feature--included">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#00f0a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map(f => (
                    <li key={f} className="pricing-feature pricing-feature--excluded">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#55556a" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            All prices are in INR and finalized after a free discovery call. No hidden charges.
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section pricing-addons">
        <div className="container">
          <div className="section-tag">Add-Ons</div>
          <h2 className="section-title">Enhance Your <span>Package</span></h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            Need something extra? These add-ons can be bundled with any plan.
          </p>
          <div className="addons-grid">
            {[
              { icon: '🎯', title: 'Google My Business Setup', desc: 'Get found locally on Google Maps and Search.' },
              { icon: '📱', title: 'Social Media Setup', desc: 'Fully branded profiles on Instagram, Facebook & LinkedIn.' },
              { icon: '📊', title: 'Monthly Maintenance', desc: 'Content updates, backups, security patches every month.' },
              { icon: '🔍', title: 'Advanced SEO Package', desc: 'Keyword research, on-page and off-page SEO optimization.' },
              { icon: '💬', title: 'Live Chat Integration', desc: 'Tawk.to or custom chat widget setup on your website.' },
              { icon: '📧', title: 'Email Marketing Setup', desc: 'Mailchimp / Brevo integration with templates & automation.' },
            ].map(a => (
              <div key={a.title} className="addon-card card">
                <span className="addon-icon">{a.icon}</span>
                <h4 className="addon-title">{a.title}</h4>
                <p className="addon-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pricing-faq">
        <div className="container pricing-faq-inner">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Common <span>Questions</span></h2>
          <div className="faq-list" style={{ marginTop: 48 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <svg
                    className="faq-chevron"
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pricing-cta">
        <div className="pricing-cta-glow" />
        <div className="container pricing-cta-inner">
          <h2 className="section-title">Still Not Sure?<br /><span>Let's Talk.</span></h2>
          <p className="section-subtitle">
            Book a free 30-minute consultation call and we'll help you pick the perfect plan.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '15px 30px' }}>
              Book Free Consultation →
            </Link>
            <a href="https://wa.me/917007736647?text=Hi! I want to discuss pricing for my project." target="_blank" rel="noreferrer" className="btn-secondary">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
