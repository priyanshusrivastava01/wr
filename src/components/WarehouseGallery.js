/* ============================================
   WAREHOUSE GALLERY COMPONENT
   ============================================ */

import { CONFIG } from '../config.js';

let currentIndex = 0;

export function renderWarehouseGallery(container) {
  const { gallery } = CONFIG;
  const featured = gallery.find(g => g.featured) || gallery[0];

  container.innerHTML = `
    <div class="gallery-section section" id="gallery-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label" style="color: var(--color-accent);">Gallery</span>
          <h2>Explore the Warehouse</h2>
          <p class="section-subtitle centered" style="color: rgba(255,255,255,0.6);">Take a closer look at the facility, infrastructure, and surroundings.</p>
        </div>

        <div class="gallery-featured reveal-scale" id="gallery-featured" data-index="0">
          <img src="${featured.src}" alt="${featured.alt}" id="gallery-main-img" />
          <div class="gallery-featured-overlay">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
              Click to expand
            </span>
          </div>
        </div>

        <div class="gallery-thumbs reveal" id="gallery-thumbs">
          ${gallery.map((img, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
              <img src="${img.src}" alt="${img.alt}" loading="lazy" />
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  initGallery(gallery);
}

function initGallery(gallery) {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsContainer = document.getElementById('gallery-thumbs');
  const featuredContainer = document.getElementById('gallery-featured');

  // Thumbnail clicks
  thumbsContainer?.addEventListener('click', (e) => {
    const thumb = e.target.closest('.gallery-thumb');
    if (!thumb) return;

    const index = parseInt(thumb.dataset.index);
    setActiveImage(index, gallery, mainImg, thumbsContainer);
  });

  // Featured image click — open lightbox
  featuredContainer?.addEventListener('click', () => {
    openLightbox(currentIndex, gallery);
  });

  // Touch swipe for mobile
  let touchStartX = 0;
  featuredContainer?.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  featuredContainer?.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      const nextIndex = diff > 0 
        ? (currentIndex + 1) % gallery.length 
        : (currentIndex - 1 + gallery.length) % gallery.length;
      setActiveImage(nextIndex, gallery, mainImg, thumbsContainer);
    }
  }, { passive: true });
}

function setActiveImage(index, gallery, mainImg, thumbsContainer) {
  currentIndex = index;
  mainImg.style.opacity = '0';
  
  setTimeout(() => {
    mainImg.src = gallery[index].src;
    mainImg.alt = gallery[index].alt;
    mainImg.style.opacity = '1';
  }, 200);

  thumbsContainer.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function openLightbox(index, gallery) {
  const lightboxEl = document.getElementById('gallery-lightbox');
  currentIndex = index;

  lightboxEl.innerHTML = `
    <div class="lightbox open" id="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close gallery">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <img src="${gallery[index].src}" alt="${gallery[index].alt}" id="lightbox-img" />
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <span class="lightbox-counter" id="lightbox-counter">${index + 1} / ${gallery.length}</span>
      </div>
    </div>
  `;

  document.body.classList.add('no-scroll');

  const overlay = document.getElementById('lightbox-overlay');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  const closeLightbox = () => {
    lightboxEl.innerHTML = '';
    document.body.classList.remove('no-scroll');
  };

  const navigate = (dir) => {
    currentIndex = (currentIndex + dir + gallery.length) % gallery.length;
    const img = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    img.src = gallery[currentIndex].src;
    img.alt = gallery[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${gallery.length}`;
  };

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(-1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(1); });

  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') { closeLightbox(); document.removeEventListener('keydown', handler); }
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}
