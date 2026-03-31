# GrowWithWeb — Backend API

Node.js + Express + MongoDB backend for the GrowWithWeb contact form.

## Features
- ✅ POST `/api/contact` — saves enquiry to MongoDB
- ✅ Email notification to `parasjainjain89@gmail.com` on every submission
- ✅ Auto-reply email sent to the person who submitted
- ✅ Beautiful HTML email templates
- ✅ Admin endpoints to view & manage enquiries
- ✅ Input validation + error handling

---

## Quick Setup

### 1. Install dependencies
```bash
cd growwithweb-backend
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Then open `.env` and fill in your values (see below).

### 3. Run the server
```bash
# Development (auto-restart on changes)
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:5000`

---

## Environment Variables (`.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: `5000`) |
| `MONGO_URI` | Your MongoDB connection string |
| `EMAIL_USER` | Your Gmail address (`parasjainjain89@gmail.com`) |
| `EMAIL_PASS` | Gmail **App Password** (NOT your real password) |
| `NOTIFY_EMAIL` | Where to send enquiry alerts (`parasjainjain89@gmail.com`) |
| `FRONTEND_URL` | Your frontend URL (for CORS) |
| `ADMIN_TOKEN` | Secret token for admin endpoints (make something up) |

---

## Getting your MongoDB URI

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free cluster (M0 is free forever)
3. Click **Connect** → **Drivers** → copy the URI
4. Replace `<password>` with your DB user password
5. Paste it as `MONGO_URI` in your `.env`

Example:
```
MONGO_URI=mongodb+srv://paras:mypassword123@cluster0.abcde.mongodb.net/growwithweb
```

---

## Getting your Gmail App Password

> ⚠️ Gmail blocks regular passwords for SMTP. You need an **App Password**.

1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (required)
3. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Select app: **Mail**, device: **Other** → type "GrowWithWeb"
5. Copy the 16-character password
6. Paste it as `EMAIL_PASS` in your `.env`

---

## API Endpoints

### `POST /api/contact` — Submit enquiry (public)
```json
// Request body
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "+91 98765 43210",
  "service": "Web Design",
  "budget": "₹10,000 – ₹25,000",
  "message": "I need a website for my business."
}

// Success response (201)
{
  "success": true,
  "message": "Your enquiry has been received!",
  "id": "664abc123..."
}
```

### `GET /api/contact` — View all enquiries (admin)
Add header: `x-admin-token: YOUR_ADMIN_TOKEN`

### `PATCH /api/contact/:id/status` — Update status (admin)
Add header: `x-admin-token: YOUR_ADMIN_TOKEN`
Body: `{ "status": "contacted" }` (new / contacted / converted / closed)

### `GET /api/health` — Health check
```json
{ "success": true, "status": "healthy", "db": "connected" }
```

---

## Project Structure
```
growwithweb-backend/
├── server.js                    # Entry point
├── package.json
├── .env.example                 # Copy to .env
├── models/
│   └── contact.model.js         # MongoDB schema
├── controllers/
│   └── contact.controller.js    # Business logic
├── routes/
│   └── contact.routes.js        # Route definitions
├── services/
│   └── email.service.js         # Nodemailer email logic
└── middleware/
    └── error.middleware.js      # 404 + error handlers
```
