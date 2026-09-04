/* ============================================
   FOOTER COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

export function renderFooter(container) {
  const { brand, contact } = CONFIG;
  const year = new Date().getFullYear();

  container.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3><span>V</span>ardha Warehousing</h3>
            <p>${brand.mission}</p>
          </div>

          <div class="footer-col">
            <h4>Warehouse Services</h4>
            <a href="/warehouse-renting">Rent Warehouse Space</a>
            <a href="/build-a-warehouse">Build a Custom Warehouse</a>
            <a href="/warehouse-renting#facilities">24×7 Operations & Facilities</a>
            <a href="/warehouse-renting#connectivity">Location & Connectivity</a>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/warehouse-renting#renting-inquiry">Space Inquiry Form</a>
            <a href="/build-a-warehouse#build-inquiry">Project Discussion Form</a>
            <a href="/warehouse-renting#video-tour">Warehouse Video Tour</a>
          </div>

          <div class="footer-col">
            <h4>Location & Contact</h4>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${contact.address}</span>
            </div>
            ${contact.phone ? `
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>${contact.phone}</span>
              </div>
            ` : ''}
            ${contact.email ? `
              <div class="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>${contact.email}</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${year} ${brand.name}. Gorakhpur, Uttar Pradesh, India.</p>
          <p>Commercial Warehousing & 24×7 Logistics Solutions</p>
        </div>
      </div>
    </footer>
  `;
}
