/* ============================================
   INDUSTRIES SECTION COMPONENT
   ============================================
   Visual category cards showing business suitability
   ============================================ */

const INDUSTRY_ITEMS = [
  {
    title: 'FMCG & Consumer Goods',
    suitableFor: 'Packaged foods, household goods & beverages',
    desc: 'Rapid movement with wide loading docks, clean pest-controlled floors, and easy regional highway dispatch.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    tag: 'FMCG Ready',
  },
  {
    title: 'E-Commerce & Online Retail',
    suitableFor: 'Parcels, order staging & regional fulfillment',
    desc: 'Organized floor layout for barcode-assisted receiving, systematic sorting, and speedy last-mile dispatch.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
    tag: 'Fulfillment Ready',
  },
  {
    title: 'Retail & Wholesale Inventory',
    suitableFor: 'Bulk stock, cartons & distributor storage',
    desc: 'High-capacity vertical space (up to 22 ft height) to store buffer stock for retail chains across Eastern UP.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>',
    tag: 'High Capacity',
  },
  {
    title: 'Industrial & Hardware Supplies',
    suitableFor: 'Hardware, electricals, raw materials & equipment',
    desc: 'Strong industrial flooring and 36m wide approach road accommodating multi-axle heavy transport vehicles.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',
    tag: 'Heavy Duty',
  },
];

export function renderIndustriesSection(container) {
  container.innerHTML = `
    <div class="industries-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Business Fit</span>
          <h2>Is This Warehouse Right for Your Business?</h2>
          <p class="section-subtitle centered">
            From daily FMCG stock rotation to high-volume e-commerce order dispatches, see how different businesses utilize our space.
          </p>
        </div>

        <div class="industries-visual-grid stagger-children">
          ${INDUSTRY_ITEMS.map(ind => `
            <div class="industry-visual-card reveal">
              <div class="industry-visual-top">
                <div class="industry-visual-icon">
                  ${ind.icon}
                </div>
                <span class="industry-visual-tag">${ind.tag}</span>
              </div>
              <h3 class="industry-visual-title">${ind.title}</h3>
              <div class="industry-suitable-box">
                <span class="suitable-label">Ideal For:</span>
                <p class="suitable-text">${ind.suitableFor}</p>
              </div>
              <p class="industry-visual-desc">${ind.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="industries-note reveal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Have a unique product or custom storage requirement? Our space can be tailored to your operational layout.
        </div>
      </div>
    </div>
  `;
}
