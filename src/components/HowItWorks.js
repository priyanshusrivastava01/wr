/* ============================================
   HOW IT WORKS COMPONENT
   ============================================
   Visual progression from inquiry to space onboarding
   ============================================ */

const HIW_STEPS = [
  {
    num: '1',
    userQuote: '"I need warehouse space"',
    title: 'Choose Your Space',
    desc: 'Pick your required area from 1,000 to 42,000 sq. ft. and preferred ceiling height.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
  },
  {
    num: '2',
    userQuote: '"How much space do I need?"',
    title: 'Understand Requirement',
    desc: 'Calculate space fit or get an instant rate estimate based on standard slabs.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/></svg>',
  },
  {
    num: '3',
    userQuote: '"Tell us about your business"',
    title: 'Share Your Details',
    desc: 'Submit your requirement or reach out directly on WhatsApp with project details.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    num: '4',
    userQuote: '"Our team connects with you"',
    title: 'Discuss Next Steps',
    desc: 'Our local Gorakhpur team verifies space availability and guides your setup.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>',
  },
];

export function renderHowItWorks(container) {
  container.innerHTML = `
    <div class="how-it-works section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Simple 4-Step Journey</span>
          <h2>How It Works</h2>
          <p class="section-subtitle centered">From discovering your required space to finalizing your setup — clear, transparent, and hassle-free.</p>
        </div>

        <div class="hiw-progression-track stagger-children">
          ${HIW_STEPS.map((step, i) => `
            <div class="hiw-step-card reveal">
              <div class="hiw-card-top">
                <div class="hiw-step-num">${step.num}</div>
                <div class="hiw-step-icon">${step.icon}</div>
              </div>
              <div class="hiw-user-quote">${step.userQuote}</div>
              <h3 class="hiw-step-title">${step.title}</h3>
              <p class="hiw-step-desc">${step.desc}</p>
              ${i < HIW_STEPS.length - 1 ? `
                <div class="hiw-progression-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
