# 🌱 GrowWithWeb — Full Stack Project

Complete web project for **GrowWithWeb** — a Ghaziabad-based web design & development agency.

Built with **React + Vite** (frontend) and **Node.js + Express + MongoDB** (backend).

---

## 📁 Project Structure

```
growwithweb-fullstack/
├── package.json          ← Root: run both together with one command
├── frontend/             ← React + Vite app
│   ├── src/
│   │   ├── pages/        ← Home, Services, Portfolio, Pricing, About, Contact
│   │   └── components/   ← Navbar, Footer, WhatsAppFloat
│   └── package.json
└── backend/              ← Node.js + Express API
    ├── server.js
    ├── models/
    ├── controllers/
    ├── routes/
    ├── services/         ← Email (Nodemailer)
    ├── .env.example      ← Copy to .env and fill in
    └── package.json
```

---

## 🚀 Quick Start (Recommended)

### Step 1 — Install all dependencies
```bash
npm run install:all
```

### Step 2 — Configure backend environment
```bash
cd backend
cp .env.example .env
```
Open `backend/.env` and fill in:
- `MONGO_URI` — your MongoDB Atlas connection string
- `EMAIL_USER` — `parasjainjain89@gmail.com`
- `EMAIL_PASS` — your Gmail App Password (see below)
- `NOTIFY_EMAIL` — `parasjainjain89@gmail.com`
- `ADMIN_TOKEN` — any secret string you choose

### Step 3 — Run both frontend & backend together
```bash
cd ..   # back to root if you're in backend/
npm run dev
```

This starts:
- 🟢 **Backend** → `http://localhost:5000`
- 🔵 **Frontend** → `http://localhost:5173`

---

## ⚙️ Run Separately

```bash
# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend
```

---

## 🗄️ MongoDB Setup (Free)

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free **M0** cluster
3. Click **Connect** → **Drivers** → copy the URI
4. Replace `<password>` with your DB user's password
5. Paste into `backend/.env` as `MONGO_URI`

```
MONGO_URI=mongodb+srv://paras:yourpassword@cluster0.xxxxx.mongodb.net/growwithweb
```

---

## 📧 Gmail App Password Setup

> Gmail blocks regular passwords for SMTP — you need an App Password.

1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**
3. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. App: **Mail** | Device: **Other** → name it "GrowWithWeb"
5. Copy the 16-character password → paste as `EMAIL_PASS`

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | API status |
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Submit enquiry form |
| `GET` | `/api/contact` | View all enquiries (admin) |
| `PATCH` | `/api/contact/:id/status` | Update enquiry status (admin) |

Admin endpoints require header: `x-admin-token: YOUR_ADMIN_TOKEN`

---

## 📬 What Happens on Form Submit

1. ✅ Enquiry saved to MongoDB
2. 📧 You receive a **rich HTML notification email** at `parasjainjain89@gmail.com`
3. 💌 Client receives an **auto-reply email** with your WhatsApp links

---

## 🏗️ Build for Production

```bash
# Build frontend
npm run build

# Start backend in production
npm run start:backend
```

The built frontend will be in `frontend/dist/` — deploy to Vercel, Netlify, or serve via Nginx.
For the backend, deploy to Railway, Render, or any VPS.

---

## 👥 Team

- **Parth** — Lead Designer · WhatsApp: +91 70077 36647
- **Paras Jain** — Lead Developer · WhatsApp: +91 78200 47480
- **Email:** parasjainjain89@gmail.com
- **City:** Ghaziabad, UP, India
