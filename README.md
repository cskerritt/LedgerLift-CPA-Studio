# LedgerLift CPA Studio

A comprehensive, interactive CPA exam preparation platform aligned with the **2026 Uniform CPA Examination Blueprints**. Takes you from **zero to hero** across all 6 exam sections.

## 2026 CPA Exam Coverage

### Core Sections (all 3 required)
- **AUD** – Auditing & Attestation (78 MCQs + 7 TBSs)
- **FAR** – Financial Accounting & Reporting (50 MCQs + 7 TBSs)
- **REG** – Taxation & Regulation (72 MCQs + 8 TBSs)

### Discipline Sections (choose 1)
- **BAR** – Business Analysis & Reporting (50 MCQs + 7 TBSs)
- **ISC** – Information Systems & Controls (82 MCQs + 6 TBSs)
- **TCP** – Tax Compliance & Planning (68 MCQs + 7 TBSs)

Includes **H.R. 1 (One Big Beautiful Bill Act)** tax law changes testable from July 2026.

## Features

### Learning Modules
- **8-level curriculum** with 80+ topics aligned to official AICPA blueprint areas
- In-depth lessons with objectives, key formulas, ASC/GASB references, and practice tips
- Covers all CPA exam sections: AUD, FAR, REG, BAR, ISC, TCP

### Practice & Assessment
- **500+ MCQs** across all Bloom's Taxonomy skill levels (Remember → Evaluate)
- **Journal entry simulations** with auto-grading
- **Adjusting entry workshop** for accruals, deferrals, and depreciation
- **Case studies** – multi-step TBS-style problems mirroring actual exam simulations
- **Timed CPA exam simulator** matching real exam format per section

### Interactive Games
- **Flashcards** (150+) with spaced repetition
- **Speed Round** – 60-second rapid-fire quiz
- **Debit or Credit?** – transaction classification
- **Matching Game** – term/definition pairs
- **Account Sorter** – classify accounts by type
- **Equation Builder** – balance the accounting equation

### Accounting Tools
- Ratio Analysis Calculator
- Depreciation Calculator (SL, DDB, SYD, MACRS)
- Bank Reconciliation practice

### Progress Tracking
- Dashboard with stats, weakness radar, study streaks
- Per-section progress rings for all 6 CPA sections
- Achievement system with 20 milestones
- Server-synced progress across devices

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript PWA (no build step)
- **Backend:** Express.js with JWT authentication
- **Database:** PostgreSQL (JSONB for progress data)
- **Deployment:** Docker + Railway
- **Fonts:** Space Grotesk, Inter, IBM Plex Mono

## Run Locally

### With Docker (recommended)
```bash
docker compose up --build
```
App runs at `http://localhost:3000` with PostgreSQL at `localhost:5432`.

### Without Docker
```bash
# Start a PostgreSQL instance and set DATABASE_URL
export DATABASE_URL=postgresql://user:pass@localhost:5432/ledgerlift

npm install
npm start
```

## Deploy to Railway

1. Push this repo to GitHub
2. Go to [railway.com](https://railway.com) and create a new project
3. Add a **PostgreSQL** service from the Railway dashboard
4. Deploy from your GitHub repo
5. Railway auto-detects the Dockerfile and connects the database
6. Set `JWT_SECRET` environment variable in Railway dashboard

The app uses `DATABASE_URL` and `PORT` from Railway automatically.

## Project Structure

```
├── server.js            # Express server with PostgreSQL auth & progress sync
├── Dockerfile           # Production Docker image
├── docker-compose.yml   # Local dev with PostgreSQL
├── railway.json         # Railway deployment config
├── package.json         # Dependencies
├── Procfile             # Process config
├── public/
│   ├── index.html       # App shell with all sections
│   ├── styles.css       # Mobile-first responsive styling
│   ├── data.js          # Curriculum, 500+ questions, simulations, games
│   ├── app.js           # All application logic (auth, quiz, games, exam sim)
│   ├── sw.js            # Service worker for offline support
│   ├── manifest.json    # PWA manifest
│   └── icons/           # App icons (SVG + PNG)
```
