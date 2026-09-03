/* ============================================
   VARDHA WAREHOUSING — CENTRAL CONFIGURATION
   ============================================
   Accurate Gorakhpur, India commercial business data
   ============================================ */

export const CONFIG = {
  // ── Brand ──
  brand: {
    name: 'Vardha Warehousing',
    tagline: 'Warehousing Expertise Since 1987',
    foundedYear: 1987,
    mission: 'A warehouse designed to support and improve the speed and growth of your business, not just store goods.',
  },

  // ── Pricing ──
  pricing: {
    currency: '₹',
    unit: 'sq. ft.',
    
    // Pricing slabs — easily editable
    slabs: [
      {
        id: 'slab-1',
        min: 1000,
        max: 4999,
        rate: 60,
        label: '1,000 – 4,999 sq. ft.',
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
    boundaryBelongsTo: 'upper',
  },

  // ── Warehouse Space Specs ──
  warehouse: {
    minArea: 1000,
    maxArea: 42000,
    
    heights: [
      { value: 14, label: '14 ft', description: 'Standard industrial ceiling height' },
      { value: 22, label: '22 ft', description: 'High-clearance ceiling for vertical racking' },
    ],
    
    quickPresets: [1000, 2500, 5000, 10000],
  },

  // ── Strategic Location & Connectivity ──
  property: {
    type: 'Commercial Warehouse Property',
    location: 'Main Gorakhnath Temple Road, Bargadwa, Gorakhpur, Uttar Pradesh',
    roadWidth: 'Approximately 36 metres / 118 feet wide road access',
    transport: '24×7 continuous truck loading and unloading capability',
    landmarks: [
      { name: 'Gorakhpur Railway Junction', time: 'Approx. 15 mins away', icon: 'train' },
      { name: 'Gorakhpur Airport', time: 'Approx. 30 mins away', icon: 'plane' },
    ],
    connectivityRoutes: [
      { destination: 'Lucknow', tag: 'State Capital & Central Hub' },
      { destination: 'Prayagraj', tag: 'Southern UP Logistics Corridor' },
      { destination: 'Varanasi', tag: 'Major Trade & Commercial Hub' },
      { destination: 'Delhi', tag: 'National Capital Region Highway' },
      { destination: 'Bihar', tag: 'Eastern Trade Border Connectivity' },
      { destination: 'Nepal', tag: 'International Cross-Border Trade' },
    ],
  },

  // ── Contact ──
  contact: {
    whatsapp: '', // e.g. '919876543210'
    phone: '',    // e.g. '+91 98765 43210'
    email: '',    // e.g. 'info@vardhawarehousing.com'
    address: 'Main Gorakhnath Temple Road, Bargadwa, Gorakhpur, Uttar Pradesh',
  },

  // ── WhatsApp ──
  whatsapp: {
    defaultMessage: 'Hello, I am interested in warehouse space at Vardha Warehousing, Gorakhpur. Please share details.',
    contextMessage: (area) => 
      `Hello, I am interested in approximately ${area.toLocaleString('en-IN')} sq. ft. of warehouse space at Vardha Warehousing, Gorakhpur. Please share more details.`,
  },

  // ── Modern Operational Facilities ──
  facilities: [
    {
      icon: 'clock',
      title: '24×7 Continuous Operations',
      description: 'Loading and unloading of trucks continues day and night so your business movement never halts.',
      badge: 'Non-Stop Movement',
    },
    {
      icon: 'shopping-cart',
      title: 'E-commerce Operations',
      description: 'Dedicated infrastructure for online retail fulfillment, organized stocking, and fast dispatches.',
      badge: 'Fulfillment Ready',
    },
    {
      icon: 'package',
      title: 'Packaging & Order Processing',
      description: 'Systematic sorting, professional carton packing, labeling, and pallet wrapping services.',
      badge: 'Order Handling',
    },
    {
      icon: 'scan',
      title: 'Barcode Scanning & Tracking',
      description: 'Digitized inventory scanning ensures accurate inbound and outbound stock visibility.',
      badge: 'Accurate Tracking',
    },
    {
      icon: 'truck',
      title: 'Heavy Commercial Dock Bays',
      description: 'Multiple wide roll-up dock shutters with spacious concrete apron for smooth truck maneuvering.',
      badge: 'Wide Road Access',
    },
    {
      icon: 'building',
      title: 'Flexible Space (1,000–42,000 sq. ft.)',
      description: 'Configurable floor layouts and 14 ft / 22 ft height options tailored to your business scale.',
      badge: 'Tailored Capacity',
    },
  ],

  // ── Industries Supported ──
  industries: [
    {
      icon: 'package',
      title: 'FMCG & Consumer Goods',
      description: 'Ideal storage and regional distribution for packaged food, beverages, and household goods.',
    },
    {
      icon: 'shopping-cart',
      title: 'E-commerce Platforms',
      description: 'High-speed order sorting, staging, and dispatch for regional fulfillment networks.',
    },
    {
      icon: 'boxes',
      title: 'Retail & Wholesale Products',
      description: 'Bulk inventory management for traders, distributors, and retail chains across Eastern UP.',
    },
    {
      icon: 'factory',
      title: 'Industrial & Hardware Supplies',
      description: 'Reliable, heavy-duty floor space for hardware, raw materials, and finished goods.',
    },
  ],

  // ── Real Clientele ──
  clients: [
    { name: 'DPS / Delhi Public School', logo: null },
    { name: 'FCI Fertilizer, Gorakhpur', logo: null },
    { name: 'Lord of the Drinks', logo: null },
  ],

  // ── Business Types (Dropdown) ──
  businessTypes: [
    'Manufacturing',
    'Logistics',
    'E-commerce',
    'Retail',
    'FMCG',
    'Automotive',
    'Pharmaceuticals',
    'Other',
  ],

  // ── Contact Preferences ──
  contactMethods: [
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'Email' },
  ],

  // ── Realistic Indian Warehouse Gallery Images ──
  gallery: [
    { src: '/images/hero-warehouse-bg.webp', alt: 'Vardha Warehousing — Main commercial warehouse exterior with loading dock bays', featured: true },
    { src: '/images/warehouse-indian-dock.jpg', alt: 'Active commercial truck loading bays at Vardha Warehousing, Gorakhpur' },
    { src: '/images/warehouse-night-loading.jpg', alt: '24x7 Night truck loading and unloading operations under floodlights' },
    { src: '/images/warehouse-fulfillment-scan.jpg', alt: 'E-commerce order packaging and barcode scanning operations' },
    { src: '/images/warehouse-interior-racks.jpg', alt: 'Organized high-capacity pallet racking and commercial storage interior' },
  ],

  // ── Navigation ──
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Warehouse', href: '#warehouse' },
    { label: '24×7 Operations', href: '#facilities' },
    { label: 'Connectivity', href: '#connectivity' },
    { label: 'Space & Pricing', href: '#calculator' },
    { label: 'Industries', href: '#industries' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ],
};
