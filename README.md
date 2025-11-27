# EventHub - Event Management System

A modern, full-stack event management application built with Next.js 14, NextAuth.js, and Express.js.

## 🎯 Project Overview

EventHub is a comprehensive event management platform that allows users to discover, create, and manage events. The application features authentication, protected routes, real-time data management, and a beautiful, responsive UI.

---

## ✨ Features

### Public Features
- 🏠 **Landing Page** with 7 sections (Hero, Features, Events, Stats, Testimonials, CTA)
- 📋 **Event Listing** with search and category filtering
- 🔍 **Event Details** page with full information
- 📄 **About Page** with mission and values
- 📞 **Contact Page** with contact form
- 📱 **Fully Responsive** design for all devices

### Protected Features (Requires Login)
- ➕ **Create Events** with comprehensive form
- 🛠️ **Manage Events** (view and delete)
- 👤 **User Profile** dropdown in navbar

### Authentication
- 🔐 **Google OAuth** social login
- 📧 **Email/Password** credentials login
- 🔒 **Protected Routes** with middleware
- 🚪 **Separate** Login and Register pages

### UI/UX
- 🎨 **Modern Design** with Tailwind CSS
- ✨ **Smooth Animations** on all pages
- 🎭 **SweetAlert2** for beautiful confirmations
- 🔔 **Toast Notifications** for user feedback
- 📊 **Loading States** throughout the app

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **NextAuth.js v5** (Authentication)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **SweetAlert2** (Alerts)
- **React Hot Toast** (Notifications)

### Backend
- **Express.js** (REST API)
- **CORS** (Cross-origin requests)
- **In-memory database** (Demo - can be replaced with MongoDB/PostgreSQL)

---

## 📁 Project Structure

```
event-management-client/
├── app/
│   ├── (routes)/
│   │   ├── page.jsx                 # Landing page
│   │   ├── events/
│   │   │   ├── page.jsx             # Events list
│   │   │   └── [id]/page.jsx        # Event details
│   │   ├── add-event/page.jsx       # Create event (protected)
│   │   ├── manage-events/page.jsx   # Manage events (protected)
│   │   ├── login/page.jsx           # Login page
│   │   ├── register/page.jsx        # Register page
│   │   ├── about/page.jsx           # About page
│   │   └── contact/page.jsx         # Contact page
│   ├── api/
│   │   └── auth/[...nextauth]/      # NextAuth API routes
│   ├── layout.jsx                    # Root layout
│   └── globals.css                   # Global styles
├── components/
│   ├── Navbar.jsx                    # Navigation bar
│   ├── Footer.jsx                    # Footer
│   ├── Hero.jsx                      # Hero section
│   ├── Features.jsx                  # Features section
│   ├── PopularEvents.jsx             # Popular events
│   ├── Stats.jsx                     # Statistics
│   ├── Testimonials.jsx              # Testimonials
│   ├── CTA.jsx                       # Call to action
│   ├── AddEventForm.jsx              # Add event form
│   └── ManageEventsClient.jsx        # Manage events client
├── lib/
│   └── auth.js                       # NextAuth configuration
├── middleware.js                     # Route protection
└── .env.local                        # Environment variables

event-management-server/
├── server.js                         # Express server with CRUD
├── .env                              # Server environment
└── package.json                      # Server dependencies
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Google OAuth credentials (optional, for social login)

### Step 1: Clone Repository
```bash
git clone <your-repo-url>
```

### Step 2: Setup Client (Frontend)
```bash
cd event-management-client
npm install
```

Create `.env.local`:
```env
# NextAuth
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 3: Setup Server (Backend)
```bash
cd ../event-management-server
npm install
```

Create `.env`:
```env
PORT=5000
```

### Step 4: Run the Application

**Terminal 1 - Start Backend:**
```bash
cd event-management-server
npm run dev
```
Server runs on: `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd event-management-client
npm run dev
```
Client runs on: `http://localhost:3000`

---

## 🔐 Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google+ API**
4. Go to **Credentials** → Create **OAuth 2.0 Client ID**
5. Add authorized redirect URI:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
6. Copy **Client ID** and **Client Secret** to `.env.local`

---

## 🧪 Testing

### Demo Credentials
- **Email:** demo@example.com
- **Password:** password123

### Test Scenarios

**1. Public Routes:**
- ✅ Landing page loads with 7 sections
- ✅ Events page shows all events
- ✅ Search and filter work
- ✅ Event details page displays correctly
- ✅ About and Contact pages load

**2. Authentication:**
- ✅ Login with demo credentials
- ✅ Register new account
- ✅ Google OAuth (if configured)
- ✅ Logout functionality

**3. Protected Routes:**
- ✅ Add Event requires login
- ✅ Manage Events requires login
- ✅ Redirects to login when not authenticated

**4. CRUD Operations:**
- ✅ Create new event
- ✅ View event in list
- ✅ View event details
- ✅ Delete event with SweetAlert confirmation

---

## 📡 API Endpoints

### Server: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/events` | Get all events |
| GET | `/api/events/:id` | Get single event |
| POST | `/api/events` | Create new event |
| PUT | `/api/events/:id` | Update event |
| DELETE | `/api/events/:id` | Delete event |
| GET | `/health` | Health check |

---

## 🎨 UI Requirements Checklist

### Landing Page (7 Sections)
- ✅ Navbar - logo, 4+ routes, login/register, sticky, responsive
- ✅ After login - dropdown with user info, Add Event, Manage Events
- ✅ Hero - headline, subtitle, CTA, background
- ✅ Features - 6 feature cards with icons and hover effects
- ✅ Popular Events - event cards with uniform design
- ✅ Stats - 4 statistics with animations
- ✅ Testimonials - 3 user reviews
- ✅ CTA - final call-to-action section
- ✅ Footer - links, social icons, copyright

### Login/Register
- ✅ Social login (Google)
- ✅ Credentials form
- ✅ Separate routes
- ✅ Redirect to home after login

### Item List (Events)
- ✅ Page title + description
- ✅ Search bar (functional)
- ✅ Category filter (functional)
- ✅ Grid of 6+ cards
- ✅ Each card: image/icon, title, description (ellipsis), price, details button

### Item Details (Event)
- ✅ Large banner/image
- ✅ Event title
- ✅ Full description
- ✅ Meta info (price/date/location/time)
- ✅ Back button

### Protected: Add Event
- ✅ Login required (middleware)
- ✅ Form with all fields
- ✅ Submit button
- ✅ Success toast
- ✅ Server integration

### Protected: Manage Events
- ✅ Login required (middleware)
- ✅ List all events
- ✅ View and Delete actions
- ✅ Clean, responsive layout
- ✅ SweetAlert2 confirmation

### Overall UI
- ✅ Consistent spacing and layouts
- ✅ Clear typography hierarchy
- ✅ Responsive (mobile/tablet/desktop)
- ✅ Hover/focus states
- ✅ Smooth animations
- ✅ Loading states

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd event-management-client
vercel --prod
```

### Backend (Railway/Render/Heroku)
```bash
cd event-management-server
# Follow your hosting provider's deployment guide
```

Update `NEXT_PUBLIC_API_URL` in `.env.local` with your deployed backend URL.

---

## 📝 Development Notes

- **In-memory database:** Current implementation uses an in-memory array. For production, replace with MongoDB, PostgreSQL, or any database.
- **Authentication:** Demo implementation allows any email/password. In production, validate against real user database.
- **File uploads:** Current implementation uses emoji. For real images, implement file upload with services like Cloudinary or AWS S3.

---

## 🐛 Known Limitations

- In-memory database (data resets on server restart)
- No real user registration system (demo only)
- No email verification
- No password reset functionality
- No real file upload for event images

These are intentional for demo purposes and can be extended for production.

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)

---

**Thank you for reviewing my submission! 🎉**