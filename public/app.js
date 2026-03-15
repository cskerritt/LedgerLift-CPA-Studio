/* ============================================================
   LedgerLift CPA Studio – Application Logic v3.0
   With Authentication, PWA, Mobile Nav, Achievements, Case Studies
   ============================================================ */

(function () {
  'use strict';

  /* ---------- state ---------- */
  const STORAGE_KEY = 'ledgerlift-progress-v3';
  let currentUser = null;
  let syncTimer = null;

  const defaults = () => ({
    completedTopics: [],
    quizAttempts: [],
    simulationAttempts: [],
    topicStats: {},
    events: [],
    studyDates: [],
    gamesPlayed: 0,
    speedBest: 0,
    examAttempts: [],
    flashcardsReviewed: 0,
    flashcardStatus: {},
    achievements: [],
    caseStudyAttempts: []
  });

  let progress = loadProgress();

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...defaults(), ...JSON.parse(raw) };
    } catch (e) { /* ignore */ }
    return defaults();
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    debouncedSync();
  }

  function logEvent(text) {
    progress.events.unshift({ text, ts: Date.now() });
    if (progress.events.length > 50) progress.events.length = 50;
    const today = new Date().toDateString();
    if (!progress.studyDates.includes(today)) progress.studyDates.push(today);
    save();
    checkAchievements();
  }

  function topicAccuracy(topic) {
    const s = progress.topicStats[topic];
    if (!s || s.total === 0) return null;
    return s.correct / s.total;
  }

  function streak() {
    const dates = progress.studyDates.map(d => new Date(d)).sort((a, b) => b - a);
    if (dates.length === 0) return 0;
    let count = 1;
    for (let i = 1; i < dates.length; i++) {
      const diff = (dates[i - 1] - dates[i]) / 86400000;
      if (diff <= 1.5) count++;
      else break;
    }
    return count;
  }

  /* ---------- server sync ---------- */
  let syncTimeout = null;
  function debouncedSync() {
    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(syncToServer, 3000);
  }

  async function syncToServer() {
    if (!currentUser) return;
    try {
      await fetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: progress })
      });
    } catch (e) { /* offline - will sync later */ }
  }

  async function loadFromServer() {
    if (!currentUser) return;
    try {
      const res = await fetch('/api/progress');
      if (!res.ok) return;
      const { data } = await res.json();
      if (data && Object.keys(data).length > 0) {
        // Merge: take whichever has more data
        const serverTopics = (data.completedTopics || []).length;
        const localTopics = progress.completedTopics.length;
        if (serverTopics > localTopics) {
          progress = { ...defaults(), ...data };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } else if (localTopics > serverTopics) {
          syncToServer();
        }
      } else {
        // Server empty, push local data
        syncToServer();
      }
    } catch (e) { /* offline */ }
  }

  /* ---------- helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function fmt(n) {
    return Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  function fmtMoney(n) {
    return '$' + fmt(n);
  }

  function getLevels() {
    const levels = new Set();
    CURRICULUM.forEach(l => levels.add(l.level));
    return [...levels];
  }

  function getTopicsForLevel(level) {
    const lvl = CURRICULUM.find(l => l.level === level);
    return lvl ? lvl.topics : [];
  }

  function allTopics() {
    return CURRICULUM.flatMap(l => l.topics);
  }

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function timeAgo(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + 'm ago';
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + 'h ago';
    const days = Math.floor(hrs / 24);
    return days + 'd ago';
  }

  /* =================================================================
     AUTHENTICATION
     ================================================================= */
  function initAuth() {
    const loginForm = $('#loginForm');
    const signupForm = $('#signupForm');

    $('#showSignup').onclick = (e) => {
      e.preventDefault();
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
    };

    $('#showLogin').onclick = (e) => {
      e.preventDefault();
      signupForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
    };

    loginForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = $('#loginEmail').value;
      const password = $('#loginPassword').value;
      const errEl = $('#loginError');
      errEl.classList.add('hidden');

      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (!res.ok) {
          errEl.textContent = data.error;
          errEl.classList.remove('hidden');
          return;
        }
        currentUser = data.user;
        enterApp();
      } catch (err) {
        errEl.textContent = 'Connection error. Please try again.';
        errEl.classList.remove('hidden');
      }
    };

    signupForm.onsubmit = async (e) => {
      e.preventDefault();
      const name = $('#signupName').value;
      const email = $('#signupEmail').value;
      const password = $('#signupPassword').value;
      const errEl = $('#signupError');
      errEl.classList.add('hidden');

      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();
        if (!res.ok) {
          errEl.textContent = data.error;
          errEl.classList.remove('hidden');
          return;
        }
        currentUser = data.user;
        enterApp();
      } catch (err) {
        errEl.textContent = 'Connection error. Please try again.';
        errEl.classList.remove('hidden');
      }
    };

    // Logout
    const logoutHandler = async () => {
      try { await fetch('/api/logout', { method: 'POST' }); } catch (e) {}
      currentUser = null;
      $('#authScreen').classList.remove('hidden');
      $('#appShell').classList.add('hidden');
    };
    $('#logoutBtn').onclick = logoutHandler;
    const moreLogout = $('#moreLogout');
    if (moreLogout) moreLogout.onclick = logoutHandler;

    // Check if already logged in
    checkSession();
  }

  async function checkSession() {
    try {
      const res = await fetch('/api/me');
      if (res.ok) {
        const data = await res.json();
        currentUser = data.user;
        enterApp();
        return;
      }
    } catch (e) {}
    // Not logged in - show auth screen
    $('#authScreen').classList.remove('hidden');
    $('#appShell').classList.add('hidden');
  }

  async function enterApp() {
    $('#authScreen').classList.add('hidden');
    $('#appShell').classList.remove('hidden');

    // Set greeting
    const greeting = $('#userGreeting');
    if (greeting && currentUser) {
      greeting.textContent = currentUser.name || currentUser.email;
    }

    // Load progress from server and merge
    await loadFromServer();

    // Initialize all modules
    initTabs();
    initBottomNav();
    initSubTabs();
    initQuiz();
    initSimulation();
    initAdjusting();
    initCaseStudy();
    initFlashcards();
    initSpeed();
    initDebitCredit();
    initMatching();
    initSorter();
    initEquation();
    initGameSelector();
    initRatioTool();
    initDepreciation();
    initBankRec();
    initExam();
    initMoreMenu();
    $('#planRefresh').onclick = renderPlan;

    renderDashboard();
  }

  /* =================================================================
     TAB NAVIGATION
     ================================================================= */
  function initTabs() {
    const tabs = $$('.tab-bar .tab');
    const panels = $$('.panel');
    tabs.forEach(t => t.addEventListener('click', () => {
      switchTab(t.dataset.tab);
    }));
  }

  function switchTab(tab) {
    // Desktop tabs
    $$('.tab-bar .tab').forEach(x => x.classList.remove('active'));
    const desktopTab = $(`.tab-bar .tab[data-tab="${tab}"]`);
    if (desktopTab) desktopTab.classList.add('active');

    // Bottom nav
    $$('.bottom-nav-item').forEach(x => x.classList.remove('active'));
    const mobileTab = $(`.bottom-nav-item[data-tab="${tab}"]`);
    if (mobileTab) mobileTab.classList.add('active');

    // Panels
    $$('.panel').forEach(x => x.classList.remove('active'));
    const p = $(`#panel${capitalize(tab)}`);
    if (p) p.classList.add('active');

    // Close more menu if open
    const moreMenu = $('#moreMenu');
    if (moreMenu) moreMenu.classList.add('hidden');

    onTabSwitch(tab);

    // Scroll to top
    window.scrollTo(0, 0);
  }

  function onTabSwitch(tab) {
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'learn') renderLearn();
    if (tab === 'plan') renderPlan();
  }

  /* ---------- bottom nav (mobile) ---------- */
  function initBottomNav() {
    $$('.bottom-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab === 'more') {
          $('#moreMenu').classList.remove('hidden');
          return;
        }
        switchTab(tab);
      });
    });
  }

  /* ---------- more menu ---------- */
  function initMoreMenu() {
    const overlay = $('#moreMenuOverlay');
    const close = $('#moreMenuClose');
    if (overlay) overlay.onclick = () => $('#moreMenu').classList.add('hidden');
    if (close) close.onclick = () => $('#moreMenu').classList.add('hidden');

    $$('.more-menu-item[data-tab]').forEach(item => {
      item.onclick = () => switchTab(item.dataset.tab);
    });
  }

  /* ---------- sub-tab navigation ---------- */
  function initSubTabs() {
    $$('.sub-tabs').forEach(bar => {
      const tabs = bar.querySelectorAll('.sub-tab');
      const parent = bar.parentElement;
      tabs.forEach(t => t.addEventListener('click', () => {
        tabs.forEach(x => x.classList.remove('active'));
        parent.querySelectorAll('.sub-panel').forEach(x => x.classList.remove('active'));
        t.classList.add('active');
        const sp = parent.querySelector(`#sub${capitalize(t.dataset.sub)}`);
        if (sp) sp.classList.add('active');
      }));
    });
  }

  /* =================================================================
     ACHIEVEMENTS
     ================================================================= */
  const ACHIEVEMENT_DEFS = typeof ACHIEVEMENTS !== 'undefined' ? ACHIEVEMENTS : [
    { id: 'first-topic', title: 'First Steps', description: 'Complete your first topic', icon: '&#127942;', check: () => progress.completedTopics.length >= 1 },
    { id: 'five-topics', title: 'Knowledge Seeker', description: 'Complete 5 topics', icon: '&#128218;', check: () => progress.completedTopics.length >= 5 },
    { id: 'ten-topics', title: 'Dedicated Learner', description: 'Complete 10 topics', icon: '&#127891;', check: () => progress.completedTopics.length >= 10 },
    { id: 'twenty-topics', title: 'Scholar', description: 'Complete 20 topics', icon: '&#128302;', check: () => progress.completedTopics.length >= 20 },
    { id: 'all-topics', title: 'CPA Master', description: 'Complete all topics', icon: '&#127775;', check: () => progress.completedTopics.length >= allTopics().length },
    { id: 'first-quiz', title: 'Quiz Taker', description: 'Complete your first quiz', icon: '&#9999;', check: () => progress.quizAttempts.length >= 1 },
    { id: 'quiz-ace', title: 'Quiz Ace', description: 'Score 100% on a quiz', icon: '&#11088;', check: () => progress.quizAttempts.some(a => a.score === a.total) },
    { id: 'ten-quizzes', title: 'Quiz Warrior', description: 'Complete 10 quizzes', icon: '&#9876;', check: () => progress.quizAttempts.length >= 10 },
    { id: 'streak-3', title: 'Consistent', description: '3-day study streak', icon: '&#128293;', check: () => streak() >= 3 },
    { id: 'streak-7', title: 'On Fire', description: '7-day study streak', icon: '&#128165;', check: () => streak() >= 7 },
    { id: 'streak-30', title: 'Unstoppable', description: '30-day study streak', icon: '&#127755;', check: () => streak() >= 30 },
    { id: 'first-sim', title: 'Bookkeeper', description: 'Complete a journal entry simulation', icon: '&#128221;', check: () => progress.simulationAttempts.length >= 1 },
    { id: 'five-sims', title: 'Journal Master', description: 'Complete 5 simulations', icon: '&#128209;', check: () => progress.simulationAttempts.length >= 5 },
    { id: 'gamer', title: 'Game On', description: 'Play 10 games', icon: '&#127918;', check: () => progress.gamesPlayed >= 10 },
    { id: 'speed-demon', title: 'Speed Demon', description: 'Score 15+ in speed round', icon: '&#9889;', check: () => progress.speedBest >= 15 },
    { id: 'first-exam', title: 'Exam Ready', description: 'Complete a practice exam', icon: '&#128220;', check: () => (progress.examAttempts || []).length >= 1 },
    { id: 'exam-pass', title: 'Passing Score', description: 'Score 75%+ on an exam', icon: '&#127881;', check: () => (progress.examAttempts || []).some(a => (a.score / a.total) >= 0.75) }
  ];

  function checkAchievements() {
    let newAchievement = null;
    ACHIEVEMENT_DEFS.forEach(a => {
      if (!progress.achievements.includes(a.id) && a.check()) {
        progress.achievements.push(a.id);
        newAchievement = a;
      }
    });
    if (newAchievement) {
      save();
      showMilestoneBanner(newAchievement);
    }
  }

  function showMilestoneBanner(achievement) {
    const banner = $('#milestoneBanner');
    if (!banner) return;
    const title = $('#milestoneTitle');
    const desc = $('#milestoneDesc');
    if (title) title.innerHTML = `Achievement Unlocked: ${achievement.title}!`;
    if (desc) desc.textContent = achievement.description;
    const icon = $('#milestoneBanner .milestone-icon');
    if (icon) icon.innerHTML = achievement.icon;
    banner.style.display = 'flex';
    banner.style.animation = 'none';
    banner.offsetHeight; // reflow
    banner.style.animation = 'feedbackSlide 0.4s ease-out';
  }

  function renderAchievements() {
    const grid = $('#achievementsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    ACHIEVEMENT_DEFS.forEach(a => {
      const earned = progress.achievements.includes(a.id);
      const badge = el('div', `achievement-badge ${earned ? 'earned' : 'locked'}`);
      badge.innerHTML = `
        <div class="achievement-icon">${a.icon}</div>
        <div class="achievement-title">${a.title}</div>
        <div class="achievement-desc">${a.description}</div>
      `;
      grid.appendChild(badge);
    });
  }

  /* =================================================================
     DASHBOARD
     ================================================================= */
  function renderDashboard() {
    const topics = allTopics();
    const total = topics.length;
    const done = progress.completedTopics.length;
    $('#statTopics').textContent = `${done} / ${total}`;

    const allQuiz = progress.quizAttempts;
    if (allQuiz.length > 0) {
      const last5 = allQuiz.slice(-5);
      const avg = last5.reduce((s, a) => s + (a.score / a.total), 0) / last5.length;
      $('#statAccuracy').textContent = Math.round(avg * 100) + '%';
    } else {
      $('#statAccuracy').textContent = '--';
    }

    $('#statStreak').textContent = streak() + ' days';
    $('#statGames').textContent = progress.gamesPlayed;
    $('#statSims').textContent = progress.simulationAttempts.length;

    const examAttempts = progress.examAttempts || [];
    if (examAttempts.length > 0) {
      const lastExam = examAttempts[examAttempts.length - 1];
      $('#statReadiness').textContent = Math.round(lastExam.score / lastExam.total * 100) + '%';
    } else {
      $('#statReadiness').textContent = '--';
    }

    // hero stats (desktop)
    const hs = $('#heroStats');
    if (hs) {
      hs.innerHTML = `
        <div class="hero-stat"><strong>${done}</strong> Topics</div>
        <div class="hero-stat"><strong>${allQuiz.length}</strong> Quizzes</div>
        <div class="hero-stat"><strong>${streak()}</strong> Day Streak</div>
      `;
    }

    renderWeaknessChart();
    renderActivityFeed();
    renderSectionProgress();
    renderAchievements();
    checkAchievements();

    // milestone banner
    if (done === 0) {
      const banner = $('#milestoneBanner');
      if (banner) {
        $('#milestoneTitle').textContent = 'Welcome!';
        $('#milestoneDesc').textContent = 'Complete your first topic to start earning achievements.';
      }
    }
  }

  function renderWeaknessChart() {
    const chart = $('#weaknessChart');
    if (!chart) return;
    chart.innerHTML = '';
    const stats = progress.topicStats;
    const entries = Object.entries(stats).filter(([, s]) => s.total > 0);
    if (entries.length === 0) {
      chart.innerHTML = '<p class="muted">Take quizzes to see your weakness radar.</p>';
      return;
    }
    entries.sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));
    entries.slice(0, 8).forEach(([topic, s]) => {
      const pct = Math.round((s.correct / s.total) * 100);
      const bar = el('div', 'weakness-bar');
      const label = topic.replace(/-/g, ' ');
      const color = pct < 50 ? 'var(--color-danger)' : pct < 70 ? 'var(--color-warning)' : 'var(--color-success)';
      bar.innerHTML = `
        <div class="wb-label">${label}</div>
        <div class="wb-track"><div class="wb-fill" style="width:${pct}%;background:${color}"></div></div>
        <div class="wb-pct">${pct}%</div>
      `;
      chart.appendChild(bar);
    });
  }

  function renderActivityFeed() {
    const feed = $('#activityFeed');
    if (!feed) return;
    feed.innerHTML = '';
    progress.events.slice(0, 8).forEach(ev => {
      const li = el('li', 'activity-item');
      const ago = timeAgo(ev.ts);
      li.innerHTML = `<span>${ev.text}</span><span class="activity-time">${ago}</span>`;
      feed.appendChild(li);
    });
    if (progress.events.length === 0) {
      feed.innerHTML = '<li class="activity-item muted">No activity yet. Start learning!</li>';
    }
  }

  function renderSectionProgress() {
    const grid = $('#sectionProgress');
    if (!grid) return;
    grid.innerHTML = '';
    const sections = ['Foundation', 'FAR', 'AUD', 'REG', 'BEC'];
    sections.forEach(sec => {
      const topics = allTopics().filter(t => t.cpaSection === sec);
      if (topics.length === 0) return;
      const done = topics.filter(t => progress.completedTopics.includes(t.id)).length;
      const pct = topics.length > 0 ? Math.round((done / topics.length) * 100) : 0;
      const card = el('div', 'section-prog-card');
      card.innerHTML = `
        <h4>${sec}</h4>
        <div class="prog-ring">
          <svg viewBox="0 0 36 36">
            <path class="prog-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path class="prog-fill" stroke-dasharray="${pct}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
          </svg>
          <span class="prog-text">${pct}%</span>
        </div>
        <p class="muted">${done}/${topics.length} topics</p>
      `;
      grid.appendChild(card);
    });
  }

  /* =================================================================
     LEARN
     ================================================================= */
  function renderLearn() {
    populateLevelFilter();
    renderCurriculum();
  }

  function populateLevelFilter() {
    const sel = $('#learnLevelFilter');
    if (!sel) return;
    sel.innerHTML = '<option value="all">All Levels</option>';
    CURRICULUM.forEach(l => {
      sel.innerHTML += `<option value="${l.level}">${l.level}</option>`;
    });
    sel.onchange = renderCurriculum;
    const secFilter = $('#learnSectionFilter');
    if (secFilter) secFilter.onchange = renderCurriculum;
  }

  function renderCurriculum() {
    const grid = $('#curriculumList');
    if (!grid) return;
    grid.innerHTML = '';
    const levelFilter = $('#learnLevelFilter').value;
    const sectionFilter = $('#learnSectionFilter').value;

    CURRICULUM.forEach(level => {
      if (levelFilter !== 'all' && level.level !== levelFilter) return;
      const topics = level.topics.filter(t => sectionFilter === 'all' || t.cpaSection === sectionFilter);
      if (topics.length === 0) return;

      const section = el('div', 'curriculum-section');
      section.innerHTML = `<h3 class="curriculum-level">${level.level}</h3>`;
      const topicGrid = el('div', 'topic-grid');

      topics.forEach(topic => {
        const done = progress.completedTopics.includes(topic.id);
        const card = el('div', `topic-card ${done ? 'completed' : ''}`);
        card.innerHTML = `
          <span class="topic-badge">${topic.cpaSection}</span>
          <h4>${topic.title}</h4>
          <p class="muted">${topic.objectives[0]}</p>
          <span class="topic-status">${done ? 'Completed' : 'Start'} &rarr;</span>
        `;
        card.onclick = () => openLesson(topic);
        topicGrid.appendChild(card);
      });
      section.appendChild(topicGrid);
      grid.appendChild(section);
    });
  }

  function openLesson(topic) {
    const modal = $('#lessonModal');
    const body = $('#lessonBody');
    const done = progress.completedTopics.includes(topic.id);

    body.innerHTML = `
      <span class="topic-badge">${topic.cpaSection}</span>
      <h2>${topic.title}</h2>
      <div class="lesson-objectives">
        <h4>Learning Objectives</h4>
        <ul>${topic.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>
      ${topic.keyFormula ? `<div class="lesson-formula"><strong>Key Formula:</strong> ${topic.keyFormula}</div>` : ''}
      <div class="lesson-content">${topic.lesson}</div>
      ${topic.practiceTip ? `<div class="lesson-tip"><strong>Practice Tip:</strong> ${topic.practiceTip}</div>` : ''}
      <button class="btn ${done ? 'btn-ghost' : 'btn-primary'} mt" id="markComplete">
        ${done ? 'Completed' : 'Mark as Complete'}
      </button>
    `;

    modal.classList.remove('hidden');
    $('#markComplete').onclick = () => {
      if (!progress.completedTopics.includes(topic.id)) {
        progress.completedTopics.push(topic.id);
        logEvent(`Completed topic: ${topic.title}`);
        save();
      }
      modal.classList.add('hidden');
      renderCurriculum();
    };
    $('#lessonClose').onclick = () => modal.classList.add('hidden');
  }

  /* =================================================================
     QUIZ
     ================================================================= */
  let quizSession = null;

  function initQuiz() {
    const sel = $('#quizLevel');
    if (!sel) return;
    sel.innerHTML = '<option value="all">All Levels</option>';
    CURRICULUM.forEach((l, i) => {
      sel.innerHTML += `<option value="${i + 1}">${l.level}</option>`;
    });

    $('#quizStart').onclick = startQuiz;
    $('#quizNext').onclick = nextQuizQuestion;
    $('#quizRetry').onclick = resetQuiz;
  }

  function startQuiz() {
    const level = $('#quizLevel').value;
    const section = $('#quizSection').value;
    const count = parseInt($('#quizCount').value);

    let pool = [...QUESTION_BANK];
    if (level !== 'all') pool = pool.filter(q => q.level === parseInt(level));
    if (section !== 'all') pool = pool.filter(q => q.cpaSection === section);

    if (pool.length < 3) {
      alert('Not enough questions for these filters. Try broader settings.');
      return;
    }

    const weighted = pool.map(q => {
      const acc = topicAccuracy(q.topic);
      const weakness = acc === null ? 0.5 : 1 - acc;
      return { q, weight: weakness * 0.7 + Math.random() * 0.3 };
    });
    weighted.sort((a, b) => b.weight - a.weight);
    const selected = weighted.slice(0, Math.min(count, pool.length)).map(w => w.q);
    shuffle(selected);

    quizSession = { questions: selected, current: 0, answers: [], score: 0 };

    $('#quizSetup').classList.add('hidden');
    $('#quizResults').classList.add('hidden');
    $('#quizArea').classList.remove('hidden');
    showQuizQuestion();
  }

  function showQuizQuestion() {
    const q = quizSession.questions[quizSession.current];
    const total = quizSession.questions.length;
    const num = quizSession.current + 1;

    $('#quizCounter').textContent = `${num} / ${total}`;
    $('#quizTopic').textContent = q.topic.replace(/-/g, ' ');
    $('#quizProgressFill').style.width = `${(num / total) * 100}%`;
    $('#quizQuestion').textContent = q.prompt;
    $('#quizFeedback').classList.add('hidden');
    $('#quizNext').classList.add('hidden');

    const choices = $('#quizChoices');
    choices.innerHTML = '';
    q.choices.forEach((c, i) => {
      const btn = el('button', 'choice-btn', c);
      btn.onclick = () => selectQuizAnswer(i);
      choices.appendChild(btn);
    });
  }

  function selectQuizAnswer(idx) {
    const q = quizSession.questions[quizSession.current];
    const correct = idx === q.correct;
    if (correct) quizSession.score++;

    quizSession.answers.push({ question: q.id, selected: idx, correct });

    if (!progress.topicStats[q.topic]) progress.topicStats[q.topic] = { correct: 0, total: 0 };
    progress.topicStats[q.topic].total++;
    if (correct) progress.topicStats[q.topic].correct++;
    save();

    const btns = $$('#quizChoices .choice-btn');
    btns.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct) b.classList.add('correct');
      if (i === idx && !correct) b.classList.add('wrong');
    });

    const fb = $('#quizFeedback');
    fb.classList.remove('hidden');
    fb.className = `quiz-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;
    fb.innerHTML = `<strong>${correct ? 'Correct!' : 'Incorrect.'}</strong> ${q.explanation}`;

    $('#quizNext').classList.remove('hidden');
    $('#quizNext').textContent = quizSession.current < quizSession.questions.length - 1 ? 'Next Question' : 'See Results';
  }

  function nextQuizQuestion() {
    quizSession.current++;
    if (quizSession.current >= quizSession.questions.length) {
      showQuizResults();
    } else {
      showQuizQuestion();
    }
  }

  function showQuizResults() {
    $('#quizArea').classList.add('hidden');
    $('#quizResults').classList.remove('hidden');

    const pct = Math.round((quizSession.score / quizSession.questions.length) * 100);
    $('#quizScore').innerHTML = `
      <div class="score-circle ${pct >= 75 ? 'score-pass' : 'score-fail'}">${pct}%</div>
      <p>${quizSession.score} / ${quizSession.questions.length} correct</p>
    `;

    const byTopic = {};
    quizSession.answers.forEach(a => {
      const q = quizSession.questions.find(x => x.id === a.question);
      if (!q) return;
      if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
      byTopic[q.topic].total++;
      if (a.correct) byTopic[q.topic].correct++;
    });

    const bd = $('#quizBreakdown');
    bd.innerHTML = '<h4>Topic Breakdown</h4>';
    Object.entries(byTopic).forEach(([topic, s]) => {
      const p = Math.round((s.correct / s.total) * 100);
      bd.innerHTML += `
        <div class="breakdown-row">
          <span>${topic.replace(/-/g, ' ')}</span>
          <span class="${p >= 70 ? 'good' : p >= 50 ? 'warn' : 'bad'}">${p}% (${s.correct}/${s.total})</span>
        </div>
      `;
    });

    progress.quizAttempts.push({ score: quizSession.score, total: quizSession.questions.length, ts: Date.now() });
    logEvent(`Quiz: ${quizSession.score}/${quizSession.questions.length} (${pct}%)`);
  }

  function resetQuiz() {
    quizSession = null;
    $('#quizArea').classList.add('hidden');
    $('#quizResults').classList.add('hidden');
    $('#quizSetup').classList.remove('hidden');
  }

  /* =================================================================
     SIMULATION
     ================================================================= */
  let simSession = null;

  function initSimulation() {
    const sel = $('#simLevel');
    if (!sel) return;
    sel.innerHTML = '<option value="all">All Levels</option>';
    CURRICULUM.forEach((l, i) => {
      sel.innerHTML += `<option value="${i + 1}">${l.level}</option>`;
    });
    $('#simStart').onclick = loadSimulation;
    $('#simCheck').onclick = checkSimulation;
    $('#simSkip').onclick = loadSimulation;
    $('#simAddRow').onclick = () => addSimRow('simEntries');
  }

  function loadSimulation() {
    const level = $('#simLevel').value;
    let pool = typeof SIMULATION_BANK !== 'undefined' ? [...SIMULATION_BANK] : [];
    if (level !== 'all') pool = pool.filter(s => s.level === parseInt(level));
    if (pool.length === 0) { alert('No scenarios for this level.'); return; }

    const scenario = pool[Math.floor(Math.random() * pool.length)];
    simSession = scenario;

    $('#simSetup').classList.add('hidden');
    $('#simArea').classList.remove('hidden');
    $('#simTitle').textContent = scenario.title;
    $('#simDescription').textContent = scenario.description;
    $('#simFeedback').classList.add('hidden');

    const entries = $('#simEntries');
    entries.innerHTML = '';
    addSimRow('simEntries');
    addSimRow('simEntries');
  }

  function addSimRow(containerId) {
    const container = $(`#${containerId}`);
    if (!container) return;
    const accountOpts = typeof ACCOUNT_OPTIONS !== 'undefined' ? ACCOUNT_OPTIONS : [];
    const row = el('div', 'sim-row');
    row.innerHTML = `
      <select class="select-input sim-type">
        <option value="debit">Debit</option>
        <option value="credit">Credit</option>
      </select>
      <select class="select-input sim-account">
        <option value="">Select Account</option>
        ${accountOpts.map(a => `<option value="${a}">${a}</option>`).join('')}
      </select>
      <input type="number" class="num-input sim-amount" placeholder="Amount">
      <button class="btn btn-sm btn-ghost sim-remove">&times;</button>
    `;
    row.querySelector('.sim-remove').onclick = () => row.remove();
    container.appendChild(row);
  }

  function checkSimulation() {
    if (!simSession) return;
    const rows = $$('#simEntries .sim-row');
    const userEntries = [];
    rows.forEach(row => {
      const type = row.querySelector('.sim-type').value;
      const account = row.querySelector('.sim-account').value;
      const amount = parseFloat(row.querySelector('.sim-amount').value) || 0;
      if (account && amount > 0) userEntries.push({ type, account, amount });
    });

    const expected = simSession.entries;
    const fb = $('#simFeedback');
    fb.classList.remove('hidden');

    const totalDebits = userEntries.filter(e => e.type === 'debit').reduce((s, e) => s + e.amount, 0);
    const totalCredits = userEntries.filter(e => e.type === 'credit').reduce((s, e) => s + e.amount, 0);

    if (Math.abs(totalDebits - totalCredits) > 0.01) {
      fb.className = 'sim-feedback fb-wrong';
      fb.innerHTML = `<strong>Debits don't equal credits!</strong> Debits: $${fmt(totalDebits)}, Credits: $${fmt(totalCredits)}`;
      return;
    }

    let allCorrect = true;
    const missing = [];
    expected.forEach(exp => {
      const match = userEntries.find(u =>
        u.type === exp.type && u.account === exp.account && Math.abs(u.amount - exp.amount) < 0.01
      );
      if (!match) {
        allCorrect = false;
        missing.push(`${exp.type === 'debit' ? 'Dr.' : 'Cr.'} ${exp.account} $${fmt(exp.amount)}`);
      }
    });

    if (allCorrect && userEntries.length === expected.length) {
      fb.className = 'sim-feedback fb-correct';
      fb.innerHTML = `<strong>Perfect!</strong> ${simSession.explanation}`;
      progress.simulationAttempts.push({ id: simSession.id, correct: true, ts: Date.now() });
      logEvent(`Simulation correct: ${simSession.title}`);
    } else if (allCorrect) {
      fb.className = 'sim-feedback fb-warn';
      fb.innerHTML = `<strong>Close!</strong> You have extra entries. Expected ${expected.length} entries. ${simSession.explanation}`;
      progress.simulationAttempts.push({ id: simSession.id, correct: false, ts: Date.now() });
    } else {
      fb.className = 'sim-feedback fb-wrong';
      fb.innerHTML = `<strong>Not quite.</strong> Missing: ${missing.join(', ')}. <br>${simSession.explanation}`;
      progress.simulationAttempts.push({ id: simSession.id, correct: false, ts: Date.now() });
    }
    save();
  }

  /* =================================================================
     ADJUSTING ENTRIES
     ================================================================= */
  let adjSession = null;
  let adjIndex = 0;

  function initAdjusting() {
    const startBtn = $('#adjStart');
    if (!startBtn) return;
    startBtn.onclick = loadAdjusting;
    $('#adjCheck').onclick = checkAdjusting;
    $('#adjNext').onclick = loadAdjusting;
    $('#adjAddRow').onclick = () => addSimRow('adjEntries');
  }

  function loadAdjusting() {
    const scenarios = typeof ADJUSTING_SCENARIOS !== 'undefined' ? ADJUSTING_SCENARIOS : [];
    if (scenarios.length === 0) return;
    const scenario = scenarios[adjIndex % scenarios.length];
    adjIndex++;
    adjSession = scenario;

    $('#adjSetup').classList.add('hidden');
    $('#adjArea').classList.remove('hidden');
    $('#adjType').textContent = scenario.type;
    $('#adjTitle').textContent = scenario.title;
    $('#adjDescription').textContent = scenario.description;
    $('#adjFeedback').classList.add('hidden');

    const entries = $('#adjEntries');
    entries.innerHTML = '';
    addSimRow('adjEntries');
    addSimRow('adjEntries');
  }

  function checkAdjusting() {
    if (!adjSession) return;
    const rows = $$('#adjEntries .sim-row');
    const userEntries = [];
    rows.forEach(row => {
      const type = row.querySelector('.sim-type').value;
      const account = row.querySelector('.sim-account').value;
      const amount = parseFloat(row.querySelector('.sim-amount').value) || 0;
      if (account && amount > 0) userEntries.push({ type, account, amount });
    });

    const expected = adjSession.entries;
    const fb = $('#adjFeedback');
    fb.classList.remove('hidden');

    const totalDebits = userEntries.filter(e => e.type === 'debit').reduce((s, e) => s + e.amount, 0);
    const totalCredits = userEntries.filter(e => e.type === 'credit').reduce((s, e) => s + e.amount, 0);

    if (Math.abs(totalDebits - totalCredits) > 0.01) {
      fb.className = 'sim-feedback fb-wrong';
      fb.innerHTML = `<strong>Debits don't equal credits!</strong> Debits: $${fmt(totalDebits)}, Credits: $${fmt(totalCredits)}`;
      return;
    }

    let allCorrect = true;
    const missing = [];
    expected.forEach(exp => {
      const match = userEntries.find(u =>
        u.type === exp.type && u.account === exp.account && Math.abs(u.amount - exp.amount) < 0.01
      );
      if (!match) {
        allCorrect = false;
        missing.push(`${exp.type === 'debit' ? 'Dr.' : 'Cr.'} ${exp.account} $${fmt(exp.amount)}`);
      }
    });

    if (allCorrect && userEntries.length === expected.length) {
      fb.className = 'sim-feedback fb-correct';
      fb.innerHTML = `<strong>Correct!</strong> ${adjSession.explanation}`;
      logEvent(`Adjusting entry correct: ${adjSession.title}`);
    } else {
      fb.className = 'sim-feedback fb-wrong';
      fb.innerHTML = `<strong>Not quite.</strong> Missing: ${missing.join(', ')}. <br>${adjSession.explanation}`;
    }
    save();
  }

  /* =================================================================
     CASE STUDIES (NEW)
     ================================================================= */
  let caseSession = null;

  function initCaseStudy() {
    const startBtn = $('#caseStart');
    if (!startBtn) return;
    startBtn.onclick = loadCaseStudy;
    $('#caseCheck').onclick = checkCaseStep;
    $('#caseNext').onclick = nextCaseStep;
    $('#caseRetry').onclick = resetCaseStudy;
  }

  function loadCaseStudy() {
    const bank = typeof CASE_STUDY_BANK !== 'undefined' ? CASE_STUDY_BANK : [];
    if (bank.length === 0) { alert('No case studies available.'); return; }

    const sectionFilter = $('#caseSection') ? $('#caseSection').value : 'all';
    let pool = [...bank];
    if (sectionFilter !== 'all') pool = pool.filter(c => c.section === sectionFilter);
    if (pool.length === 0) { alert('No case studies for this section.'); return; }

    const study = pool[Math.floor(Math.random() * pool.length)];
    caseSession = { study, step: 0, score: 0, total: study.steps.length };

    $('#caseSetup').classList.add('hidden');
    $('#caseResults').classList.add('hidden');
    $('#caseArea').classList.remove('hidden');
    showCaseStep();
  }

  function showCaseStep() {
    const s = caseSession.study;
    const step = s.steps[caseSession.step];

    $('#caseSectionBadge').textContent = s.section;
    $('#caseStepCounter').textContent = `Step ${caseSession.step + 1} of ${s.steps.length}`;
    $('#caseTitle').textContent = s.title;
    $('#caseScenario').innerHTML = s.description;
    $('#caseQuestion').textContent = step.question;
    $('#caseFeedback').classList.add('hidden');
    $('#caseNext').classList.add('hidden');

    const inputArea = $('#caseInputArea');
    inputArea.innerHTML = '';

    if (step.type === 'mcq') {
      const choicesDiv = el('div', 'quiz-choices');
      step.choices.forEach((c, i) => {
        const btn = el('button', 'choice-btn', c);
        btn.onclick = () => selectCaseAnswer(i);
        choicesDiv.appendChild(btn);
      });
      inputArea.appendChild(choicesDiv);
    } else if (step.type === 'text') {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'num-input';
      input.style.width = '100%';
      input.placeholder = 'Type your answer...';
      input.id = 'caseTextInput';
      inputArea.appendChild(input);
    }
  }

  function selectCaseAnswer(idx) {
    const step = caseSession.study.steps[caseSession.step];
    const correct = idx === step.correct;
    if (correct) caseSession.score++;

    const btns = $$('#caseInputArea .choice-btn');
    btns.forEach((b, i) => {
      b.disabled = true;
      if (i === step.correct) b.classList.add('correct');
      if (i === idx && !correct) b.classList.add('wrong');
    });

    const fb = $('#caseFeedback');
    fb.classList.remove('hidden');
    fb.className = `sim-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;
    fb.innerHTML = `<strong>${correct ? 'Correct!' : 'Incorrect.'}</strong> ${step.explanation}`;

    if (caseSession.step < caseSession.study.steps.length - 1) {
      $('#caseNext').classList.remove('hidden');
    } else {
      setTimeout(showCaseResults, 1500);
    }
  }

  function checkCaseStep() {
    const step = caseSession.study.steps[caseSession.step];
    if (step.type === 'mcq') return; // handled by selectCaseAnswer

    if (step.type === 'text') {
      const input = $('#caseTextInput');
      if (!input) return;
      const answer = input.value.trim().toLowerCase();
      const expected = String(step.correct).toLowerCase();
      const correct = answer === expected;
      if (correct) caseSession.score++;

      const fb = $('#caseFeedback');
      fb.classList.remove('hidden');
      fb.className = `sim-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;
      fb.innerHTML = `<strong>${correct ? 'Correct!' : 'Incorrect.'}</strong> ${step.explanation}`;

      if (caseSession.step < caseSession.study.steps.length - 1) {
        $('#caseNext').classList.remove('hidden');
      } else {
        setTimeout(showCaseResults, 1500);
      }
    }
  }

  function nextCaseStep() {
    caseSession.step++;
    showCaseStep();
  }

  function showCaseResults() {
    $('#caseArea').classList.add('hidden');
    $('#caseResults').classList.remove('hidden');

    const pct = Math.round((caseSession.score / caseSession.total) * 100);
    $('#caseScore').innerHTML = `
      <div class="score-circle ${pct >= 75 ? 'score-pass' : 'score-fail'}">${pct}%</div>
      <p>${caseSession.score} / ${caseSession.total} steps correct</p>
    `;

    progress.caseStudyAttempts.push({
      id: caseSession.study.id,
      score: caseSession.score,
      total: caseSession.total,
      ts: Date.now()
    });
    logEvent(`Case study: ${caseSession.study.title} - ${pct}%`);
  }

  function resetCaseStudy() {
    caseSession = null;
    $('#caseArea').classList.add('hidden');
    $('#caseResults').classList.add('hidden');
    $('#caseSetup').classList.remove('hidden');
  }

  /* =================================================================
     GAMES: FLASHCARDS
     ================================================================= */
  let flashSession = { cards: [], index: 0 };

  function initFlashcards() {
    const sel = $('#flashDeck');
    if (!sel) return;
    const bank = typeof FLASHCARD_BANK !== 'undefined' ? FLASHCARD_BANK : [];
    sel.innerHTML = '<option value="all">All Topics</option>';
    const cats = [...new Set(bank.map(f => f.category))];
    cats.forEach(c => sel.innerHTML += `<option value="${c}">${c}</option>`);
    sel.onchange = startFlashcards;

    $('#flashBack').onclick = () => showGameSelector();
    $('#flashFlip').onclick = flipFlashcard;
    $('#flashKnow').onclick = () => advanceFlashcard('know');
    $('#flashReview').onclick = () => advanceFlashcard('review');

    const card = $('#flashcard');
    if (card) card.onclick = flipFlashcard;
  }

  function startFlashcards() {
    const cat = $('#flashDeck').value;
    const bank = typeof FLASHCARD_BANK !== 'undefined' ? FLASHCARD_BANK : [];
    let pool = [...bank];
    if (cat !== 'all') pool = pool.filter(f => f.category === cat);

    pool.sort((a, b) => {
      const sa = progress.flashcardStatus[a.id] || 'new';
      const sb = progress.flashcardStatus[b.id] || 'new';
      if (sa === 'review' && sb !== 'review') return -1;
      if (sb === 'review' && sa !== 'review') return 1;
      if (sa === 'new' && sb === 'know') return -1;
      if (sb === 'new' && sa === 'know') return 1;
      return 0;
    });

    flashSession = { cards: pool, index: 0 };
    showFlashcard();
  }

  function showFlashcard() {
    if (flashSession.cards.length === 0) return;
    const card = flashSession.cards[flashSession.index];
    $('#flashFront').textContent = card.term;
    $('#flashBack2').textContent = card.definition;
    $('#flashcard').classList.remove('flipped');
    $('#flashProgress').textContent = `${flashSession.index + 1} / ${flashSession.cards.length}`;
  }

  function flipFlashcard() {
    $('#flashcard').classList.toggle('flipped');
  }

  function advanceFlashcard(status) {
    const card = flashSession.cards[flashSession.index];
    progress.flashcardStatus[card.id] = status;
    progress.flashcardsReviewed++;
    progress.gamesPlayed++;
    save();

    flashSession.index++;
    if (flashSession.index >= flashSession.cards.length) {
      flashSession.index = 0;
    }
    showFlashcard();
  }

  /* =================================================================
     GAMES: SPEED ROUND
     ================================================================= */
  let speedSession = null;
  let speedTimerId = null;

  function initSpeed() {
    const startBtn = $('#speedStart');
    if (!startBtn) return;
    startBtn.onclick = startSpeed;
    $('#speedRetry').onclick = resetSpeed;
    $('#speedBack').onclick = () => { clearInterval(speedTimerId); showGameSelector(); };
    $('#speedBest').textContent = progress.speedBest;
  }

  function startSpeed() {
    const bank = typeof QUESTION_BANK !== 'undefined' ? QUESTION_BANK : [];
    const pool = shuffle([...bank]);
    speedSession = { questions: pool, index: 0, score: 0, combo: 0, time: 60 };

    $('#speedSetup').classList.add('hidden');
    $('#speedResults').classList.add('hidden');
    $('#speedPlay').classList.remove('hidden');

    speedTimerId = setInterval(() => {
      speedSession.time--;
      $('#speedTimer').textContent = speedSession.time;
      if (speedSession.time <= 0) {
        clearInterval(speedTimerId);
        endSpeed();
      }
    }, 1000);

    showSpeedQuestion();
  }

  function showSpeedQuestion() {
    if (speedSession.index >= speedSession.questions.length) speedSession.index = 0;
    const q = speedSession.questions[speedSession.index];
    $('#speedQuestion').textContent = q.prompt;
    $('#speedScore').textContent = speedSession.score;
    $('#speedCombo').textContent = speedSession.combo > 1 ? `x${speedSession.combo} combo` : '';

    const choices = $('#speedChoices');
    choices.innerHTML = '';
    q.choices.forEach((c, i) => {
      const btn = el('button', '', c);
      btn.onclick = () => {
        if (i === q.correct) {
          speedSession.combo++;
          speedSession.score += speedSession.combo;
          btn.classList.add('correct');
        } else {
          speedSession.combo = 0;
          btn.classList.add('wrong');
        }
        speedSession.index++;
        setTimeout(showSpeedQuestion, 200);
      };
      choices.appendChild(btn);
    });
  }

  function endSpeed() {
    $('#speedPlay').classList.add('hidden');
    $('#speedResults').classList.remove('hidden');
    $('#speedFinalScore').textContent = speedSession.score;
    $('#speedSummary').textContent = `You answered ${speedSession.index} questions.`;

    if (speedSession.score > progress.speedBest) {
      progress.speedBest = speedSession.score;
      $('#speedBest').textContent = progress.speedBest;
    }
    progress.gamesPlayed++;
    logEvent(`Speed round: ${speedSession.score} points`);
  }

  function resetSpeed() {
    $('#speedPlay').classList.add('hidden');
    $('#speedResults').classList.add('hidden');
    $('#speedSetup').classList.remove('hidden');
  }

  /* =================================================================
     GAMES: DEBIT OR CREDIT
     ================================================================= */
  let dcSession = { index: 0, score: 0, total: 0, streak: 0 };

  function initDebitCredit() {
    const debitBtn = $('#dcDebit');
    if (!debitBtn) return;
    debitBtn.onclick = () => answerDC('debit');
    $('#dcCredit').onclick = () => answerDC('credit');
    $('#dcBack').onclick = () => showGameSelector();
    loadDCQuestion();
  }

  function getDCBank() {
    if (typeof DC_BANK !== 'undefined' && DC_BANK.length > 0) return DC_BANK;
    // Convert DEBIT_CREDIT_SCENARIOS format to DC_BANK format
    if (typeof DEBIT_CREDIT_SCENARIOS !== 'undefined') {
      const flat = [];
      DEBIT_CREDIT_SCENARIOS.forEach(s => {
        s.entries.forEach(e => {
          flat.push({ scenario: s.scenario, account: e.account, correct: e.correctSide });
        });
      });
      return flat;
    }
    return [];
  }

  function loadDCQuestion() {
    const bank = getDCBank();
    if (bank.length === 0) return;
    const q = bank[dcSession.index % bank.length];
    $('#dcScenario').textContent = q.scenario;
    $('#dcAccount').textContent = q.account;
    $('#dcFeedback').classList.add('hidden');
  }

  function answerDC(answer) {
    const bank = getDCBank();
    if (bank.length === 0) return;
    const q = bank[dcSession.index % bank.length];
    const correct = answer === q.correct;

    dcSession.total++;
    if (correct) {
      dcSession.score++;
      dcSession.streak++;
    } else {
      dcSession.streak = 0;
    }

    $('#dcScore').textContent = dcSession.score;
    $('#dcTotal').textContent = dcSession.total;
    $('#dcStreak').textContent = dcSession.streak;

    const fb = $('#dcFeedback');
    fb.classList.remove('hidden');
    fb.className = `dc-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;
    fb.textContent = correct ? 'Correct!' : `Wrong! The answer was ${q.correct}.`;

    dcSession.index++;
    progress.gamesPlayed++;
    save();
    setTimeout(loadDCQuestion, 800);
  }

  /* =================================================================
     GAMES: MATCHING
     ================================================================= */
  let matchSession = null;

  function initMatching() {
    const startBtn = $('#matchStart');
    if (!startBtn) return;
    startBtn.onclick = startMatching;
    $('#matchBack').onclick = () => showGameSelector();
  }

  function startMatching() {
    const bank = typeof MATCHING_BANK !== 'undefined' ? MATCHING_BANK : [];
    const deckIdx = parseInt($('#matchDeck').value) || 0;
    if (!bank[deckIdx]) return;

    // Handle both formats: array of {id, term, definition} or {title, pairs: [{term, definition}]}
    let pairs;
    const deck = bank[deckIdx];
    if (Array.isArray(deck)) {
      pairs = deck;
    } else if (deck.pairs) {
      pairs = deck.pairs.map((p, i) => ({ id: `match-${deckIdx}-${i}`, term: p.term, definition: p.definition }));
    } else {
      return;
    }

    const cards = [];
    pairs.forEach(p => {
      const pid = p.id || p.term;
      cards.push({ id: pid, text: p.term, type: 'term', pairId: pid });
      cards.push({ id: pid + '-def', text: p.definition, type: 'def', pairId: pid });
    });

    matchSession = {
      cards: shuffle(cards),
      flipped: [],
      matched: [],
      moves: 0,
      total: pairs.length
    };

    $('#matchSetup').classList.add('hidden');
    $('#matchPlay').classList.remove('hidden');
    renderMatchGrid();
  }

  function renderMatchGrid() {
    const grid = $('#matchGrid');
    grid.innerHTML = '';
    matchSession.cards.forEach((card, i) => {
      const div = el('div', 'match-card');
      div.dataset.index = i;
      if (matchSession.matched.includes(card.pairId)) {
        div.classList.add('matched');
        div.textContent = card.text;
      } else if (matchSession.flipped.includes(i)) {
        div.classList.add('flipped');
        div.textContent = card.text;
      } else {
        div.textContent = '?';
      }
      div.onclick = () => flipMatchCard(i);
      grid.appendChild(div);
    });

    $('#matchMoves').textContent = matchSession.moves;
    $('#matchPairs').textContent = matchSession.matched.length;
    $('#matchTotal').textContent = matchSession.total;
  }

  function flipMatchCard(idx) {
    if (matchSession.flipped.includes(idx)) return;
    if (matchSession.matched.includes(matchSession.cards[idx].pairId)) return;
    if (matchSession.flipped.length >= 2) return;

    matchSession.flipped.push(idx);
    renderMatchGrid();

    if (matchSession.flipped.length === 2) {
      matchSession.moves++;
      const [a, b] = matchSession.flipped.map(i => matchSession.cards[i]);
      if (a.pairId === b.pairId && a.type !== b.type) {
        matchSession.matched.push(a.pairId);
        matchSession.flipped = [];
        setTimeout(renderMatchGrid, 300);

        if (matchSession.matched.length === matchSession.total) {
          progress.gamesPlayed++;
          logEvent(`Matching game: ${matchSession.moves} moves`);
        }
      } else {
        setTimeout(() => {
          matchSession.flipped = [];
          renderMatchGrid();
        }, 800);
      }
    }
  }

  /* =================================================================
     GAMES: ACCOUNT SORTER
     ================================================================= */
  let sorterSession = { current: null, score: 0, total: 0 };

  function initSorter() {
    const buckets = $$('#sorterBuckets .bucket');
    if (buckets.length === 0) return;
    buckets.forEach(b => b.onclick = () => sortAccount(b.dataset.cat));
    $('#sorterBack').onclick = () => showGameSelector();
    loadSorterAccount();
  }

  function loadSorterAccount() {
    const accounts = [
      { name: 'Cash', cat: 'Asset' }, { name: 'Accounts Receivable', cat: 'Asset' },
      { name: 'Inventory', cat: 'Asset' }, { name: 'Equipment', cat: 'Asset' },
      { name: 'Land', cat: 'Asset' }, { name: 'Buildings', cat: 'Asset' },
      { name: 'Prepaid Insurance', cat: 'Asset' }, { name: 'Supplies', cat: 'Asset' },
      { name: 'Accounts Payable', cat: 'Liability' }, { name: 'Notes Payable', cat: 'Liability' },
      { name: 'Wages Payable', cat: 'Liability' }, { name: 'Unearned Revenue', cat: 'Liability' },
      { name: 'Bonds Payable', cat: 'Liability' }, { name: 'Income Tax Payable', cat: 'Liability' },
      { name: 'Common Stock', cat: 'Equity' }, { name: 'Retained Earnings', cat: 'Equity' },
      { name: 'APIC', cat: 'Equity' }, { name: 'Treasury Stock', cat: 'Equity' },
      { name: 'Service Revenue', cat: 'Revenue' }, { name: 'Sales Revenue', cat: 'Revenue' },
      { name: 'Interest Revenue', cat: 'Revenue' }, { name: 'Rent Revenue', cat: 'Revenue' },
      { name: 'Wages Expense', cat: 'Expense' }, { name: 'Rent Expense', cat: 'Expense' },
      { name: 'Depreciation Expense', cat: 'Expense' }, { name: 'Interest Expense', cat: 'Expense' },
      { name: 'Cost of Goods Sold', cat: 'Expense' }, { name: 'Utilities Expense', cat: 'Expense' }
    ];
    sorterSession.current = accounts[Math.floor(Math.random() * accounts.length)];
    const el = $('#sorterAccount');
    if (el) el.textContent = sorterSession.current.name;
    $('#sorterFeedback').classList.add('hidden');
  }

  function sortAccount(cat) {
    if (!sorterSession.current) return;
    const correct = cat === sorterSession.current.cat;
    sorterSession.total++;
    if (correct) sorterSession.score++;

    $('#sorterScore').textContent = sorterSession.score;
    $('#sorterTotal').textContent = sorterSession.total;

    const fb = $('#sorterFeedback');
    fb.classList.remove('hidden');
    fb.className = `dc-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;
    fb.textContent = correct ? 'Correct!' : `Wrong! ${sorterSession.current.name} is ${sorterSession.current.cat === 'Equity' ? 'an' : 'a'} ${sorterSession.current.cat} account.`;

    progress.gamesPlayed++;
    save();
    setTimeout(loadSorterAccount, 600);
  }

  /* =================================================================
     GAMES: EQUATION BUILDER
     ================================================================= */
  let eqSession = { index: 0, score: 0, assets: 0, liabilities: 0, equity: 0 };

  function initEquation() {
    const checkBtn = $('#eqCheck');
    if (!checkBtn) return;
    checkBtn.onclick = checkEquation;
    $('#eqNext').onclick = nextEquation;
    $('#eqBack').onclick = () => showGameSelector();
    loadEquation();
  }

  function loadEquation() {
    const bank = typeof EQUATION_SCENARIOS !== 'undefined' ? EQUATION_SCENARIOS : [];
    if (bank.length === 0) return;
    const scenario = bank[eqSession.index % bank.length];

    eqSession.assets = scenario.startAssets;
    eqSession.liabilities = scenario.startLiabilities;
    eqSession.equity = scenario.startEquity;

    updateEqDisplay();
    $('#eqScenario').textContent = scenario.description;
    $('#eqFeedback').classList.add('hidden');

    const inputs = $('#eqInputs');
    inputs.innerHTML = '';
    scenario.changes.forEach((c, i) => {
      const label = c.label || `Change in ${capitalize(c.field || 'value')}`;
      inputs.innerHTML += `
        <div class="eq-change">
          <label>${label}:
            <input type="number" class="num-input eq-change-input" data-index="${i}" value="0">
          </label>
        </div>
      `;
    });
  }

  function updateEqDisplay() {
    const aEl = $('#eqAssets');
    const lEl = $('#eqLiabilities');
    const eEl = $('#eqEquity');
    if (aEl) aEl.textContent = fmtMoney(eqSession.assets);
    if (lEl) lEl.textContent = fmtMoney(eqSession.liabilities);
    if (eEl) eEl.textContent = fmtMoney(eqSession.equity);

    const balanced = eqSession.assets === eqSession.liabilities + eqSession.equity;
    const status = $('#eqStatus');
    if (status) {
      status.textContent = balanced ? 'Balanced!' : 'Not balanced';
      status.className = `eq-status ${balanced ? 'eq-balanced' : 'eq-unbalanced'}`;
    }
  }

  function checkEquation() {
    const bank = typeof EQUATION_SCENARIOS !== 'undefined' ? EQUATION_SCENARIOS : [];
    if (bank.length === 0) return;
    const scenario = bank[eqSession.index % bank.length];
    const inputs = $$('.eq-change-input');
    let correct = true;

    inputs.forEach((inp, i) => {
      const val = parseFloat(inp.value) || 0;
      const expected = scenario.changes[i].answer ?? scenario.changes[i].amount ?? 0;
      if (Math.abs(val - expected) > 0.01) correct = false;
    });

    const fb = $('#eqFeedback');
    fb.classList.remove('hidden');
    fb.className = `dc-feedback ${correct ? 'fb-correct' : 'fb-wrong'}`;
    fb.innerHTML = correct
      ? `<strong>Correct!</strong> ${scenario.explanation}`
      : `<strong>Not quite.</strong> ${scenario.explanation}`;

    if (correct) eqSession.score++;
    $('#eqScore').textContent = eqSession.score;
    progress.gamesPlayed++;
    save();
  }

  function nextEquation() {
    eqSession.index++;
    loadEquation();
  }

  /* ---------- Game Selector ---------- */
  function initGameSelector() {
    $$('.game-card').forEach(card => {
      card.onclick = () => {
        const game = card.dataset.game;
        $('#gameSelector').classList.add('hidden');
        const gameEl = $(`#game${capitalize(game === 'debitcredit' ? 'DebitCredit' : game === 'flashcards' ? 'Flashcards' : game === 'speed' ? 'Speed' : game === 'matching' ? 'Matching' : game === 'sorter' ? 'Sorter' : 'Equation')}`);
        if (gameEl) gameEl.classList.remove('hidden');

        if (game === 'flashcards') startFlashcards();
        if (game === 'debitcredit') loadDCQuestion();
        if (game === 'sorter') loadSorterAccount();
        if (game === 'equation') loadEquation();
      };
    });
  }

  function showGameSelector() {
    $$('.game-area').forEach(g => g.classList.add('hidden'));
    const selector = $('#gameSelector');
    if (selector) selector.classList.remove('hidden');
  }

  /* =================================================================
     TOOLS: RATIO ANALYSIS
     ================================================================= */
  function initRatioTool() {
    const calcBtn = $('#ratioCalc');
    if (!calcBtn) return;
    calcBtn.onclick = calculateRatios;
  }

  function calculateRatios() {
    const v = (id) => parseFloat($(`#${id}`).value) || 0;
    const cash = v('rCash'), ar = v('rAR'), inv = v('rInventory');
    const ca = v('rCA'), ta = v('rTA'), cl = v('rCL'), tl = v('rTL'), eq = v('rEQ');
    const sales = v('rSales'), cogs = v('rCOGS'), ni = v('rNI'), interest = v('rInterest');

    const ratios = [
      { cat: 'Liquidity', name: 'Current Ratio', value: (ca / cl).toFixed(2), benchmark: '> 1.5' },
      { cat: 'Liquidity', name: 'Quick Ratio', value: ((cash + ar) / cl).toFixed(2), benchmark: '> 1.0' },
      { cat: 'Profitability', name: 'Gross Margin', value: (((sales - cogs) / sales) * 100).toFixed(1) + '%', benchmark: 'Industry avg' },
      { cat: 'Profitability', name: 'Net Profit Margin', value: ((ni / sales) * 100).toFixed(1) + '%', benchmark: '> 10%' },
      { cat: 'Profitability', name: 'ROA', value: ((ni / ta) * 100).toFixed(1) + '%', benchmark: '> 5%' },
      { cat: 'Profitability', name: 'ROE', value: ((ni / eq) * 100).toFixed(1) + '%', benchmark: '> 15%' },
      { cat: 'Efficiency', name: 'Asset Turnover', value: (sales / ta).toFixed(2), benchmark: 'Varies' },
      { cat: 'Efficiency', name: 'Receivables Turnover', value: (sales / ar).toFixed(2), benchmark: '> 8' },
      { cat: 'Leverage', name: 'Debt-to-Equity', value: (tl / eq).toFixed(2), benchmark: '< 2.0' },
      { cat: 'Leverage', name: 'Times Interest Earned', value: interest > 0 ? ((ni + interest) / interest).toFixed(2) : 'N/A', benchmark: '> 3.0' }
    ];

    const results = $('#ratioResults');
    results.classList.remove('hidden');
    let html = '';
    let currentCat = '';
    ratios.forEach(r => {
      if (r.cat !== currentCat) {
        currentCat = r.cat;
        html += `<h4 class="ratio-cat">${r.cat}</h4>`;
      }
      html += `
        <div class="ratio-row">
          <span class="ratio-name">${r.name}</span>
          <span class="ratio-value">${r.value}</span>
          <span class="ratio-bench">${r.benchmark}</span>
        </div>
      `;
    });
    results.innerHTML = html;
    logEvent('Calculated financial ratios');
  }

  /* =================================================================
     TOOLS: DEPRECIATION
     ================================================================= */
  function initDepreciation() {
    const calcBtn = $('#deprCalc');
    if (!calcBtn) return;
    calcBtn.onclick = calculateDepreciation;
  }

  function calculateDepreciation() {
    const cost = parseFloat($('#dCost').value) || 0;
    const salvage = parseFloat($('#dSalvage').value) || 0;
    const life = parseInt($('#dLife').value) || 1;
    const depreciable = cost - salvage;

    // Straight-line
    const sl = depreciable / life;

    // Sum-of-years-digits
    const syd_sum = (life * (life + 1)) / 2;

    // Double-declining
    const ddb_rate = 2 / life;

    let html = '<div class="depr-grid">';

    // SL table
    html += '<div class="depr-method"><h4>Straight-Line</h4><table><thead><tr><th>Year</th><th>Depreciation</th><th>Book Value</th></tr></thead><tbody>';
    let bv = cost;
    for (let y = 1; y <= life; y++) {
      bv -= sl;
      html += `<tr><td>${y}</td><td>$${fmt(sl)}</td><td>$${fmt(Math.max(bv, salvage))}</td></tr>`;
    }
    html += '</tbody></table></div>';

    // DDB table
    html += '<div class="depr-method"><h4>Double-Declining Balance</h4><table><thead><tr><th>Year</th><th>Depreciation</th><th>Book Value</th></tr></thead><tbody>';
    bv = cost;
    for (let y = 1; y <= life; y++) {
      let dep = bv * ddb_rate;
      if (bv - dep < salvage) dep = bv - salvage;
      if (dep < 0) dep = 0;
      bv -= dep;
      html += `<tr><td>${y}</td><td>$${fmt(dep)}</td><td>$${fmt(bv)}</td></tr>`;
    }
    html += '</tbody></table></div>';

    // SYD table
    html += '<div class="depr-method"><h4>Sum-of-Years\' Digits</h4><table><thead><tr><th>Year</th><th>Depreciation</th><th>Book Value</th></tr></thead><tbody>';
    bv = cost;
    for (let y = 1; y <= life; y++) {
      const fraction = (life - y + 1) / syd_sum;
      const dep = depreciable * fraction;
      bv -= dep;
      html += `<tr><td>${y}</td><td>$${fmt(dep)}</td><td>$${fmt(Math.max(bv, salvage))}</td></tr>`;
    }
    html += '</tbody></table></div>';

    html += '</div>';

    const results = $('#deprResults');
    results.classList.remove('hidden');
    results.innerHTML = html;
    logEvent('Calculated depreciation schedules');
  }

  /* =================================================================
     TOOLS: BANK RECONCILIATION
     ================================================================= */
  let bankrecSession = null;

  function initBankRec() {
    const startBtn = $('#bankrecStart');
    if (!startBtn) return;
    startBtn.onclick = loadBankRec;
    $('#bankrecCheck').onclick = checkBankRec;

    // Auto-calculate adjusted balances
    ['brDIT', 'brOC', 'brInterest', 'brCollections', 'brFees', 'brNSF'].forEach(id => {
      const inp = $(`#${id}`);
      if (inp) inp.oninput = updateBankRecTotals;
    });
  }

  function loadBankRec() {
    const bank = typeof BANK_REC_SCENARIOS !== 'undefined' ? BANK_REC_SCENARIOS : [];
    if (bank.length === 0) return;

    const scenario = bank[Math.floor(Math.random() * bank.length)];
    bankrecSession = scenario;

    $('#bankrecArea').classList.remove('hidden');
    $('#bankrecScenario').innerHTML = `<h4>${scenario.title}</h4><p>${scenario.description}</p>`;
    $('#brBankBal').value = scenario.bankBalance;
    $('#brBookBal').value = scenario.bookBalance;
    $('#brDIT').value = 0;
    $('#brOC').value = 0;
    $('#brInterest').value = 0;
    $('#brCollections').value = 0;
    $('#brFees').value = 0;
    $('#brNSF').value = 0;
    $('#bankrecFeedback').classList.add('hidden');
    updateBankRecTotals();
  }

  function updateBankRecTotals() {
    if (!bankrecSession) return;
    const bankBal = parseFloat($('#brBankBal').value) || 0;
    const dit = parseFloat($('#brDIT').value) || 0;
    const oc = parseFloat($('#brOC').value) || 0;
    const adjBank = bankBal + dit - oc;
    $('#brAdjBank').value = adjBank;

    const bookBal = parseFloat($('#brBookBal').value) || 0;
    const interest = parseFloat($('#brInterest').value) || 0;
    const collections = parseFloat($('#brCollections').value) || 0;
    const fees = parseFloat($('#brFees').value) || 0;
    const nsf = parseFloat($('#brNSF').value) || 0;
    const adjBook = bookBal + interest + collections - fees - nsf;
    $('#brAdjBook').value = adjBook;
  }

  function checkBankRec() {
    if (!bankrecSession) return;
    updateBankRecTotals();

    const adjBank = parseFloat($('#brAdjBank').value) || 0;
    const adjBook = parseFloat($('#brAdjBook').value) || 0;

    const dit = parseFloat($('#brDIT').value) || 0;
    const oc = parseFloat($('#brOC').value) || 0;
    const interest = parseFloat($('#brInterest').value) || 0;
    const collections = parseFloat($('#brCollections').value) || 0;
    const fees = parseFloat($('#brFees').value) || 0;
    const nsf = parseFloat($('#brNSF').value) || 0;

    const s = bankrecSession;
    const fb = $('#bankrecFeedback');
    fb.classList.remove('hidden');

    const correctDIT = Math.abs(dit - s.depositsInTransit) < 0.01;
    const correctOC = Math.abs(oc - s.outstandingChecks) < 0.01;
    const sInterest = s.interest ?? s.interestEarned ?? 0;
    const sFees = s.fees ?? s.bankFees ?? 0;
    const sNSF = s.nsf ?? s.nsfChecks ?? 0;
    const sCollections = s.collections ?? 0;
    const correctInt = Math.abs(interest - sInterest) < 0.01;
    const correctCol = Math.abs(collections - sCollections) < 0.01;
    const correctFees = Math.abs(fees - sFees) < 0.01;
    const correctNSF = Math.abs(nsf - sNSF) < 0.01;

    if (correctDIT && correctOC && correctInt && correctCol && correctFees && correctNSF && Math.abs(adjBank - adjBook) < 0.01) {
      fb.className = 'sim-feedback fb-correct';
      fb.innerHTML = `<strong>Perfect reconciliation!</strong> Both sides balance at $${fmt(adjBank)}. ${s.description}`;
      logEvent(`Bank reconciliation correct: ${s.title}`);
    } else {
      const issues = [];
      if (!correctDIT) issues.push(`Deposits in transit should be $${fmt(s.depositsInTransit)}`);
      if (!correctOC) issues.push(`Outstanding checks should be $${fmt(s.outstandingChecks)}`);
      if (!correctInt) issues.push(`Interest earned should be $${fmt(sInterest)}`);
      if (!correctCol) issues.push(`Collections should be $${fmt(sCollections)}`);
      if (!correctFees) issues.push(`Bank fees should be $${fmt(sFees)}`);
      if (!correctNSF) issues.push(`NSF checks should be $${fmt(sNSF)}`);

      fb.className = 'sim-feedback fb-wrong';
      fb.innerHTML = `<strong>Not quite.</strong> ${issues.join('. ')}.`;
    }
    save();
  }

  /* =================================================================
     EXAM SIMULATOR
     ================================================================= */
  let examSession = null;
  let examTimerId = null;

  function initExam() {
    $$('.exam-option-card').forEach(card => {
      card.onclick = () => startExam(card.dataset.section);
    });
    const prevBtn = $('#examPrev');
    if (prevBtn) prevBtn.onclick = () => navigateExam(-1);
    const nextBtn = $('#examNext2');
    if (nextBtn) nextBtn.onclick = () => navigateExam(1);
    const flagBtn = $('#examFlag');
    if (flagBtn) flagBtn.onclick = flagExamQuestion;
    const submitBtn = $('#examSubmit');
    if (submitBtn) submitBtn.onclick = submitExam;
    const retryBtn = $('#examRetry');
    if (retryBtn) retryBtn.onclick = resetExam;
  }

  function startExam(section) {
    const bank = typeof QUESTION_BANK !== 'undefined' ? QUESTION_BANK : [];
    const configs = {
      FAR: { time: 30, count: 20 },
      AUD: { time: 25, count: 15 },
      REG: { time: 25, count: 15 },
      MIXED: { time: 45, count: 30 }
    };
    const cfg = configs[section] || configs.MIXED;

    let pool = [...bank];
    if (section !== 'MIXED') pool = pool.filter(q => q.cpaSection === section);
    if (pool.length < cfg.count) pool = [...bank]; // fallback to all

    const selected = shuffle(pool).slice(0, cfg.count);

    examSession = {
      section,
      questions: selected,
      answers: new Array(selected.length).fill(null),
      flags: new Array(selected.length).fill(false),
      current: 0,
      time: cfg.time * 60
    };

    $('#examSetup').classList.add('hidden');
    $('#examResults').classList.add('hidden');
    $('#examArea').classList.remove('hidden');

    examTimerId = setInterval(() => {
      examSession.time--;
      const m = Math.floor(examSession.time / 60);
      const s = examSession.time % 60;
      $('#examTimer').textContent = `${m}:${s.toString().padStart(2, '0')}`;
      if (examSession.time <= 0) {
        clearInterval(examTimerId);
        submitExam();
      }
    }, 1000);

    showExamQuestion();
  }

  function showExamQuestion() {
    const q = examSession.questions[examSession.current];
    const num = examSession.current + 1;
    const total = examSession.questions.length;

    $('#examSection').textContent = q.cpaSection;
    $('#examProgress').textContent = `${num} / ${total}`;
    $('#examProgressFill').style.width = `${(num / total) * 100}%`;
    $('#examQuestion').textContent = q.prompt;

    const choices = $('#examChoices');
    choices.innerHTML = '';
    q.choices.forEach((c, i) => {
      const btn = el('button', `choice-btn ${examSession.answers[examSession.current] === i ? 'selected' : ''}`, c);
      btn.onclick = () => {
        examSession.answers[examSession.current] = i;
        showExamQuestion();
      };
      choices.appendChild(btn);
    });

    // Navigation dots
    const dots = $('#examDots');
    dots.innerHTML = '';
    examSession.questions.forEach((_, i) => {
      const dot = el('span', 'exam-dot');
      if (i === examSession.current) dot.classList.add('current');
      if (examSession.answers[i] !== null) dot.classList.add('answered');
      if (examSession.flags[i]) dot.classList.add('flagged');
      dot.onclick = () => { examSession.current = i; showExamQuestion(); };
      dots.appendChild(dot);
    });

    // Submit button visibility
    const allAnswered = examSession.answers.every(a => a !== null);
    const submitBtn = $('#examSubmit');
    if (submitBtn) submitBtn.classList.toggle('hidden', !allAnswered);
  }

  function navigateExam(dir) {
    examSession.current = Math.max(0, Math.min(examSession.questions.length - 1, examSession.current + dir));
    showExamQuestion();
  }

  function flagExamQuestion() {
    examSession.flags[examSession.current] = !examSession.flags[examSession.current];
    showExamQuestion();
  }

  function submitExam() {
    clearInterval(examTimerId);
    $('#examArea').classList.add('hidden');
    $('#examResults').classList.remove('hidden');

    let score = 0;
    examSession.questions.forEach((q, i) => {
      if (examSession.answers[i] === q.correct) score++;
    });

    const pct = Math.round((score / examSession.questions.length) * 100);
    $('#examScoreBig').innerHTML = `
      <div class="score-circle ${pct >= 75 ? 'score-pass' : 'score-fail'}">${pct}%</div>
      <p>${score} / ${examSession.questions.length} correct</p>
      <p class="${pct >= 75 ? 'good' : 'bad'}">${pct >= 75 ? 'PASSING SCORE' : 'Below passing threshold (75%)'}</p>
    `;

    // Breakdown
    const byTopic = {};
    examSession.questions.forEach((q, i) => {
      if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
      byTopic[q.topic].total++;
      if (examSession.answers[i] === q.correct) byTopic[q.topic].correct++;
    });

    const bd = $('#examResultBreakdown');
    bd.innerHTML = '<h4>Topic Breakdown</h4>';
    Object.entries(byTopic).forEach(([topic, s]) => {
      const p = Math.round((s.correct / s.total) * 100);
      bd.innerHTML += `
        <div class="breakdown-row">
          <span>${topic.replace(/-/g, ' ')}</span>
          <span class="${p >= 70 ? 'good' : p >= 50 ? 'warn' : 'bad'}">${p}% (${s.correct}/${s.total})</span>
        </div>
      `;
    });

    progress.examAttempts.push({ section: examSession.section, score, total: examSession.questions.length, ts: Date.now() });
    logEvent(`Exam (${examSession.section}): ${score}/${examSession.questions.length} (${pct}%)`);
  }

  function resetExam() {
    examSession = null;
    $('#examArea').classList.add('hidden');
    $('#examResults').classList.add('hidden');
    $('#examSetup').classList.remove('hidden');
  }

  /* =================================================================
     STUDY PLAN
     ================================================================= */
  function renderPlan() {
    const container = $('#planContent');
    if (!container) return;
    container.innerHTML = '';

    const weakTopics = [];
    Object.entries(progress.topicStats).forEach(([topic, s]) => {
      if (s.total > 0) {
        const pct = s.correct / s.total;
        if (pct < 0.7) weakTopics.push({ topic, pct });
      }
    });
    weakTopics.sort((a, b) => a.pct - b.pct);

    const unstarted = allTopics().filter(t => !progress.completedTopics.includes(t.id));

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const tasks = [
      (t) => ({ text: `Review: ${t.replace(/-/g, ' ')}`, cls: 'plan-review' }),
      (t) => ({ text: `Quiz: ${t.replace(/-/g, ' ')} (10 questions)`, cls: 'plan-quiz' }),
      (t) => ({ text: `Learn: ${t.replace(/-/g, ' ')}`, cls: 'plan-learn' }),
      () => ({ text: 'Play: Speed Round challenge', cls: 'plan-game' }),
      () => ({ text: 'Play: Debit or Credit game', cls: 'plan-game' }),
      (t) => ({ text: `Simulation: Journal entries for ${t.replace(/-/g, ' ')}`, cls: 'plan-sim' }),
      () => ({ text: 'Practice Exam: Mixed section', cls: 'plan-exam' }),
      () => ({ text: 'Tools: Ratio analysis practice', cls: 'plan-tools' }),
      () => ({ text: 'Tools: Depreciation calculator', cls: 'plan-tools' })
    ];

    days.forEach(day => {
      const card = el('div', 'plan-card');
      card.innerHTML = `<h4>${day}</h4>`;

      const numTasks = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < numTasks; i++) {
        const topicPool = weakTopics.length > 0 ? weakTopics : [{ topic: unstarted[0]?.id || 'accounting-equation' }];
        const topic = topicPool[Math.floor(Math.random() * topicPool.length)].topic;
        const taskFn = tasks[Math.floor(Math.random() * tasks.length)];
        const task = taskFn(topic);
        card.innerHTML += `<div class="plan-task ${task.cls}">${task.text}</div>`;
      }

      container.appendChild(card);
    });

    logEvent('Generated study plan');
  }

  /* =================================================================
     PWA SERVICE WORKER
     ================================================================= */
  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }

  /* =================================================================
     INIT
     ================================================================= */
  function boot() {
    registerSW();
    initAuth();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
