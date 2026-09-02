(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const m={brand:{name:"Vardha Warehousing",tagline:"Warehousing Expertise Since 1987",foundedYear:1987},pricing:{unit:"sq. ft.",slabs:[{id:"slab-1",min:500,max:4999,rate:60,label:"500 – 4,999 sq. ft."},{id:"slab-2",min:5e3,max:42e3,rate:24,label:"5,000 – 42,000 sq. ft."}],boundaryValue:5e3},warehouse:{minArea:500,maxArea:42e3,heights:[{value:14,label:"14 ft",description:"Standard height"},{value:22,label:"22 ft",description:"High-ceiling option"}],quickPresets:[500,2500,5e3,1e4]},property:{type:"Commercial Property",location:"Gorakhnath Mandir Road, Bargadwa",roadWidth:"Approximately 36 metres / 118 feet",transport:"24×7 truck and transportation accessibility"},contact:{address:"Gorakhnath Mandir Road, Bargadwa"},facilities:[{icon:"cctv",title:"CCTV Surveillance",description:"Warehouse equipped with CCTV monitoring for enhanced security and oversight."},{icon:"shield",title:"Security Setup",description:"Security arrangements for the warehouse environment to protect stored goods."},{icon:"truck",title:"Easy Transport Movement",description:"Easy movement for trucks and transportation vehicles within the facility."},{icon:"road",title:"Commercial Access",description:"Wide road connectivity suitable for commercial vehicle access and operations."},{icon:"building",title:"Workspace / Office Possibility",description:"Potential for workspace or office setup within the warehouse environment."},{icon:"height",title:"Height Options",description:"Available in 14 ft and 22 ft ceiling height configurations."}],industries:[{icon:"package",title:"FMCG Storage",description:"Suitable for fast-moving consumer goods storage and distribution."},{icon:"shopping-cart",title:"E-commerce Inventory",description:"Ideal for e-commerce businesses including platforms like Amazon and Flipkart."},{icon:"boxes",title:"Product Storage",description:"General product storage for businesses needing reliable warehousing space."},{icon:"factory",title:"Industrial Products Storage",description:"Storage solutions for industrial products and materials."}],clients:[{name:"DPS / Delhi Public School",logo:null},{name:"FCI Fertilizer, Gorakhpur",logo:null},{name:"Lord of the Drinks",logo:null}],businessTypes:["FMCG","E-commerce","Product Storage","Industrial Products Storage","Retail","Distribution","Other"],contactMethods:[{value:"phone",label:"Phone"},{value:"email",label:"Email"},{value:"whatsapp",label:"WhatsApp"}],gallery:[{src:"/images/warehouse-hero.jpg",alt:"Warehouse interior — storage and shelving",featured:!0},{src:"/images/warehouse-exterior.jpg",alt:"Warehouse exterior — building and road access"},{src:"/images/warehouse-loading.jpg",alt:"Loading dock area"},{src:"/images/warehouse-interior.jpg",alt:"Empty warehouse space with high ceilings"},{src:"/images/warehouse-security.jpg",alt:"Warehouse security and CCTV setup"}],navigation:[{label:"Home",href:"#home"},{label:"Warehouse",href:"#warehouse"},{label:"Facilities",href:"#facilities"},{label:"Space & Pricing",href:"#calculator"},{label:"Industries",href:"#industries"},{label:"Expertise",href:"#expertise"},{label:"Clients",href:"#clients"},{label:"Contact",href:"#contact"}]};function k(e){const t=document.querySelector(e);if(!t)return;const s=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72,a=t.getBoundingClientRect().top+window.scrollY-s-16;window.scrollTo({top:a,behavior:"smooth"})}function F(){const e=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");if(!e.length)return;const t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),t.unobserve(a.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});e.forEach(s=>t.observe(s))}function O(){const e=document.querySelectorAll("section[id]"),t=document.querySelectorAll(".nav-link");if(!e.length||!t.length)return;const s=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const r=i.target.getAttribute("id");t.forEach(n=>{n.classList.remove("active"),n.getAttribute("href")===`#${r}`&&n.classList.add("active")})}})},{threshold:.2,rootMargin:"-80px 0px -60% 0px"});e.forEach(a=>s.observe(a))}function Y(e){const{brand:t,navigation:s}=m;e.innerHTML=`
    <div class="site-header" id="main-header">
      <div class="header-inner">
        <a href="#home" class="header-brand" aria-label="${t.name} — Home">
          <div class="header-brand-badge">
            <span>V</span>
          </div>
          <div class="header-brand-details">
            <span class="header-brand-title">Vardha</span>
            <span class="header-brand-sub">WAREHOUSING</span>
          </div>
        </a>

        <nav class="header-nav" aria-label="Main navigation">
          ${s.map(a=>`
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
          ${s.map(a=>`
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
  `,Z()}function G(){return"#"}function Z(){var i;const e=document.getElementById("main-header"),t=document.getElementById("mobile-menu-toggle"),s=document.getElementById("mobile-nav"),a=document.getElementById("header-find-space");window.addEventListener("scroll",()=>{window.scrollY>15?e.classList.add("scrolled"):e.classList.remove("scrolled")},{passive:!0}),t==null||t.addEventListener("click",()=>{const r=t.classList.toggle("open");s.classList.toggle("open"),t.setAttribute("aria-expanded",r),document.body.classList.toggle("no-scroll",r)}),s==null||s.querySelectorAll(".mobile-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("open"),s.classList.remove("open"),t.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll")})}),(i=s==null?void 0:s.querySelector(".mobile-find-space"))==null||i.addEventListener("click",()=>{t.classList.remove("open"),s.classList.remove("open"),t.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll"),k("#calculator")}),a==null||a.addEventListener("click",()=>{k("#calculator")}),document.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",n=>{const l=r.getAttribute("href");l&&l.startsWith("#")&&(n.preventDefault(),k(l))})})}function U(e){var t,s;e.innerHTML=`
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
  `,(t=document.getElementById("hero-find-space"))==null||t.addEventListener("click",()=>{k("#calculator")}),(s=document.getElementById("hero-explore"))==null||s.addEventListener("click",()=>{k("#warehouse")})}function _(e){var t;e.innerHTML=`
    <div class="introduction section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content reveal-left">
            <span class="section-label">About the Space</span>
            <h2>Warehouse Space Designed Around Your Business Requirements</h2>
            <p class="intro-text">
              Whether you need a compact storage area or a large-scale warehousing solution, 
              you can explore available space, see estimated pricing, and send your requirement 
              — all in a few simple steps. No complicated forms, no waiting for callbacks just 
              to understand your options.
            </p>
            <div class="intro-process">
              <div class="intro-step">
                <span class="intro-step-num">1</span>
                <span class="intro-step-text">Choose Space</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">2</span>
                <span class="intro-step-text">See Estimated Price</span>
              </div>
              <span class="intro-arrow">→</span>
              <div class="intro-step">
                <span class="intro-step-num">3</span>
                <span class="intro-step-text">Send Request</span>
              </div>
            </div>
            <button class="btn btn-primary" id="intro-calculate-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
              Calculate Your Requirement
            </button>
          </div>
          <div class="intro-image reveal-right">
            <img src="/images/warehouse-exterior.jpg" alt="Vardha Warehousing — Commercial warehouse exterior with wide road access" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `,(t=document.getElementById("intro-calculate-btn"))==null||t.addEventListener("click",()=>{k("#calculator")})}function X(e){const{property:t}=m;e.innerHTML=`
    <div class="property-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">The Property</span>
          <h2>A Commercial Warehouse Built for Easy Access</h2>
          <p class="section-subtitle centered">Strategically located with wide road access and round-the-clock transport connectivity.</p>
        </div>
        <div class="property-grid">
          <div class="property-cards stagger-children">
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Location</h4>
              <p>${t.location}</p>
            </div>
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
              </div>
              <h4>Wide Road Access</h4>
              <p>${t.roadWidth} wide road in front of the property.</p>
            </div>
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4>Truck Connectivity</h4>
              <p>${t.transport}</p>
            </div>
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <h4>Commercial Property</h4>
              <p>${t.type} — suitable for business and commercial warehousing use.</p>
            </div>
          </div>
          <div class="property-image reveal-right">
            <img src="/images/warehouse-loading.jpg" alt="Commercial warehouse with truck loading access" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `}const K={cctv:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',shield:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',truck:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',road:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M12 3v4"/><path d="M12 11v2"/><path d="M12 17v4"/></svg>',building:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',height:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3H3"/><path d="M21 21H3"/><path d="M12 6v12"/><path d="m8 9 4-3 4 3"/><path d="m8 15 4 3 4-3"/></svg>'};function Q(e){const{facilities:t}=m;e.innerHTML=`
    <div class="facilities-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Warehouse Facilities</span>
          <h2>Everything You Need for Reliable Storage</h2>
          <p class="section-subtitle centered">Our warehouse is equipped with essential facilities to support your storage requirements.</p>
        </div>
        <div class="facilities-grid stagger-children">
          ${t.map(s=>`
            <div class="facility-card reveal">
              <div class="facility-icon">
                ${K[s.icon]||""}
              </div>
              <h3>${s.title}</h3>
              <p>${s.description}</p>
              ${s.icon==="height"?`
                <div class="facility-heights">
                  <span class="facility-height-tag">14 ft</span>
                  <span class="facility-height-tag">22 ft</span>
                </div>
              `:""}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}let y=0;function J(e){const{gallery:t}=m,s=t.find(a=>a.featured)||t[0];e.innerHTML=`
    <div class="gallery-section section" id="gallery-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label" style="color: var(--color-accent);">Gallery</span>
          <h2>Explore the Warehouse</h2>
          <p class="section-subtitle centered" style="color: rgba(255,255,255,0.6);">Take a closer look at the facility, infrastructure, and surroundings.</p>
        </div>

        <div class="gallery-featured reveal-scale" id="gallery-featured" data-index="0">
          <img src="${s.src}" alt="${s.alt}" id="gallery-main-img" />
          <div class="gallery-featured-overlay">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
              Click to expand
            </span>
          </div>
        </div>

        <div class="gallery-thumbs reveal" id="gallery-thumbs">
          ${t.map((a,i)=>`
            <div class="gallery-thumb ${i===0?"active":""}" data-index="${i}">
              <img src="${a.src}" alt="${a.alt}" loading="lazy" />
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,ee(t)}function ee(e){const t=document.getElementById("gallery-main-img"),s=document.getElementById("gallery-thumbs"),a=document.getElementById("gallery-featured");s==null||s.addEventListener("click",r=>{const n=r.target.closest(".gallery-thumb");if(!n)return;const l=parseInt(n.dataset.index);H(l,e,t,s)}),a==null||a.addEventListener("click",()=>{te(y,e)});let i=0;a==null||a.addEventListener("touchstart",r=>{i=r.touches[0].clientX},{passive:!0}),a==null||a.addEventListener("touchend",r=>{const n=i-r.changedTouches[0].clientX;if(Math.abs(n)>50){const l=n>0?(y+1)%e.length:(y-1+e.length)%e.length;H(l,e,t,s)}},{passive:!0})}function H(e,t,s,a){y=e,s.style.opacity="0",setTimeout(()=>{s.src=t[e].src,s.alt=t[e].alt,s.style.opacity="1"},200),a.querySelectorAll(".gallery-thumb").forEach((i,r)=>{i.classList.toggle("active",r===e)})}function te(e,t){const s=document.getElementById("gallery-lightbox");y=e,s.innerHTML=`
    <div class="lightbox open" id="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close gallery">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <img src="${t[e].src}" alt="${t[e].alt}" id="lightbox-img" />
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <span class="lightbox-counter" id="lightbox-counter">${e+1} / ${t.length}</span>
      </div>
    </div>
  `,document.body.classList.add("no-scroll");const a=document.getElementById("lightbox-overlay"),i=a.querySelector(".lightbox-close"),r=a.querySelector(".lightbox-prev"),n=a.querySelector(".lightbox-next"),l=()=>{s.innerHTML="",document.body.classList.remove("no-scroll")},c=d=>{y=(y+d+t.length)%t.length;const u=document.getElementById("lightbox-img"),h=document.getElementById("lightbox-counter");u.src=t[y].src,u.alt=t[y].alt,h.textContent=`${y+1} / ${t.length}`};i.addEventListener("click",l),a.addEventListener("click",d=>{d.target===a&&l()}),r.addEventListener("click",d=>{d.stopPropagation(),c(-1)}),n.addEventListener("click",d=>{d.stopPropagation(),c(1)}),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(l(),document.removeEventListener("keydown",d)),u.key==="ArrowLeft"&&c(-1),u.key==="ArrowRight"&&c(1)})}function se(e){const{pricing:t,warehouse:s}=m,a=parseFloat(e);if(!e||isNaN(a)||a<=0)return{area:0,rate:0,total:0,slab:null,isValid:!1,validationMessage:"",showValidation:!1};if(a<s.minArea)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:`The displayed pricing currently starts from ${s.minArea.toLocaleString("en-IN")} ${t.unit}. Please contact us for smaller requirements.`};if(a>s.maxArea)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:"Your requirement is outside the currently displayed pricing range. Please send us your requirement for a custom quotation."};const i=ae(a,t);if(!i)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:"Unable to calculate pricing for this area. Please contact us."};const r=a*i.rate;return{area:a,rate:i.rate,total:r,slab:i,isValid:!0,showValidation:!1,validationMessage:""}}function ae(e,t){const{slabs:s,boundaryValue:a}=t;for(const i of s){let r=i.min,n=i.max;if(e===a&&i.min===a||e>=r&&e<=n)return i}return null}function ie(e,t){const s=parseFloat(e),a=parseFloat(t);return!e||!t||isNaN(s)||isNaN(a)||s<=0||a<=0?0:Math.round(s*a)}function M(e){if(!e||isNaN(e))return"₹0";const s=Math.round(e).toString();if(s.length<=3)return"₹"+s;let a="";const i=s.substring(s.length-3),r=s.substring(0,s.length-3);return r.length>0&&(a=r.replace(/\B(?=(\d{2})+(?!\d))/g,","),a+=","),a+=i,"₹"+a}function E(e){return!e||isNaN(e)?"0 sq. ft.":`${Math.round(e).toLocaleString("en-IN")} sq. ft.`}function P(e){return!e||isNaN(e)?"":`₹${e} / sq. ft.`}function re(){const e=new Date,t=e.getFullYear().toString()+(e.getMonth()+1).toString().padStart(2,"0")+e.getDate().toString().padStart(2,"0"),s=Math.random().toString(36).substring(2,6).toUpperCase();return`VW-${t}-${s}`}const f={area:0,height:null,rate:0,total:0,isValid:!1};function ne(e){const{warehouse:t}=m;e.innerHTML=`
    <div class="calculator-section section" id="calculator-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Space & Pricing</span>
          <h2>Find the Space You Need</h2>
          <p class="section-subtitle centered">Tell us how much space you require and instantly see an estimated price.</p>
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
                Enter the total area you need in square feet, or pick a common size below.
              </p>
              <div class="calc-area-input-group">
                <input type="number" class="calc-area-input" id="calc-area-direct" 
                  placeholder="e.g. 2,000" min="0" step="100" aria-label="Required area in square feet" />
                <span class="calc-area-unit">sq. ft.</span>
              </div>
              <div class="calc-presets" id="calc-presets">
                ${t.quickPresets.map(s=>`
                  <button class="calc-preset" data-value="${s}">${s.toLocaleString("en-IN")} sq. ft.</button>
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
                ${t.heights.map(s=>`
                  <button class="calc-height-option" data-height="${s.value}">${s.label}</button>
                `).join("")}
                <button class="calc-height-option not-sure" data-height="not-sure">Not Sure — Help Me Choose</button>
              </div>
            </div>

            <!-- Pricing Summary -->
            <div class="calc-summary empty" id="calc-summary">
              <div class="calc-summary-grid">
                <div class="calc-summary-item">
                  <div class="calc-summary-label">Required Area</div>
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
  `,oe()}function oe(){var w,B;const e=document.getElementById("calc-area-direct"),t=document.getElementById("calc-width"),s=document.getElementById("calc-length"),a=document.getElementById("tab-direct"),i=document.getElementById("tab-dimensions"),r=document.getElementById("content-direct"),n=document.getElementById("content-dimensions"),l=document.getElementById("calc-presets"),c=document.getElementById("calc-height-options");a==null||a.addEventListener("click",()=>d("direct")),i==null||i.addEventListener("click",()=>d("dimensions"));function d(p){a.classList.toggle("active",p==="direct"),i.classList.toggle("active",p==="dimensions"),r.classList.toggle("active",p==="direct"),n.classList.toggle("active",p==="dimensions")}e==null||e.addEventListener("input",()=>{const p=parseFloat(e.value);u(p),I(p)}),l==null||l.addEventListener("click",p=>{const g=p.target.closest(".calc-preset");if(!g)return;const b=parseInt(g.dataset.value);e.value=b,u(b),I(b)});function u(p){l.querySelectorAll(".calc-preset").forEach(g=>{g.classList.toggle("active",parseInt(g.dataset.value)===p)})}t==null||t.addEventListener("input",h),s==null||s.addEventListener("input",h);function h(){const p=parseFloat(t.value),g=parseFloat(s.value),b=ie(p,g),q=document.getElementById("calc-dim-result"),D=document.getElementById("calc-dim-result-value");b>0?(q.style.display="block",D.textContent=E(b),I(b)):(q.style.display="none",I(0))}c==null||c.addEventListener("click",p=>{const g=p.target.closest(".calc-height-option");if(!g)return;c.querySelectorAll(".calc-height-option").forEach(q=>q.classList.remove("active")),g.classList.add("active");const b=g.dataset.height;f.height=b==="not-sure"?"Not Sure":parseInt(b)}),(w=document.getElementById("calc-continue-btn"))==null||w.addEventListener("click",()=>{f.isValid&&window.dispatchEvent(new CustomEvent("open-inquiry-wizard"))}),(B=document.getElementById("calc-whatsapp-btn"))==null||B.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet. Please update the contact settings.");return}})}function I(e){const t=se(e),s=document.getElementById("calc-summary"),a=document.getElementById("summary-area"),i=document.getElementById("summary-rate"),r=document.getElementById("summary-price"),n=document.getElementById("calc-continue-btn"),l=document.getElementById("calc-validation");f.area=t.area,f.rate=t.rate,f.total=t.total,f.isValid=t.isValid,window.dispatchEvent(new CustomEvent("calculator-update",{detail:f})),t.isValid?(s.classList.remove("empty"),a.textContent=E(t.area),i.textContent=P(t.rate),r.textContent=M(t.total),n.disabled=!1,l.style.display="none"):(t.showValidation?(l.innerHTML=`
        <div class="calc-validation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <p>${t.validationMessage}</p>
        </div>
      `,l.style.display="block"):l.style.display="none",s.classList.add("empty"),a.textContent=t.area>0?E(t.area):"— sq. ft.",i.textContent="—",r.textContent="—",n.disabled=!0)}function le(e){e.innerHTML=`
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
  `}function L(e,t){return!e||e.toString().trim()===""?`Please enter your ${t}.`:""}function C(e){if(!e||e.trim()==="")return"Please enter your email address.";const t=e.trim();return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)?"":"Please enter a valid email address (e.g. rahul.sharma@example.com)."}function $(e){if(!e||e.trim()==="")return"Please enter your 10-digit mobile number.";const t=e.replace(/\D/g,"");return t.length!==10?"Please enter a complete 10-digit mobile number.":/^[6-9]\d{9}$/.test(t)?"":"Please enter a valid Indian mobile number starting with 6, 7, 8, or 9."}function S(e,t){const s={};switch(e){case"business":{const a=L(t.businessName,"business name");a&&(s.businessName=a);const i=L(t.businessType,"business type");i&&(s.businessType=i);break}case"contact":{const a=L(t.fullName,"full name");a&&(s.fullName=a);const i=$(t.phone);i&&(s.phone=i);const r=C(t.email);r&&(s.email=r);break}case"setup":{const a=L(t.name,"full name");a&&(s.name=a);const i=$(t.phone);i&&(s.phone=i);const r=C(t.email);r&&(s.email=r);const n=L(t.requirement,"requirement");n&&(s.requirement=n);break}case"inquiry":{const a=L(t.name,"full name");a&&(s.name=a);const i=$(t.phone);i&&(s.phone=i);const r=C(t.email);r&&(s.email=r);break}}return{isValid:Object.keys(s).length===0,errors:s}}function j(e){if(!e)return;e.setAttribute("inputmode","numeric"),e.setAttribute("maxlength","10"),e.setAttribute("pattern","[0-9]{10}");const t=s=>{const a=s.target.value.replace(/\D/g,"").slice(0,10);s.target.value!==a&&(s.target.value=a)};e.removeEventListener("input",t),e.addEventListener("input",t),e.addEventListener("keypress",s=>{!/[0-9]/.test(s.key)&&s.key!=="Enter"&&s.key!=="Backspace"&&s.key!=="Tab"&&s.preventDefault()})}let v=0;const x=["space","business","contact","review"];let o={};function ce(e){window.addEventListener("open-inquiry-wizard",()=>de(e))}function de(e){v=0,o={area:f.area,height:f.height,rate:f.rate,total:f.total,businessName:"",businessType:"",storageDescription:"",fullName:"",phone:"",email:"",contactMethod:"phone"},N(e),document.body.classList.add("no-scroll")}function z(e){e.innerHTML="",document.body.classList.remove("no-scroll")}function N(e){var s,a,i,r,n,l;const t=["Space","Business","Contact","Review"];if(e.innerHTML=`
    <div class="wizard-overlay open" id="wizard-overlay">
      <div class="wizard-modal">
        <div class="wizard-header">
          <h3>${t[v]} Details</h3>
          <button class="wizard-close" id="wizard-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="wizard-progress">
          ${x.map((c,d)=>`
            <div class="wizard-progress-step ${d<v?"completed":""} ${d===v?"active":""}">
              <span class="wizard-progress-dot">${d<v?"✓":d+1}</span>
              <span>${t[d]}</span>
            </div>
            ${d<x.length-1?'<div class="wizard-progress-line"></div>':""}
          `).join("")}
        </div>

        <div class="wizard-body">
          ${ue()}
        </div>

        <div class="wizard-footer">
          ${v>0?'<button class="btn btn-ghost" id="wizard-back">← Back</button>':"<div></div>"}
          ${v<x.length-1?'<button class="btn btn-primary" id="wizard-next">Continue →</button>':'<button class="btn btn-primary btn-lg" id="wizard-submit">Submit Booking Request</button>'}
        </div>
      </div>
    </div>
  `,x[v]==="contact"){const c=document.getElementById("wiz-phone");c&&j(c)}(s=document.getElementById("wizard-close"))==null||s.addEventListener("click",()=>z(e)),(a=document.getElementById("wizard-overlay"))==null||a.addEventListener("click",c=>{c.target.id==="wizard-overlay"&&z(e)}),(i=document.getElementById("wizard-back"))==null||i.addEventListener("click",()=>{v--,N(e)}),(r=document.getElementById("wizard-next"))==null||r.addEventListener("click",()=>{pe()&&(W(),v++,N(e))}),(n=document.getElementById("wizard-submit"))==null||n.addEventListener("click",()=>{const c=document.getElementById("wizard-consent");if(!(c!=null&&c.checked)){c.parentElement.style.outline="2px solid var(--color-error)",c.parentElement.style.borderRadius="8px",c.parentElement.style.padding="8px";return}ve(e)}),(l=document.getElementById("wizard-edit-req"))==null||l.addEventListener("click",()=>{z(e),k("#calculator")})}function ue(){switch(x[v]){case"space":return`
        <div class="wizard-space-summary">
          <div class="wizard-space-grid">
            <div class="wizard-space-item">
              <div class="wizard-space-label">Required Area</div>
              <div class="wizard-space-value">${E(o.area)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Preferred Height</div>
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
          <label class="form-label" for="wiz-business-name">Business Name</label>
          <input type="text" class="form-input" id="wiz-business-name" placeholder="e.g. Sharma Logistics & Retail Pvt. Ltd." value="${o.businessName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-business-type">Business Type</label>
          <select class="form-select" id="wiz-business-type">
            <option value="">Select your business type</option>
            ${m.businessTypes.map(e=>`<option value="${e}" ${o.businessType===e?"selected":""}>${e}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-storage">What would you like to store?</label>
          <textarea class="form-input" id="wiz-storage" rows="3" placeholder="e.g. FMCG packaged food products, garments, consumer electronics...">${o.storageDescription}</textarea>
          <span class="form-helper">A brief description helps us understand your storage requirement better.</span>
        </div>
      `;case"contact":return`
        <div class="form-group">
          <label class="form-label" for="wiz-fullname">Full Name</label>
          <input type="text" class="form-input" id="wiz-fullname" placeholder="e.g. Rajesh Sharma" value="${o.fullName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-phone">Mobile Number (10 Digits)</label>
          <input type="tel" class="form-input" id="wiz-phone" placeholder="e.g. 9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" value="${o.phone}" />
          <span class="form-helper">Enter 10-digit Indian mobile number without +91 or 0.</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-email">Email Address</label>
          <input type="email" class="form-input" id="wiz-email" placeholder="e.g. rajesh.sharma@example.com" value="${o.email}" />
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Contact Method</label>
          <div class="calc-height-options" style="margin-top: var(--space-2);">
            ${m.contactMethods.map(e=>`
              <button class="calc-height-option ${o.contactMethod===e.value?"active":""}" data-method="${e.value}" style="min-width: 80px;">${e.label}</button>
            `).join("")}
          </div>
        </div>
      `;case"review":return`
        <div class="wizard-review-group">
          <h4>Your Warehouse Requirement</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Required Area</span>
              <span class="wizard-review-value">${E(o.area)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Height</span>
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
              <span class="wizard-review-label">Business Name</span>
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
              <span class="wizard-review-label">Name</span>
              <span class="wizard-review-value">${o.fullName}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Mobile Number</span>
              <span class="wizard-review-value">${o.phone}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Email</span>
              <span class="wizard-review-value">${o.email}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Contact</span>
              <span class="wizard-review-value" style="text-transform: capitalize;">${o.contactMethod}</span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="wizard-consent" />
          <label for="wizard-consent">I understand that this submission is a warehouse inquiry/request and final availability and terms will be confirmed by Vardha Warehousing.</label>
        </div>
      `}}function W(){var e,t,s,a,i,r;switch(x[v]){case"business":o.businessName=((e=document.getElementById("wiz-business-name"))==null?void 0:e.value.trim())||"",o.businessType=((t=document.getElementById("wiz-business-type"))==null?void 0:t.value)||"",o.storageDescription=((s=document.getElementById("wiz-storage"))==null?void 0:s.value.trim())||"";break;case"contact":o.fullName=((a=document.getElementById("wiz-fullname"))==null?void 0:a.value.trim())||"",o.phone=((i=document.getElementById("wiz-phone"))==null?void 0:i.value.replace(/\D/g,"").slice(0,10))||"",o.email=((r=document.getElementById("wiz-email"))==null?void 0:r.value.trim())||"";const n=document.querySelector("[data-method].active");n&&(o.contactMethod=n.dataset.method);break}}function pe(e){switch(x[v]){case"space":return!0;case"business":{W();const t=S("business",o);return t.isValid||V(t.errors),t.isValid}case"contact":{W();const t=S("contact",o);return t.isValid||V(t.errors),t.isValid}default:return!0}}function V(e){document.querySelectorAll(".form-error").forEach(t=>t.remove()),document.querySelectorAll(".form-input.error, .form-select.error").forEach(t=>t.classList.remove("error")),Object.entries(e).forEach(([t,s])=>{const a={businessName:"wiz-business-name",businessType:"wiz-business-type",fullName:"wiz-fullname",phone:"wiz-phone",email:"wiz-email"},i=document.getElementById(a[t]);if(i){i.classList.add("error");const r=document.createElement("div");r.className="form-error",r.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${s}`,i.parentElement.appendChild(r)}})}function ve(e){const t=re();o.referenceNumber=t,z(e),window.dispatchEvent(new CustomEvent("show-success",{detail:o}))}const he=new MutationObserver(()=>{document.querySelectorAll("[data-method]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-method]").forEach(t=>t.classList.remove("active")),e.classList.add("active"),o.contactMethod=e.dataset.method})})});he.observe(document.body,{childList:!0,subtree:!0});function me(e){window.addEventListener("show-success",t=>{const s=t.detail;ge(e,s)})}function ge(e,t){var s,a,i,r;e.innerHTML=`
    <div class="success-overlay open" id="success-overlay">
      <div class="success-modal">
        <div class="success-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path class="success-checkmark" d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h2>Your Warehouse Request Has Been Received</h2>
        <p>Thank you for sharing your requirement. Our team will review your request and contact you.</p>
        
        <div class="success-summary">
          <div class="success-summary-row">
            <span class="success-summary-label">Request Reference</span>
            <span class="success-summary-value">${t.referenceNumber}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Required Space</span>
            <span class="success-summary-value">${E(t.area)}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Estimated Price</span>
            <span class="success-summary-value highlight">${M(t.total)}</span>
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
  `,document.body.classList.add("no-scroll"),(s=document.getElementById("success-explore"))==null||s.addEventListener("click",()=>{A(e),k("#warehouse")}),(a=document.getElementById("success-whatsapp"))==null||a.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet.");return}}),(i=document.getElementById("success-demo-payment"))==null||i.addEventListener("click",()=>{A(e),window.dispatchEvent(new CustomEvent("open-demo-payment",{detail:t}))}),(r=document.getElementById("success-overlay"))==null||r.addEventListener("click",n=>{n.target.id==="success-overlay"&&A(e)})}function A(e){e.innerHTML="",document.body.classList.remove("no-scroll")}function fe(e){window.addEventListener("open-demo-payment",t=>{const s=t.detail;be(e,s)})}function be(e,t){let s=null,a=!1;function i(){var r,n,l,c;if(a){e.innerHTML=`
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
      `,(r=document.getElementById("demo-done"))==null||r.addEventListener("click",()=>T(e));return}e.innerHTML=`
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
                <span style="font-weight: 600; font-size: var(--text-small);">${E(t.area)}</span>
              </div>
              <div class="demo-summary-row">
                <span style="color: var(--color-text-muted); font-size: var(--text-small);">Estimated Amount</span>
                <span style="font-weight: 700; color: var(--color-accent);">${M(t.total)}</span>
              </div>
            </div>

            <label class="form-label" style="margin-bottom: var(--space-3);">Demo Payment Method</label>
            <div class="demo-methods" id="demo-methods">
              <div class="demo-method ${s==="upi"?"selected":""}" data-method="upi">
                <div class="demo-method-radio"></div>
                <span>UPI Payment</span>
              </div>
              <div class="demo-method ${s==="bank"?"selected":""}" data-method="bank">
                <div class="demo-method-radio"></div>
                <span>Bank Transfer</span>
              </div>
              <div class="demo-method ${s==="card"?"selected":""}" data-method="card">
                <div class="demo-method-radio"></div>
                <span>Credit / Debit Card</span>
              </div>
            </div>

            <div class="demo-actions">
              <button class="btn btn-primary btn-full" id="demo-confirm" ${s?"":"disabled"}>Confirm Demo Payment</button>
              <button class="btn btn-outline btn-full" id="demo-cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    `,document.body.classList.add("no-scroll"),document.querySelectorAll(".demo-method").forEach(d=>{d.addEventListener("click",()=>{s=d.dataset.method,i()})}),(n=document.getElementById("demo-confirm"))==null||n.addEventListener("click",()=>{s&&(a=!0,i())}),(l=document.getElementById("demo-cancel"))==null||l.addEventListener("click",()=>T(e)),(c=document.getElementById("demo-overlay"))==null||c.addEventListener("click",d=>{d.target.id==="demo-overlay"&&T(e)})}i()}function T(e){e.innerHTML="",document.body.classList.remove("no-scroll")}const ye={package:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',"shopping-cart":'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',boxes:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>',factory:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>'};function we(e){const{industries:t}=m;e.innerHTML=`
    <div class="industries-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Industries</span>
          <h2>Suitable for Modern Storage Requirements</h2>
          <p class="section-subtitle centered">Our warehouse space supports a wide range of business storage needs.</p>
        </div>

        <div class="industries-grid stagger-children">
          ${t.map(s=>`
            <div class="industry-card reveal">
              <div class="industry-icon">
                ${ye[s.icon]||""}
              </div>
              <h3>${s.title}</h3>
              <p>${s.description}</p>
            </div>
          `).join("")}
        </div>

        <div class="industries-note reveal">
          This facility is intended for warehousing and storage-related requirements.
        </div>
      </div>
    </div>
  `}function ke(e){const{brand:t}=m;e.innerHTML=`
    <div class="experience-section section">
      <div class="container">
        <div class="experience-inner">
          <div class="experience-year reveal-left">${t.foundedYear}</div>
          <div class="experience-content reveal-right">
            <span class="section-label">Our Legacy</span>
            <h2>Warehousing Expertise Since ${t.foundedYear}</h2>
            <p>
              Built on decades of warehousing-related experience and expertise. 
              Our understanding of commercial storage requirements comes from years 
              of working with businesses across different industries.
            </p>
            <div class="experience-badge">
              <div class="experience-badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span class="experience-badge-text">Established ${t.foundedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function xe(e){e.innerHTML=`
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
                <input type="text" class="form-input" id="setup-name" placeholder="e.g. Vikramaditya Singh" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-company">Company</label>
                <input type="text" class="form-input" id="setup-company" placeholder="e.g. Verma Supply Chain Solutions" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-location">Location</label>
                <input type="text" class="form-input" id="setup-location" placeholder="e.g. Gorakhpur, Uttar Pradesh" />
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-requirement">Requirement</label>
                <textarea class="form-input" id="setup-requirement" rows="3" placeholder="e.g. Need a 15,000 sq. ft. multi-bay warehouse with office setup and 24x7 transport connectivity..."></textarea>
              </div>
              <div class="form-group">
                <label class="form-label" for="setup-space">Approximate Space</label>
                <input type="text" class="form-input" id="setup-space" placeholder="e.g. 15,000 sq. ft." />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="setup-phone">Mobile (10 Digits)</label>
                  <input type="tel" class="form-input" id="setup-phone" placeholder="e.g. 9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-email">Email Address</label>
                  <input type="email" class="form-input" id="setup-email" placeholder="e.g. vikram.singh@example.com" />
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-full">Submit Requirement</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;const t=document.getElementById("setup-phone");t&&j(t);const s=document.getElementById("setup-form");s==null||s.addEventListener("submit",a=>{a.preventDefault();const i={name:document.getElementById("setup-name").value.trim(),company:document.getElementById("setup-company").value.trim(),phone:document.getElementById("setup-phone").value.replace(/\D/g,"").slice(0,10),email:document.getElementById("setup-email").value.trim(),requirement:document.getElementById("setup-requirement").value.trim()},r=S("setup",i);if(!r.isValid){Object.entries(r.errors).forEach(([l,c])=>{const d={name:"setup-name",phone:"setup-phone",email:"setup-email",requirement:"setup-requirement"},u=document.getElementById(d[l]);if(u){u.classList.add("error");const h=u.parentElement.querySelector(".form-error");h&&h.remove();const w=document.createElement("div");w.className="form-error",w.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${c}`,u.parentElement.appendChild(w)}});return}const n=document.getElementById("setup-form-container");n.innerHTML=`
      <div class="setup-form-success">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <h3>Requirement Submitted</h3>
        <p style="color: var(--color-text-muted);">Thank you, ${i.name}! Our team will review your warehouse setup requirement and contact you shortly.</p>
      </div>
    `})}function Ee(e){const{clients:t}=m;e.innerHTML=`
    <div class="clientele-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Clients</span>
          <h2>Trusted By Businesses Across Industries</h2>
          <p class="section-subtitle centered">We are proud to work with organisations that trust us with their warehousing needs.</p>
        </div>
        <div class="clientele-grid stagger-children">
          ${t.map(s=>`
            <div class="client-card reveal">
              <div class="client-icon">${s.name.charAt(0)}</div>
              <div class="client-name">${s.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function Be(e){var a;e.innerHTML=`
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
                <input type="text" class="form-input" id="inq-name" placeholder="e.g. Amit Patel" />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-company">Company Name</label>
                <input type="text" class="form-input" id="inq-company" placeholder="e.g. Patel Trading & Logistics (optional)" />
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div class="form-group">
                  <label class="form-label" for="inq-phone">Mobile (10 Digits)</label>
                  <input type="tel" class="form-input" id="inq-phone" placeholder="e.g. 9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="inq-email">Email Address</label>
                  <input type="email" class="form-input" id="inq-email" placeholder="e.g. amit.patel@example.com" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-space">Required Space</label>
                <input type="text" class="form-input" id="inq-space" placeholder="e.g. 5,000 sq. ft." />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-message">Message</label>
                <textarea class="form-input" id="inq-message" rows="3" placeholder="e.g. Looking for ready-to-move storage space for FMCG distribution near Gorakhnath Road."></textarea>
              </div>
              <div class="inquiry-form-actions">
                <button type="submit" class="btn btn-primary btn-lg">
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
  `;const t=document.getElementById("inq-phone");t&&j(t);const s=document.getElementById("inquiry-form");s==null||s.addEventListener("submit",i=>{i.preventDefault();const r={name:document.getElementById("inq-name").value.trim(),phone:document.getElementById("inq-phone").value.replace(/\D/g,"").slice(0,10),email:document.getElementById("inq-email").value.trim()},n=S("inquiry",r);if(!n.isValid){Object.entries(n.errors).forEach(([c,d])=>{const u={name:"inq-name",phone:"inq-phone",email:"inq-email"},h=document.getElementById(u[c]);if(h){h.classList.add("error");const w=h.parentElement.querySelector(".form-error");w&&w.remove();const B=document.createElement("div");B.className="form-error",B.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${d}`,h.parentElement.appendChild(B)}});return}const l=document.getElementById("inquiry-form-container");l.innerHTML=`
      <div class="inquiry-form-success">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <h3>Inquiry Sent Successfully</h3>
        <p style="color: rgba(255,255,255,0.7);">Thank you, ${r.name}! Our team will review your inquiry and get in touch with you shortly.</p>
      </div>
    `}),(a=document.getElementById("inq-whatsapp"))==null||a.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet.");return}})}function Le(e){var t;e.innerHTML=`
    <div class="whatsapp-float">
      <button class="whatsapp-btn" id="whatsapp-float-btn" aria-label="Chat on WhatsApp">
        <div class="whatsapp-pulse"></div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
      <div class="whatsapp-tooltip">Chat with us on WhatsApp</div>
    </div>
  `,(t=document.getElementById("whatsapp-float-btn"))==null||t.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet. Please update the contact settings in config.js.");return}})}function Me(e){const{brand:t,navigation:s,contact:a}=m,i=new Date().getFullYear();e.innerHTML=`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3><span>V</span>ardha Warehousing</h3>
            <p>${t.tagline}. Commercial warehouse space designed around your business requirements.</p>
          </div>

          <div class="footer-col">
            <h4>Navigate</h4>
            ${s.slice(0,4).map(r=>`<a href="${r.href}">${r.label}</a>`).join("")}
          </div>

          <div class="footer-col">
            <h4>Explore</h4>
            ${s.slice(4).map(r=>`<a href="${r.href}">${r.label}</a>`).join("")}
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${a.address}</span>
            </div>
            
            
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${i} ${t.name}. All rights reserved.</p>
          <p>Commercial Warehousing Solutions</p>
        </div>
      </div>
    </footer>
  `}function R(){Y(document.getElementById("site-header")),U(document.getElementById("home")),_(document.getElementById("introduction")),X(document.getElementById("warehouse")),Q(document.getElementById("facilities")),J(document.getElementById("gallery")),ne(document.getElementById("calculator")),le(document.getElementById("how-it-works")),we(document.getElementById("industries")),ke(document.getElementById("expertise")),xe(document.getElementById("warehouse-setup")),Ee(document.getElementById("clients")),Be(document.getElementById("contact")),Me(document.getElementById("site-footer")),Le(document.getElementById("whatsapp-button")),ce(document.getElementById("inquiry-wizard-modal")),me(document.getElementById("success-screen-modal")),fe(document.getElementById("demo-payment-modal")),requestAnimationFrame(()=>{F(),O()}),document.addEventListener("input",e=>{var t,s;if(e.target.classList.contains("error")){e.target.classList.remove("error");const a=(t=e.target.parentElement)==null?void 0:t.querySelector(".form-error");a&&a.remove()}if(e.target.type==="tel"||(s=e.target.id)!=null&&s.includes("phone")){const a=e.target.value.replace(/\D/g,"").slice(0,10);e.target.value!==a&&(e.target.value=a)}}),document.addEventListener("keypress",e=>{var t;(e.target.type==="tel"||(t=e.target.id)!=null&&t.includes("phone"))&&!/[0-9]/.test(e.key)&&e.key!=="Enter"&&e.preventDefault()}),console.log("%c✓ Vardha Warehousing loaded","color: #C8965A; font-weight: bold; font-size: 14px;")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",R):R();
