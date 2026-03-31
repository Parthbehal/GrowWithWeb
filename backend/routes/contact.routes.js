const express = require('express')
const router = express.Router()
const {
  submitContact,
  getAllContacts,
  updateStatus,
} = require('../controllers/contact.controller')

// Public
router.post('/', submitContact)

// Admin (protected by x-admin-token header)
router.get('/', getAllContacts)
router.patch('/:id/status', updateStatus)

module.exports = router
