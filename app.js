/* LP Mapping Trainer — drill question -> Leadership Principle.
 * Data is at the top so it is easy to edit.
 *   src 'qb'  = verbatim from the Amazon Interview Question Bank
 *   src 'gen' = written in AIQB style (GenAI Fluency only — no QB text available)
 */

const LPS = [
  {
    id: 'ownership',
    name: 'Ownership',
    def: `Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say "that's not my job."`,
    cue: `Scope beyond your job description; long-term vs short-term tradeoff; something nobody owned; seeing it through even after handoff.`,
  },
  {
    id: 'customer-obsession',
    name: 'Customer Obsession',
    def: `Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.`,
    cue: `A customer is the other party in the story: their feedback, their unstated need, saying no to them, customer vs business tradeoff.`,
  },
  {
    id: 'deliver-results',
    name: 'Deliver Results',
    def: `Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle.`,
    cue: `A deadline or goal is the spine of the story: obstacles overcome, competing priorities, exceeded/missed the target.`,
  },
  {
    id: 'earn-trust',
    name: 'Earn Trust',
    def: `Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. They benchmark themselves and their teams against the best.`,
    cue: `Relationships and candor: hard feedback received, mistake admitted, commitment missed and owned, peer influenced, cross-team misalignment, morale.`,
  },
  {
    id: 'dive-deep',
    name: 'Dive Deep',
    def: `Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdotes differ. No task is beneath them.`,
    cue: `Root cause, details, metrics you built or interrogated, auditing, filling information gaps, analysis-heavy investigation.`,
  },
  {
    id: 'invent-and-simplify',
    name: 'Invent and Simplify',
    def: `Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by "not invented here."`,
    cue: `Novelty or subtraction: a new idea, the usual approach wouldn't work, complexity removed, made simpler for customers.`,
  },
  {
    id: 'learn-and-be-curious',
    name: 'Learn and Be Curious',
    def: `Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.`,
    cue: `You are the thing being upgraded: new skill or domain, improving your own effectiveness, exploring an unknown out of curiosity.`,
  },
  {
    id: 'genai-fluency',
    name: 'GenAI Fluency',
    def: `Leaders use generative AI to raise their own and their team's bar. They know where it helps and where it doesn't, verify its output, and keep learning as the tooling changes. (Paraphrase — not official LP text.)`,
    cue: `An AI/LLM tool is named in the story: what you used it for, how you validated output, risks mitigated, adoption you drove.`,
  },
  {
    id: 'disagree-and-commit',
    name: 'Have Backbone; Disagree and Commit',
    def: `Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. They do not compromise for the sake of social cohesion. Once a decision is determined, they commit wholly.`,
    cue: `An explicit disagreement: you challenged someone (often upward), held a position under pressure, persisted — or you lost and committed fully anyway.`,
  },
];

const QUESTIONS = [
  // ---------- Ownership ----------
  { lp: 'ownership', src: 'qb', q: `Tell me about a time when you took on something significant outside your area of responsibility. Why was it important? What was the outcome?` },
  { lp: 'ownership', src: 'qb', q: `Describe a time when you didn't think you were going to meet a commitment you promised. How did you identify the risk and communicate it to stakeholders? Is there anything you would do differently?` },
  { lp: 'ownership', src: 'qb', q: `Give me an example of an initiative you undertook because you saw that it could benefit the whole company or your customers, but wasn't within any group's individual responsibility so nothing was being done.` },
  { lp: 'ownership', src: 'qb', q: `Tell me about a time when you made a hard decision to sacrifice short term gain for something that would create long term value for the business. What was the outcome? Knowing what you know now, would you have done anything differently?` },
  { lp: 'ownership', src: 'qb', q: `Describe a time when you had to transition a project you owned to a new owner. What steps did you take to make sure the transition went smoothly?` },
  { lp: 'ownership', src: 'qb', q: `Tell me about a time that you chose to get involved in a project that you had already transitioned to somebody else. What was the situation? Why was it important to get involved?` },
  { lp: 'ownership', src: 'qb', q: `Tell me about a time when you saw a peer struggling and decided to step in and help. What was the situation? Why did you decide to step in? What actions did you take?` },

  // ---------- Customer Obsession ----------
  { lp: 'customer-obsession', src: 'qb', q: `Describe a difficult interaction you had with a customer. How did you deal with it? What was the outcome? How would you handle it differently?` },
  { lp: 'customer-obsession', src: 'qb', q: `Tell me about a time when you went above and beyond for a customer. Why did you do it? How did the customer respond? What was the outcome?` },
  { lp: 'customer-obsession', src: 'qb', q: `Give me an example of when you were able to anticipate a customer need with a solution or product they did not know they needed or wanted yet. How did you know they needed this? How did they respond?` },
  { lp: 'customer-obsession', src: 'qb', q: `Give me an example of a time when you asked for customer feedback. How did you use that feedback to drive innovation or improvement? How did the customer respond?` },
  { lp: 'customer-obsession', src: 'qb', q: `Tell me about a time when you evaluated the customer experience of your product or service. What did you do? What was the result?` },
  { lp: 'customer-obsession', src: 'qb', q: `Tell me about a time when a customer came to you for something that would not actually address their need. How did you approach the situation? What was the result?` },
  { lp: 'customer-obsession', src: 'qb', q: `Sometimes customers make unreasonable requests. Tell me about a time when you have had to push back or say no to a customer request. What did you say or do in response to that request?` },
  { lp: 'customer-obsession', src: 'qb', q: `Tell me about a time when you had to balance the needs of the customer with the needs of the business. What did you do? What was the result?` },

  // ---------- Deliver Results ----------
  { lp: 'deliver-results', src: 'qb', q: `Give me an example of a time when you were able to deliver an important project under a tight deadline. What sacrifices did you have to make to meet the deadline? How did they impact the final deliverable? What was the final outcome?` },
  { lp: 'deliver-results', src: 'qb', q: `Tell me about a time when you had significant, unanticipated obstacles to overcome in achieving a key goal. What was the obstacle? Were you eventually successful? Knowing what you know now, is there anything you would have done differently?` },
  { lp: 'deliver-results', src: 'qb', q: `Tell me about a time when you not only met a goal but considerably exceeded expectations. How were you able to do it? What challenges did you have to overcome?` },
  { lp: 'deliver-results', src: 'qb', q: `Tell me about a time when you or your team were more than half way to meeting a goal when you realized it may not be the right goal or may have unintended consequences. What was the situation? What did you do? What was the outcome?` },
  { lp: 'deliver-results', src: 'qb', q: `Give me an example of a mission or goal you didn't think was achievable. What was it and how did you help your team try to achieve it? Were you successful in the end?` },
  { lp: 'deliver-results', src: 'qb', q: `Tell me about a time when you did not effectively manage your projects and something did not get completed on time. What was the impact? What approaches do you use to make sure you are focusing on the right deliverables when you have several competing priorities?` },

  // ---------- Earn Trust ----------
  { lp: 'earn-trust', src: 'qb', q: `Tell me about a time when you had to communicate a change in direction that you anticipated people would have concerns with. What did you do to understand the concerns and mitigate them? How did you handle questions and/or resistance? Were you able to get people comfortable with the change?` },
  { lp: 'earn-trust', src: 'qb', q: `Give me an example of a tough or critical piece of feedback you received. What was it and what did you do about it?` },
  { lp: 'earn-trust', src: 'qb', q: `Describe a time when you needed to influence a peer who had a differing opinion about a shared goal. What did you do? What was the outcome?` },
  { lp: 'earn-trust', src: 'qb', q: `Give me an example of a time when you were not able to meet a commitment. What was the commitment and what were the obstacles that prevented success? What was the impact to your customers/peers and what did you learn from it?` },
  { lp: 'earn-trust', src: 'qb', q: `Tell me about a time when your team's goals were out of alignment with another team you relied on in order to meet your goal. How did you work with the other team? Were you able to achieve your goals?` },
  { lp: 'earn-trust', src: 'qb', q: `Tell me about a time when you uncovered a significant problem in your team. What was it and how did you communicate it to your manager and other stakeholders? What did you do to address the problem?` },
  { lp: 'earn-trust', src: 'qb', q: `Describe a time when you improved morale and productivity on your team. What were the underlying problems and their causes? How did you prevent them from negatively impacting the team in the future?` },
  { lp: 'earn-trust', src: 'qb', q: `Tell me about a time when a team member was struggling at work and you stepped in to help out. Why did you think they were struggling? Why did you decide to step in and support? What did you do to help out? What was the outcome?` },

  // ---------- Dive Deep ----------
  { lp: 'dive-deep', src: 'qb', q: `Tell me about a time when you were trying to understand a complex problem on your team and you had to dig into the details to figure it out. Who did you talk with or where did you have to look to find the most valuable information? How did you use that information to help solve the problem?` },
  { lp: 'dive-deep', src: 'qb', q: `Tell me about a situation that required you to dig deep to get to the root cause. How did you know you were focusing on the right things? What was the outcome? Would you have done anything differently?` },
  { lp: 'dive-deep', src: 'qb', q: `Tell me about a problem you had to solve that required in-depth thought and analysis. How did you know you were focusing on the right things? What was the outcome?` },
  { lp: 'dive-deep', src: 'qb', q: `Walk me through a big problem or issue in your organization that you helped to solve. How did you become aware of it? What information did you gather? What information was missing and how did you fill the gaps?` },
  { lp: 'dive-deep', src: 'qb', q: `Tell me about a specific metric you have used to identify a need for a change in your department. Did you create the metric or was it already available? How did this and other information influence the change? What was the outcome of this change?` },
  { lp: 'dive-deep', src: 'qb', q: `Have you ever created a metric that helped identify a need for a change in your department? What was the metric? Why did you create it? How did this and other information influence change?` },

  // ---------- Invent and Simplify ----------
  { lp: 'invent-and-simplify', src: 'qb', q: `Give me an example of a complex problem you solved with a simple solution. What made the problem complex? How do you know your solution addressed the problem?` },
  { lp: 'invent-and-simplify', src: 'qb', q: `Describe the most innovative thing you've done and why you thought it was innovative. What was the problem it was solving? What was innovative about it?` },
  { lp: 'invent-and-simplify', src: 'qb', q: `Tell me about a time when you were able to make something simpler for customers. What drove you to implement this change? What was the impact?` },
  { lp: 'invent-and-simplify', src: 'qb', q: `Describe a time when you influenced and drove new thinking and innovation out of your team. Give an example of how your approach led to a specific innovation.` },
  { lp: 'invent-and-simplify', src: 'qb', q: `Tell me about a time when you had a challenging problem or situation that the usual approach wouldn't address. How did you select an alternative approach? What alternative approaches did you consider? What was the impact?` },
  { lp: 'invent-and-simplify', src: 'qb', q: `Tell me about a novel idea you had or decision you made that had a big impact on your business. What was novel about it?` },

  // ---------- Learn and Be Curious ----------
  { lp: 'learn-and-be-curious', src: 'qb', q: `Tell me about a time when you realized you needed a deeper level of subject matter expertise to do your job well. What did you do about it? What was the outcome? Is there anything you would have done differently?` },
  { lp: 'learn-and-be-curious', src: 'qb', q: `Describe a time when you took on work outside of your comfort area. How did you identify what you needed to learn to be successful? How did you go about building expertise to meet your goal? Did you meet your goal?` },
  { lp: 'learn-and-be-curious', src: 'qb', q: `Tell me about a time when you didn't know what to do next or how to solve a challenging problem. How do you learn what you don't know? What were the options you considered? How did you decide the best path forward?` },
  { lp: 'learn-and-be-curious', src: 'qb', q: `We all have things about ourselves we'd like to improve on at work. Give me an example of something that you've worked on to improve your overall work effectiveness. What resources did you identify to help you develop? What was the impact?` },
  { lp: 'learn-and-be-curious', src: 'qb', q: `Give me an example of a time when you explored a new or unexpected area of an existing space. Why hadn't this been explored already? Why did you move forward? What were the results or what was the impact?` },
  { lp: 'learn-and-be-curious', src: 'qb', q: `Describe a time when someone on your team challenged you to think differently about a problem. What was the situation? How did you respond? What was the outcome?` },

  // ---------- GenAI Fluency (reconstructed — no QB text available) ----------
  { lp: 'genai-fluency', src: 'gen', q: `Tell me about a time when you used generative AI to solve a problem or change how you work. What tools did you use? What was the outcome, and how did you measure it?` },
  { lp: 'genai-fluency', src: 'gen', q: `Describe a time when you identified an opportunity to apply generative AI to a process or product. How did you evaluate whether it was the right tool for the job? What did you decide?` },
  { lp: 'genai-fluency', src: 'gen', q: `Tell me about a time when the output of an AI tool was wrong or misleading. How did you catch it? What did you change about how you used the tool afterwards?` },
  { lp: 'genai-fluency', src: 'gen', q: `Tell me about a time when you had to weigh the risks of using generative AI — accuracy, security, privacy, or cost. How did you mitigate them? What was the outcome?` },
  { lp: 'genai-fluency', src: 'gen', q: `Give me an example of a time you helped others adopt an AI tool. What resistance did you run into? How did you handle it? What changed for the team?` },
  { lp: 'genai-fluency', src: 'gen', q: `Tell me about a task you automated using AI. How did you decide it was a good candidate? How much time or effort did it save, and how do you know?` },
  { lp: 'genai-fluency', src: 'gen', q: `Tell me about a time when you decided not to use generative AI for something, even though you could have. What drove that decision?` },
  { lp: 'genai-fluency', src: 'gen', q: `The AI tooling landscape changes quickly. Tell me about something you learned recently in this space and how you put it to use.` },

  // ---------- Have Backbone; Disagree and Commit ----------
  { lp: 'disagree-and-commit', src: 'qb', q: `Tell me about a time when you strongly disagreed with your manager or peer on something you considered very important to the business. What was it and how did you handle it? Knowing what you know now, would you do anything differently?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Describe a time when you took an unpopular stance in a meeting with peers and your leader. What was it? Why did you feel strongly about it? What did you do? What was the outcome?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Often, we must make decisions as a group. Give me an example of a time you committed to a group decision even though you disagreed. What factors led you to commit to the decision? Would you make the same decision now?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Describe a time when you felt really strongly about something on a project but the team decided to go in a different direction. How hard did you press the issue? How did you approach that project afterward?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Tell me about a time when you pushed back against a decision that negatively impacted your team. What was the issue? How did it turn out? Would you have done anything differently?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Give me an example of when you submitted a great idea to your manager and they did not support it. What was the idea? How did you handle the lack of support?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Describe a time when you had to support a business initiative that you didn't agree with. How did you handle it? How did you deliver the message to your team?` },
  { lp: 'disagree-and-commit', src: 'qb', q: `Tell me about a time when the business gained something because you persisted for a length of time. Why were you so determined? How did it turn out?` },
];

// ---------------------------------------------------------------- state

const STORE_KEY = 'lp-quiz-v1';
const LP_BY_ID = Object.fromEntries(LPS.map((l) => [l.id, l]));
const el = (id) => document.getElementById(id);

let stats = loadStats();
let pool = [];
let current = null;
let picked = null;

function blankStats() {
  const perLp = {};
  for (const lp of LPS) perLp[lp.id] = { asked: 0, right: 0 };
  return { total: 0, right: 0, streak: 0, best: 0, perLp, missed: [] };
}

function loadStats() {
  const base = blankStats();
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY));
    if (!raw || !raw.perLp) return base;
    base.total = raw.total || 0;
    base.right = raw.right || 0;
    base.streak = raw.streak || 0;
    base.best = raw.best || 0;
    base.missed = Array.isArray(raw.missed) ? raw.missed : [];
    for (const lp of LPS) if (raw.perLp[lp.id]) base.perLp[lp.id] = raw.perLp[lp.id];
    return base;
  } catch {
    return base;
  }
}

function saveStats() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(stats));
  } catch {
    /* private mode: score just won't persist */
  }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function refillPool() {
  pool = shuffle(QUESTIONS);
  // avoid repeating the question that was just on screen
  if (current && pool.length > 1 && pool[pool.length - 1] === current) {
    [pool[0], pool[pool.length - 1]] = [pool[pool.length - 1], pool[0]];
  }
}

function nextQuestion() {
  if (!pool.length) refillPool();
  current = pool.pop();
  picked = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function answer(lpId) {
  if (picked) return;
  picked = lpId;
  const correct = lpId === current.lp;
  stats.total += 1;
  stats.perLp[current.lp].asked += 1;
  if (correct) {
    stats.right += 1;
    stats.perLp[current.lp].right += 1;
    stats.streak += 1;
    stats.best = Math.max(stats.best, stats.streak);
  } else {
    stats.streak = 0;
    stats.missed.unshift({ q: current.q, truth: current.lp, said: lpId });
    stats.missed = stats.missed.slice(0, 30);
  }
  saveStats();
  render();
}

// ---------------------------------------------------------------- rendering

function render() {
  el('question').textContent = current.q;

  const badge = el('srcBadge');
  badge.textContent = current.src === 'qb' ? 'AIQB' : 'reconstructed';
  badge.className = 'badge ' + current.src;

  el('remaining').textContent = `${pool.length} left this pass · ${QUESTIONS.length} total`;

  const opts = el('options');
  opts.innerHTML = '';
  LPS.forEach((lp, i) => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.innerHTML = `<span class="key">${i + 1}</span><span class="lp">${lp.name}</span>`;
    if (picked) {
      b.disabled = true;
      if (lp.id === current.lp) b.classList.add('right');
      else if (lp.id === picked) b.classList.add('wrong');
      else b.classList.add('dim');
    } else {
      b.onclick = () => answer(lp.id);
    }
    opts.appendChild(b);
  });

  const v = el('verdict');
  if (!picked) {
    v.hidden = true;
    v.innerHTML = '';
  } else {
    v.hidden = false;
    const correct = picked === current.lp;
    const truth = LP_BY_ID[current.lp];
    let html = correct
      ? `<div class="v-head ok">Correct — ${truth.name}</div>`
      : `<div class="v-head no">Wrong — you said ${LP_BY_ID[picked].name}<br><span class="answer">Answer: ${truth.name}</span></div>`;
    html += `<p class="def">${truth.def}</p>`;
    html += `<p class="cue"><span class="cue-label">Tell</span>${truth.cue}</p>`;
    if (!correct) {
      const mine = LP_BY_ID[picked];
      html += `<p class="cue alt"><span class="cue-label">${mine.name} is</span>${mine.cue}</p>`;
    }
    v.innerHTML = html;
  }

  el('next').hidden = !picked;

  const pct = stats.total ? Math.round((stats.right / stats.total) * 100) : 0;
  el('score').textContent = `${stats.right}/${stats.total}`;
  el('pct').textContent = `${pct}%`;
  el('streak').textContent = String(stats.streak);
  el('best').textContent = String(stats.best);
  renderBreakdown();
}

function renderBreakdown() {
  el('breakdownBody').innerHTML = LPS.map((lp) => {
    const s = stats.perLp[lp.id];
    const pct = s.asked ? Math.round((s.right / s.asked) * 100) : null;
    const cls = pct === null ? 'none' : pct >= 80 ? 'good' : pct >= 50 ? 'mid' : 'bad';
    return `<tr><td>${lp.name}</td><td class="num">${s.right}/${s.asked}</td>
      <td class="num ${cls}">${pct === null ? '—' : pct + '%'}</td></tr>`;
  }).join('');

  const missBox = el('missed');
  if (!stats.missed.length) {
    missBox.innerHTML = `<p class="empty">No misses yet.</p>`;
    return;
  }
  missBox.innerHTML =
    `<h3>Recent misses</h3>` +
    stats.missed
      .map(
        (m) => `<div class="miss">
          <div class="miss-q">${m.q}</div>
          <div class="miss-a"><span class="no">said ${LP_BY_ID[m.said].name}</span>
          <span class="ok">was ${LP_BY_ID[m.truth].name}</span></div>
        </div>`
      )
      .join('');
}

// ---------------------------------------------------------------- wiring

el('next').onclick = nextQuestion;

el('reset').onclick = () => {
  if (!confirm('Clear score, per-LP stats and miss history?')) return;
  stats = blankStats();
  saveStats();
  refillPool();
  nextQuestion();
};

function makePanelToggle(btnId, panelId) {
  el(btnId).onclick = () => {
    const wasHidden = el(panelId).hidden;
    // one panel at a time keeps the phone view uncluttered
    el('legend').hidden = true;
    el('statsPanel').hidden = true;
    el('legendToggle').textContent = 'cheat sheet';
    el('statsToggle').textContent = 'stats';
    if (wasHidden) {
      el(panelId).hidden = false;
      el(btnId).textContent = 'close';
    }
  };
}
makePanelToggle('legendToggle', 'legend');
makePanelToggle('statsToggle', 'statsPanel');

document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= LPS.length) {
    e.preventDefault();
    if (!picked) answer(LPS[n - 1].id);
    return;
  }
  if ((e.key === 'Enter' || e.key === ' ') && picked) {
    e.preventDefault();
    nextQuestion();
  }
});

el('legendBody').innerHTML = LPS.map(
  (lp, i) => `<div class="legend-item">
    <span class="key">${i + 1}</span>
    <div><strong>${lp.name}</strong><span class="legend-cue">${lp.cue}</span></div>
  </div>`
).join('');

refillPool();
nextQuestion();
