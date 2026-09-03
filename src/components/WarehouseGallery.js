/* ============================================
   WAREHOUSE GALLERY COMPONENT
   ============================================
   Categorized visual tour of the warehouse
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
          <span class="section-label" style="color: var(--color-accent);">Visual Tour</span>
          <h2>Take a Closer Look at the Warehouse</h2>
          <p class="section-subtitle centered" style="color: rgba(255,255,255,0.7);">
            Explore the facility from the outside approach roads to inside storage, loading bays, and order processing.
          </p>
        </div>

        <!-- Featured View with Category Badge & Description -->
        <div class="gallery-featured-wrapper reveal-scale">
          <div class="gallery-featured" id="gallery-featured" data-index="0">
            <img src="${featured.src}" alt="${featured.alt}" id="gallery-main-img" />
            <div class="gallery-featured-badge" id="gallery-featured-badge">
              <span class="gallery-cat-tag">${featured.category}</span>
              <span class="gallery-cat-label">${featured.label}</span>
            </div>
            <div class="gallery-featured-overlay">
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                Click to expand full view
              </span>
            </div>
          </div>
        </div>

        <!-- Categorized Thumbnail Cards -->
        <div class="gallery-categories-grid reveal" id="gallery-thumbs">
          ${gallery.map((img, i) => `
            <div class="gallery-category-card ${i === 0 ? 'active' : ''}" data-index="${i}">
              <div class="gallery-card-thumb">
                <img src="${img.src}" alt="${img.alt}" loading="lazy" />
                <span class="gallery-thumb-tag">${img.category}</span>
              </div>
              <div class="gallery-card-caption">
                <strong>${img.label}</strong>
              </div>
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
  const badgeContainer = document.getElementById('gallery-featured-badge');

  // Thumbnail clicks
  thumbsContainer?.addEventListener('click', (e) => {
    const card = e.target.closest('.gallery-category-card');
    if (!card) return;

    const index = parseInt(card.dataset.index);
    setActiveImage(index, gallery, mainImg, thumbsContainer, badgeContainer);
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
      setActiveImage(nextIndex, gallery, mainImg, thumbsContainer, badgeContainer);
    }
  }, { passive: true });
}

function setActiveImage(index, gallery, mainImg, thumbsContainer, badgeContainer) {
  currentIndex = index;
  mainImg.style.opacity = '0';
  
  setTimeout(() => {
    mainImg.src = gallery[index].src;
    mainImg.alt = gallery[index].alt;
    mainImg.style.opacity = '1';
    
    if (badgeContainer) {
      badgeContainer.innerHTML = `
        <span class="gallery-cat-tag">${gallery[index].category}</span>
        <span class="gallery-cat-label">${gallery[index].label}</span>
      `;
    }
  }, 200);

  thumbsContainer.querySelectorAll('.gallery-category-card').forEach((t, i) => {
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
        <div class="lightbox-img-wrapper">
          <img src="${gallery[index].src}" alt="${gallery[index].alt}" id="lightbox-img" />
          <div class="lightbox-caption">
            <span class="gallery-cat-tag">${gallery[index].category}</span>
            <strong>${gallery[index].label}</strong>
          </div>
        </div>
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
    const caption = overlay.querySelector('.lightbox-caption');
    img.src = gallery[currentIndex].src;
    img.alt = gallery[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${gallery.length}`;
    if (caption) {
      caption.innerHTML = `
        <span class="gallery-cat-tag">${gallery[currentIndex].category}</span>
        <strong>${gallery[currentIndex].label}</strong>
      `;
    }
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
