(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const v={brand:{name:"Vardha Warehousing",foundedYear:1987,mission:"A warehouse designed to support and improve the speed and growth of your business, not just store goods."},pricing:{unit:"sq. ft.",slabs:[{id:"slab-1",min:1e3,max:4999,rate:60,label:"1,000 – 4,999 sq. ft."},{id:"slab-2",min:5e3,max:42e3,rate:24,label:"5,000 – 42,000 sq. ft."}],boundaryValue:5e3},warehouse:{minArea:1e3,maxArea:42e3,heights:[{value:14,label:"14 ft",description:"Standard industrial ceiling height"},{value:22,label:"22 ft",description:"High-clearance ceiling for vertical racking"}],quickPresets:[1e3,2500,5e3,1e4]},property:{location:"Main Gorakhnath Temple Road, Bargadwa, Gorakhpur, Uttar Pradesh",roadWidth:"Approximately 36 metres / 118 feet wide road access",connectivityRoutes:[{destination:"Lucknow",tag:"State Capital & Central Hub"},{destination:"Prayagraj",tag:"Southern UP Logistics Corridor"},{destination:"Varanasi",tag:"Major Trade & Commercial Hub"},{destination:"Delhi",tag:"National Capital Region Highway"},{destination:"Bihar",tag:"Eastern Trade Border Connectivity"},{destination:"Nepal",tag:"International Cross-Border Trade"}]},contact:{address:"Main Gorakhnath Temple Road, Bargadwa, Gorakhpur, Uttar Pradesh"},facilities:[{icon:"clock",title:"24×7 Continuous Operations",description:"Loading and unloading of trucks continues day and night so your business movement never halts.",badge:"Non-Stop Movement"},{icon:"shopping-cart",title:"E-commerce Operations",description:"Dedicated infrastructure for online retail fulfillment, organized stocking, and fast dispatches.",badge:"Fulfillment Ready"},{icon:"package",title:"Packaging & Order Processing",description:"Systematic sorting, professional carton packing, labeling, and pallet wrapping services.",badge:"Order Handling"},{icon:"scan",title:"Barcode Scanning & Tracking",description:"Digitized inventory scanning ensures accurate inbound and outbound stock visibility.",badge:"Accurate Tracking"},{icon:"truck",title:"Heavy Commercial Dock Bays",description:"Multiple wide roll-up dock shutters with spacious concrete apron for smooth truck maneuvering.",badge:"Wide Road Access"},{icon:"building",title:"Flexible Space (1,000–42,000 sq. ft.)",description:"Configurable floor layouts and 14 ft / 22 ft height options tailored to your business scale.",badge:"Tailored Capacity"}],industries:[{icon:"package",title:"FMCG & Consumer Goods",description:"Ideal storage and regional distribution for packaged food, beverages, and household goods."},{icon:"shopping-cart",title:"E-commerce Platforms",description:"High-speed order sorting, staging, and dispatch for regional fulfillment networks."},{icon:"boxes",title:"Retail & Wholesale Products",description:"Bulk inventory management for traders, distributors, and retail chains across Eastern UP."},{icon:"factory",title:"Industrial & Hardware Supplies",description:"Reliable, heavy-duty floor space for hardware, raw materials, and finished goods."}],clients:[{name:"DPS / Delhi Public School",logo:null},{name:"FCI Fertilizer, Gorakhpur",logo:null},{name:"Lord of the Drinks",logo:null}],businessTypes:["Manufacturing","Logistics","E-commerce","Retail","FMCG","Automotive","Pharmaceuticals","Other"],contactMethods:[{value:"phone",label:"Phone Call"},{value:"whatsapp",label:"WhatsApp"},{value:"email",label:"Email"}],gallery:[{src:"/images/hero-warehouse-bg.webp",alt:"Vardha Warehousing — Main commercial warehouse exterior with loading dock bays",featured:!0},{src:"/images/warehouse-indian-dock.jpg",alt:"Active commercial truck loading bays at Vardha Warehousing, Gorakhpur"},{src:"/images/warehouse-night-loading.jpg",alt:"24x7 Night truck loading and unloading operations under floodlights"},{src:"/images/warehouse-fulfillment-scan.jpg",alt:"E-commerce order packaging and barcode scanning operations"},{src:"/images/warehouse-interior-racks.jpg",alt:"Organized high-capacity pallet racking and commercial storage interior"}],navigation:[{label:"Home",href:"#home"},{label:"Warehouse",href:"#warehouse"},{label:"24×7 Operations",href:"#facilities"},{label:"Connectivity",href:"#connectivity"},{label:"Space & Pricing",href:"#calculator"},{label:"Industries",href:"#industries"},{label:"Expertise",href:"#expertise"},{label:"Clients",href:"#clients"},{label:"Contact",href:"#contact"}]};function k(t){const e=document.querySelector(t);if(!e)return;const i=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72,a=e.getBoundingClientRect().top+window.scrollY-i-16;window.scrollTo({top:a,behavior:"smooth"})}function V(){const t=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");if(!t.length)return;const e=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),e.unobserve(a.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});t.forEach(i=>e.observe(i))}function F(){const t=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".nav-link");if(!t.length||!e.length)return;const i=new IntersectionObserver(a=>{a.forEach(s=>{if(s.isIntersecting){const r=s.target.getAttribute("id");e.forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===`#${r}`&&n.classList.add("active")})}})},{threshold:.2,rootMargin:"-80px 0px -60% 0px"});t.forEach(a=>i.observe(a))}function O(t){const{brand:e,navigation:i}=v;t.innerHTML=`
    <div class="site-header" id="main-header">
      <div class="header-inner">
        <a href="#home" class="header-brand" aria-label="${e.name} — Home">
          <div class="header-brand-badge">
            <span>V</span>
          </div>
          <div class="header-brand-details">
            <span class="header-brand-title">Vardha</span>
            <span class="header-brand-sub">WAREHOUSING</span>
          </div>
        </a>

        <nav class="header-nav" aria-label="Main navigation">
          ${i.map(a=>`
            <a href="${a.href}" class="nav-link">${a.label}</a>
          `).join("")}
        </nav>

        <div class="header-actions">
          <a href="${G()}" target="_blank" rel="noopener" class="header-whatsapp-circle" aria-label="Contact on WhatsApp" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          <button class="btn-navbar-cta" id="header-find-space" aria-label="Find your warehouse space">
            Find Your Space
          </button>

          <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
        <div class="mobile-nav-header">
          <div class="header-brand-badge">
            <span>V</span>
          </div>
          <div class="header-brand-details">
            <span class="header-brand-title">Vardha</span>
            <span class="header-brand-sub">WAREHOUSING</span>
          </div>
        </div>
        <div class="mobile-nav-links">
          ${i.map(a=>`
            <a href="${a.href}" class="mobile-nav-link">${a.label}</a>
          `).join("")}
        </div>
        <div class="mobile-nav-cta">
          <button class="btn btn-primary btn-full mobile-find-space">
            Find Your Space
          </button>
        </div>
      </nav>
    </div>
  `,Y()}function G(){return"#"}function Y(){var s;const t=document.getElementById("main-header"),e=document.getElementById("mobile-menu-toggle"),i=document.getElementById("mobile-nav"),a=document.getElementById("header-find-space");window.addEventListener("scroll",()=>{window.scrollY>15?t.classList.add("scrolled"):t.classList.remove("scrolled")},{passive:!0}),e==null||e.addEventListener("click",()=>{const r=e.classList.toggle("open");i.classList.toggle("open"),e.setAttribute("aria-expanded",r),document.body.classList.toggle("no-scroll",r)}),i==null||i.querySelectorAll(".mobile-nav-link").forEach(r=>{r.addEventListener("click",()=>{e.classList.remove("open"),i.classList.remove("open"),e.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll")})}),(s=i==null?void 0:i.querySelector(".mobile-find-space"))==null||s.addEventListener("click",()=>{e.classList.remove("open"),i.classList.remove("open"),e.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),k("#calculator")}),a==null||a.addEventListener("click",()=>{k("#calculator")}),document.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",n=>{const l=r.getAttribute("href");l&&l.startsWith("#")&&(n.preventDefault(),k(l))})})}function U(t){var e,i;t.innerHTML=`
    <div class="hero">
      <div class="hero-bg">
        <img 
          src="/images/hero-warehouse-bg.webp" 
          alt="Vardha Warehousing — Commercial warehouse exterior with loading dock bays and transport access" 
          loading="eager" 
        />
      </div>
      <div class="hero-overlay"></div>

      <div class="hero-container">
        <div class="hero-content">
          <span class="hero-label">VARDHA WAREHOUSING</span>
          <h1 class="hero-title">
            Find the Right<br />
            <span class="hero-highlight">Warehouse Space</span><br />
            for Your Business
          </h1>
          <p class="hero-subtitle">
            Explore commercial warehouse space, calculate your estimated requirement
            and send your request in just a few simple steps.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-hero-primary" id="hero-find-space">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              Find Your Space
            </button>
            <button class="btn btn-hero-secondary" id="hero-explore">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Explore Warehouse
            </button>
          </div>
        </div>

        <!-- Connected Bottom Feature Strip -->
        <div class="hero-feature-strip">
          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                <path d="M9 22v-4h6v4"/>
                <path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/>
                <path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/>
                <path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">Commercial Property</h4>
              <p class="feature-strip-sub">Purpose-built for business</p>
            </div>
          </div>

          <div class="feature-strip-divider"></div>

          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">24×7 Transport Access</h4>
              <p class="feature-strip-sub">Easy movement, every time</p>
            </div>
          </div>

          <div class="feature-strip-divider"></div>

          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">CCTV & Security</h4>
              <p class="feature-strip-sub">Safe, secure & monitored</p>
            </div>
          </div>

          <div class="feature-strip-divider"></div>

          <div class="feature-strip-item">
            <div class="feature-strip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div class="feature-strip-text">
              <h4 class="feature-strip-title">Experience Since 1987</h4>
              <p class="feature-strip-sub">Decades of trusted service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,(e=document.getElementById("hero-find-space"))==null||e.addEventListener("click",()=>{k("#calculator")}),(i=document.getElementById("hero-explore"))==null||i.addEventListener("click",()=>{k("#warehouse")})}function Z(t){var e;t.innerHTML=`
    <div class="introduction section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content reveal-left">
            <span class="section-label">Commercial Warehouse • Gorakhpur</span>
            <h2>Designed to Accelerate Your Business Growth, Not Just Store Goods</h2>
            <p class="intro-text">
              Located on Main Gorakhnath Temple Road, Bargadwa, Vardha Warehousing provides 
              flexible, high-capacity commercial warehouse space from <strong>1,000 sq. ft. to 42,000 sq. ft.</strong> 
              Built for modern trade, e-commerce, and logistics, our facility supports non-stop operations 
              so your business movement never halts.
            </p>
            <div class="intro-process">
              <div class="intro-step">
                <span class="intro-step-num">1</span>
                <span class="intro-step-text">Choose Space (1,000–42,000 sq. ft.)</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">2</span>
                <span class="intro-step-text">See Estimated Pricing</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">3</span>
                <span class="intro-step-text">Send Booking Request</span>
              </div>
            </div>
            <button class="btn btn-primary" id="intro-calculate-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
              Calculate Your Space Requirement
            </button>
          </div>
          <div class="intro-image reveal-right">
            <img src="/images/warehouse-indian-dock.jpg" alt="Vardha Warehousing — Active commercial truck loading bays in Gorakhpur" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `,(e=document.getElementById("intro-calculate-btn"))==null||e.addEventListener("click",()=>{k("#calculator")})}function _(t){const{property:e}=v;t.innerHTML=`
    <div class="property-section section" id="property-section">
      <div class="container">
        <!-- Property Overview -->
        <div class="section-header reveal">
          <span class="section-label">Prime Commercial Real Estate</span>
          <h2>A Strategic Warehouse Hub in Gorakhpur</h2>
          <p class="section-subtitle centered">Positioned on Main Gorakhnath Temple Road, Bargadwa, with a 36-metre wide front road for seamless 24×7 commercial fleet operations.</p>
        </div>

        <div class="property-grid">
          <div class="property-cards stagger-children">
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Main Road Location</h4>
              <p>${e.location}</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M12 3v4"/><path d="M12 11v2"/><path d="M12 17v4"/></svg>
              </div>
              <h4>36-Metre Wide Access</h4>
              <p>${e.roadWidth} ensuring heavy multi-axle trucks enter and maneuver with complete ease.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4>24×7 Truck Loading</h4>
              <p>Continuous loading and unloading operations day and night to keep supply chains moving.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <h4>1,000 to 42,000 sq. ft.</h4>
              <p>Flexible commercial storage with 14 ft and 22 ft ceiling heights tailored to your business scale.</p>
            </div>
          </div>

          <div class="property-image reveal-right">
            <img src="/images/warehouse-interior-racks.jpg" alt="Organized commercial storage interior with heavy-duty pallet racks in Gorakhpur" loading="lazy" />
          </div>
        </div>

        <!-- Dedicated Connectivity Network Section -->
        <div class="connectivity-wrapper section" id="connectivity" style="padding-top: var(--space-16);">
          <div class="section-header reveal">
            <span class="section-label">Regional Connectivity</span>
            <h2>Connected Across North India & Trade Corridors</h2>
            <p class="section-subtitle centered">From Gorakhpur as your operational center, distribute rapidly across Uttar Pradesh, Delhi NCR, Bihar, and cross-border trade with Nepal.</p>
          </div>

          <!-- Transit Proximity Cards -->
          <div class="transit-hubs-grid reveal">
            <div class="transit-hub-card">
              <div class="transit-hub-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>
              </div>
              <div class="transit-hub-info">
                <h4>Gorakhpur Railway Junction</h4>
                <div class="transit-time-badge">Approx. 15 Minutes Away</div>
                <p>Direct access to Northern Railway freight lines for bulk cargo & rake transport.</p>
              </div>
            </div>

            <div class="transit-hub-card">
              <div class="transit-hub-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              </div>
              <div class="transit-hub-info">
                <h4>Gorakhpur Airport</h4>
                <div class="transit-time-badge">Approx. 30 Minutes Away</div>
                <p>Rapid air courier, high-priority cargo movement, and quick executive connectivity.</p>
              </div>
            </div>
          </div>

          <!-- Corridors Graphic Grid -->
          <div class="connectivity-corridors reveal">
            <div class="connectivity-hub-center">
              <div class="hub-center-badge">
                <span class="hub-dot"></span>
                <strong>GORAKHPUR HUB</strong>
                <small>Main Gorakhnath Road</small>
              </div>
            </div>
            
            <div class="corridors-grid">
              ${e.connectivityRoutes.map(i=>`
                <div class="corridor-card">
                  <div class="corridor-header">
                    <span class="corridor-indicator">⇄</span>
                    <h4>${i.destination}</h4>
                  </div>
                  <p class="corridor-tag">${i.tag}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `}const K={clock:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',"shopping-cart":'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',package:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',scan:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" x2="17" y1="12" y2="12"/></svg>',truck:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',building:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>'};function X(t){const{facilities:e}=v;t.innerHTML=`
    <div class="facilities-section section" id="facilities">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Operational Capabilities</span>
          <h2>A Modern Commercial Warehouse Ecosystem</h2>
          <p class="section-subtitle centered">Equipped for e-commerce, systematic order fulfillment, packaging, barcode scanning, and 24×7 non-stop truck operations.</p>
        </div>

        <!-- 6 Capability Cards -->
        <div class="facilities-grid stagger-children">
          ${e.map(i=>`
            <div class="facility-card reveal">
              <div class="facility-badge">${i.badge}</div>
              <div class="facility-icon">
                ${K[i.icon]||""}
              </div>
              <h3>${i.title}</h3>
              <p>${i.description}</p>
            </div>
          `).join("")}
        </div>

        <!-- 24x7 Operations & Modern Fulfillment Spotlight -->
        <div class="facility-spotlights-grid" style="margin-top: var(--space-12);">
          <div class="facility-spotlight-card reveal-left">
            <div class="spotlight-image">
              <img src="/images/warehouse-night-loading.jpg" alt="24x7 Night truck loading and unloading operations in Gorakhpur" loading="lazy" />
              <div class="spotlight-badge">24×7 Round-The-Clock</div>
            </div>
            <div class="spotlight-content">
              <h3>Day & Night Fleet Loading Support</h3>
              <p>Your business does not stop when the sun sets. We support seamless commercial truck loading, unloading, and cross-docking 24 hours a day, 7 days a week.</p>
            </div>
          </div>

          <div class="facility-spotlight-card reveal-right">
            <div class="spotlight-image">
              <img src="/images/warehouse-fulfillment-scan.jpg" alt="E-commerce order packaging and barcode inventory scanning" loading="lazy" />
              <div class="spotlight-badge">E-Commerce & Retail</div>
            </div>
            <div class="spotlight-content">
              <h3>Order Processing, Packing & Barcoding</h3>
              <p>Equipped for fast inventory receiving, organized palletized storage, barcode tracking, and professional carton packaging for regional fulfillment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}let y=0;function J(t){const{gallery:e}=v,i=e.find(a=>a.featured)||e[0];t.innerHTML=`
    <div class="gallery-section section" id="gallery-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label" style="color: var(--color-accent);">Gallery</span>
          <h2>Explore the Warehouse</h2>
          <p class="section-subtitle centered" style="color: rgba(255,255,255,0.6);">Take a closer look at the facility, infrastructure, and surroundings.</p>
        </div>

        <div class="gallery-featured reveal-scale" id="gallery-featured" data-index="0">
          <img src="${i.src}" alt="${i.alt}" id="gallery-main-img" />
          <div class="gallery-featured-overlay">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
              Click to expand
            </span>
          </div>
        </div>

        <div class="gallery-thumbs reveal" id="gallery-thumbs">
          ${e.map((a,s)=>`
            <div class="gallery-thumb ${s===0?"active":""}" data-index="${s}">
              <img src="${a.src}" alt="${a.alt}" loading="lazy" />
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,Q(e)}function Q(t){const e=document.getElementById("gallery-main-img"),i=document.getElementById("gallery-thumbs"),a=document.getElementById("gallery-featured");i==null||i.addEventListener("click",r=>{const n=r.target.closest(".gallery-thumb");if(!n)return;const l=parseInt(n.dataset.index);W(l,t,e,i)}),a==null||a.addEventListener("click",()=>{ee(y,t)});let s=0;a==null||a.addEventListener("touchstart",r=>{s=r.touches[0].clientX},{passive:!0}),a==null||a.addEventListener("touchend",r=>{const n=s-r.changedTouches[0].clientX;if(Math.abs(n)>50){const l=n>0?(y+1)%t.length:(y-1+t.length)%t.length;W(l,t,e,i)}},{passive:!0})}function W(t,e,i,a){y=t,i.style.opacity="0",setTimeout(()=>{i.src=e[t].src,i.alt=e[t].alt,i.style.opacity="1"},200),a.querySelectorAll(".gallery-thumb").forEach((s,r)=>{s.classList.toggle("active",r===t)})}function ee(t,e){const i=document.getElementById("gallery-lightbox");y=t,i.innerHTML=`
    <div class="lightbox open" id="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close gallery">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <img src="${e[t].src}" alt="${e[t].alt}" id="lightbox-img" />
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <span class="lightbox-counter" id="lightbox-counter">${t+1} / ${e.length}</span>
      </div>
    </div>
  `,document.body.classList.add("no-scroll");const a=document.getElementById("lightbox-overlay"),s=a.querySelector(".lightbox-close"),r=a.querySelector(".lightbox-prev"),n=a.querySelector(".lightbox-next"),l=()=>{i.innerHTML="",document.body.classList.remove("no-scroll")},c=d=>{y=(y+d+e.length)%e.length;const u=document.getElementById("lightbox-img"),m=document.getElementById("lightbox-counter");u.src=e[y].src,u.alt=e[y].alt,m.textContent=`${y+1} / ${e.length}`};s.addEventListener("click",l),a.addEventListener("click",d=>{d.target===a&&l()}),r.addEventListener("click",d=>{d.stopPropagation(),c(-1)}),n.addEventListener("click",d=>{d.stopPropagation(),c(1)}),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(l(),document.removeEventListener("keydown",d)),u.key==="ArrowLeft"&&c(-1),u.key==="ArrowRight"&&c(1)})}function te(t){const{pricing:e,warehouse:i}=v,a=parseFloat(t);if(!t||isNaN(a)||a<=0)return{area:0,rate:0,total:0,slab:null,isValid:!1,validationMessage:"",showValidation:!1};if(a<i.minArea)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:`The displayed pricing currently starts from ${i.minArea.toLocaleString("en-IN")} ${e.unit}. Please contact us for smaller requirements.`};if(a>i.maxArea)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:"Your requirement is outside the currently displayed pricing range. Please send us your requirement for a custom quotation."};const s=ie(a,e);if(!s)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:"Unable to calculate pricing for this area. Please contact us."};const r=a*s.rate;return{area:a,rate:s.rate,total:r,slab:s,isValid:!0,showValidation:!1,validationMessage:""}}function ie(t,e){const{slabs:i,boundaryValue:a}=e;for(const s of i){let r=s.min,n=s.max;if(t===a&&s.min===a||t>=r&&t<=n)return s}return null}function ae(t,e){const i=parseFloat(t),a=parseFloat(e);return!t||!e||isNaN(i)||isNaN(a)||i<=0||a<=0?0:Math.round(i*a)}function M(t){if(!t||isNaN(t))return"₹0";const i=Math.round(t).toString();if(i.length<=3)return"₹"+i;let a="";const s=i.substring(i.length-3),r=i.substring(0,i.length-3);return r.length>0&&(a=r.replace(/\B(?=(\d{2})+(?!\d))/g,","),a+=","),a+=s,"₹"+a}function E(t){return!t||isNaN(t)?"0 sq. ft.":`${Math.round(t).toLocaleString("en-IN")} sq. ft.`}function P(t){return!t||isNaN(t)?"":`₹${t} / sq. ft.`}function se(){const t=new Date,e=t.getFullYear().toString()+(t.getMonth()+1).toString().padStart(2,"0")+t.getDate().toString().padStart(2,"0"),i=Math.random().toString(36).substring(2,6).toUpperCase();return`VW-${e}-${i}`}const f={area:0,height:null,rate:0,total:0,isValid:!1};function re(t){const{warehouse:e}=v;t.innerHTML=`
    <div class="calculator-section section" id="calculator-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Flexible Space & Estimated Pricing</span>
          <h2>Choose the Space That Fits Your Business</h2>
          <p class="section-subtitle centered">Select your required commercial warehouse space between 1,000 sq. ft. and 42,000 sq. ft. and instantly view your estimated pricing.</p>
        </div>

        <div class="calc-container reveal">
          <div class="calc-card">
            <!-- Tabs -->
            <div class="calc-tabs">
              <button class="calc-tab active" data-tab="direct" id="tab-direct">Enter Area Directly</button>
              <button class="calc-tab" data-tab="dimensions" id="tab-dimensions">Calculate from Dimensions</button>
            </div>

            <!-- Tab 1: Direct Area -->
            <div class="calc-tab-content active" id="content-direct">
              <label class="form-label" style="font-size: var(--text-body); margin-bottom: var(--space-3);">
                How much warehouse space do you need?
              </label>
              <p class="form-helper" style="margin-bottom: var(--space-4);">
                Enter the total area you need (1,000 to 42,000 sq. ft.), or choose a common size below.
              </p>
              <div class="calc-area-input-group">
                <input type="number" class="calc-area-input" id="calc-area-direct" 
                  placeholder="e.g. 2,000" min="1000" max="42000" step="100" aria-label="Required area in square feet" />
                <span class="calc-area-unit">sq. ft.</span>
              </div>
              <div class="calc-presets" id="calc-presets">
                ${e.quickPresets.map(i=>`
                  <button class="calc-preset" data-value="${i}">${i.toLocaleString("en-IN")} sq. ft.</button>
                `).join("")}
              </div>
            </div>

            <!-- Tab 2: Dimensions -->
            <div class="calc-tab-content" id="content-dimensions">
              <label class="form-label" style="font-size: var(--text-body); margin-bottom: var(--space-3);">
                Know Your Dimensions?
              </label>
              <p class="form-helper" style="margin-bottom: var(--space-5);">
                Enter the width and length of the floor space you need. We will calculate the approximate area for you.
              </p>
              <div class="calc-dimensions">
                <div>
                  <label class="form-label">Width (feet)</label>
                  <input type="number" class="calc-dim-input" id="calc-width" placeholder="e.g. 50" min="0" step="1" />
                </div>
                <div class="calc-dim-multiply">×</div>
                <div>
                  <label class="form-label">Length (feet)</label>
                  <input type="number" class="calc-dim-input" id="calc-length" placeholder="e.g. 40" min="0" step="1" />
                </div>
              </div>
              <div class="calc-dim-result" id="calc-dim-result" style="display:none;">
                <div class="calc-dim-result-label">Calculated Area</div>
                <div class="calc-dim-result-value" id="calc-dim-result-value">0 sq. ft.</div>
              </div>
            </div>

            <!-- Validation Message -->
            <div id="calc-validation" style="display:none;"></div>

            <!-- Height Preference -->
            <div class="calc-height-section">
              <label class="form-label" style="font-size: var(--text-body); margin-bottom: var(--space-3);">
                Preferred Warehouse Height
              </label>
              <p class="form-helper" style="margin-bottom: var(--space-4);">
                Select the ceiling height that best suits your storage needs.
              </p>
              <div class="calc-height-options" id="calc-height-options">
                ${e.heights.map(i=>`
                  <button class="calc-height-option" data-height="${i.value}">${i.label}</button>
                `).join("")}
                <button class="calc-height-option not-sure" data-height="not-sure">Not Sure — Help Me Choose</button>
              </div>
            </div>

            <!-- Pricing Summary -->
            <div class="calc-summary empty" id="calc-summary">
              <div class="calc-summary-grid">
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Required Warehouse Space</div>
                  <div class="calc-summary-value" id="summary-area">— sq. ft.</div>
                </div>
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Applicable Rate</div>
                  <div class="calc-summary-value" id="summary-rate">—</div>
                </div>
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Estimated Price</div>
                  <div class="calc-summary-value price" id="summary-price">—</div>
                </div>
              </div>
              <p class="calc-summary-note">Estimated pricing based on your selected warehouse area.</p>
              <div class="calc-summary-actions">
                <button class="btn btn-primary btn-lg" id="calc-continue-btn" disabled>
                  Continue With This Requirement
                </button>
                <button class="btn btn-whatsapp" id="calc-whatsapp-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Talk to Us on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,ne()}function ne(){var w,B;const t=document.getElementById("calc-area-direct"),e=document.getElementById("calc-width"),i=document.getElementById("calc-length"),a=document.getElementById("tab-direct"),s=document.getElementById("tab-dimensions"),r=document.getElementById("content-direct"),n=document.getElementById("content-dimensions"),l=document.getElementById("calc-presets"),c=document.getElementById("calc-height-options");a==null||a.addEventListener("click",()=>d("direct")),s==null||s.addEventListener("click",()=>d("dimensions"));function d(p){a.classList.toggle("active",p==="direct"),s.classList.toggle("active",p==="dimensions"),r.classList.toggle("active",p==="direct"),n.classList.toggle("active",p==="dimensions")}t==null||t.addEventListener("input",()=>{const p=parseFloat(t.value);u(p),C(p)}),l==null||l.addEventListener("click",p=>{const g=p.target.closest(".calc-preset");if(!g)return;const b=parseInt(g.dataset.value);t.value=b,u(b),C(b)});function u(p){l.querySelectorAll(".calc-preset").forEach(g=>{g.classList.toggle("active",parseInt(g.dataset.value)===p)})}e==null||e.addEventListener("input",m),i==null||i.addEventListener("input",m);function m(){const p=parseFloat(e.value),g=parseFloat(i.value),b=ae(p,g),L=document.getElementById("calc-dim-result"),D=document.getElementById("calc-dim-result-value");b>0?(L.style.display="block",D.textContent=E(b),C(b)):(L.style.display="none",C(0))}c==null||c.addEventListener("click",p=>{const g=p.target.closest(".calc-height-option");if(!g)return;c.querySelectorAll(".calc-height-option").forEach(L=>L.classList.remove("active")),g.classList.add("active");const b=g.dataset.height;f.height=b==="not-sure"?"Not Sure":parseInt(b)}),(w=document.getElementById("calc-continue-btn"))==null||w.addEventListener("click",()=>{f.isValid&&window.dispatchEvent(new CustomEvent("open-inquiry-wizard"))}),(B=document.getElementById("calc-whatsapp-btn"))==null||B.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet. Please update the contact settings.");return}})}function C(t){const e=te(t),i=document.getElementById("calc-summary"),a=document.getElementById("summary-area"),s=document.getElementById("summary-rate"),r=document.getElementById("summary-price"),n=document.getElementById("calc-continue-btn"),l=document.getElementById("calc-validation");f.area=e.area,f.rate=e.rate,f.total=e.total,f.isValid=e.isValid,window.dispatchEvent(new CustomEvent("calculator-update",{detail:f})),e.isValid?(i.classList.remove("empty"),a.textContent=E(e.area),s.textContent=P(e.rate),r.textContent=M(e.total),n.disabled=!1,l.style.display="none"):(e.showValidation?(l.innerHTML=`
        <div class="calc-validation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <p>${e.validationMessage}</p>
        </div>
      `,l.style.display="block"):l.style.display="none",i.classList.add("empty"),a.textContent=e.area>0?E(e.area):"— sq. ft.",s.textContent="—",r.textContent="—",n.disabled=!0)}function oe(t){t.innerHTML=`
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
  `}function I(t){if(!t||t.trim()==="")return"Please enter your email address.";const e=t.trim();return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)?"":"Please enter a valid email address."}function S(t){if(!t||t.trim()==="")return"Please enter a valid 10-digit mobile number.";const e=t.replace(/\D/g,"");return e.length!==10||!/^[6-9]\d{9}$/.test(e)?"Please enter a valid 10-digit mobile number.":""}function z(t,e){const i={};switch(t){case"business":{(!e.businessName||e.businessName.trim()==="")&&(i.businessName="Please enter your business or company name."),(!e.businessType||e.businessType.trim()==="")&&(i.businessType="Please select your business type.");break}case"contact":{(!e.fullName||e.fullName.trim()==="")&&(i.fullName="Please enter your full name.");const a=S(e.phone);a&&(i.phone=a);const s=I(e.email);s&&(i.email=s);break}case"setup":{(!e.name||e.name.trim()==="")&&(i.name="Please enter your full name.");const a=S(e.phone);a&&(i.phone=a);const s=I(e.email);s&&(i.email=s),(!e.requirement||e.requirement.trim()==="")&&(i.requirement="Please describe your warehouse requirement.");break}case"inquiry":{(!e.name||e.name.trim()==="")&&(i.name="Please enter your full name.");const a=S(e.phone);a&&(i.phone=a);const s=I(e.email);s&&(i.email=s);break}}return{isValid:Object.keys(i).length===0,errors:i}}function R(t){if(!t)return;t.setAttribute("inputmode","numeric"),t.setAttribute("maxlength","10"),t.setAttribute("pattern","[0-9]{10}");const e=i=>{const a=i.target.value.replace(/\D/g,"").slice(0,10);i.target.value!==a&&(i.target.value=a)};t.removeEventListener("input",e),t.addEventListener("input",e),t.addEventListener("keypress",i=>{!/[0-9]/.test(i.key)&&i.key!=="Enter"&&i.preventDefault()})}let h=0;const x=["space","business","contact","review"];let o={};function le(t){window.addEventListener("open-inquiry-wizard",()=>ce(t))}function ce(t){h=0,o={area:f.area,height:f.height,rate:f.rate,total:f.total,businessName:"",businessType:"",storageDescription:"",fullName:"",phone:"",email:"",contactMethod:"phone"},T(t),document.body.classList.add("no-scroll")}function q(t){t.innerHTML="",document.body.classList.remove("no-scroll")}function T(t){var i,a,s,r,n,l;const e=["Space","Business","Contact","Review"];if(t.innerHTML=`
    <div class="wizard-overlay open" id="wizard-overlay">
      <div class="wizard-modal">
        <div class="wizard-header">
          <h3>${e[h]} Details</h3>
          <button class="wizard-close" id="wizard-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="wizard-progress">
          ${x.map((c,d)=>`
            <div class="wizard-progress-step ${d<h?"completed":""} ${d===h?"active":""}">
              <span class="wizard-progress-dot">${d<h?"✓":d+1}</span>
              <span>${e[d]}</span>
            </div>
            ${d<x.length-1?'<div class="wizard-progress-line"></div>':""}
          `).join("")}
        </div>

        <div class="wizard-body">
          ${de()}
        </div>

        <div class="wizard-footer">
          ${h>0?'<button class="btn btn-ghost" id="wizard-back">← Back</button>':"<div></div>"}
          ${h<x.length-1?'<button class="btn btn-primary" id="wizard-next">Continue →</button>':'<button class="btn btn-primary btn-lg" id="wizard-submit">Submit Booking Request</button>'}
        </div>
      </div>
    </div>
  `,x[h]==="contact"){const c=document.getElementById("wiz-phone");c&&R(c)}(i=document.getElementById("wizard-close"))==null||i.addEventListener("click",()=>q(t)),(a=document.getElementById("wizard-overlay"))==null||a.addEventListener("click",c=>{c.target.id==="wizard-overlay"&&q(t)}),(s=document.getElementById("wizard-back"))==null||s.addEventListener("click",()=>{h--,T(t)}),(r=document.getElementById("wizard-next"))==null||r.addEventListener("click",()=>{pe()&&(N(),h++,T(t))}),(n=document.getElementById("wizard-submit"))==null||n.addEventListener("click",()=>{const c=document.getElementById("wizard-consent");if(!(c!=null&&c.checked)){c.parentElement.style.outline="2px solid var(--color-error)",c.parentElement.style.borderRadius="8px",c.parentElement.style.padding="8px";return}he(t)}),(l=document.getElementById("wizard-edit-req"))==null||l.addEventListener("click",()=>{q(t),k("#calculator")})}function de(){switch(x[h]){case"space":return`
        <div class="wizard-space-summary">
          <div class="wizard-space-grid">
            <div class="wizard-space-item">
              <div class="wizard-space-label">Required Warehouse Space</div>
              <div class="wizard-space-value">${E(o.area)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Preferred Warehouse Height</div>
              <div class="wizard-space-value">${o.height?o.height==="Not Sure"?"Not Sure":o.height+" ft":"Not selected"}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Estimated Rate</div>
              <div class="wizard-space-value">${P(o.rate)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Estimated Price</div>
              <div class="wizard-space-value accent">${M(o.total)}</div>
            </div>
          </div>
        </div>
        <button class="btn btn-outline btn-sm" id="wizard-edit-req">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
          Edit Requirement
        </button>
      `;case"business":return`
        <div class="form-group">
          <label class="form-label" for="wiz-business-name">Business / Company Name</label>
          <input type="text" class="form-input" id="wiz-business-name" placeholder="Sharma Logistics Pvt. Ltd." value="${o.businessName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-business-type">Business Type</label>
          <select class="form-select" id="wiz-business-type">
            <option value="">Select your business type</option>
            ${v.businessTypes.map(t=>`<option value="${t}" ${o.businessType===t?"selected":""}>${t}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-storage">Storage Requirement</label>
          <textarea class="form-input" id="wiz-storage" rows="3" placeholder="e.g. I need space for storing FMCG products and palletized inventory.">${o.storageDescription}</textarea>
          <span class="form-helper">Briefly describe what you need to store.</span>
        </div>
      `;case"contact":return`
        <div class="form-group">
          <label class="form-label" for="wiz-fullname">Full Name</label>
          <input type="text" class="form-input" id="wiz-fullname" placeholder="Rahul Sharma" value="${o.fullName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-phone">Phone Number</label>
          <input type="tel" class="form-input" id="wiz-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" value="${o.phone}" />
          <span class="form-helper">Enter 10-digit mobile number.</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-email">Email Address</label>
          <input type="email" class="form-input" id="wiz-email" placeholder="rahul.sharma@example.com" value="${o.email}" />
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Contact Method</label>
          <div class="calc-height-options" style="margin-top: var(--space-2);">
            ${v.contactMethods.map(t=>`
              <button class="calc-height-option ${o.contactMethod===t.value?"active":""}" data-method="${t.value}" style="min-width: 90px;">${t.label}</button>
            `).join("")}
          </div>
        </div>
      `;case"review":return`
        <div class="wizard-review-group">
          <h4>Your Warehouse Requirement</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Required Warehouse Space</span>
              <span class="wizard-review-value">${E(o.area)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Warehouse Height</span>
              <span class="wizard-review-value">${o.height?o.height==="Not Sure"?"Not Sure":o.height+" ft":"Not selected"}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Estimated Rate</span>
              <span class="wizard-review-value">${P(o.rate)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Estimated Price</span>
              <span class="wizard-review-value highlight">${M(o.total)}</span>
            </div>
          </div>
        </div>
        <div class="wizard-review-group">
          <h4>Business Details</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Business / Company Name</span>
              <span class="wizard-review-value">${o.businessName||"—"}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Business Type</span>
              <span class="wizard-review-value">${o.businessType||"—"}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Storage Requirement</span>
              <span class="wizard-review-value">${o.storageDescription||"—"}</span>
            </div>
          </div>
        </div>
        <div class="wizard-review-group">
          <h4>Contact Details</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Full Name</span>
              <span class="wizard-review-value">${o.fullName}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Phone Number</span>
              <span class="wizard-review-value">${o.phone}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Email Address</span>
              <span class="wizard-review-value">${o.email}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Contact Method</span>
              <span class="wizard-review-value">${ue(o.contactMethod)}</span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="wizard-consent" />
          <label for="wizard-consent">I understand that this submission is a warehouse inquiry/request and final availability and terms will be confirmed by Vardha Warehousing.</label>
        </div>
      `}}function ue(t){const e=v.contactMethods.find(i=>i.value===t);return e?e.label:t}function N(){var t,e,i,a,s,r;switch(x[h]){case"business":o.businessName=((t=document.getElementById("wiz-business-name"))==null?void 0:t.value.trim())||"",o.businessType=((e=document.getElementById("wiz-business-type"))==null?void 0:e.value)||"",o.storageDescription=((i=document.getElementById("wiz-storage"))==null?void 0:i.value.trim())||"";break;case"contact":o.fullName=((a=document.getElementById("wiz-fullname"))==null?void 0:a.value.trim())||"",o.phone=((s=document.getElementById("wiz-phone"))==null?void 0:s.value.replace(/\D/g,"").slice(0,10))||"",o.email=((r=document.getElementById("wiz-email"))==null?void 0:r.value.trim())||"";const n=document.querySelector("[data-method].active");n&&(o.contactMethod=n.dataset.method);break}}function pe(t){switch(x[h]){case"space":return!0;case"business":{N();const e=z("business",o);return e.isValid||H(e.errors),e.isValid}case"contact":{N();const e=z("contact",o);return e.isValid||H(e.errors),e.isValid}default:return!0}}function H(t){document.querySelectorAll(".form-error").forEach(e=>e.remove()),document.querySelectorAll(".form-input.error, .form-select.error").forEach(e=>e.classList.remove("error")),Object.entries(t).forEach(([e,i])=>{const a={businessName:"wiz-business-name",businessType:"wiz-business-type",fullName:"wiz-fullname",phone:"wiz-phone",email:"wiz-email"},s=document.getElementById(a[e]);if(s){s.classList.add("error");const r=document.createElement("div");r.className="form-error",r.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${i}`,s.parentElement.appendChild(r)}})}function he(t){const e=document.getElementById("wizard-submit");e&&(e.disabled=!0,e.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Submitting your request...
    `),setTimeout(()=>{const i=se();o.referenceNumber=i,q(t),window.dispatchEvent(new CustomEvent("show-success",{detail:o}))},600)}const ve=new MutationObserver(()=>{document.querySelectorAll("[data-method]").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("[data-method]").forEach(e=>e.classList.remove("active")),t.classList.add("active"),o.contactMethod=t.dataset.method})})});ve.observe(document.body,{childList:!0,subtree:!0});function me(t){window.addEventListener("show-success",e=>{const i=e.detail;ge(t,i)})}function ge(t,e){var i,a,s,r;t.innerHTML=`
    <div class="success-overlay open" id="success-overlay">
      <div class="success-modal">
        <div class="success-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path class="success-checkmark" d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h2>Thank you! Your warehouse requirement has been submitted successfully.</h2>
        <p>Our team will review your request and contact you shortly.</p>
        
        <div class="success-summary">
          <div class="success-summary-row">
            <span class="success-summary-label">Request Reference</span>
            <span class="success-summary-value">${e.referenceNumber}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Required Warehouse Space</span>
            <span class="success-summary-value">${E(e.area)}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Estimated Price</span>
            <span class="success-summary-value highlight">${M(e.total)}</span>
          </div>
        </div>

        <div class="success-actions">
          <button class="btn btn-dark" id="success-explore">Explore Warehouse</button>
          <button class="btn btn-whatsapp" id="success-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact on WhatsApp
          </button>
        </div>

        <div class="success-demo-link">
          <button id="success-demo-payment">Proceed to Payment (Demo) →</button>
        </div>
      </div>
    </div>
  `,document.body.classList.add("no-scroll"),(i=document.getElementById("success-explore"))==null||i.addEventListener("click",()=>{$(t),k("#warehouse")}),(a=document.getElementById("success-whatsapp"))==null||a.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet.");return}}),(s=document.getElementById("success-demo-payment"))==null||s.addEventListener("click",()=>{$(t),window.dispatchEvent(new CustomEvent("open-demo-payment",{detail:e}))}),(r=document.getElementById("success-overlay"))==null||r.addEventListener("click",n=>{n.target.id==="success-overlay"&&$(t)})}function $(t){t.innerHTML="",document.body.classList.remove("no-scroll")}function fe(t){window.addEventListener("open-demo-payment",e=>{const i=e.detail;be(t,i)})}function be(t,e){let i=null,a=!1;function s(){var r,n,l,c;if(a){t.innerHTML=`
        <div class="demo-overlay open">
          <div class="demo-modal">
            <div class="demo-badge">⚠️ Demo Payment Experience</div>
            <div class="demo-success">
              <div class="demo-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3>Demo Payment Confirmed</h3>
              <p style="color: var(--color-text-muted); margin-bottom: var(--space-6);">
                This was a demonstration payment. No real transaction was processed.
              </p>
              <button class="btn btn-primary" id="demo-done">Done</button>
            </div>
          </div>
        </div>
      `,(r=document.getElementById("demo-done"))==null||r.addEventListener("click",()=>A(t));return}t.innerHTML=`
      <div class="demo-overlay open" id="demo-overlay">
        <div class="demo-modal">
          <div class="demo-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Demo Payment Experience — No Real Transaction
          </div>
          <div class="demo-content">
            <h3>Payment Summary</h3>
            <div class="demo-summary">
              <div class="demo-summary-row">
                <span style="color: var(--color-text-muted); font-size: var(--text-small);">Warehouse Requirement</span>
                <span style="font-weight: 600; font-size: var(--text-small);">${E(e.area)}</span>
              </div>
              <div class="demo-summary-row">
                <span style="color: var(--color-text-muted); font-size: var(--text-small);">Estimated Amount</span>
                <span style="font-weight: 700; color: var(--color-accent);">${M(e.total)}</span>
              </div>
            </div>

            <label class="form-label" style="margin-bottom: var(--space-3);">Demo Payment Method</label>
            <div class="demo-methods" id="demo-methods">
              <div class="demo-method ${i==="upi"?"selected":""}" data-method="upi">
                <div class="demo-method-radio"></div>
                <span>UPI Payment</span>
              </div>
              <div class="demo-method ${i==="bank"?"selected":""}" data-method="bank">
                <div class="demo-method-radio"></div>
                <span>Bank Transfer</span>
              </div>
              <div class="demo-method ${i==="card"?"selected":""}" data-method="card">
                <div class="demo-method-radio"></div>
                <span>Credit / Debit Card</span>
              </div>
            </div>

            <div class="demo-actions">
              <button class="btn btn-primary btn-full" id="demo-confirm" ${i?"":"disabled"}>Confirm Demo Payment</button>
              <button class="btn btn-outline btn-full" id="demo-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `,document.body.classList.add("no-scroll"),document.querySelectorAll(".demo-method").forEach(d=>{d.addEventListener("click",()=>{i=d.dataset.method,s()})}),(n=document.getElementById("demo-confirm"))==null||n.addEventListener("click",()=>{i&&(a=!0,s())}),(l=document.getElementById("demo-cancel"))==null||l.addEventListener("click",()=>A(t)),(c=document.getElementById("demo-overlay"))==null||c.addEventListener("click",d=>{d.target.id==="demo-overlay"&&A(t)})}s()}function A(t){t.innerHTML="",document.body.classList.remove("no-scroll")}const ye={package:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',"shopping-cart":'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',boxes:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>',factory:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>'};function we(t){const{industries:e}=v;t.innerHTML=`
    <div class="industries-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Industries</span>
          <h2>Suitable for Modern Storage Requirements</h2>
          <p class="section-subtitle centered">Our warehouse space supports a wide range of business storage needs.</p>
        </div>

        <div class="industries-grid stagger-children">
          ${e.map(i=>`
            <div class="industry-card reveal">
              <div class="industry-icon">
                ${ye[i.icon]||""}
              </div>
              <h3>${i.title}</h3>
              <p>${i.description}</p>
            </div>
          `).join("")}
        </div>

        <div class="industries-note reveal">
          This facility is intended for warehousing and storage-related requirements.
        </div>
      </div>
    </div>
  `}function ke(t){const{brand:e}=v;t.innerHTML=`
    <div class="experience-section section" id="expertise">
      <div class="container">
        <div class="experience-inner">
          <div class="experience-year reveal-left">${e.foundedYear}</div>
          <div class="experience-content reveal-right">
            <span class="section-label">Decades of Trust</span>
            <h2>Warehousing Expertise Since ${e.foundedYear}</h2>
            <p>
              Built on decades of warehousing and commercial logistics expertise in North India. 
              We understand that your warehouse is the backbone of your supply chain — offering 
              24×7 loading support, digitized inventory management, and prime connectivity from Gorakhpur 
              to accelerate your business growth.
            </p>
            <div class="experience-badge">
              <div class="experience-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span class="experience-badge-text">Serving Businesses Since ${e.foundedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function xe(t){t.innerHTML=`
    <div class="setup-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Custom Solutions</span>
          <h2>Need a Warehouse Built Around Your Requirements?</h2>
          <p class="section-subtitle centered">We can support warehouse setup requirements based on your specific business needs.</p>
        </div>

        <div class="setup-grid">
          <div class="setup-content reveal-left">
            <div class="setup-features">
              <div class="setup-feature">
                <div class="setup-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span>Requirement-based approach tailored to your business</span>
              </div>
              <div class="setup-feature">
                <div class="setup-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span>Warehouse setup expertise from planning to execution</span>
              </div>
              <div class="setup-feature">
                <div class="setup-feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span>Nationwide work and service capabilities</span>
              </div>
            </div>
            <p style="color: var(--color-text-muted); line-height: 1.7;">
              Whether you need a new warehouse setup from scratch or want to optimize 
              an existing space, share your requirement and our team will work with you 
              to find the right solution.
            </p>
          </div>

          <div class="setup-form-card reveal-right" id="setup-form-container">
            <h3>Discuss Your Requirement</h3>
            <form id="setup-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="setup-name">Full Name</label>
                <input type="text" class="form-input" id="setup-name" placeholder="Rahul Sharma" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-company">Business / Company Name</label>
                <input type="text" class="form-input" id="setup-company" placeholder="Sharma Logistics Pvt. Ltd." />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-location">Location</label>
                <input type="text" class="form-input" id="setup-location" placeholder="Gorakhpur, Uttar Pradesh" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-requirement">Storage Requirement</label>
                <textarea class="form-input" id="setup-requirement" rows="3" placeholder="e.g. I need space for storing FMCG products and palletized inventory."></textarea>
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-space">Required Warehouse Space</label>
                <input type="text" class="form-input" id="setup-space" placeholder="e.g. 10,000 sq. ft." />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="setup-phone">Phone Number</label>
                  <input type="tel" class="form-input" id="setup-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-email">Email Address</label>
                  <input type="email" class="form-input" id="setup-email" placeholder="rahul.sharma@example.com" />
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-full" id="setup-submit-btn">Submit Requirement</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;const e=document.getElementById("setup-phone");e&&R(e);const i=document.getElementById("setup-form");i==null||i.addEventListener("submit",a=>{a.preventDefault();const s={name:document.getElementById("setup-name").value.trim(),company:document.getElementById("setup-company").value.trim(),phone:document.getElementById("setup-phone").value.replace(/\D/g,"").slice(0,10),email:document.getElementById("setup-email").value.trim(),requirement:document.getElementById("setup-requirement").value.trim()},r=z("setup",s);if(!r.isValid){Object.entries(r.errors).forEach(([l,c])=>{const d={name:"setup-name",phone:"setup-phone",email:"setup-email",requirement:"setup-requirement"},u=document.getElementById(d[l]);if(u){u.classList.add("error");const m=u.parentElement.querySelector(".form-error");m&&m.remove();const w=document.createElement("div");w.className="form-error",w.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${c}`,u.parentElement.appendChild(w)}});return}const n=document.getElementById("setup-submit-btn");n&&(n.disabled=!0,n.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Submitting your request...
      `),setTimeout(()=>{const l=document.getElementById("setup-form-container");l.innerHTML=`
        <div class="setup-form-success">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <h3>Thank you! Your warehouse requirement has been submitted successfully.</h3>
          <p style="color: var(--color-text-muted);">Our team will review your requirement and contact you shortly.</p>
        </div>
      `},600)})}function Ee(t){const{clients:e}=v;t.innerHTML=`
    <div class="clientele-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Clients</span>
          <h2>Trusted By Businesses Across Industries</h2>
          <p class="section-subtitle centered">We are proud to work with organisations that trust us with their warehousing needs.</p>
        </div>
        <div class="clientele-grid stagger-children">
          ${e.map(i=>`
            <div class="client-card reveal">
              <div class="client-icon">${i.name.charAt(0)}</div>
              <div class="client-name">${i.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function Be(t){var a;t.innerHTML=`
    <div class="inquiry-section section">
      <div class="container">
        <div class="inquiry-grid">
          <div class="inquiry-content reveal-left">
            <span class="section-label">Get in Touch</span>
            <h2>Let's Find the Right Warehouse Space for Your Business</h2>
            <p>Tell us what you need and our team will help you explore the next step. Whether you have a specific space requirement or just want to understand your options, we're here to help.</p>
          </div>

          <div class="inquiry-form-card reveal-right" id="inquiry-form-container">
            <form id="inquiry-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="inq-name">Full Name</label>
                <input type="text" class="form-input" id="inq-name" placeholder="Rahul Sharma" />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-company">Business / Company Name</label>
                <input type="text" class="form-input" id="inq-company" placeholder="Sharma Logistics Pvt. Ltd." />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="inq-phone">Phone Number</label>
                  <input type="tel" class="form-input" id="inq-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="inq-email">Email Address</label>
                  <input type="email" class="form-input" id="inq-email" placeholder="rahul.sharma@example.com" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-space">Required Warehouse Space</label>
                <input type="text" class="form-input" id="inq-space" placeholder="e.g. 2,000 sq. ft." />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-message">Storage Requirement</label>
                <textarea class="form-input" id="inq-message" rows="3" placeholder="e.g. I need space for storing FMCG products and palletized inventory."></textarea>
              </div>
              <div class="inquiry-form-actions">
                <button type="submit" class="btn btn-primary btn-lg" id="inq-submit-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
                  Send Inquiry
                </button>
                <button type="button" class="btn btn-whatsapp" id="inq-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;const e=document.getElementById("inq-phone");e&&R(e);const i=document.getElementById("inquiry-form");i==null||i.addEventListener("submit",s=>{s.preventDefault();const r={name:document.getElementById("inq-name").value.trim(),phone:document.getElementById("inq-phone").value.replace(/\D/g,"").slice(0,10),email:document.getElementById("inq-email").value.trim()},n=z("inquiry",r);if(!n.isValid){Object.entries(n.errors).forEach(([c,d])=>{const u={name:"inq-name",phone:"inq-phone",email:"inq-email"},m=document.getElementById(u[c]);if(m){m.classList.add("error");const w=m.parentElement.querySelector(".form-error");w&&w.remove();const B=document.createElement("div");B.className="form-error",B.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${d}`,m.parentElement.appendChild(B)}});return}const l=document.getElementById("inq-submit-btn");l&&(l.disabled=!0,l.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Submitting your request...
      `),setTimeout(()=>{const c=document.getElementById("inquiry-form-container");c.innerHTML=`
        <div class="inquiry-form-success">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <h3>Thank you! Your warehouse requirement has been submitted successfully.</h3>
          <p style="color: rgba(255,255,255,0.7);">Our team will review your inquiry and get in touch with you shortly.</p>
        </div>
      `},600)}),(a=document.getElementById("inq-whatsapp"))==null||a.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet.");return}})}function Me(t){var e;t.innerHTML=`
    <div class="whatsapp-float">
      <button class="whatsapp-btn" id="whatsapp-float-btn" aria-label="Chat on WhatsApp">
        <div class="whatsapp-pulse"></div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
      <div class="whatsapp-tooltip">Chat with us on WhatsApp</div>
    </div>
  `,(e=document.getElementById("whatsapp-float-btn"))==null||e.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet. Please update the contact settings in config.js.");return}})}function Le(t){const{brand:e,navigation:i,contact:a}=v,s=new Date().getFullYear();t.innerHTML=`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3><span>V</span>ardha Warehousing</h3>
            <p>${e.mission}</p>
          </div>

          <div class="footer-col">
            <h4>Navigate</h4>
            ${i.slice(0,4).map(r=>`<a href="${r.href}">${r.label}</a>`).join("")}
          </div>

          <div class="footer-col">
            <h4>Explore</h4>
            ${i.slice(4).map(r=>`<a href="${r.href}">${r.label}</a>`).join("")}
          </div>

          <div class="footer-col">
            <h4>Location & Contact</h4>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${a.address}</span>
            </div>
            
            
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${s} ${e.name}. Gorakhpur, Uttar Pradesh, India.</p>
          <p>Commercial Warehousing & 24×7 Logistics Solutions</p>
        </div>
      </div>
    </footer>
  `}function j(){O(document.getElementById("site-header")),U(document.getElementById("home")),Z(document.getElementById("introduction")),_(document.getElementById("warehouse")),X(document.getElementById("facilities")),J(document.getElementById("gallery")),re(document.getElementById("calculator")),oe(document.getElementById("how-it-works")),we(document.getElementById("industries")),ke(document.getElementById("expertise")),xe(document.getElementById("warehouse-setup")),Ee(document.getElementById("clients")),Be(document.getElementById("contact")),Le(document.getElementById("site-footer")),Me(document.getElementById("whatsapp-button")),le(document.getElementById("inquiry-wizard-modal")),me(document.getElementById("success-screen-modal")),fe(document.getElementById("demo-payment-modal")),requestAnimationFrame(()=>{V(),F()}),document.addEventListener("input",t=>{var e,i;if(t.target.classList.contains("error")){t.target.classList.remove("error");const a=(e=t.target.parentElement)==null?void 0:e.querySelector(".form-error");a&&a.remove()}if(t.target.type==="tel"||(i=t.target.id)!=null&&i.includes("phone")){const a=t.target.value.replace(/\D/g,"").slice(0,10);t.target.value!==a&&(t.target.value=a)}}),document.addEventListener("keypress",t=>{var e;(t.target.type==="tel"||(e=t.target.id)!=null&&e.includes("phone"))&&!/[0-9]/.test(t.key)&&t.key!=="Enter"&&t.preventDefault()}),console.log("%c✓ Vardha Warehousing loaded","color: #C8965A; font-weight: bold; font-size: 14px;")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",j):j();
