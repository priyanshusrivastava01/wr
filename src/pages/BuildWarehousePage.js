/* ============================================
   BUILD A WAREHOUSE PAGE — DEDICATED SERVICE WEBSITE
   ============================================
   Route: /build-a-warehouse
   Stand-alone, visual-first warehouse planning and construction experience.
   Principle: SEE → UNDERSTAND → EXPLORE → PLAN → DISCUSS
   ============================================ */

import { CONFIG } from '../config.js';
import { submitBuildWarehouseApi } from '../utils/api.js';
import { attachPhoneMask } from '../utils/validation.js';

export function renderBuildWarehousePage(container) {
  document.title = 'Build a Custom Warehouse in Gorakhpur & Eastern UP — Vardha Warehousing';
  const { contact, whatsapp } = CONFIG;

  const whatsappUrl = contact.whatsapp 
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsapp.constructionMessage || 'Hi Vardha Team, I want to discuss a custom warehouse construction project in Gorakhpur/UP.')}`
    : '#build-inquiry';

  container.innerHTML = `
    <div class="build-page-visual">
      <!-- ══ SECTION 1: HIGH-IMPACT VISUAL HERO ══ -->
      <section class="build-v-hero" id="build-hero">
        <div class="build-v-hero-bg">
          <img 
            src="/images/service-build-warehouse.jpg" 
            alt="Modern Indian industrial warehouse construction and steel shed in Uttar Pradesh" 
            loading="eager" 
          />
        </div>
        <div class="build-v-hero-overlay"></div>

        <div class="container build-v-hero-container">
          <div class="build-v-hero-grid">
            <div class="build-v-hero-text">
              <div class="build-v-hero-badge">
                <span class="badge-pulse"></span>
                <span>CUSTOM WAREHOUSE PLANNING & CONSTRUCTION • GORAKHPUR & UP</span>
              </div>
              <h1 class="build-v-hero-title">
                Build a Warehouse<br />
                <span class="highlight">Built for Your Business</span>
              </h1>
              <p class="build-v-hero-subtitle">
                From land assessment and layout planning to heavy industrial PEB construction, we build high-clearance, high-capacity commercial warehouses tailored to your exact business needs.
              </p>
              <div class="build-v-hero-actions">
                <a href="#build-inquiry" class="btn-primary" id="build-hero-cta">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
                  <span>Discuss Your Warehouse Project</span>
                </a>
                <a href="#build-pipeline" class="btn-secondary-ghost">
                  <span>See How It Works ↓</span>
                </a>
              </div>

              <div class="build-v-hero-metrics">
                <div class="hero-metric-item">
                  <span class="hero-metric-value">Turnkey</span>
                  <span class="hero-metric-label">Concept to Handover</span>
                </div>
                <div class="hero-metric-item">
                  <span class="hero-metric-value">PEB Steel</span>
                  <span class="hero-metric-label">High-Span Engineering</span>
                </div>
                <div class="hero-metric-item">
                  <span class="hero-metric-value">Gorakhpur</span>
                  <span class="hero-metric-label">Prime Highway Access</span>
                </div>
              </div>
            </div>

            <div class="build-v-hero-visual-card">
              <div class="hero-visual-img-wrap">
                <img src="/images/warehouse-hero.jpg" alt="Completed modern Indian commercial warehouse park" />
                <div class="hero-floating-badge">
                  <div class="hfb-text">
                    <h4>Turnkey Facility Delivery</h4>
                    <p>Designed for logistics, FMCG & industry</p>
                  </div>
                  <div class="hfb-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 2: QUICK VISUAL PIPELINE ══ -->
      <section class="build-v-pipeline-section" id="build-pipeline">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label" style="color: #E2B178;">END-TO-END DEVELOPMENT FLOW</span>
            <h2 class="section-title" style="color: #FFFFFF;">From Requirement to Ready Warehouse</h2>
            <p class="section-subtitle centered" style="color: #94A3B8;">
              A simple, transparent 5-stage roadmap turning your space requirement into an operational commercial facility.
            </p>
          </div>

          <div class="pipeline-diagram">
            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <span class="pipeline-node-step">Stage 01</span>
              <h4 class="pipeline-node-title">Your Idea</h4>
              <p class="pipeline-node-desc">Share space requirement, usage type & target location</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <span class="pipeline-node-step">Stage 02</span>
              <h4 class="pipeline-node-title">Site & Planning</h4>
              <p class="pipeline-node-desc">Plot evaluation, truck turning radiuses & highway connectivity</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <span class="pipeline-node-step">Stage 03</span>
              <h4 class="pipeline-node-title">Custom Design</h4>
              <p class="pipeline-node-desc">Clear span framing, dock bays, height & racking blueprints</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
              </div>
              <span class="pipeline-node-step">Stage 04</span>
              <h4 class="pipeline-node-title">PEB Construction</h4>
              <p class="pipeline-node-desc">Heavy structural steel erection, FM2 floor & roof cladding</p>
            </div>

            <div class="pipeline-node">
              <div class="pipeline-node-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <span class="pipeline-node-step">Stage 05</span>
              <h4 class="pipeline-node-title">Ready to Operate</h4>
              <p class="pipeline-node-desc">Final safety checks, dock commissioning & facility handover</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 3: ASYMMETRIC ABOUT SECTION ══ -->
      <section class="build-v-about-section" id="build-about">
        <div class="container">
          <div class="build-v-about-grid">
            <div class="build-v-about-visual">
              <div class="about-visual-main">
                <img src="/images/warehouse-exterior.jpg" alt="Modern Indian warehouse campus infrastructure in Uttar Pradesh" />
              </div>
              <div class="about-tag-chip top-left">
                <span class="about-tag-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                <span>Industrial Grade PEB</span>
              </div>
              <div class="about-tag-chip bottom-right">
                <span class="about-tag-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>Gorakhpur Hub: <span class="chip-val">NH-28 / NH-27</span></span>
              </div>
            </div>

            <div class="build-v-about-content">
              <span class="section-label">WHO WE ARE & WHAT WE DO</span>
              <h2>Your End-to-End Warehouse Development Partner</h2>
              <p class="lead">
                Building a commercial warehouse requires seamless coordination between land suitability, vehicular logistics, heavy structural engineering, and regulatory compliance. We eliminate this complexity by managing your entire warehouse construction lifecycle under one roof.
              </p>

              <div class="about-pill-grid">
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>Site & Land Planning</h5>
                    <p>Highway access, road width & soil analysis</p>
                  </div>
                </div>
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>Engineered Blueprints</h5>
                    <p>Dock height, column spacing & racking</p>
                  </div>
                </div>
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>Civil & Steel Erection</h5>
                    <p>High-grade PEB steel & FM2 laser floors</p>
                  </div>
                </div>
                <div class="about-pill-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h5>Turnkey Handover</h5>
                    <p>Delivered fully ready for live operations</p>
                  </div>
                </div>
              </div>

              <a href="#build-inquiry" class="btn btn-primary">
                Discuss Your Construction Plan →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 4: BLUEPRINT VISUAL STORYTELLING ══ -->
      <section class="build-v-blueprint-section" id="build-blueprint">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label" style="color: #E2B178;">ENGINEERING & DESIGN EXCELLENCE</span>
            <h2 class="section-title" style="color: #FFFFFF;">Why Build With Vardha?</h2>
            <p class="section-subtitle centered" style="color: #94A3B8;">
              Modern logistics demands practical, heavy-duty engineering. Here is how we design every facility for operational efficiency.
            </p>
          </div>

          <div class="blueprint-showcase-grid">
            <div class="blueprint-card">
              <span class="blueprint-card-corner">01 // SITE</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
              </div>
              <h3>Smart Site Layout</h3>
              <p>Wide truck turnaround aprons, dedicated security gates, and multi-bay loading docks designed for smooth commercial vehicle traffic.</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">02 // STEEL</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
              </div>
              <h3>High Clear-Span PEB</h3>
              <p>Pre-engineered structural steel framing providing 14 ft. to 30+ ft. clear ceiling heights with minimal interior column obstruction.</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">03 // FLOOR</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
              </div>
              <h3>FM2 Laser Screed Floor</h3>
              <p>Reinforced concrete flooring designed for heavy forklift wheel loads, high-density pallet racks, and dust-free warehouse environments.</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">04 // DOCKS</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3>Hydraulic Dock Bays</h3>
              <p>Elevated loading docks with motorized rolling shutters, dock levelers, and canopy rain protection for 24x7 all-weather dispatch.</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">05 // UTILITY</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3>Industrial Utilities</h3>
              <p>Dedicated commercial transformer capacity, fire hydrant loop lines, high-bay LED lighting, and natural roof skylights.</p>
            </div>

            <div class="blueprint-card">
              <span class="blueprint-card-corner">06 // TRUST</span>
              <div class="blueprint-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3>Single-Point Delivery</h3>
              <p>One accountable development partner managing civil work, structural fabrication, government approvals, and handover milestones.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 5: CAPABILITIES SHOWCASE ══ -->
      <section class="build-v-capabilities-section" id="build-capabilities">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">WHAT WE BUILD</span>
            <h2 class="section-title">Warehouse Capabilities & Formats</h2>
            <p class="section-subtitle centered">
              Tailored industrial structures built for your specific sector and operational workflow.
            </p>
          </div>

          <div class="capabilities-visual-grid">
            <div class="cap-visual-card">
              <div class="cap-card-img-wrap">
                <img src="/images/service-build-warehouse.jpg" alt="Pre-Engineered Industrial Warehouse Shed" />
                <span class="cap-card-badge">Format A</span>
              </div>
              <div class="cap-card-body">
                <h3>Industrial PEB Warehouse Sheds</h3>
                <p>Large open-span pre-engineered steel buildings with insulated roof sheeting, turbo ventilators, and high clearance for maximum storage volume.</p>
                <div class="cap-card-highlights">
                  <span class="cap-chip">Clear Height 18–30+ ft.</span>
                  <span class="cap-chip">Pre-Engineered Steel</span>
                  <span class="cap-chip">Rapid Erection</span>
                </div>
              </div>
            </div>

            <div class="cap-visual-card">
              <div class="cap-card-img-wrap">
                <img src="/images/warehouse-indian-dock.jpg" alt="Logistics & Distribution Hub with Truck Bays" />
                <span class="cap-card-badge">Format B</span>
              </div>
              <div class="cap-card-body">
                <h3>Logistics & Distribution Hubs</h3>
                <p>Multi-dock fulfillment facilities optimized for fast truck turnaround, cross-dock operations, motorized shutters, and forklift maneuvering.</p>
                <div class="cap-card-highlights">
                  <span class="cap-chip">Elevated Docks</span>
                  <span class="cap-chip">Wide Truck Apron</span>
                  <span class="cap-chip">FM2 Laser Floor</span>
                </div>
              </div>
            </div>

            <div class="cap-visual-card">
              <div class="cap-card-img-wrap">
                <img src="/images/warehouse-interior-lux.jpg" alt="Manufacturing & Raw Material Storage Facility" />
                <span class="cap-card-badge">Format C</span>
              </div>
              <div class="cap-card-body">
                <h3>Manufacturing & Storage Units</h3>
                <p>Heavy industrial facilities equipped for machinery loads, heavy raw stock storage, robust power load, and integrated administration offices.</p>
                <div class="cap-card-highlights">
                  <span class="cap-chip">High Floor Load (5–8 MT)</span>
                  <span class="cap-chip">Office Space</span>
                  <span class="cap-chip">3-Phase Power</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 6: LAND DECISION MATRIX ══ -->
      <section class="build-v-land-section" id="build-land">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">WHERE ARE YOU STARTING FROM?</span>
            <h2 class="section-title">Select Your Land & Project Status</h2>
            <p class="section-subtitle centered">
              Whether you already own land or need end-to-end site sourcing, we adapt our process to where you are today.
            </p>
          </div>

          <div class="land-decision-grid">
            <div class="land-decision-card selected" data-land-val="Yes, I have land" id="land-card-a">
              <span class="land-card-tag">PATH A</span>
              <h3>I Already Have Land</h3>
              <p class="land-summary">
                You have a commercial or industrial plot. We survey your site, design an optimized warehouse layout for your plot dimensions, and execute construction.
              </p>
              <div class="land-flow-timeline">
                <div class="land-flow-step"><span class="lfs-dot"></span> Plot Survey & Boundary Analysis</div>
                <div class="land-flow-step"><span class="lfs-dot"></span> Custom Architectural Layout</div>
                <div class="land-flow-step"><span class="lfs-dot"></span> Structural Fabrication & Build</div>
              </div>
              <div class="land-card-action">
                <span>Selected: Plan on My Land →</span>
              </div>
            </div>

            <div class="land-decision-card" data-land-val="No, I need land + build" id="land-card-b">
              <span class="land-card-tag">PATH B</span>
              <h3>I Need Land + Warehouse</h3>
              <p class="land-summary">
                You need a warehouse in a prime location. We help identify suitable highway-connected land in Gorakhpur/UP and build a turnkey facility for you.
              </p>
              <div class="land-flow-timeline">
                <div class="land-flow-step"><span class="lfs-dot"></span> Location & Highway Feasibility</div>
                <div class="land-flow-step"><span class="lfs-dot"></span> Plot Acquisition & Planning</div>
                <div class="land-flow-step"><span class="lfs-dot"></span> Turnkey Construction</div>
              </div>
              <div class="land-card-action">
                <span>Select: Need Land + Build →</span>
              </div>
            </div>

            <div class="land-decision-card" data-land-val="Just exploring" id="land-card-c">
              <span class="land-card-tag">PATH C</span>
              <h3>I Am Exploring Options</h3>
              <p class="land-summary">
                You are evaluating warehouse feasibility, approximate build costs, and space requirements for an upcoming business expansion.
              </p>
              <div class="land-flow-timeline">
                <div class="land-flow-step"><span class="lfs-dot"></span> Business Need Discussion</div>
                <div class="land-flow-step"><span class="lfs-dot"></span> Preliminary Cost Estimation</div>
                <div class="land-flow-step"><span class="lfs-dot"></span> Feasibility Consultation</div>
              </div>
              <div class="land-card-action">
                <span>Select: Explore Feasibility →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 7: PLANNING & DESIGN PROGRESSION ══ -->
      <section class="build-v-design-section" id="build-design">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label" style="color: #E2B178;">ARCHITECTURAL PROGRESSION</span>
            <h2 class="section-title" style="color: #FFFFFF;">How Your Warehouse Is Planned</h2>
            <p class="section-subtitle centered" style="color: #94A3B8;">
              Every square foot is engineered for smooth internal logistics, safety, and future scalability.
            </p>
          </div>

          <div class="design-progression-grid">
            <div class="design-step-card">
              <div class="design-step-num">01</div>
              <h3>Space & Capacity Sizing</h3>
              <p>We calculate your optimal square footage based on pallet counts, SKU diversity, and growth projections.</p>
            </div>

            <div class="design-step-card">
              <div class="design-step-num">02</div>
              <h3>Aisle & Racking Geometry</h3>
              <p>Clear forklift pathways, pallet rack spacing, and staging zones mapped out for zero operational bottlenecks.</p>
            </div>

            <div class="design-step-card">
              <div class="design-step-num">03</div>
              <h3>Dock & Truck Flow Design</h3>
              <p>Dock height matched to 32 ft. / 20 ft. commercial containers with turning radius engineered on the apron.</p>
            </div>

            <div class="design-step-card">
              <div class="design-step-num">04</div>
              <h3>PEB Engineering & Load</h3>
              <p>Structural steel calculations ensuring cyclone resistance, heavy floor point loads, and roof skylight placement.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 8: 5-STAGE CONSTRUCTION JOURNEY ══ -->
      <section class="build-v-construction-section" id="build-construction">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">THE BUILD ROADMAP</span>
            <h2 class="section-title">5-Stage Construction Process</h2>
            <p class="section-subtitle centered">
              Structured civil execution with milestone updates at every step.
            </p>
          </div>

          <div class="construction-journey-list">
            <div class="journey-row-item">
              <div class="j-phase-badge">Phase 01</div>
              <div class="j-phase-content">
                <h3>Site Preparation & Deep Foundation</h3>
                <p>Land clearing, soil compaction, plinth beam construction, and heavy RCC anchor bolt foundations.</p>
              </div>
              <div class="j-phase-deliverable">✓ Engineered Plinth</div>
            </div>

            <div class="journey-row-item">
              <div class="j-phase-badge">Phase 02</div>
              <div class="j-phase-content">
                <h3>PEB Structural Steel Erection</h3>
                <p>Assembly of high-strength structural steel columns, rafters, purlins, and crane girder brackets.</p>
              </div>
              <div class="j-phase-deliverable">✓ Steel Frame Erected</div>
            </div>

            <div class="journey-row-item">
              <div class="j-phase-badge">Phase 03</div>
              <div class="j-phase-content">
                <h3>Roofing & Wall Metal Cladding</h3>
                <p>Installation of galvalume corrugated roof sheeting, polycarbonate daylight strips, and side louvers.</p>
              </div>
              <div class="j-phase-deliverable">✓ Weatherproof Shell</div>
            </div>

            <div class="journey-row-item">
              <div class="j-phase-badge">Phase 04</div>
              <div class="j-phase-content">
                <h3>FM2 Laser Flooring & Dock Levelers</h3>
                <p>Laser screed concrete pour with hardener, motorized rolling shutters, dock ramp, and drainage aprons.</p>
              </div>
              <div class="j-phase-deliverable">✓ High-Load Floor & Docks</div>
            </div>

            <div class="journey-row-item">
              <div class="j-phase-badge">Phase 05</div>
              <div class="j-phase-content">
                <h3>Electricals, Safety & Final Handover</h3>
                <p>High-bay LED lighting, fire safety loops, perimeter security boundary wall, and final operational sign-off.</p>
              </div>
              <div class="j-phase-deliverable">✓ Keys & Handover</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 9: THE END RESULT ══ -->
      <section class="build-v-endresult-section" id="build-endresult">
        <div class="container">
          <div class="endresult-showcase-box">
            <div class="endresult-img-side">
              <img src="/images/warehouse-hero.jpg" alt="Delivered operational Indian commercial warehouse" />
            </div>
            <div class="endresult-info-side">
              <span class="section-label" style="color: #C8965A; font-weight: bold; font-size: 0.8125rem; text-transform: uppercase;">THE COMPLETED FACILITY</span>
              <h3>What You Receive at Handover</h3>
              <p class="intro">
                A fully functional, robust commercial warehouse ready for immediate inventory move-in and business operations.
              </p>

              <div class="endresult-checklist">
                <div class="endresult-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Ready Commercial Structure</span>
                </div>
                <div class="endresult-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Motorized Shutter Bays</span>
                </div>
                <div class="endresult-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Laser-Screed FM2 Floor</span>
                </div>
                <div class="endresult-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Wide Concrete Yard</span>
                </div>
                <div class="endresult-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>3-Phase Power Setup</span>
                </div>
                <div class="endresult-check-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Gated Perimeter Wall</span>
                </div>
              </div>

              <a href="#build-inquiry" class="btn btn-primary" style="align-self: flex-start;">
                Request Your Warehouse Plan →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 10: INTERACTIVE REQUIREMENT DISCOVERY & CONSULTATION FORM ══ -->
      <section class="build-v-form-section" id="build-inquiry">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-label">PROJECT CONSULTATION</span>
            <h2 class="section-title">Tell Us About Your Warehouse Requirement</h2>
            <p class="section-subtitle centered">
              Select your basic project preferences below. Our commercial construction team will review your requirements and connect for a detailed discussion.
            </p>
          </div>

          <div class="build-form-outer-card">
            <!-- Step 1: Visual Purpose Selector -->
            <div class="form-step-block">
              <div class="form-step-block-title">
                <span class="f-num">1</span>
                <span class="f-label">Intended Warehouse Use / Sector</span>
              </div>
              <div class="purpose-visual-selector">
                <button type="button" class="purpose-btn active" data-purpose="E-Commerce & Logistics Fulfillment">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  <span>E-Commerce Logistics</span>
                </button>
                <button type="button" class="purpose-btn" data-purpose="FMCG & Consumer Goods Distribution">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  <span>FMCG Distribution</span>
                </button>
                <button type="button" class="purpose-btn" data-purpose="Manufacturing & Raw Material Stock">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
                  <span>Industrial / Factory</span>
                </button>
                <button type="button" class="purpose-btn" data-purpose="Cold Storage & Food Processing">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span>Cold Chain / Storage</span>
                </button>
                <button type="button" class="purpose-btn" data-purpose="Retail Buffer & Wholesale Yard">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  <span>Retail Buffer Yard</span>
                </button>
                <button type="button" class="purpose-btn" data-purpose="General Commercial Warehouse">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>General Warehouse</span>
                </button>
              </div>
            </div>

            <!-- Step 2: Project Timeline Selector -->
            <div class="form-step-block">
              <div class="form-step-block-title">
                <span class="f-num">2</span>
                <span class="f-label">Expected Project Timeline</span>
              </div>
              <div class="timeline-pill-selector">
                <button type="button" class="timeline-pill active" data-timeline="1–3 Months (Immediate)">1–3 Months</button>
                <button type="button" class="timeline-pill" data-timeline="3–6 Months">3–6 Months</button>
                <button type="button" class="timeline-pill" data-timeline="6–12 Months">6–12 Months</button>
                <button type="button" class="timeline-pill" data-timeline="Exploring / Planning Stage">Just Exploring</button>
              </div>
            </div>

            <!-- Step 3: Detailed Information Form -->
            <form id="build-project-form" novalidate>
              <div class="form-step-block">
                <div class="form-step-block-title">
                  <span class="f-num">3</span>
                  <span class="f-label">Contact & Project Specifications</span>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-name">Full Name *</label>
                    <input type="text" class="form-input" id="build-name" placeholder="Amit Verma" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-company">Business / Company Name</label>
                    <input type="text" class="form-input" id="build-company" placeholder="Verma Enterprises" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-phone">Indian Mobile Number *</label>
                    <input type="tel" class="form-input" id="build-phone" placeholder="9876543210" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-email">Email Address</label>
                    <input type="email" class="form-input" id="build-email" placeholder="amit@example.com" />
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-location">Target Location / Highway</label>
                    <input type="text" class="form-input" id="build-location" placeholder="e.g. Gorakhpur / NH-28 / GIDA area" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-land-status">Land Status</label>
                    <select class="form-input form-select" id="build-land-status">
                      <option value="Yes, I have land" selected>Yes, I have land (Path A)</option>
                      <option value="No, I need land + build">No, I need land + build (Path B)</option>
                      <option value="Just exploring">Just exploring (Path C)</option>
                    </select>
                  </div>
                </div>

                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label" for="build-plot-area">Plot Area (if known)</label>
                    <input type="text" class="form-input" id="build-plot-area" placeholder="e.g. 2 Acres / 50,000 sq. ft." />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="build-size">Required Warehouse Size</label>
                    <input type="text" class="form-input" id="build-size" placeholder="e.g. 20,000 sq. ft." />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="build-notes">Project Notes / Specific Requirements</label>
                  <textarea class="form-input" id="build-notes" rows="3" placeholder="e.g. Looking for 24 ft ceiling height, 4 truck loading bays, and heavy laser screed flooring for racking."></textarea>
                </div>

                <div id="build-global-error" style="display: none; color: #EF4444; font-size: 0.875rem; margin-bottom: var(--space-4); background: rgba(239, 68, 68, 0.1); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25);"></div>
                <div id="build-global-success" style="display: none; color: #10B981; font-size: 0.9375rem; margin-bottom: var(--space-4); background: rgba(16, 185, 129, 0.1); padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.25);"></div>

                <div class="form-submit-row">
                  <button type="submit" class="btn btn-primary btn-full" id="build-submit-btn" style="padding: 16px; font-size: 1rem;">
                    <span>Request a Warehouse Project Discussion</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- ══ SECTION 11: STRONG FINAL CTA ══ -->
      <section class="build-v-final-cta">
        <div class="container">
          <div class="final-cta-dark-box">
            <span class="cta-mini-tag" style="display: inline-block; background: rgba(200, 150, 90, 0.15); color: #E2B178; padding: 4px 12px; border-radius: 9999px; font-size: 0.75rem; font-weight: bold; margin-bottom: 12px; letter-spacing: 0.05em;">TURNKEY COMMERCIAL DEVELOPMENT</span>
            <h2>Ready to Plan & Build Your Warehouse?</h2>
            <p>Connect directly with our commercial development engineers in Gorakhpur to discuss your site, blueprints, and build timeline.</p>
            <div class="cta-buttons-row">
              <a href="#build-inquiry" class="btn btn-primary" style="padding: 14px 28px;">
                Request a Discussion
              </a>
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn-whatsapp-direct">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;

  initBuildPageInteractions();
}

function initBuildPageInteractions() {
  const form = document.getElementById('build-project-form');
  const phoneInput = document.getElementById('build-phone');
  const errorBox = document.getElementById('build-global-error');
  const successBox = document.getElementById('build-global-success');
  const submitBtn = document.getElementById('build-submit-btn');
  const landStatusSelect = document.getElementById('build-land-status');

  // Selected state
  let selectedPurpose = 'E-Commerce & Logistics Fulfillment';
  let selectedTimeline = '1–3 Months (Immediate)';

  // 1. Phone Input Masking
  if (phoneInput) {
    attachPhoneMask(phoneInput);
  }

  // 2. Land Decision Cards Click -> Auto-select in form
  const landCards = document.querySelectorAll('.land-decision-card');
  landCards.forEach(card => {
    card.addEventListener('click', () => {
      landCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const landVal = card.getAttribute('data-land-val');
      if (landStatusSelect && landVal) {
        landStatusSelect.value = landVal;
      }

      // Smooth scroll to form
      const formEl = document.getElementById('build-inquiry');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Sync select change back to cards
  landStatusSelect?.addEventListener('change', (e) => {
    const val = e.target.value;
    landCards.forEach(card => {
      if (card.getAttribute('data-land-val') === val) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  });

  // 3. Purpose Selector Buttons
  const purposeBtns = document.querySelectorAll('.purpose-btn');
  purposeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      purposeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPurpose = btn.getAttribute('data-purpose') || 'General Commercial Warehouse';
    });
  });

  // 4. Timeline Pill Buttons
  const timelinePills = document.querySelectorAll('.timeline-pill');
  timelinePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timelinePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedTimeline = pill.getAttribute('data-timeline') || '1–3 Months';
    });
  });

  // 5. Form Submission (with duplicate submission guard)
  let isSubmitting = false;

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (errorBox) errorBox.style.display = 'none';
    if (successBox) successBox.style.display = 'none';

    const name = document.getElementById('build-name')?.value.trim();
    const company = document.getElementById('build-company')?.value.trim();
    const phone = document.getElementById('build-phone')?.value.trim();
    const email = document.getElementById('build-email')?.value.trim();
    const location = document.getElementById('build-location')?.value.trim();
    const landStatus = landStatusSelect?.value || 'Yes, I have land';
    const plotArea = document.getElementById('build-plot-area')?.value.trim();
    const size = document.getElementById('build-size')?.value.trim();
    const notes = document.getElementById('build-notes')?.value.trim();

    // Validation
    if (!name || name.length < 2) {
      showError('Please enter your full name (at least 2 characters).');
      return;
    }

    const cleanPhone = String(phone || '').replace(/\D/g, '').slice(-10);
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      showError('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    if (!location) {
      showError('Please specify your project location or preferred city.');
      return;
    }

    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting Project Requirement...</span>';
    }

    try {
      const combinedNotes = [
        `[Sector/Purpose]: ${selectedPurpose}`,
        `[Timeline]: ${selectedTimeline}`,
        notes ? `[Notes]: ${notes}` : ''
      ].filter(Boolean).join(' | ');

      const payload = {
        fullName: name,
        companyName: company || undefined,
        phone: cleanPhone,
        email: email || undefined,
        preferredLocation: location || undefined,
        landAvailability: landStatus || undefined,
        plotArea: plotArea || undefined,
        requiredSpace: size || undefined,
        intendedUsage: selectedPurpose,
        projectNotes: combinedNotes,
      };

      const result = await submitBuildWarehouseApi(payload);

      if (result.success) {
        form.reset();
        if (successBox) {
          successBox.style.display = 'block';
          successBox.innerHTML = `<strong>✓ Project Request Received!</strong> Thank you, ${name}. Our warehouse development engineers will contact you at ${cleanPhone} to discuss your site, blueprints, and build estimate.`;
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        showError(result.message || 'Unable to submit your request. Please try again.');
      }
    } catch (err) {
      showError('Unable to submit your request right now. Please verify your connection or try again.');
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Request a Warehouse Project Discussion</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
      }
    }
  });

  function showError(msg) {
    if (errorBox) {
      errorBox.style.display = 'block';
      errorBox.textContent = msg;
      errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
