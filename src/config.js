/* ============================================
   VARDHA WAREHOUSING — CENTRAL CONFIGURATION
   ============================================
   All business rules, pricing, contact info,
   and configurable data are centralized here.
   ============================================ */

export const CONFIG = {
  // ── Brand ──
  brand: {
    name: 'Vardha Warehousing',
    tagline: 'Warehousing Expertise Since 1987',
    foundedYear: 1987,
  },

  // ── Pricing ──
  pricing: {
    currency: '₹',
    unit: 'sq. ft.',
    
    // Pricing slabs — easily editable
    slabs: [
      {
        id: 'slab-1',
        min: 500,
        max: 4999,
        rate: 60,
        label: '500 – 4,999 sq. ft.',
      },
      {
        id: 'slab-2',
        min: 5000,
        max: 42000,
        rate: 24,
        label: '5,000 – 42,000 sq. ft.',
      },
    ],

    // The boundary value that sits between both slabs
    boundaryValue: 5000,

    // Which slab does exactly 5,000 sq. ft. belong to?
    // Options: 'upper' (slab-2 at ₹24) or 'lower' (slab-1 at ₹60)
    boundaryBelongsTo: 'upper',
  },

  // ── Warehouse ──
  warehouse: {
    minArea: 500,
    maxArea: 42000,
    
    heights: [
      { value: 14, label: '14 ft', description: 'Standard height' },
      { value: 22, label: '22 ft', description: 'High-ceiling option' },
    ],
    
    quickPresets: [500, 2500, 5000, 10000],
  },

  // ── Property Details ──
  property: {
    type: 'Commercial Property',
    location: 'Gorakhnath Mandir Road, Bargadwa',
    roadWidth: 'Approximately 36 metres / 118 feet',
    transport: '24×7 truck and transportation accessibility',
  },

  // ── Contact ──
  // NOTE: Update these with real contact details before going live
  contact: {
    whatsapp: '', // e.g. '919876543210' (with country code, no +)
    phone: '',    // e.g. '+91 98765 43210'
    email: '',    // e.g. 'info@vardhaware housing.com'
    address: 'Gorakhnath Mandir Road, Bargadwa',
  },

  // ── WhatsApp ──
  whatsapp: {
    defaultMessage: 'Hello, I am interested in warehouse space at Vardha Warehousing. I would like to know more.',
    contextMessage: (area) => 
      `Hello, I am interested in approximately ${area.toLocaleString('en-IN')} sq. ft. of warehouse space at Vardha Warehousing. Please share more details.`,
  },

  // ── Facilities ──
  facilities: [
    {
      icon: 'cctv',
      title: 'CCTV Surveillance',
      description: 'Warehouse equipped with CCTV monitoring for enhanced security and oversight.',
    },
    {
      icon: 'shield',
      title: 'Security Setup',
      description: 'Security arrangements for the warehouse environment to protect stored goods.',
    },
    {
      icon: 'truck',
      title: 'Easy Transport Movement',
      description: 'Easy movement for trucks and transportation vehicles within the facility.',
    },
    {
      icon: 'road',
      title: 'Commercial Access',
      description: 'Wide road connectivity suitable for commercial vehicle access and operations.',
    },
    {
      icon: 'building',
      title: 'Workspace / Office Possibility',
      description: 'Potential for workspace or office setup within the warehouse environment.',
    },
    {
      icon: 'height',
      title: 'Height Options',
      description: 'Available in 14 ft and 22 ft ceiling height configurations.',
    },
  ],

  // ── Industries ──
  industries: [
    {
      icon: 'package',
      title: 'FMCG Storage',
      description: 'Suitable for fast-moving consumer goods storage and distribution.',
    },
    {
      icon: 'shopping-cart',
      title: 'E-commerce Inventory',
      description: 'Ideal for e-commerce businesses including platforms like Amazon and Flipkart.',
    },
    {
      icon: 'boxes',
      title: 'Product Storage',
      description: 'General product storage for businesses needing reliable warehousing space.',
    },
    {
      icon: 'factory',
      title: 'Industrial Products Storage',
      description: 'Storage solutions for industrial products and materials.',
    },
  ],

  // ── Clients ──
  clients: [
    { name: 'DPS / Delhi Public School', logo: null },
    { name: 'FCI Fertilizer, Gorakhpur', logo: null },
    { name: 'Lord of the Drinks', logo: null },
  ],

  // ── Business Types (for inquiry form) ──
  businessTypes: [
    'FMCG',
    'E-commerce',
    'Product Storage',
    'Industrial Products Storage',
    'Retail',
    'Distribution',
    'Other',
  ],

  // ── Contact Preferences ──
  contactMethods: [
    { value: 'phone', label: 'Phone' },
    { value: 'email', label: 'Email' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ],

  // ── Gallery Images ──
  gallery: [
    { src: '/images/warehouse-hero.jpg', alt: 'Warehouse interior — storage and shelving', featured: true },
    { src: '/images/warehouse-exterior.jpg', alt: 'Warehouse exterior — building and road access' },
    { src: '/images/warehouse-loading.jpg', alt: 'Loading dock area' },
    { src: '/images/warehouse-interior.jpg', alt: 'Empty warehouse space with high ceilings' },
    { src: '/images/warehouse-security.jpg', alt: 'Warehouse security and CCTV setup' },
  ],

  // ── Navigation ──
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Warehouse', href: '#warehouse' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Space & Pricing', href: '#calculator' },
    { label: 'Industries', href: '#industries' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ],
};
