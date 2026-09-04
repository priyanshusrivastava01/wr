# Deployment & Hosting Guide: ware.vardha.live

This guide provides step-by-step instructions for hosting the **Vardha Warehousing** frontend on `ware.vardha.live` and connecting it to the **Render backend** and **MongoDB Atlas**.

---

## Architecture Overview

```
Visitor (https://ware.vardha.live)
      │
      ├──> Static Frontend (Vercel / Netlify / Cloudflare Pages / cPanel)
      │
      └──> API Form Submissions & Keep-Alive
              │
              ▼
      Backend API (https://your-backend.onrender.com)
              │
              ▼
      MongoDB Atlas Database (Collections: calculatorbookings, warehousebuildrequests)
```

---

## Step 1: Deploy the Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com).
2. Click **New +** $\rightarrow$ **Web Service**.
3. Connect your GitHub repository.
4. Set the following configuration:
   - **Name**: `vardha-warehousing-backend` (or your preferred name)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
5. Under **Environment Variables**, add:
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
   - `CLIENT_URL`: `https://ware.vardha.live,http://localhost:3000`
   - `MONGODB_URI`: `mongodb+srv://linksvardha1_db_user:Vardha12@cluster0.o4y4ils.mongodb.net/?appName=Cluster0`
6. Click **Deploy Web Service**.
7. Note down your deployed Render backend URL (e.g. `https://vardha-warehousing-backend.onrender.com`).

---

## Step 2: Deploy the Frontend to `ware.vardha.live`

### Option A: Via Vercel / Netlify (Recommended for Custom Domains)
1. Connect your GitHub repo to **Vercel** or **Netlify**.
2. Set the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add Environment Variable:
   - `VITE_BACKEND_URL`: `https://your-backend-service.onrender.com` *(your Render backend URL from Step 1)*
4. Go to **Settings $\rightarrow$ Domains** and add `ware.vardha.live`.
5. In your DNS manager (Cloudflare / GoDaddy / Namecheap), point the CNAME or A Record as instructed by Vercel/Netlify.

### Option B: Via cPanel / Apache / Nginx Static Hosting
1. Build the production files:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` folder to your server's `public_html` (or subdomain directory for `ware.vardha.live`).
3. If building locally, create `.env` in the root folder with:
   ```env
   VITE_BACKEND_URL=https://your-backend-service.onrender.com
   ```
   and then run `npm run build`.

---

## Step 3: Activate the Keep-Alive System (Prevents Cold Starts)

1. Go to your GitHub repository $\rightarrow$ **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions**.
2. Click **New repository secret**.
3. Name: `RENDER_BACKEND_URL`
4. Value: `https://your-backend-service.onrender.com`
5. Click **Add secret**.

The workflow [`.github/workflows/render-keep-alive.yml`](../.github/workflows/render-keep-alive.yml) will automatically ping `https://your-backend-service.onrender.com/health` every 10 minutes so that visitors on `ware.vardha.live` experience zero cold-start delay when submitting forms.
