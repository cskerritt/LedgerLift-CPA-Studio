# LedgerLift CPA Studio

A comprehensive, interactive accounting learning platform that takes you from **zero to hero** -- from basic accounting fundamentals through full **CPA exam readiness**.

## Features

### Learning Modules
- **5-level curriculum** spanning Foundations, Intermediate, Advanced, Auditing, and Regulation
- **24 in-depth topics** with lessons, objectives, formulas, and practice tips
- Covers all major CPA exam sections: **FAR, AUD, REG**

### Practice & Assessment
- **Adaptive quizzes** with 150+ CPA-quality questions that prioritize your weak areas
- **Journal entry simulations** with auto-grading (debits = credits validation)
- **Adjusting entry workshop** for accruals, deferrals, and depreciation
- **Timed CPA exam simulator** with FAR, AUD, REG, and mixed-section exams

### Interactive Games
- **Flashcards** with spaced repetition and progress tracking
- **Speed Round** -- 60-second rapid-fire quiz with combo multipliers
- **Debit or Credit?** -- lightning-fast transaction classification
- **Matching Game** -- memory-style term/definition matching
- **Account Sorter** -- classify accounts into Asset/Liability/Equity/Revenue/Expense
- **Equation Builder** -- balance the accounting equation after transactions

### Accounting Tools
- **Ratio Analysis Calculator** -- liquidity, profitability, leverage, and efficiency ratios
- **Depreciation Calculator** -- side-by-side comparison of SL, DDB, SYD methods
- **Bank Reconciliation** -- practice real-world bank rec scenarios

### Progress Tracking
- Dashboard with stats, weakness radar, and study streaks
- CPA section progress rings
- Personalized weekly study plans
- All progress saved to browser localStorage

## Run Locally

```bash
npm install
npm start
```

Open `http://localhost:3000`

## Deploy to Railway

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) and create a new project
3. Select "Deploy from GitHub repo"
4. Railway auto-detects Node.js -- no configuration needed
5. Your app will be live in ~60 seconds

The app uses `process.env.PORT` automatically, so Railway deployment works out of the box.

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript (no build step, no framework)
- **Server:** Express.js (static file serving)
- **Storage:** Browser localStorage
- **Fonts:** Space Grotesk, Inter, IBM Plex Mono (Google Fonts)

## Project Structure

```
├── server.js          # Express server for Railway
├── package.json       # Dependencies and scripts
├── Procfile           # Railway/Heroku process config
├── public/
│   ├── index.html     # App shell with all sections
│   ├── styles.css     # Complete responsive styling
│   ├── data.js        # Curriculum, questions, games data
│   └── app.js         # All application logic
```
