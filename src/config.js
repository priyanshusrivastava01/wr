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
      { destination: 'Delhi NCR', tag: 'National Business & Distribution Access', dir: 'north' },
      { destination: 'Lucknow', tag: 'Key Uttar Pradesh Business Connection', dir: 'west' },
      { destination: 'Bihar', tag: 'Eastern Market Connectivity', dir: 'east' },
      { destination: 'Prayagraj', tag: 'Important Regional Business Route', dir: 'south-west' },
      { destination: 'Varanasi', tag: 'Major Trade & Commercial Connection', dir: 'south' },
      { destination: 'Nepal', tag: 'Cross-Border Business Connectivity', dir: 'north-east' },
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
    constructionMessage: 'Hello, I am interested in discussing a warehouse construction/development requirement. I would like to share my project details.',
    contextMessage: (area) => 
      `Hello, I am interested in approximately ${area.toLocaleString('en-IN')} sq. ft. of warehouse space at Vardha Warehousing, Gorakhpur. Please share more details.`,
  },

  // ── Approved Warehouse Operational Capabilities ──
  facilities: [
    {
      icon: 'shopping-cart',
      title: 'E-commerce Operations',
      description: 'Support for organized warehouse-based order handling and fulfillment operations.',
      badge: 'Fulfillment Ready',
    },
    {
      icon: 'clipboard',
      title: 'Order Processing',
      description: 'Help manage and prepare orders for smoother business operations.',
      badge: 'Systematic Handling',
    },
    {
      icon: 'package',
      title: 'Packaging',
      description: 'Dedicated support for preparing and packaging goods.',
      badge: 'Packing Support',
    },
    {
      icon: 'scan',
      title: 'Barcode Scanning',
      description: 'Support for organized inventory handling and product identification.',
      badge: 'Accurate Tracking',
    },
    {
      icon: 'truck',
      title: 'Loading & Unloading',
      description: 'Efficient movement of goods through warehouse operations.',
      badge: 'Wide Dock Bays',
    },
    {
      icon: 'clock',
      title: '24×7 Operations',
      description: 'Operational support designed for day and night business movement.',
      badge: 'Round-The-Clock',
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
    {
      name: 'Delhi Public School (DPS)',
      tag: 'Education Sector',
      subtitle: 'Gorakhpur Campus',
      description: 'Institutional goods, equipment & material warehousing partner.',
      logo: '/images/comp/dps-logo.webp',
      alt: 'Delhi Public School Gorakhpur',
    },
    {
      name: 'FCI Fertilizer (FCIL)',
      tag: 'Agriculture & Fertilizer',
      subtitle: 'Gorakhpur Unit',
      description: 'Reliable high-capacity commercial storage and distribution partner.',
      logo: '/images/comp/fcil-logo.webp',
      alt: 'FCI Fertilizer Gorakhpur',
    },
    {
      name: 'Lord of the Drinks',
      tag: 'Hospitality & F&B',
      subtitle: 'Gorakhpur',
      description: 'Commercial supply chain and dedicated storage infrastructure.',
      logo: '/images/comp/lord-of-the-drinks-logo.webp',
      alt: 'Lord of the Drinks Gorakhpur',
    },
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
    { 
      src: '/images/hero-warehouse-bg.webp', 
      category: 'Outside the Warehouse', 
      label: 'Commercial Building & Frontage', 
      alt: 'Vardha Warehousing — Main commercial warehouse exterior with loading dock bays', 
      featured: true 
    },
    { 
      src: '/images/warehouse-indian-dock.jpg', 
      category: 'Loading Area', 
      label: 'Truck Movement & Loading Bays', 
      alt: 'Active commercial truck loading bays at Vardha Warehousing, Gorakhpur' 
    },
    { 
      src: '/images/warehouse-interior-racks.jpg', 
      category: 'Inside the Warehouse', 
      label: 'Storage & Operational Areas', 
      alt: 'Organized high-capacity pallet racking and commercial storage interior' 
    },
    { 
      src: '/images/warehouse-fulfillment-scan.jpg', 
      category: 'Business Operations', 
      label: 'Packaging & Order Processing', 
      alt: 'E-commerce order packaging and barcode scanning operations' 
    },
    { 
      src: '/images/warehouse-night-loading.jpg', 
      category: '24×7 Operations', 
      label: 'Round-The-Clock Night Dispatch', 
      alt: '24x7 Night truck loading and unloading operations under floodlights' 
    },
  ],

  // ── Navigation ──
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Warehouse Space', href: '/warehouse-renting' },
    { label: 'Build a Warehouse', href: '/build-a-warehouse' },
    { label: 'Location & Connectivity', href: '/warehouse-renting#connectivity' },
    { label: 'Contact', href: '/warehouse-renting#contact' },
  ],
};
