/* ============================================
   HOW IT WORKS COMPONENT
   ============================================ */

export function renderHowItWorks(container) {
  container.innerHTML = `
    <div class="how-it-works section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Simple Process</span>
          <h2>How It Works</h2>
          <p class="section-subtitle centered">From exploring your options to submitting your requirement — it takes just a few simple steps.</p>
        </div>
        <div class="hiw-steps stagger-children">
          <div class="hiw-step reveal">
            <div class="hiw-step-num">1</div>
            <h3>Choose Your Space</h3>
            <p>Enter your required area or calculate it using dimensions. Pick your preferred ceiling height.</p>
            <div class="hiw-connector"></div>
          </div>
          <div class="hiw-step reveal">
            <div class="hiw-step-num">2</div>
            <h3>See Your Estimated Price</h3>
            <p>Your estimated price updates automatically based on your selected warehouse area.</p>
            <div class="hiw-connector"></div>
          </div>
          <div class="hiw-step reveal">
            <div class="hiw-step-num">3</div>
            <h3>Share Your Requirement</h3>
            <p>Tell us about your business and storage needs so we can understand your requirement.</p>
            <div class="hiw-connector"></div>
          </div>
          <div class="hiw-step reveal">
            <div class="hiw-step-num">4</div>
            <h3>Submit Your Request</h3>
            <p>Our team receives your requirement and can contact you to discuss availability and next steps.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
