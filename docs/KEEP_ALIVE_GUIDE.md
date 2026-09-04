# Render Backend Keep-Alive & Health Ping Guide

## Overview

When the backend API is deployed on **Render Free Web Services**, Render automatically spins down the service after **15 minutes of inactivity (no incoming traffic)**. The next time a visitor interacts with the website or submits a form, Render triggers a "cold start" which can take 40–60+ seconds.

To eliminate cold-start delays for visitors submitting inquiries, this repository includes an external keep-alive system that periodically sends lightweight pings to the backend `/health` endpoint.

---

## 1. How `/health` Works & Database Safety

- **Endpoint**: `GET /health` (also aliased to `GET /api/health`)
- **Response**:
  ```json
  {
    "success": true,
    "status": "ok",
    "service": "backend",
    "timestamp": "2026-09-04T12:00:00.000Z"
  }
  ```
- **Performance**: Responds in **< 5ms**.
- **Database Safety (Zero DB Impact)**:
  - ❌ Does **NOT** write to MongoDB.
  - ❌ Does **NOT** query or scan collections.
  - ❌ Does **NOT** create new collections or documents.
  - ❌ Does **NOT** trigger any email, WhatsApp, or form validation logic.
  - ❌ Does **NOT** expose any secrets, database credentials, or system paths.

---

## 2. External Keep-Alive Mechanism (GitHub Actions)

We have configured a scheduled GitHub Actions workflow at [`.github/workflows/render-keep-alive.yml`](../.github/workflows/render-keep-alive.yml).

### Workflow Details:
- **Schedule**: Every **10 minutes** (`*/10 * * * *`).
- **Target**: `GET ${RENDER_BACKEND_URL}/health`
- **Origin**: Runs on GitHub's cloud runners (external to Render, fulfilling Render's inbound traffic requirement).
- **Graceful Failure**: If the backend is restarting during a deployment, the workflow exits safely without raising alert storms.

---

## 3. How to Activate the Keep-Alive System (One-Time Setup)

Once you push this repository to GitHub, configure your Render URL:

1. Go to your GitHub Repository: **Settings** $\rightarrow$ **Secrets and variables** $\rightarrow$ **Actions**.
2. Click **New repository secret** (or **New repository variable**).
3. Set:
   - **Name**: `RENDER_BACKEND_URL`
   - **Value**: Your Render Backend URL (e.g., `https://your-service-name.onrender.com`)
4. Click **Add secret** (or **Add variable**).

### Manual Test:
1. In your GitHub repository, go to the **Actions** tab.
2. Click **Render Backend Keep-Alive Ping** in the left sidebar.
3. Click **Run workflow** $\rightarrow$ **Run workflow**.
4. Check the workflow log to confirm the `200 OK` response.

---

## 4. Alternative: Third-Party Free Uptime Monitors

If you prefer an external monitoring service with an online dashboard:

1. **UptimeRobot** (Free):
   - Sign up at [uptimerobot.com](https://uptimerobot.com).
   - Create a new monitor $\rightarrow$ Type: **HTTP(s)**.
   - Friendly Name: `Vardha Backend Keep-Alive`.
   - URL: `https://your-service-name.onrender.com/health`.
   - Monitoring Interval: `10 minutes` (or `5 minutes`).
2. **Cron-job.org** (Free):
   - Create a cron job pointing to `https://your-service-name.onrender.com/health` scheduled every 10 minutes.

---

## 5. How to Disable the Keep-Alive System

- **GitHub Actions**: In your GitHub repo, go to **Actions** $\rightarrow$ **Render Backend Keep-Alive Ping** $\rightarrow$ Click the **`...`** menu $\rightarrow$ **Disable workflow**.
- **External Monitor**: Simply pause or delete the monitor in UptimeRobot / Cron-job.org.

---

## 6. Important Notice on Render Free Tier Limits

> [!IMPORTANT]
> Render Free Web Services include **750 free instance hours per month** (enough to run 1 service 24/7 for a 31-day month). 
> 
> If you have multiple free services running under the same Render account, keeping all of them awake 24/7 will share the 750 free hours. 
> 
> If you only run this single backend service, 750 hours is sufficient for continuous 24/7 uptime.

---

## 7. Manual Health Test Commands

You can test the endpoint anytime from your terminal or browser:

```bash
# Using curl:
curl -i https://your-service-name.onrender.com/health

# Or locally:
curl -i http://localhost:5000/health
```
