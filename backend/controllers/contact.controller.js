const Contact = require('../models/contact.model')
const { sendEnquiryNotification, sendAutoReply } = require('../services/email.service')

// POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body

    // Basic validation
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields: name, email, service, and message.',
      })
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      service,
      budget: budget || 'Not specified',
      message: message.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
    })

    console.log(`📩 New enquiry saved: ${contact._id} from ${contact.name} (${contact.email})`)

    // Send emails (non-blocking — don't fail the response if email fails)
    sendEnquiryNotification(contact)
    sendAutoReply({ name: contact.name, email: contact.email, service: contact.service })

    return res.status(201).json({
      success: true,
      message: 'Your enquiry has been received! We\'ll get back to you within 24 hours.',
      id: contact._id,
    })

  } catch (err) {
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({
        success: false,
        message: messages[0] || 'Validation failed.',
      })
    }

    console.error('❌ Contact submission error:', err)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try WhatsApp or email us directly.',
    })
  }
}

// GET /api/contact — get all enquiries (protected by simple token)
const getAllContacts = async (req, res) => {
  try {
    const adminToken = req.headers['x-admin-token']
    if (adminToken !== process.env.ADMIN_TOKEN) {
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-ipAddress -__v')

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    })
  } catch (err) {
    console.error('❌ Fetch contacts error:', err)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

// PATCH /api/contact/:id/status — update enquiry status
const updateStatus = async (req, res) => {
  try {
    const adminToken = req.headers['x-admin-token']
    if (adminToken !== process.env.ADMIN_TOKEN) {
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    const { status } = req.body
    const validStatuses = ['new', 'contacted', 'converted', 'closed']
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' })
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' })
    }

    return res.status(200).json({ success: true, data: contact })
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

module.exports = { submitContact, getAllContacts, updateStatus }
