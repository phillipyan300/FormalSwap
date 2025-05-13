# Oxford Formal Swap — MVP Design Doc

This document outlines the technical architecture, feature set, and rollout plan for a minimal viable product (MVP) of the Oxford Formal Swap platform.

---

## ✅ Deployment Stack

- **Frontend**: [Vercel](https://vercel.com/) — Vite + React
- **Backend**: [Heroku](https://www.heroku.com/) — FastAPI (or Go, later)
- **Database**: PostgreSQL (Heroku Postgres Add-on)

👉 *Use Heroku's managed Postgres; no need to host locally.*

---

## ✅ Key Features

- ✅ Oxford-only user verification (OTP to `@ox.ac.uk`)
- ✅ Public listings marketplace
- ✅ Swap request + accept/decline logic
- ✅ Mutual confirmation = reveal emails
- 🔒 Simple session authentication (JWT or cookie-based)
- 🚫 No in-app chat (keep it lean)
- ⏳ Optional: Auto-expire old listings

---

## ✅ Database Schema

### `Users`
```sql
id | name | college | email | bio | is_verified | created_at
```

### `Listings`
```sql
id | user_id | college | date | guest_capacity | is_active | created_at
```

### `Requests`
```sql
id | from_user_id | to_listing_id | message | status (pending / accepted / declined) | created_at
```

*Optional: add `match_timestamp` or `expires_at` fields later.*

---

## ✅ API Endpoints

| Route                | Method | Description                            |
|----------------------|--------|----------------------------------------|
| `/listings`          | GET    | Public listings                        |
| `/listings`          | POST   | Create or update your listing          |
| `/my-listing`        | GET    | Fetch current user’s listing           |
| `/requests`          | GET    | Requests I’ve sent                     |
| `/requests/incoming` | GET    | Requests for *my* listing              |
| `/requests`          | POST   | Create a request                       |
| `/requests/:id`      | PATCH  | Accept or decline a request            |
| `/users`             | GET    | Get current user                       |
| `/users`             | POST   | Register new user                      |
| `/auth/send-otp`     | POST   | Send email verification OTP            |
| `/auth/verify`       | POST   | Verify OTP and start session           |

---

## ✅ Pages

1. **Landing Page** – Pitch and login
2. **Login / Verification Page** – Enter Oxford email, receive OTP
3. **Marketplace Page** – Browse all available listings
4. **Profile Page** – View/edit your own listing
5. **My Requests Page** – View outgoing requests and statuses
6. **Incoming Requests Page** – View and manage incoming requests

---

## ✅ Key Flow Summary

1. A user visits the site and logs in via their Oxford email
2. They post a listing (date, college, guest capacity)
3. They browse others’ listings and request swaps
4. Listing owners view requests and choose to accept or decline
5. If accepted, both emails are revealed
6. Coordination happens directly via email

---

## 📢 Marketing Plan

Target:
- Visiting students (more flexible schedules)
- JCR/MCR WhatsApp and Facebook groups
- Masters students

Bonus strategies:
- Swag or pint raffle for early users
- Start with 1–2 colleges: Balliol → Trinity → St. Catz

---

## ✅ MVP To-Dos

- [ ] Set up Heroku backend + Postgres
- [ ] Create DB schema
- [ ] Build OTP verification (e.g. with Resend, Postmark)
- [ ] Deploy Vercel frontend
- [ ] Build listings dashboard + form
- [ ] Implement request creation + incoming requests page

---

### Final Tip

> ❌ Don’t build messaging, multi-date listings, or filters yet.  
> ✅ Build only what’s necessary to test the *core idea*: students want to swap formals.

---