(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const w={brand:{name:"Vardha Warehousing",foundedYear:1987,mission:"A warehouse designed to support and improve the speed and growth of your business, not just store goods."},pricing:{unit:"sq. ft.",slabs:[{id:"slab-1",min:1e3,max:4999,rate:60,label:"1,000 – 4,999 sq. ft."},{id:"slab-2",min:5e3,max:42e3,rate:24,label:"5,000 – 42,000 sq. ft."}],boundaryValue:5e3},warehouse:{minArea:1e3,maxArea:42e3,heights:[{value:14,label:"14 ft",description:"Standard industrial ceiling height"},{value:22,label:"22 ft",description:"High-clearance ceiling for vertical racking"}],quickPresets:[1e3,2500,5e3,1e4]},property:{location:"Main Gorakhnath Temple Road, Bargadwa, Gorakhpur, Uttar Pradesh"},contact:{address:"Main Gorakhnath Temple Road, Bargadwa, Gorakhpur, Uttar Pradesh"},clients:[{name:"Delhi Public School (DPS)",tag:"Education Sector",subtitle:"Gorakhpur Campus",description:"Institutional goods, equipment & material warehousing partner.",logo:"/images/comp/dps-logo.webp",alt:"Delhi Public School Gorakhpur"},{name:"FCI Fertilizer (FCIL)",tag:"Agriculture & Fertilizer",subtitle:"Gorakhpur Unit",description:"Reliable high-capacity commercial storage and distribution partner.",logo:"/images/comp/fcil-logo.webp",alt:"FCI Fertilizer Gorakhpur"},{name:"Lord of the Drinks",tag:"Hospitality & F&B",subtitle:"Gorakhpur",description:"Commercial supply chain and dedicated storage infrastructure.",logo:"/images/comp/lord-of-the-drinks-logo.webp",alt:"Lord of the Drinks Gorakhpur"}],businessTypes:["Manufacturing","Logistics","E-commerce","Retail","FMCG","Automotive","Pharmaceuticals","Other"],contactMethods:[{value:"phone",label:"Phone Call"},{value:"whatsapp",label:"WhatsApp"},{value:"email",label:"Email"}],gallery:[{src:"/images/hero-warehouse-bg.webp",category:"Outside the Warehouse",label:"Commercial Building & Frontage",alt:"Vardha Warehousing — Main commercial warehouse exterior with loading dock bays",featured:!0},{src:"/images/warehouse-indian-dock.jpg",category:"Loading Area",label:"Truck Movement & Loading Bays",alt:"Active commercial truck loading bays at Vardha Warehousing, Gorakhpur"},{src:"/images/warehouse-interior-racks.jpg",category:"Inside the Warehouse",label:"Storage & Operational Areas",alt:"Organized high-capacity pallet racking and commercial storage interior"},{src:"/images/warehouse-fulfillment-scan.jpg",category:"Business Operations",label:"Packaging & Order Processing",alt:"E-commerce order packaging and barcode scanning operations"},{src:"/images/warehouse-night-loading.jpg",category:"24×7 Operations",label:"Round-The-Clock Night Dispatch",alt:"24x7 Night truck loading and unloading operations under floodlights"}],navigation:[{label:"Home",href:"#home"},{label:"Warehouse",href:"#warehouse"},{label:"24×7 Operations",href:"#facilities"},{label:"Connectivity",href:"#connectivity"},{label:"Space & Pricing",href:"#calculator"},{label:"Build a Warehouse",href:"#warehouse-setup"},{label:"Clients",href:"#clients"},{label:"Contact",href:"#contact"}]};function m(t){const e=document.querySelector(t);if(!e)return;const s=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"))||72,a=e.getBoundingClientRect().top+window.scrollY-s-16;window.scrollTo({top:a,behavior:"smooth"})}function G(){const t=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");if(!t.length)return;const e=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),e.unobserve(a.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});t.forEach(s=>e.observe(s))}function Y(){const t=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".nav-link");if(!t.length||!e.length)return;const s=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const n=i.target.getAttribute("id");e.forEach(o=>{o.classList.remove("active"),o.getAttribute("href")===`#${n}`&&o.classList.add("active")})}})},{threshold:.2,rootMargin:"-80px 0px -60% 0px"});t.forEach(a=>s.observe(a))}function U(t){const{brand:e,navigation:s}=w;t.innerHTML=`
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
          ${s.map(a=>`
            <a href="${a.href}" class="nav-link">${a.label}</a>
          `).join("")}
        </nav>

        <div class="header-actions">
          <a href="${R()}" target="_blank" rel="noopener" class="header-whatsapp-circle" aria-label="Contact on WhatsApp" title="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          <button class="btn-navbar-cta" id="header-find-space" aria-label="Find your warehouse space">
            Find Your Space
          </button>

          <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Professional Right-Side Sliding Drawer Navigation -->
      <div class="mobile-drawer-wrapper" id="mobile-drawer-wrapper" aria-hidden="true">
        <!-- Soft Backdrop Overlay (Click to close) -->
        <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>

        <!-- Drawer Content -->
        <nav class="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation">
          <div class="mobile-drawer-header">
            <a href="#home" class="header-brand mobile-drawer-brand" aria-label="${e.name} — Home">
              <div class="header-brand-badge">
                <span>V</span>
              </div>
              <div class="header-brand-details">
                <span class="header-brand-title">Vardha</span>
                <span class="header-brand-sub">WAREHOUSING</span>
              </div>
            </a>
            <button class="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close navigation menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="mobile-drawer-links">
            ${s.map(a=>`
              <a href="${a.href}" class="mobile-drawer-link">${a.label}</a>
            `).join("")}
          </div>

          <div class="mobile-drawer-footer">
            <button class="btn btn-primary btn-full mobile-find-space">
              Find Your Space
            </button>
            <a href="${R()}" target="_blank" rel="noopener" class="mobile-drawer-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  `,Z()}function R(){return"#"}function Z(){var l,d;const t=document.getElementById("main-header"),e=document.getElementById("mobile-menu-toggle"),s=document.getElementById("mobile-drawer-wrapper"),a=document.getElementById("mobile-drawer-overlay"),i=document.getElementById("mobile-drawer-close"),n=document.getElementById("header-find-space"),o=()=>{e==null||e.classList.add("open"),s==null||s.classList.add("open"),s==null||s.setAttribute("aria-hidden","false"),e==null||e.setAttribute("aria-expanded","true"),document.body.classList.add("no-scroll")},r=()=>{e==null||e.classList.remove("open"),s==null||s.classList.remove("open"),s==null||s.setAttribute("aria-hidden","true"),e==null||e.setAttribute("aria-expanded","false"),document.body.classList.remove("no-scroll")};window.addEventListener("scroll",()=>{window.scrollY>15?t.classList.add("scrolled"):t.classList.remove("scrolled")},{passive:!0}),e==null||e.addEventListener("click",()=>{s!=null&&s.classList.contains("open")?r():o()}),a==null||a.addEventListener("click",r),i==null||i.addEventListener("click",r),document.addEventListener("keydown",u=>{u.key==="Escape"&&(s!=null&&s.classList.contains("open"))&&r()}),s==null||s.querySelectorAll(".mobile-drawer-link").forEach(u=>{u.addEventListener("click",b=>{const v=u.getAttribute("href");r(),v&&v.startsWith("#")&&(b.preventDefault(),setTimeout(()=>{m(v)},150))})}),(l=s==null?void 0:s.querySelector(".mobile-drawer-brand"))==null||l.addEventListener("click",u=>{r(),u.preventDefault(),setTimeout(()=>{m("#home")},150)}),(d=s==null?void 0:s.querySelector(".mobile-find-space"))==null||d.addEventListener("click",()=>{r(),setTimeout(()=>{m("#calculator")},150)}),n==null||n.addEventListener("click",()=>{m("#calculator")}),document.querySelectorAll(".header-nav .nav-link").forEach(u=>{u.addEventListener("click",b=>{const v=u.getAttribute("href");v&&v.startsWith("#")&&(b.preventDefault(),m(v))})})}function K(t){var e,s;t.innerHTML=`
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
  `,(e=document.getElementById("hero-find-space"))==null||e.addEventListener("click",()=>{m("#calculator")}),(s=document.getElementById("hero-explore"))==null||s.addEventListener("click",()=>{m("#warehouse")})}function Q(t){var e,s;t.innerHTML=`
    <div class="introduction section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content reveal-left">
            <span class="section-label">Gorakhpur, Uttar Pradesh • Commercial Hub</span>
            <h2>Space That Fits Your Business Growth, Not Just Storage</h2>
            
            <!-- Prominent Space Range Highlight -->
            <div class="intro-space-highlight">
              <div class="intro-space-badge">AVAILABLE WAREHOUSE SPACE</div>
              <div class="intro-space-number">1,000 sq. ft. – 42,000 sq. ft.</div>
              <p class="intro-space-sub">Whether you need space for a growing business or a large commercial operation, choose the space that fits your requirement.</p>
            </div>

            <!-- 3-Step Visual Mini-Flow -->
            <div class="intro-process-flow">
              <div class="intro-process-step">
                <div class="intro-step-badge">STEP 1</div>
                <strong>Choose Your Space</strong>
                <span>1,000 to 42,000 sq. ft.</span>
              </div>
              <div class="intro-flow-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div class="intro-process-step">
                <div class="intro-step-badge">STEP 2</div>
                <strong>Tell Us Requirement</strong>
                <span>Storage & handling needs</span>
              </div>
              <div class="intro-flow-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div class="intro-process-step">
                <div class="intro-step-badge">STEP 3</div>
                <strong>Get an Estimate</strong>
                <span>Discuss & finalize space</span>
              </div>
            </div>

            <div class="intro-cta-row">
              <button class="btn btn-primary" id="intro-calculate-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
                Calculate Space Requirement
              </button>
              <button class="btn btn-outline" id="intro-build-btn" style="border-color: var(--color-border); color: var(--color-primary);">
                Planning to Build a Warehouse?
              </button>
            </div>
          </div>
          <div class="intro-image reveal-right">
            <img src="/images/warehouse-indian-dock.jpg" alt="Vardha Warehousing — Commercial truck loading bays in Gorakhpur" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  `,(e=document.getElementById("intro-calculate-btn"))==null||e.addEventListener("click",()=>{m("#calculator")}),(s=document.getElementById("intro-build-btn"))==null||s.addEventListener("click",()=>{m("#warehouse-setup")})}function _(t){const{property:e}=w;t.innerHTML=`
    <div class="property-section section" id="warehouse">
      <div class="container">
        <!-- Space & Property Overview -->
        <div class="section-header reveal">
          <span class="section-label">Commercial Property • Gorakhpur</span>
          <h2>Space That Fits Your Business</h2>
          <p class="section-subtitle centered">
            Whether you are an FMCG distributor, e-commerce brand, or industrial supplier, 
            choose warehouse space configured specifically for your inventory and logistics operations.
          </p>
        </div>

        <!-- Prominent Space Banner -->
        <div class="space-highlight-banner reveal">
          <div class="space-highlight-pill">
            <span class="space-badge">Available Space</span>
            <span class="space-range">1,000 sq. ft. — 42,000 sq. ft.</span>
          </div>
          <p class="space-highlight-desc">
            Configurable floor layouts with <strong>14 ft</strong> and <strong>22 ft</strong> high-clearance ceiling options.
          </p>
        </div>

        <div class="property-grid">
          <div class="property-cards stagger-children">
            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </div>
              <h4>1,000 to 42,000 sq. ft.</h4>
              <p>Flexible commercial warehouse capacity tailored to both growing businesses and large enterprise storage.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Main Road Gorakhpur</h4>
              <p>${e.location} — quick and effortless commercial access.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M12 3v4"/><path d="M12 11v2"/><path d="M12 17v4"/></svg>
              </div>
              <h4>36-Metre (118 ft) Wide Road</h4>
              <p>Wide front road allowing multi-axle heavy transport trucks to enter, park, and turn without delays.</p>
            </div>

            <div class="property-card reveal">
              <div class="property-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h4>24×7 Truck Loading</h4>
              <p>Non-stop loading and unloading day and night to keep supply chains and distribution moving.</p>
            </div>
          </div>

          <div class="property-image reveal-right">
            <img src="/images/warehouse-interior-racks.jpg" alt="Organized commercial storage interior with heavy-duty pallet racks in Gorakhpur" loading="lazy" />
          </div>
        </div>

        <!-- Dedicated Connectivity Network Section -->
        <div class="connectivity-wrapper section" id="connectivity" style="padding-top: var(--space-16);">
          <div class="section-header reveal">
            <span class="section-label">Strategic Location & Connectivity</span>
            <h2>Connected From Gorakhpur to Key Business Routes</h2>
            <p class="section-subtitle centered">
              Our Gorakhpur warehouse provides convenient connectivity toward major business and logistics destinations across Uttar Pradesh, Delhi NCR, Bihar and Nepal.
            </p>
          </div>

          <!-- Visual Hub-and-Route Network Diagram -->
          <div class="connectivity-diagram-container reveal">
            <div class="connectivity-network-header">
              <span class="network-badge">Direct Business Routes</span>
              <p>Move goods seamlessly from our central Gorakhpur base to regional commercial centers</p>
            </div>

            <div class="connectivity-hub-layout">
              <!-- Destination Column West / South-West -->
              <div class="route-nodes-col route-col-left">
                <div class="route-dest-card" data-route="lucknow">
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Lucknow</h4>
                  </div>
                  <p class="route-dest-desc">Key Uttar Pradesh Business Connection</p>
                  <div class="route-connector-line to-center-right"></div>
                </div>

                <div class="route-dest-card" data-route="prayagraj">
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Prayagraj</h4>
                  </div>
                  <p class="route-dest-desc">Important Regional Business Route</p>
                  <div class="route-connector-line to-center-right"></div>
                </div>
              </div>

              <!-- Center Hub: GORAKHPUR -->
              <div class="route-central-hub-wrapper">
                <div class="route-pulse-ring"></div>
                <div class="route-central-hub">
                  <div class="hub-location-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>WAREHOUSE LOCATION</span>
                  </div>
                  <h3 class="hub-main-city">GORAKHPUR</h3>
                  <p class="hub-address">Main Gorakhnath Temple Road, Bargadwa</p>
                  <div class="hub-base-pill">
                    <span class="hub-live-dot"></span>
                    <span>Your Central Logistics Base</span>
                  </div>
                </div>
              </div>

              <!-- Destination Column East / North / South -->
              <div class="route-nodes-col route-col-right">
                <div class="route-dest-card" data-route="delhi">
                  <div class="route-connector-line to-center-left"></div>
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Delhi NCR</h4>
                  </div>
                  <p class="route-dest-desc">National Business & Distribution Access</p>
                </div>

                <div class="route-dest-card" data-route="bihar">
                  <div class="route-connector-line to-center-left"></div>
                  <div class="route-dest-header">
                    <span class="route-dest-pin">●</span>
                    <h4>Bihar</h4>
                  </div>
                  <p class="route-dest-desc">Eastern Market Connectivity</p>
                </div>
              </div>
            </div>

            <!-- Bottom Row Routes: Varanasi & Nepal -->
            <div class="connectivity-bottom-routes">
              <div class="route-dest-card bottom-dest" data-route="varanasi">
                <div class="route-dest-header">
                  <span class="route-dest-pin">●</span>
                  <h4>Varanasi</h4>
                </div>
                <p class="route-dest-desc">Major Trade & Commercial Connection</p>
              </div>

              <div class="route-dest-card bottom-dest" data-route="nepal">
                <div class="route-dest-header">
                  <span class="route-dest-pin">●</span>
                  <h4>Nepal</h4>
                </div>
                <p class="route-dest-desc">Cross-Border Business Connectivity</p>
              </div>
            </div>
          </div>

          <!-- Business Benefit Panel -->
          <div class="connectivity-benefits-panel reveal">
            <div class="benefits-panel-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              <h3>Why This Location Helps Your Business</h3>
            </div>
            <div class="benefits-panel-grid">
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Easier movement of goods</strong>
                  <p>Wide approach roads ensure trucks enter, load, and depart without city bottlenecks.</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Connectivity toward major markets</strong>
                  <p>Direct highway linkage to UP commercial centers, Bihar trade borders, and Nepal.</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Convenient access for transport operations</strong>
                  <p>36-metre wide front road accommodates multi-axle commercial vehicles effortlessly.</p>
                </div>
              </div>
              <div class="benefit-item">
                <span class="benefit-check">✓</span>
                <div class="benefit-text">
                  <strong>Better support for business distribution</strong>
                  <p>Round-the-clock 24×7 operations allow goods to move whenever your schedule demands.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Major Transport Points Sub-Header & Cards -->
          <div class="transit-section-block reveal">
            <div class="transit-block-header">
              <span class="transit-label">Fast Regional Access</span>
              <h3>Quick Access to Major Transport Points</h3>
              <p>Close proximity to Gorakhpur's primary rail freight and air transit terminals.</p>
            </div>

            <div class="transit-hubs-grid">
              <div class="transit-hub-card">
                <div class="transit-hub-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>
                </div>
                <div class="transit-hub-info">
                  <div class="transit-badge-row">
                    <span class="transit-type-tag">🚆 Railway Connectivity</span>
                    <span class="transit-time-badge">Approx. 15 Minutes Away</span>
                  </div>
                  <h4>Gorakhpur Railway Junction</h4>
                  <p>Convenient access for businesses that require railway-based movement of goods.</p>
                </div>
              </div>

              <div class="transit-hub-card">
                <div class="transit-hub-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                </div>
                <div class="transit-hub-info">
                  <div class="transit-badge-row">
                    <span class="transit-type-tag">✈️ Airport Connectivity</span>
                    <span class="transit-time-badge">Approx. 30 Minutes Away</span>
                  </div>
                  <h4>Gorakhpur Airport</h4>
                  <p>Convenient access to airport connectivity for business travel and time-sensitive requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function J(t){var e,s;t.innerHTML=`
    <div class="video-section section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">See It for Yourself</span>
          <h2>Take a Real Look Inside the Warehouse</h2>
          <p class="section-subtitle centered">
            Watch a short video to see where the warehouse is located, what the facility looks like, and how it supports business operations.
          </p>
        </div>

        <div class="video-grid">
          <!-- Left: 9:16 Vertical Reel Placeholder -->
          <div class="video-frame-wrapper reveal-left">
            <div class="video-frame">
              <div class="video-placeholder">
                <div class="video-play-ring">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <p class="video-coming-label">Video Coming Soon</p>
                <span class="video-format-tag">Vertical Reel</span>
              </div>
            </div>
          </div>

          <!-- Right: Key Points + CTA -->
          <div class="video-info reveal-right">
            <h3 class="video-info-heading">What You'll See in This Video</h3>

            <div class="video-points">
              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>Where the Warehouse Is Located</strong>
                  <p>Main Gorakhnath Temple Road, Bargadwa — Gorakhpur</p>
                </div>
              </div>

              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="m17 2-5 5-5-5"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>A Real Look at the Warehouse</strong>
                  <p>See the building, loading bays, and commercial infrastructure</p>
                </div>
              </div>

              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>How Goods Can Move Through the Facility</strong>
                  <p>Loading, unloading, and dispatch — day and night</p>
                </div>
              </div>

              <div class="video-point">
                <div class="video-point-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                </div>
                <div class="video-point-text">
                  <strong>What Businesses Can Use the Space For</strong>
                  <p>Storage, distribution, e-commerce operations, and more</p>
                </div>
              </div>
            </div>

            <div class="video-cta-row">
              <button class="btn btn-primary" id="video-explore-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                Explore Warehouse Space
              </button>
              <button class="btn btn-outline" id="video-discuss-btn" style="border-color: var(--color-border); color: var(--color-primary);">
                Discuss Your Requirement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,(e=document.getElementById("video-explore-btn"))==null||e.addEventListener("click",()=>{m("#calculator")}),(s=document.getElementById("video-discuss-btn"))==null||s.addEventListener("click",()=>{m("#contact")})}const D=[{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',title:"Truck Arrives",desc:"Goods reach the warehouse for storage or further processing."},{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3-4 4-4-4"/><path d="M12 7v14"/><path d="M4 11h16"/></svg>',title:"Loading & Unloading",desc:"Goods can be moved in and out through warehouse operations."},{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="m17 2-5 5-5-5"/></svg>',title:"Storage",desc:"Space can be organized according to your business requirement."},{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/></svg>',title:"Order Processing",desc:"Orders can be prepared for smoother business operations."},{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',title:"Packaging",desc:"Products can be prepared and packed for movement."},{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" x2="17" y1="12" y2="12"/></svg>',title:"Barcode Scanning",desc:"Products can be identified and managed more systematically."},{icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',title:"Dispatch",desc:"Goods can move forward according to your business requirement."}];function X(t){t.innerHTML=`
    <div class="facilities-section section" id="facilities">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">How It Can Work</span>
          <h2>How Your Warehouse Operations Can Work</h2>
          <p class="section-subtitle centered">
            From the moment goods arrive to the moment they move forward — here's a simple look at the operational journey.
          </p>
        </div>

        <!-- Visual Operations Journey -->
        <div class="ops-journey reveal">
          <div class="ops-journey-track">
            ${D.map((e,s)=>`
              <div class="ops-step">
                <div class="ops-step-icon">${e.icon}</div>
                <div class="ops-step-num">${s+1}</div>
                <h4 class="ops-step-title">${e.title}</h4>
                <p class="ops-step-desc">${e.desc}</p>
                ${s<D.length-1?'<div class="ops-step-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></div>':""}
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Day & Night 24×7 Comparison -->
        <div class="daynight-section" style="margin-top: var(--space-12);">
          <div class="section-header reveal">
            <span class="section-label">Round-The-Clock</span>
            <h2>The Warehouse Keeps Moving — Day & Night</h2>
          </div>

          <div class="daynight-grid">
            <div class="daynight-card daynight-day reveal-left">
              <div class="daynight-image">
                <img src="/images/warehouse-indian-dock.jpg" alt="Daytime warehouse loading operations in Gorakhpur" loading="lazy" />
                <div class="daynight-badge daynight-badge-day">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  Day Operations
                </div>
              </div>
              <div class="daynight-content">
                <h3>Daytime Activity</h3>
                <ul class="daynight-list">
                  <li>Truck loading & unloading</li>
                  <li>Order processing & packaging</li>
                  <li>Warehouse management</li>
                  <li>Business coordination</li>
                </ul>
              </div>
            </div>

            <div class="daynight-card daynight-night reveal-right">
              <div class="daynight-image">
                <img src="/images/warehouse-night-loading.jpg" alt="Nighttime 24x7 warehouse operations under floodlights in Gorakhpur" loading="lazy" />
                <div class="daynight-badge daynight-badge-night">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  Night Operations
                </div>
              </div>
              <div class="daynight-content">
                <h3>Nighttime Activity</h3>
                <ul class="daynight-list">
                  <li>Continued loading & unloading</li>
                  <li>Night dispatch support</li>
                  <li>Operational readiness</li>
                  <li>Business movement continues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}let y=0;function ee(t){const{gallery:e}=w,s=e.find(a=>a.featured)||e[0];t.innerHTML=`
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
            <img src="${s.src}" alt="${s.alt}" id="gallery-main-img" />
            <div class="gallery-featured-badge" id="gallery-featured-badge">
              <span class="gallery-cat-tag">${s.category}</span>
              <span class="gallery-cat-label">${s.label}</span>
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
          ${e.map((a,i)=>`
            <div class="gallery-category-card ${i===0?"active":""}" data-index="${i}">
              <div class="gallery-card-thumb">
                <img src="${a.src}" alt="${a.alt}" loading="lazy" />
                <span class="gallery-thumb-tag">${a.category}</span>
              </div>
              <div class="gallery-card-caption">
                <strong>${a.label}</strong>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,te(e)}function te(t){const e=document.getElementById("gallery-main-img"),s=document.getElementById("gallery-thumbs"),a=document.getElementById("gallery-featured"),i=document.getElementById("gallery-featured-badge");s==null||s.addEventListener("click",o=>{const r=o.target.closest(".gallery-category-card");if(!r)return;const l=parseInt(r.dataset.index);W(l,t,e,s,i)}),a==null||a.addEventListener("click",()=>{se(y,t)});let n=0;a==null||a.addEventListener("touchstart",o=>{n=o.touches[0].clientX},{passive:!0}),a==null||a.addEventListener("touchend",o=>{const r=n-o.changedTouches[0].clientX;if(Math.abs(r)>50){const l=r>0?(y+1)%t.length:(y-1+t.length)%t.length;W(l,t,e,s,i)}},{passive:!0})}function W(t,e,s,a,i){y=t,s.style.opacity="0",setTimeout(()=>{s.src=e[t].src,s.alt=e[t].alt,s.style.opacity="1",i&&(i.innerHTML=`
        <span class="gallery-cat-tag">${e[t].category}</span>
        <span class="gallery-cat-label">${e[t].label}</span>
      `)},200),a.querySelectorAll(".gallery-category-card").forEach((n,o)=>{n.classList.toggle("active",o===t)})}function se(t,e){const s=document.getElementById("gallery-lightbox");y=t,s.innerHTML=`
    <div class="lightbox open" id="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close gallery">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="lightbox-img-wrapper">
          <img src="${e[t].src}" alt="${e[t].alt}" id="lightbox-img" />
          <div class="lightbox-caption">
            <span class="gallery-cat-tag">${e[t].category}</span>
            <strong>${e[t].label}</strong>
          </div>
        </div>
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
        <span class="lightbox-counter" id="lightbox-counter">${t+1} / ${e.length}</span>
      </div>
    </div>
  `,document.body.classList.add("no-scroll");const a=document.getElementById("lightbox-overlay"),i=a.querySelector(".lightbox-close"),n=a.querySelector(".lightbox-prev"),o=a.querySelector(".lightbox-next"),r=()=>{s.innerHTML="",document.body.classList.remove("no-scroll")},l=d=>{y=(y+d+e.length)%e.length;const u=document.getElementById("lightbox-img"),b=document.getElementById("lightbox-counter"),v=a.querySelector(".lightbox-caption");u.src=e[y].src,u.alt=e[y].alt,b.textContent=`${y+1} / ${e.length}`,v&&(v.innerHTML=`
        <span class="gallery-cat-tag">${e[y].category}</span>
        <strong>${e[y].label}</strong>
      `)};i.addEventListener("click",r),a.addEventListener("click",d=>{d.target===a&&r()}),n.addEventListener("click",d=>{d.stopPropagation(),l(-1)}),o.addEventListener("click",d=>{d.stopPropagation(),l(1)}),document.addEventListener("keydown",function d(u){u.key==="Escape"&&(r(),document.removeEventListener("keydown",d)),u.key==="ArrowLeft"&&l(-1),u.key==="ArrowRight"&&l(1)})}function ae(t){const{pricing:e,warehouse:s}=w,a=parseFloat(t);if(!t||isNaN(a)||a<=0)return{area:0,rate:0,total:0,slab:null,isValid:!1,validationMessage:"",showValidation:!1};if(a<s.minArea)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:`The displayed pricing currently starts from ${s.minArea.toLocaleString("en-IN")} ${e.unit}. Please contact us for smaller requirements.`};if(a>s.maxArea)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:"Your requirement is outside the currently displayed pricing range. Please send us your requirement for a custom quotation."};const i=ie(a,e);if(!i)return{area:a,rate:0,total:0,slab:null,isValid:!1,showValidation:!0,validationMessage:"Unable to calculate pricing for this area. Please contact us."};const n=a*i.rate;return{area:a,rate:i.rate,total:n,slab:i,isValid:!0,showValidation:!1,validationMessage:""}}function ie(t,e){const{slabs:s,boundaryValue:a}=e;for(const i of s){let n=i.min,o=i.max;if(t===a&&i.min===a||t>=n&&t<=o)return i}return null}function ne(t,e){const s=parseFloat(t),a=parseFloat(e);return!t||!e||isNaN(s)||isNaN(a)||s<=0||a<=0?0:Math.round(s*a)}function C(t){if(!t||isNaN(t))return"₹0";const s=Math.round(t).toString();if(s.length<=3)return"₹"+s;let a="";const i=s.substring(s.length-3),n=s.substring(0,s.length-3);return n.length>0&&(a=n.replace(/\B(?=(\d{2})+(?!\d))/g,","),a+=","),a+=i,"₹"+a}function B(t){return!t||isNaN(t)?"0 sq. ft.":`${Math.round(t).toLocaleString("en-IN")} sq. ft.`}function P(t){return!t||isNaN(t)?"":`₹${t} / sq. ft.`}function re(){const t=new Date,e=t.getFullYear().toString()+(t.getMonth()+1).toString().padStart(2,"0")+t.getDate().toString().padStart(2,"0"),s=Math.random().toString(36).substring(2,6).toUpperCase();return`VW-${e}-${s}`}const f={area:0,height:null,rate:0,total:0,isValid:!1};function oe(t){const{warehouse:e}=w;t.innerHTML=`
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
                ${e.quickPresets.map(s=>`
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
                ${e.heights.map(s=>`
                  <button class="calc-height-option" data-height="${s.value}">${s.label}</button>
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
  `,le()}function le(){var v,x;const t=document.getElementById("calc-area-direct"),e=document.getElementById("calc-width"),s=document.getElementById("calc-length"),a=document.getElementById("tab-direct"),i=document.getElementById("tab-dimensions"),n=document.getElementById("content-direct"),o=document.getElementById("content-dimensions"),r=document.getElementById("calc-presets"),l=document.getElementById("calc-height-options");a==null||a.addEventListener("click",()=>d("direct")),i==null||i.addEventListener("click",()=>d("dimensions"));function d(p){a.classList.toggle("active",p==="direct"),i.classList.toggle("active",p==="dimensions"),n.classList.toggle("active",p==="direct"),o.classList.toggle("active",p==="dimensions")}t==null||t.addEventListener("input",()=>{const p=parseFloat(t.value);u(p),M(p)}),r==null||r.addEventListener("click",p=>{const h=p.target.closest(".calc-preset");if(!h)return;const k=parseInt(h.dataset.value);t.value=k,u(k),M(k)});function u(p){r.querySelectorAll(".calc-preset").forEach(h=>{h.classList.toggle("active",parseInt(h.dataset.value)===p)})}e==null||e.addEventListener("input",b),s==null||s.addEventListener("input",b);function b(){const p=parseFloat(e.value),h=parseFloat(s.value),k=ne(p,h),L=document.getElementById("calc-dim-result"),F=document.getElementById("calc-dim-result-value");k>0?(L.style.display="block",F.textContent=B(k),M(k)):(L.style.display="none",M(0))}l==null||l.addEventListener("click",p=>{const h=p.target.closest(".calc-height-option");if(!h)return;l.querySelectorAll(".calc-height-option").forEach(L=>L.classList.remove("active")),h.classList.add("active");const k=h.dataset.height;f.height=k==="not-sure"?"Not Sure":parseInt(k)}),(v=document.getElementById("calc-continue-btn"))==null||v.addEventListener("click",()=>{f.isValid&&window.dispatchEvent(new CustomEvent("open-inquiry-wizard"))}),(x=document.getElementById("calc-whatsapp-btn"))==null||x.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet. Please update the contact settings.");return}})}function M(t){const e=ae(t),s=document.getElementById("calc-summary"),a=document.getElementById("summary-area"),i=document.getElementById("summary-rate"),n=document.getElementById("summary-price"),o=document.getElementById("calc-continue-btn"),r=document.getElementById("calc-validation");f.area=e.area,f.rate=e.rate,f.total=e.total,f.isValid=e.isValid,window.dispatchEvent(new CustomEvent("calculator-update",{detail:f})),e.isValid?(s.classList.remove("empty"),a.textContent=B(e.area),i.textContent=P(e.rate),n.textContent=C(e.total),o.disabled=!1,r.style.display="none"):(e.showValidation?(r.innerHTML=`
        <div class="calc-validation">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <p>${e.validationMessage}</p>
        </div>
      `,r.style.display="block"):r.style.display="none",s.classList.add("empty"),a.textContent=e.area>0?B(e.area):"— sq. ft.",i.textContent="—",n.textContent="—",o.disabled=!0)}const H=[{num:"1",userQuote:'"I need warehouse space"',title:"Choose Your Space",desc:"Pick your required area from 1,000 to 42,000 sq. ft. and preferred ceiling height.",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'},{num:"2",userQuote:'"How much space do I need?"',title:"Understand Requirement",desc:"Calculate space fit or get an instant rate estimate based on standard slabs.",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/></svg>'},{num:"3",userQuote:'"Tell us about your business"',title:"Share Your Details",desc:"Submit your requirement or reach out directly on WhatsApp with project details.",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'},{num:"4",userQuote:'"Our team connects with you"',title:"Discuss Next Steps",desc:"Our local Gorakhpur team verifies space availability and guides your setup.",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>'}];function ce(t){t.innerHTML=`
    <div class="how-it-works section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Simple 4-Step Journey</span>
          <h2>How It Works</h2>
          <p class="section-subtitle centered">From discovering your required space to finalizing your setup — clear, transparent, and hassle-free.</p>
        </div>

        <div class="hiw-progression-track stagger-children">
          ${H.map((e,s)=>`
            <div class="hiw-step-card reveal">
              <div class="hiw-card-top">
                <div class="hiw-step-num">${e.num}</div>
                <div class="hiw-step-icon">${e.icon}</div>
              </div>
              <div class="hiw-user-quote">${e.userQuote}</div>
              <h3 class="hiw-step-title">${e.title}</h3>
              <p class="hiw-step-desc">${e.desc}</p>
              ${s<H.length-1?`
                <div class="hiw-progression-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              `:""}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function I(t){if(!t||t.trim()==="")return"Please enter your email address.";const e=t.trim();return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)?"":"Please enter a valid email address."}function z(t){if(!t||t.trim()==="")return"Please enter a valid 10-digit mobile number.";const e=t.replace(/\D/g,"");return e.length!==10||!/^[6-9]\d{9}$/.test(e)?"Please enter a valid 10-digit mobile number.":""}function q(t,e){const s={};switch(t){case"business":{(!e.businessName||e.businessName.trim()==="")&&(s.businessName="Please enter your business or company name."),(!e.businessType||e.businessType.trim()==="")&&(s.businessType="Please select your business type.");break}case"contact":{(!e.fullName||e.fullName.trim()==="")&&(s.fullName="Please enter your full name.");const a=z(e.phone);a&&(s.phone=a);const i=I(e.email);i&&(s.email=i);break}case"setup":{(!e.name||e.name.trim()==="")&&(s.name="Please enter your full name.");const a=z(e.phone);a&&(s.phone=a);const i=I(e.email);i&&(s.email=i),(!e.location||e.location.trim()==="")&&(s.location="Please enter your project location."),(!e.hasLand||e.hasLand.trim()==="")&&(s.hasLand="Please select whether you have land.");break}case"inquiry":{(!e.name||e.name.trim()==="")&&(s.name="Please enter your full name.");const a=z(e.phone);a&&(s.phone=a);const i=I(e.email);i&&(s.email=i);break}}return{isValid:Object.keys(s).length===0,errors:s}}function N(t){if(!t)return;t.setAttribute("inputmode","numeric"),t.setAttribute("maxlength","10"),t.setAttribute("pattern","[0-9]{10}");const e=s=>{const a=s.target.value.replace(/\D/g,"").slice(0,10);s.target.value!==a&&(s.target.value=a)};t.removeEventListener("input",e),t.addEventListener("input",e),t.addEventListener("keypress",s=>{!/[0-9]/.test(s.key)&&s.key!=="Enter"&&s.preventDefault()})}let g=0;const E=["space","business","contact","review"];let c={};function de(t){window.addEventListener("open-inquiry-wizard",()=>ue(t))}function ue(t){g=0,c={area:f.area,height:f.height,rate:f.rate,total:f.total,businessName:"",businessType:"",storageDescription:"",fullName:"",phone:"",email:"",contactMethod:"phone"},T(t),document.body.classList.add("no-scroll")}function S(t){t.innerHTML="",document.body.classList.remove("no-scroll")}function T(t){var s,a,i,n,o,r;const e=["Space","Business","Contact","Review"];if(t.innerHTML=`
    <div class="wizard-overlay open" id="wizard-overlay">
      <div class="wizard-modal">
        <div class="wizard-header">
          <h3>${e[g]} Details</h3>
          <button class="wizard-close" id="wizard-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="wizard-progress">
          ${E.map((l,d)=>`
            <div class="wizard-progress-step ${d<g?"completed":""} ${d===g?"active":""}">
              <span class="wizard-progress-dot">${d<g?"✓":d+1}</span>
              <span>${e[d]}</span>
            </div>
            ${d<E.length-1?'<div class="wizard-progress-line"></div>':""}
          `).join("")}
        </div>

        <div class="wizard-body">
          ${pe()}
        </div>

        <div class="wizard-footer">
          ${g>0?'<button class="btn btn-ghost" id="wizard-back">← Back</button>':"<div></div>"}
          ${g<E.length-1?'<button class="btn btn-primary" id="wizard-next">Continue →</button>':'<button class="btn btn-primary btn-lg" id="wizard-submit">Submit Booking Request</button>'}
        </div>
      </div>
    </div>
  `,E[g]==="contact"){const l=document.getElementById("wiz-phone");l&&N(l)}(s=document.getElementById("wizard-close"))==null||s.addEventListener("click",()=>S(t)),(a=document.getElementById("wizard-overlay"))==null||a.addEventListener("click",l=>{l.target.id==="wizard-overlay"&&S(t)}),(i=document.getElementById("wizard-back"))==null||i.addEventListener("click",()=>{g--,T(t)}),(n=document.getElementById("wizard-next"))==null||n.addEventListener("click",()=>{he()&&(j(),g++,T(t))}),(o=document.getElementById("wizard-submit"))==null||o.addEventListener("click",()=>{const l=document.getElementById("wizard-consent");if(!(l!=null&&l.checked)){l.parentElement.style.outline="2px solid var(--color-error)",l.parentElement.style.borderRadius="8px",l.parentElement.style.padding="8px";return}me(t)}),(r=document.getElementById("wizard-edit-req"))==null||r.addEventListener("click",()=>{S(t),m("#calculator")})}function pe(){switch(E[g]){case"space":return`
        <div class="wizard-space-summary">
          <div class="wizard-space-grid">
            <div class="wizard-space-item">
              <div class="wizard-space-label">Required Warehouse Space</div>
              <div class="wizard-space-value">${B(c.area)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Preferred Warehouse Height</div>
              <div class="wizard-space-value">${c.height?c.height==="Not Sure"?"Not Sure":c.height+" ft":"Not selected"}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Estimated Rate</div>
              <div class="wizard-space-value">${P(c.rate)}</div>
            </div>
            <div class="wizard-space-item">
              <div class="wizard-space-label">Estimated Price</div>
              <div class="wizard-space-value accent">${C(c.total)}</div>
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
          <input type="text" class="form-input" id="wiz-business-name" placeholder="Sharma Logistics Pvt. Ltd." value="${c.businessName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-business-type">Business Type</label>
          <select class="form-select" id="wiz-business-type">
            <option value="">Select your business type</option>
            ${w.businessTypes.map(t=>`<option value="${t}" ${c.businessType===t?"selected":""}>${t}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-storage">Storage Requirement</label>
          <textarea class="form-input" id="wiz-storage" rows="3" placeholder="e.g. I need space for storing FMCG products and palletized inventory.">${c.storageDescription}</textarea>
          <span class="form-helper">Briefly describe what you need to store.</span>
        </div>
      `;case"contact":return`
        <div class="form-group">
          <label class="form-label" for="wiz-fullname">Full Name</label>
          <input type="text" class="form-input" id="wiz-fullname" placeholder="Rahul Sharma" value="${c.fullName}" />
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-phone">Phone Number</label>
          <input type="tel" class="form-input" id="wiz-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" value="${c.phone}" />
          <span class="form-helper">Enter 10-digit mobile number.</span>
        </div>
        <div class="form-group">
          <label class="form-label" for="wiz-email">Email Address</label>
          <input type="email" class="form-input" id="wiz-email" placeholder="rahul.sharma@example.com" value="${c.email}" />
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Contact Method</label>
          <div class="calc-height-options" style="margin-top: var(--space-2);">
            ${w.contactMethods.map(t=>`
              <button class="calc-height-option ${c.contactMethod===t.value?"active":""}" data-method="${t.value}" style="min-width: 90px;">${t.label}</button>
            `).join("")}
          </div>
        </div>
      `;case"review":return`
        <div class="wizard-review-group">
          <h4>Your Warehouse Requirement</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Required Warehouse Space</span>
              <span class="wizard-review-value">${B(c.area)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Warehouse Height</span>
              <span class="wizard-review-value">${c.height?c.height==="Not Sure"?"Not Sure":c.height+" ft":"Not selected"}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Estimated Rate</span>
              <span class="wizard-review-value">${P(c.rate)}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Estimated Price</span>
              <span class="wizard-review-value highlight">${C(c.total)}</span>
            </div>
          </div>
        </div>
        <div class="wizard-review-group">
          <h4>Business Details</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Business / Company Name</span>
              <span class="wizard-review-value">${c.businessName||"—"}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Business Type</span>
              <span class="wizard-review-value">${c.businessType||"—"}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Storage Requirement</span>
              <span class="wizard-review-value">${c.storageDescription||"—"}</span>
            </div>
          </div>
        </div>
        <div class="wizard-review-group">
          <h4>Contact Details</h4>
          <div class="wizard-review-card">
            <div class="wizard-review-row">
              <span class="wizard-review-label">Full Name</span>
              <span class="wizard-review-value">${c.fullName}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Phone Number</span>
              <span class="wizard-review-value">${c.phone}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Email Address</span>
              <span class="wizard-review-value">${c.email}</span>
            </div>
            <div class="wizard-review-row">
              <span class="wizard-review-label">Preferred Contact Method</span>
              <span class="wizard-review-value">${ve(c.contactMethod)}</span>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="wizard-consent" />
          <label for="wizard-consent">I understand that this submission is a warehouse inquiry/request and final availability and terms will be confirmed by Vardha Warehousing.</label>
        </div>
      `}}function ve(t){const e=w.contactMethods.find(s=>s.value===t);return e?e.label:t}function j(){var t,e,s,a,i,n;switch(E[g]){case"business":c.businessName=((t=document.getElementById("wiz-business-name"))==null?void 0:t.value.trim())||"",c.businessType=((e=document.getElementById("wiz-business-type"))==null?void 0:e.value)||"",c.storageDescription=((s=document.getElementById("wiz-storage"))==null?void 0:s.value.trim())||"";break;case"contact":c.fullName=((a=document.getElementById("wiz-fullname"))==null?void 0:a.value.trim())||"",c.phone=((i=document.getElementById("wiz-phone"))==null?void 0:i.value.replace(/\D/g,"").slice(0,10))||"",c.email=((n=document.getElementById("wiz-email"))==null?void 0:n.value.trim())||"";const o=document.querySelector("[data-method].active");o&&(c.contactMethod=o.dataset.method);break}}function he(t){switch(E[g]){case"space":return!0;case"business":{j();const e=q("business",c);return e.isValid||V(e.errors),e.isValid}case"contact":{j();const e=q("contact",c);return e.isValid||V(e.errors),e.isValid}default:return!0}}function V(t){document.querySelectorAll(".form-error").forEach(e=>e.remove()),document.querySelectorAll(".form-input.error, .form-select.error").forEach(e=>e.classList.remove("error")),Object.entries(t).forEach(([e,s])=>{const a={businessName:"wiz-business-name",businessType:"wiz-business-type",fullName:"wiz-fullname",phone:"wiz-phone",email:"wiz-email"},i=document.getElementById(a[e]);if(i){i.classList.add("error");const n=document.createElement("div");n.className="form-error",n.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${s}`,i.parentElement.appendChild(n)}})}function me(t){const e=document.getElementById("wizard-submit");e&&(e.disabled=!0,e.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      Submitting your request...
    `),setTimeout(()=>{const s=re();c.referenceNumber=s,S(t),window.dispatchEvent(new CustomEvent("show-success",{detail:c}))},600)}const ge=new MutationObserver(()=>{document.querySelectorAll("[data-method]").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("[data-method]").forEach(e=>e.classList.remove("active")),t.classList.add("active"),c.contactMethod=t.dataset.method})})});ge.observe(document.body,{childList:!0,subtree:!0});function be(t){window.addEventListener("show-success",e=>{const s=e.detail;ye(t,s)})}function ye(t,e){var s,a,i,n;t.innerHTML=`
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
            <span class="success-summary-value">${B(e.area)}</span>
          </div>
          <div class="success-summary-row">
            <span class="success-summary-label">Estimated Price</span>
            <span class="success-summary-value highlight">${C(e.total)}</span>
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
  `,document.body.classList.add("no-scroll"),(s=document.getElementById("success-explore"))==null||s.addEventListener("click",()=>{$(t),m("#warehouse")}),(a=document.getElementById("success-whatsapp"))==null||a.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet.");return}}),(i=document.getElementById("success-demo-payment"))==null||i.addEventListener("click",()=>{$(t),window.dispatchEvent(new CustomEvent("open-demo-payment",{detail:e}))}),(n=document.getElementById("success-overlay"))==null||n.addEventListener("click",o=>{o.target.id==="success-overlay"&&$(t)})}function $(t){t.innerHTML="",document.body.classList.remove("no-scroll")}function fe(t){window.addEventListener("open-demo-payment",e=>{const s=e.detail;we(t,s)})}function we(t,e){let s=null,a=!1;function i(){var n,o,r,l;if(a){t.innerHTML=`
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
      `,(n=document.getElementById("demo-done"))==null||n.addEventListener("click",()=>A(t));return}t.innerHTML=`
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
                <span style="font-weight: 600; font-size: var(--text-small);">${B(e.area)}</span>
              </div>
              <div class="demo-summary-row">
                <span style="color: var(--color-text-muted); font-size: var(--text-small);">Estimated Amount</span>
                <span style="font-weight: 700; color: var(--color-accent);">${C(e.total)}</span>
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
    `,document.body.classList.add("no-scroll"),document.querySelectorAll(".demo-method").forEach(d=>{d.addEventListener("click",()=>{s=d.dataset.method,i()})}),(o=document.getElementById("demo-confirm"))==null||o.addEventListener("click",()=>{s&&(a=!0,i())}),(r=document.getElementById("demo-cancel"))==null||r.addEventListener("click",()=>A(t)),(l=document.getElementById("demo-overlay"))==null||l.addEventListener("click",d=>{d.target.id==="demo-overlay"&&A(t)})}i()}function A(t){t.innerHTML="",document.body.classList.remove("no-scroll")}const ke=[{title:"FMCG & Consumer Goods",suitableFor:"Packaged foods, household goods & beverages",desc:"Rapid movement with wide loading docks, clean pest-controlled floors, and easy regional highway dispatch.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',tag:"FMCG Ready"},{title:"E-Commerce & Online Retail",suitableFor:"Parcels, order staging & regional fulfillment",desc:"Organized floor layout for barcode-assisted receiving, systematic sorting, and speedy last-mile dispatch.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',tag:"Fulfillment Ready"},{title:"Retail & Wholesale Inventory",suitableFor:"Bulk stock, cartons & distributor storage",desc:"High-capacity vertical space (up to 22 ft height) to store buffer stock for retail chains across Eastern UP.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>',tag:"High Capacity"},{title:"Industrial & Hardware Supplies",suitableFor:"Hardware, electricals, raw materials & equipment",desc:"Strong industrial flooring and 36m wide approach road accommodating multi-axle heavy transport vehicles.",icon:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',tag:"Heavy Duty"}];function xe(t){t.innerHTML=`
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
          ${ke.map(e=>`
            <div class="industry-visual-card reveal">
              <div class="industry-visual-top">
                <div class="industry-visual-icon">
                  ${e.icon}
                </div>
                <span class="industry-visual-tag">${e.tag}</span>
              </div>
              <h3 class="industry-visual-title">${e.title}</h3>
              <div class="industry-suitable-box">
                <span class="suitable-label">Ideal For:</span>
                <p class="suitable-text">${e.suitableFor}</p>
              </div>
              <p class="industry-visual-desc">${e.desc}</p>
            </div>
          `).join("")}
        </div>

        <div class="industries-note reveal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Have a unique product or custom storage requirement? Our space can be tailored to your operational layout.
        </div>
      </div>
    </div>
  `}function Ee(t){const{brand:e}=w;t.innerHTML=`
    <div class="experience-section section" id="expertise">
      <div class="container">
        <div class="experience-inner">
          <!-- Left: Big Year Visual -->
          <div class="experience-year-wrapper reveal-left">
            <div class="experience-year">${e.foundedYear}</div>
            <span class="experience-year-tag">OVER 35+ YEARS OF COMMERCIAL EXPERIENCE</span>
          </div>

          <!-- Right: Narrative + 3-Point Timeline -->
          <div class="experience-content reveal-right">
            <span class="section-label" style="color: var(--color-accent);">Decades of Trust</span>
            <h2>Warehousing Expertise Since ${e.foundedYear}</h2>
            <p class="experience-lead">
              Your warehouse is the backbone of your supply chain. We provide the infrastructure, road connectivity, and 24×7 operations needed to keep your business moving forward.
            </p>

            <!-- 3-Point Visual Timeline -->
            <div class="experience-timeline">
              <div class="timeline-item">
                <div class="timeline-marker">
                  <span class="timeline-dot"></span>
                  <span class="timeline-year">1987</span>
                </div>
                <div class="timeline-body">
                  <strong>Roots in Commercial Trading</strong>
                  <p>Decades of understanding regional business, bulk inventory, and commercial movement in Eastern UP.</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">
                  <span class="timeline-dot"></span>
                  <span class="timeline-year">Evolution</span>
                </div>
                <div class="timeline-body">
                  <strong>Infrastructure Expansion</strong>
                  <p>Development of large-span industrial spaces with wide road access and heavy vehicle docks.</p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker">
                  <span class="timeline-dot active"></span>
                  <span class="timeline-year">Today</span>
                </div>
                <div class="timeline-body">
                  <strong>42,000 Sq. Ft. Logistics Hub</strong>
                  <p>Prime Gorakhpur facility with 24×7 dispatch, e-commerce support, and direct multi-state connectivity.</p>
                </div>
              </div>
            </div>

            <div class="experience-badge">
              <div class="experience-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span class="experience-badge-text">Trusted by Leading Regional & National Brands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Be(t){var i;const e="#contact";t.innerHTML=`
    <div class="setup-section section" id="warehouse-setup">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Warehouse Construction & Development</span>
          <h2>Planning Your Own Warehouse?</h2>
          <p class="section-subtitle centered">
            If you have a business requirement and are planning to develop your own warehouse, 
            share your basic project details with us. Our team can understand your requirement and discuss the next steps with you.
          </p>
        </div>

        <!-- Dual Journey Visual Selector -->
        <div class="setup-dual-journey reveal">
          <div class="journey-card journey-ready">
            <div class="journey-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <div class="journey-card-text">
              <span class="journey-tag">OPTION 1: READY SPACE</span>
              <h4>Need Warehouse Space?</h4>
              <p>Rent 1,000 to 42,000 sq. ft. ready space in our Gorakhpur facility with 24×7 operations.</p>
            </div>
            <button type="button" class="btn btn-outline btn-sm journey-btn" id="journey-ready-btn">
              Explore Space & Rates →
            </button>
          </div>

          <div class="journey-card journey-custom active">
            <div class="journey-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
            </div>
            <div class="journey-card-text">
              <span class="journey-tag active">OPTION 2: BUILD A WAREHOUSE</span>
              <h4>Planning Your Own Project?</h4>
              <p>Discuss land assessment, layout design, and commercial construction planning.</p>
            </div>
            <span class="journey-active-badge">Fill Project Details Below ↓</span>
          </div>
        </div>

        <div class="setup-grid">
          <!-- Left: Process & Consultation Details -->
          <div class="setup-content reveal-left">
            <div class="setup-intro-box">
              <h3>Custom Warehouse Requirement Discussion</h3>
              <p>
                From land assessment in Gorakhpur and Eastern UP to planning space dimensions, 
                our team provides experienced consultation to help you plan your commercial warehouse facility.
              </p>
            </div>

            <div class="setup-steps-list">
              <div class="setup-step-card">
                <div class="setup-step-num">1</div>
                <div class="setup-step-body">
                  <h4>Share Your Requirement</h4>
                  <p>Tell us about your location, land availability, and proposed warehouse size.</p>
                </div>
              </div>

              <div class="setup-step-card">
                <div class="setup-step-num">2</div>
                <div class="setup-step-body">
                  <h4>Discuss Your Project</h4>
                  <p>Our experienced team reviews your details and connects with you for a consultation.</p>
                </div>
              </div>

              <div class="setup-step-card">
                <div class="setup-step-num">3</div>
                <div class="setup-step-body">
                  <h4>Plan the Next Steps</h4>
                  <p>Discuss project feasibility, layout options, and suitable commercial execution.</p>
                </div>
              </div>
            </div>

            <!-- WhatsApp Quick CTA -->
            <div class="setup-whatsapp-banner">
              <div class="setup-whatsapp-text">
                <strong>Prefer chatting directly?</strong>
                <p>Discuss your warehouse development project with us on WhatsApp.</p>
              </div>
              <a href="${e}" target="_blank" rel="noopener" class="btn btn-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discuss on WhatsApp
              </a>
            </div>
          </div>

          <!-- Right: Dedicated Construction Inquiry Form -->
          <div class="setup-form-card reveal-right" id="setup-form-container">
            <div class="setup-form-header">
              <h3>Tell Us About Your Warehouse Project</h3>
              <p>Share a few details and we will understand your requirement better.</p>
            </div>

            <form id="setup-form" novalidate>
              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-name">Full Name <span class="req">*</span></label>
                  <input type="text" class="form-input" id="setup-name" placeholder="Rahul Sharma" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-company">Business / Company Name</label>
                  <input type="text" class="form-input" id="setup-company" placeholder="Sharma Logistics Pvt. Ltd." />
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-phone">Phone Number <span class="req">*</span></label>
                  <input 
                    type="tel" 
                    class="form-input" 
                    id="setup-phone" 
                    placeholder="9876543210" 
                    maxlength="10" 
                    inputmode="numeric" 
                    pattern="[0-9]{10}"
                    required 
                  />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-email">Email Address <span class="req">*</span></label>
                  <input type="email" class="form-input" id="setup-email" placeholder="rahul.sharma@example.com" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-location">Project Location (City / District / State) <span class="req">*</span></label>
                <input type="text" class="form-input" id="setup-location" placeholder="Gorakhpur, Uttar Pradesh" required />
              </div>

              <div class="form-group" id="group-has-land">
                <label class="form-label">Do You Have Land? <span class="req">*</span></label>
                <div class="radio-options-row">
                  <label class="radio-pill">
                    <input type="radio" name="setup-has-land" value="Yes" />
                    <span>Yes</span>
                  </label>
                  <label class="radio-pill">
                    <input type="radio" name="setup-has-land" value="No" />
                    <span>No</span>
                  </label>
                  <label class="radio-pill">
                    <input type="radio" name="setup-has-land" value="Not Sure Yet" checked />
                    <span>Not Sure Yet</span>
                  </label>
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="setup-plot-area">Approximate Plot / Land Area</label>
                  <input type="text" class="form-input" id="setup-plot-area" placeholder="e.g. 20,000 sq. ft." />
                </div>
                <div class="form-group">
                  <label class="form-label" for="setup-space">Approximate Warehouse Size Required</label>
                  <input type="text" class="form-input" id="setup-space" placeholder="e.g. 10,000 sq. ft." />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-use-case">What Will the Warehouse Be Used For?</label>
                <select class="form-input form-select" id="setup-use-case">
                  <option value="Storage">Storage</option>
                  <option value="Logistics">Logistics</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Distribution">Distribution</option>
                  <option value="Manufacturing Support">Manufacturing Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="setup-requirement">Project Requirement Details</label>
                <textarea 
                  class="form-input" 
                  id="setup-requirement" 
                  rows="3" 
                  placeholder="Briefly tell us what you are planning to build and how you want to use the warehouse."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-full" id="setup-submit-btn">
                Request a Discussion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;const s=document.getElementById("setup-phone");s&&N(s);const a=document.getElementById("setup-form");a==null||a.addEventListener("submit",n=>{n.preventDefault(),a.querySelectorAll(".error").forEach(u=>u.classList.remove("error")),a.querySelectorAll(".form-error").forEach(u=>u.remove());const o=a.querySelector('input[name="setup-has-land"]:checked'),r={name:document.getElementById("setup-name").value.trim(),company:document.getElementById("setup-company").value.trim(),phone:document.getElementById("setup-phone").value.replace(/\D/g,"").slice(0,10),email:document.getElementById("setup-email").value.trim(),location:document.getElementById("setup-location").value.trim(),hasLand:o?o.value:"",plotArea:document.getElementById("setup-plot-area").value.trim(),space:document.getElementById("setup-space").value.trim(),useCase:document.getElementById("setup-use-case").value,requirement:document.getElementById("setup-requirement").value.trim()},l=q("setup",r);if(!l.isValid){Object.entries(l.errors).forEach(([u,b])=>{const x={name:"setup-name",phone:"setup-phone",email:"setup-email",location:"setup-location",hasLand:"group-has-land"}[u],p=document.getElementById(x);if(p){p.classList.add("error");const h=document.createElement("div");h.className="form-error",h.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${b}`,p.parentElement.appendChild(h)}});return}const d=document.getElementById("setup-submit-btn");d&&(d.disabled=!0,d.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Submitting Your Request...
      `),setTimeout(()=>{const u=document.getElementById("setup-form-container");u.innerHTML=`
        <div class="setup-form-success">
          <div class="success-icon-circle">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p class="success-main-msg">Your warehouse project requirement has been submitted.</p>
          <p class="success-sub-msg">Our team will review the details and get in touch with you shortly.</p>
          
          <div class="success-summary-box">
            <div class="summary-line"><span>Name:</span> <strong>${r.name}</strong></div>
            <div class="summary-line"><span>Location:</span> <strong>${r.location}</strong></div>
            <div class="summary-line"><span>Phone:</span> <strong>+91 ${r.phone}</strong></div>
            ${r.useCase?`<div class="summary-line"><span>Usage:</span> <strong>${r.useCase}</strong></div>`:""}
          </div>

          <a href="${e}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-full" style="margin-top: var(--space-4);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Follow Up on WhatsApp
          </a>
        </div>
      `},600)}),(i=document.getElementById("journey-ready-btn"))==null||i.addEventListener("click",()=>{m("#calculator")})}function Ce(t){const{clients:e}=w;t.innerHTML=`
    <div class="clientele-section section" id="clients">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Our Clientele</span>
          <h2>Trusted By Businesses Across Industries</h2>
          <p class="section-subtitle centered">
            From educational institutions to major industrial units and leading commercial brands, 
            organisations count on Vardha Warehousing for dependable space and 24×7 operations.
          </p>
        </div>

        <div class="clientele-grid stagger-children">
          ${e.map(s=>`
            <div class="client-card reveal">
              <div class="client-card-top">
                <span class="client-sector-tag">${s.tag}</span>
                <span class="client-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Client
                </span>
              </div>

              <div class="client-logo-wrapper">
                ${s.logo?`
                  <img 
                    src="${s.logo}" 
                    alt="${s.alt||s.name}" 
                    class="client-logo-img" 
                    loading="lazy"
                  />
                `:`
                  <div class="client-icon-fallback">${s.name.charAt(0)}</div>
                `}
              </div>

              <div class="client-info">
                <h3 class="client-name">${s.name}</h3>
                <div class="client-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>${s.subtitle}</span>
                </div>
                <p class="client-desc">${s.description}</p>
              </div>

              <div class="client-card-footer">
                <span class="client-feature-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Warehousing Partner
                </span>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="clientele-bottom-bar reveal">
          <div class="clientele-stat-pill">
            <span class="stat-dot"></span>
            <span>Join <strong>leading commercial brands</strong> growing with Vardha Warehousing</span>
          </div>
          <a href="#contact" class="btn btn-sm btn-outline-primary">Partner With Us</a>
        </div>
      </div>
    </div>
  `}function Le(t){var a,i;t.innerHTML=`
    <div class="inquiry-section section">
      <div class="container">
        <div class="inquiry-grid">
          <!-- Left: Dual Option Selection & Clear Guidance -->
          <div class="inquiry-content reveal-left">
            <span class="section-label" style="color: var(--color-accent);">Get in Touch</span>
            <h2>Let's Discuss Your Warehouse Requirement</h2>
            <p class="inquiry-lead">Tell us what you need and our local Gorakhpur team will guide you to the right space or setup solution.</p>

            <!-- Dual Option Selector Cards -->
            <div class="inquiry-options-box">
              <div class="inquiry-option-card active">
                <div class="option-card-header">
                  <span class="option-pill">OPTION 1</span>
                  <strong>I Need Warehouse Space</strong>
                </div>
                <p>Looking to store goods or run distribution from 1,000 to 42,000 sq. ft. Fill out the quick form on the right.</p>
              </div>

              <div class="inquiry-option-card clickable" id="inq-switch-project-btn">
                <div class="option-card-header">
                  <span class="option-pill alt">OPTION 2</span>
                  <strong>I Want to Build a Warehouse</strong>
                </div>
                <p>Have land or planning a new warehouse project in Eastern UP? Go to our Project Consultation form →</p>
              </div>
            </div>

            <!-- Direct Contact Info -->
            <div class="inquiry-direct-info">
              <div class="direct-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Main Gorakhnath Temple Road, Bargadwa, Gorakhpur</span>
              </div>
              <div class="direct-info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>24×7 Operations & Loading Support</span>
              </div>
            </div>
          </div>

          <!-- Right: Clear Space Inquiry Form -->
          <div class="inquiry-form-card reveal-right" id="inquiry-form-container">
            <div class="inquiry-form-heading">
              <h3>Send Warehouse Space Inquiry</h3>
              <p>Fill in your basic details and required area.</p>
            </div>

            <form id="inquiry-form" novalidate>
              <div class="form-group">
                <label class="form-label" for="inq-name">Full Name *</label>
                <input type="text" class="form-input" id="inq-name" placeholder="Rahul Sharma" />
              </div>
              <div class="form-group">
                <label class="form-label" for="inq-company">Business / Company Name</label>
                <input type="text" class="form-input" id="inq-company" placeholder="Sharma Logistics Pvt. Ltd." />
              </div>
              <div class="inquiry-form-row-2">
                <div class="form-group">
                  <label class="form-label" for="inq-phone">Phone Number *</label>
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
                  Send Space Inquiry
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
  `;const e=document.getElementById("inq-phone");e&&N(e),(a=document.getElementById("inq-switch-project-btn"))==null||a.addEventListener("click",()=>{m("#warehouse-setup")});const s=document.getElementById("inquiry-form");s==null||s.addEventListener("submit",n=>{n.preventDefault();const o={name:document.getElementById("inq-name").value.trim(),phone:document.getElementById("inq-phone").value.replace(/\D/g,"").slice(0,10),email:document.getElementById("inq-email").value.trim()},r=q("inquiry",o);if(!r.isValid){Object.entries(r.errors).forEach(([d,u])=>{const b={name:"inq-name",phone:"inq-phone",email:"inq-email"},v=document.getElementById(b[d]);if(v){v.classList.add("error");const x=v.parentElement.querySelector(".form-error");x&&x.remove();const p=document.createElement("div");p.className="form-error",p.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${u}`,v.parentElement.appendChild(p)}});return}const l=document.getElementById("inq-submit-btn");l&&(l.disabled=!0,l.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        Submitting your request...
      `),setTimeout(()=>{const d=document.getElementById("inquiry-form-container");d.innerHTML=`
        <div class="inquiry-form-success">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <h3>Thank you! Your warehouse requirement has been submitted successfully.</h3>
          <p style="color: rgba(255,255,255,0.7);">Our team will review your inquiry and get in touch with you shortly.</p>
        </div>
      `},600)}),(i=document.getElementById("inq-whatsapp"))==null||i.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet.");return}})}function Me(t){var e;t.innerHTML=`
    <div class="whatsapp-float">
      <button class="whatsapp-btn" id="whatsapp-float-btn" aria-label="Chat on WhatsApp">
        <div class="whatsapp-pulse"></div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
      <div class="whatsapp-tooltip">Chat with us on WhatsApp</div>
    </div>
  `,(e=document.getElementById("whatsapp-float-btn"))==null||e.addEventListener("click",()=>{{alert("WhatsApp number has not been configured yet. Please update the contact settings in config.js.");return}})}function Se(t){const{brand:e,navigation:s,contact:a}=w,i=new Date().getFullYear();t.innerHTML=`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3><span>V</span>ardha Warehousing</h3>
            <p>${e.mission}</p>
          </div>

          <div class="footer-col">
            <h4>Navigate</h4>
            ${s.slice(0,4).map(n=>`<a href="${n.href}">${n.label}</a>`).join("")}
          </div>

          <div class="footer-col">
            <h4>Explore</h4>
            ${s.slice(4).map(n=>`<a href="${n.href}">${n.label}</a>`).join("")}
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
          <p>&copy; ${i} ${e.name}. Gorakhpur, Uttar Pradesh, India.</p>
          <p>Commercial Warehousing & 24×7 Logistics Solutions</p>
        </div>
      </div>
    </footer>
  `}function O(){U(document.getElementById("site-header")),K(document.getElementById("home")),Q(document.getElementById("introduction")),_(document.getElementById("warehouse")),J(document.getElementById("video-tour")),X(document.getElementById("facilities")),ee(document.getElementById("gallery")),oe(document.getElementById("calculator")),ce(document.getElementById("how-it-works")),xe(document.getElementById("industries")),Ee(document.getElementById("expertise")),Be(document.getElementById("warehouse-setup")),Ce(document.getElementById("clients")),Le(document.getElementById("contact")),Se(document.getElementById("site-footer")),Me(document.getElementById("whatsapp-button")),de(document.getElementById("inquiry-wizard-modal")),be(document.getElementById("success-screen-modal")),fe(document.getElementById("demo-payment-modal")),requestAnimationFrame(()=>{G(),Y()}),document.addEventListener("input",t=>{var e,s;if(t.target.classList.contains("error")){t.target.classList.remove("error");const a=(e=t.target.parentElement)==null?void 0:e.querySelector(".form-error");a&&a.remove()}if(t.target.type==="tel"||(s=t.target.id)!=null&&s.includes("phone")){const a=t.target.value.replace(/\D/g,"").slice(0,10);t.target.value!==a&&(t.target.value=a)}}),document.addEventListener("keypress",t=>{var e;(t.target.type==="tel"||(e=t.target.id)!=null&&e.includes("phone"))&&!/[0-9]/.test(t.key)&&t.key!=="Enter"&&t.preventDefault()}),console.log("%c✓ Vardha Warehousing loaded","color: #C8965A; font-weight: bold; font-size: 14px;")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",O):O();
