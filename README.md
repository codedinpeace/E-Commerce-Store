# E-Commerce-Store
A mordernly designed MERN stack e commerce store


# E-Commerce-Store

A modern MERN stack e‑commerce store. Backend (Express + MongoDB) lives in `backend/`. Frontend (React, Vite) lives in `frontend/`.

---

## Table of contents

* Project overview
* Prerequisites
* Repo structure
* Environment variables
* Install and run (backend)
* Install and run (frontend)
* Run both locally
* Key API endpoints (examples)
* Image uploads
* Git / GitHub tips
* Cleaning node\_modules from the repo
* Notes & best practices

---

## Features

* Authentication (JWT)
* Cart management
* Checkout / orders
* Image upload (Cloudinary or other provider)

---

## Prerequisites

* Node.js (14+)
* npm or yarn
* MongoDB connection string (Atlas or local)
* Cloudinary account (optional, for uploads)
* Git and a GitHub repository

---

## Repo structure

```
E-Commerce-Store/
  ├─ backend/
  │   ├─ src/
  │   │   ├─ controllers/
  │   │   ├─ models/
  │   │   ├─ routes/
  │   │   └─ lib/ (cloudinary, db connection)
  │   └─ package.json
  ├─ frontend/
  │   └─ (React + Vite app)
  └─ .gitignore  (root)
```

---

## Environment variables (create `backend/.env`)

```env
# MongoDB
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/dbname

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Cloudinary (optional)
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=5000
```

Do not commit `.env`.

---

## Install & run — backend

1. Open terminal. Install deps and run:

```bash
cd backend
npm install
# Start dev server (if script exists)
npm run dev
# or
npm start
# fallback (if package.json has no script):
node src/index.js
```

2. Verify server logs for successful MongoDB connection and port.

---

## Install & run — frontend

1. In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

2. Open the printed localhost URL in browser (Vite default: `http://localhost:5173`).

---

## Run backend + frontend together (simple)

Open two terminals and run backend and frontend separately. Optionally use `concurrently` from root:

```bash
# from repo root (optional)
npm i -g concurrently
concurrently "cd backend && npm run dev" "cd frontend && npm run dev"
```

---

## Key API endpoints (examples)

> All endpoints that modify/read user data require authentication. Send header `Authorization: Bearer <token>`.

### Auth

* `POST /auth/register`  — body: `{ name, email, password }`
* `POST /auth/login`     — body: `{ email, password }`

### Cart

* `POST /cart` — add/update product in cart

  * Body: `{ productId }` (productId must be validated)
  * Server reads `userId` from `req.user._id` (auth middleware)

### Checkout / Orders

* `POST /checkout` — place an order

  * Body example:

    ```json
    {
      "address": "123 Street",
      "city": "Kolkata",
      "state": "West Bengal",
      "pinCode": "700001",
      "phone": "9876543210",
      "paymentMethod": "COD"
    }
    ```
  * Server will read `userId` from `req.user._id` and attach cart items or products to the order.

#### Example `curl` for checkout

```bash
curl -X POST "http://localhost:5000/checkout" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  -d '{"address":"123 Street","city":"Kolkata","state":"WB","pinCode":"700001","phone":"9876543210","paymentMethod":"COD"}'
```

---

## Image uploads

Two common patterns:

1. Dedicated upload route: `POST /upload` with form-data key `image`. Returns hosted URL.
2. Product creation route contains an image file in the same request.

If using Cloudinary, ensure `cloudinary-config.js` loads env vars and `CLOUDINARY_*` keys exist.

---

## Git & GitHub: push workflow

If you created remote repo and you already committed locally:

```bash
# add remote (only once)
git remote add origin https://github.com/<user>/<repo>.git
# if remote has a README or other initial commit you don't have locally
git pull origin main --allow-unrelated-histories
# resolve conflicts if any
git push -u origin main
```

---

## Remove node\_modules from the repository (if accidentally committed)

```bash
# run from repo root
git rm -r --cached node_modules
git rm -r --cached backend/node_modules
git.rm -r --cached frontend/node_modules
git commit -m "Remove node_modules from repo"
git push origin main
```

(typo note: use `git rm -r --cached` exactly as shown)

---

## .gitignore (recommended minimal)

```
# dependencies
node_modules
backend/node_modules
frontend/node_modules

# env files
.env
backend/.env
frontend/.env

# build outputs
dist
build

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## Notes & best practices

* Always get `userId` from authenticated `req.user` not from client input. `req.params` or `req.body` can be spoofed.
* Validate incoming `productId` with `mongoose.Types.ObjectId.isValid(productId)` and confirm product exists before adding to cart.
* Keep secrets out of Git. Use `.env` and add it to `.gitignore`.
* Use small, frequent commits with clear messages.

---

## Contributing

1. Fork repo
2. Create branch `feat/your-feature`
3. Commit changes
4. Open a pull request

---

## License

Choose a license and place a `LICENSE` file in repo. e.g. MIT.

---

## Contact

Project owner: codedinpeace

---

If you want, I can also produce a `backend/.env.example` file and a ready-to-use root `.gitignore` and add them to the canvas.
