require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const contactRoutes = require('./routes/contact.routes')
const { notFound, errorHandler } = require('./middleware/error.middleware')

const app = express()
const PORT = process.env.PORT || 5000

// ─── Middleware ────────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-admin-token'],
  credentials: true,
}))

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Routes ───────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 GrowWithWeb API is running',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/contact',
      health: 'GET /api/health',
    },
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/contact', contactRoutes)

// ─── 404 + Error Handlers ─────────────────────────────────
app.use(notFound)
app.use(errorHandler)

// ─── MongoDB + Server Start ───────────────────────────────
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    console.log('✅ MongoDB connected successfully')

    app.listen(PORT, () => {
      console.log(`
╔══════════════════════════════════════════╗
║     🌱 GrowWithWeb Backend Running       ║
╠══════════════════════════════════════════╣
║  Port    : http://localhost:${PORT}          ║
║  API     : http://localhost:${PORT}/api      ║
║  Health  : http://localhost:${PORT}/api/health║
║  Env     : ${(process.env.NODE_ENV || 'development').padEnd(30)}║
╚══════════════════════════════════════════╝
      `)
    })
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message)
    console.error('👉 Check your MONGO_URI in the .env file')
    process.exit(1)
  }
}

startServer()
