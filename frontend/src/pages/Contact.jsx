import React, { useState, useEffect } from 'react'
import './Contact.css'

const API_BASE = 'http://localhost:5000'

const services = [
  'Web Design',
  'Web Development',
  'Logo Design',
  'Brand Identity',
  'Full Website + Branding',
  'Other',
]

const budgets = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  // Pre-select plan from URL query param (from Pricing page)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const plan = params.get('plan')
    if (plan) {
      const map = { basic: 'Web Design', standard: 'Full Website + Branding', premium: 'Full Website + Branding' }
      setForm(f => ({ ...f, service: map[plan] || '' }))
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Could not send message. Please try WhatsApp or email us directly.')
    }
  }

  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section className="contact-hero section">
        <div className="contact-hero__orb" />
        <div className="container">
          <div className="section-tag">Get in Touch</div>
          <h1 className="section-title">Let's Build Something<br /><span>Together</span></h1>
          <p className="section-subtitle">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          {/* Info sidebar */}
          <aside className="contact-info">
            <div className="contact-info-card card">
              <h3 className="contact-info-title">Contact Information</h3>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Location</p>
                    <p className="contact-info-value">Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">Email</p>
                    <a href="mailto:parasjainjain89@gmail.com" className="contact-info-value contact-info-link">
                      parasjainjain89@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon contact-info-icon--wa">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-info-label">WhatsApp</p>
                    <a href="https://wa.me/917007736647" target="_blank" rel="noreferrer" className="contact-info-value contact-info-link">
                      Parth — +91 70077 36647
                    </a>
                    <a href="https://wa.me/917820047480" target="_blank" rel="noreferrer" className="contact-info-value contact-info-link">
                      Paras — +91 78200 47480
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-info-hours">
                <p className="contact-info-label">Working Hours</p>
                <p className="contact-info-value">Mon – Sat: 9 AM – 8 PM IST</p>
                <p className="contact-info-value">Sunday: By Appointment</p>
              </div>

              <div className="contact-wa-btns">
                <a href="https://wa.me/917007736647?text=Hi Parth! I want to discuss a web project." target="_blank" rel="noreferrer" className="contact-wa-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat with Parth
                </a>
                <a href="https://wa.me/917820047480?text=Hi Paras! I want to discuss a web project." target="_blank" rel="noreferrer" className="contact-wa-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat with Paras
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success card">
                <div className="contact-success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out! We'll review your project details and get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: 24 }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit} noValidate>
                <h2 className="contact-form-title">Tell Us About Your Project</h2>
                <p className="contact-form-sub">Fill in the details below and we'll prepare a custom proposal for you.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="rahul@yourcompany.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Needed *</label>
                    <select
                      name="service"
                      className="form-input form-select"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Budget Range</label>
                  <div className="form-budget-options">
                    {budgets.map(b => (
                      <button
                        key={b}
                        type="button"
                        className={`form-budget-btn ${form.budget === b ? 'active' : ''}`}
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details *</label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us about your project — what does your business do, what do you need, any references you like?"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary contact-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="contact-spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Project Details
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
