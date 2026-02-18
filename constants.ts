
import { PortfolioItem, NavLink } from './types';
import { Monitor, Share2, Star, Video, Search, Calendar, Code, Smartphone, BarChart, Users, Camera, Zap, Palette } from 'lucide-react';

export const COLORS = {
  background: '#050505',
  accent: '#0052FF',
  text: '#FFFFFF',
  muted: '#888888',
};

const INSTAGRAM_LINK = "https://www.instagram.com/echelonmarketinghouse?igsh=eHQ4cGZiNzZkdnBk";

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: 'work' },
  { label: 'Clients', href: 'clients' },
  { label: 'Services', href: 'expertise' },
  { label: 'Contact', href: 'contact' },
];

export interface DetailedPortfolioItem extends PortfolioItem {
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  process: string;
  impact: string;
  tags: string[];
}

export interface ServiceDetail {
  heroImage: string;
  galleryImages: string[];
  features: string[];
  process: { step: string; description: string }[];
  extendedDescription: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  detail: ServiceDetail;
}

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Designing & Website Management',
    description: 'Clean, high-performance websites designed for conversion, speed, and long-term scalability.',
    icon: Monitor,
    detail: {
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      galleryImages: [
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770122283/plantillas_de_sitios_web_para_sitios_web_de_arquitectura_kuneeo.jpg',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770122283/5th_Example_of_Good_Web_Design_uy4vfh.jpg'
      ],
      features: ['Custom UI/UX Design', 'Headless CMS Integration', 'Performance Optimization', 'Responsive Architecture', 'SEO Fundamentals'],
      process: [
        { step: 'Discovery', description: 'Analyzing user behavior and business objectives.' },
        { step: 'Wireframing', description: 'Architecting the flow and user experience.' },
        { step: 'Production', description: 'Developing with cutting-edge frameworks.' }
      ],
      extendedDescription: 'We don’t just build websites; we engineer digital storefronts that command attention. Our approach combines aesthetic minimalism with technical superiority, ensuring your brand stands out in a crowded digital landscape.'
    }
  },
  {
    id: 'social-media',
    title: 'Social Media Handling',
    description: 'Strategic content creation, posting, and growth management across all major platforms.',
    icon: Share2,
    detail: {
      heroImage: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770139902/Grow_Your_Brand_Online___SEO_Ads_Social_Media_More___Digital_Marketing_Tips_Tricks___yq1w05.jpg',
      galleryImages: [
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770140621/Tasty_BAO_1080_x_1440_px_ojllgv.png',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770140638/Thavare_-_Info_Post_-_Body_Lotion_-_V1.2.2_ynxlog.png',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770141318/New_York_Cheesecake_qzhkj3.jpg'
      ],
      features: ['Content Strategy', 'Community Management', 'Organic Growth', 'Paid Social Campaigns', 'Monthly Analytics'],
      process: [
        { step: 'Audit', description: 'Identifying current performance gaps and audience trends.' },
        { step: 'Strategy', description: 'Developing a unique brand voice and content rhythm.' },
        { step: 'Growth', description: 'Daily management and real-time community engagement.' }
      ],
      extendedDescription: 'Social media is the heartbeat of your brand. We manage the complexity of algorithm changes and platform shifts, keeping your audience engaged and your brand narrative consistent and authoritative.'
    }
  },
  {
    id: 'influencer',
    title: 'Influencer Marketing',
    description: 'Data-driven collaborations with creators to build trust, reach, and measurable impact.',
    icon: Star,
    detail: {
      heroImage: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770790692/Screenshot_2026-02-11_114643_vrslbd.png',
      galleryImages: [
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770790692/Screenshot_2026-02-11_114643_vrslbd.png',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771321118/1000246885_v3xdyr.jpg',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771321118/1000246897_v0yjcw.jpg'
      ],
      features: ['Creator Matching', 'Campaign Sourcing', 'ROI Tracking', 'Contract Management', 'Relationship Building'],
      process: [
        { step: 'Scouting', description: 'Finding creators that align with your core values.' },
        { step: 'Briefing', description: 'Crafting creative directives for maximum impact.' },
        { step: 'Analysis', description: 'Measuring sentiment and conversion rates.' }
      ],
      extendedDescription: 'Trust is the new currency. By pairing your brand with authentic creators, we create high-impact campaigns that drive genuine interest and sustainable loyalty.'
    }
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'High-quality reels, brand films, ads, and cinematic content crafted to stop the scroll.',
    icon: Video,
    detail: {
      heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
      galleryImages: [
        'https://res.cloudinary.com/dt9sjix9r/video/upload/v1769269254/IMG_7196_x1fqfu.mov',
        'https://res.cloudinary.com/dt9sjix9r/video/upload/v1769269253/IMG_5324_1_k05kpp.mov'
      ],
      features: ['Cinematic Reels', 'Brand Stories', 'Motion Graphics', 'Post-Production', 'Script Writing'],
      process: [
        { step: 'Pre-Prod', description: 'Concept development and storyboarding.' },
        { step: 'Shoot', description: 'High-end production with cinema-grade equipment.' },
        { step: 'Post', description: 'Sound design, color grading, and final polish.' }
      ],
      extendedDescription: 'Motion is emotion. We capture the essence of your brand in frames, delivering visual stories that don’t just show—they speak.'
    }
  },
  {
    id: 'seo-google',
    title: 'SEO & Google Business Management',
    description: 'Search-optimized strategies to increase visibility, rankings, and local business growth.',
    icon: Search,
    detail: {
      heroImage: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877324/Google_Ads_Tips_for_Higher_Conversions_ep0f1d.jpg',
      galleryImages: [
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877324/Google_Ads_Tips_for_Higher_Conversions_ep0f1d.jpg',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771349070/IMG_4734_ohity1.png',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771349068/IMG_4749_1_vyhu5t.jpg'
      ],
      features: ['Local SEO', 'Keyword Analysis', 'GMB Optimization', 'Backlink Strategy', 'Competitor Intelligence'],
      process: [
        { step: 'Indexing', description: 'Ensuring your site is crawlable and indexed.' },
        { step: 'On-Page', description: 'Optimizing content and technical metadata.' },
        { step: 'Growth', description: 'Continuous monitoring and ranking improvements.' }
      ],
      extendedDescription: 'Be the answer to your customers’ questions. We optimize your digital presence so you appear exactly when and where people are looking for you.'
    }
  },
  {
    id: 'branding',
    title: 'Branding & Visual Identity',
    description: 'Crafting iconic logos, distinct visual languages, and powerful brand narratives that resonate.',
    icon: Palette,
    detail: {
      heroImage: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770882832/Screenshot_2026-02-12_132326_f7jns2.png',
      galleryImages: [
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877326/Creative_Coffeeheads_1_ewhui9.png',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877327/Muniya_Fastfood_1_uc8jjd.png',
        'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770882832/Screenshot_2026-02-12_132326_f7jns2.png'
      ],
      features: ['Logo Design', 'Visual Identity Systems', 'Brand Guidelines', 'Typography & Color Theory', 'Packaging Design', 'Brand Voice Development'],
      process: [
        { step: 'Soul Discovery', description: 'Defining the core essence, personality, and values of the brand.' },
        { step: 'Visual Synthesis', description: 'Sketching, refining, and engineering iconic visual assets and logos.' },
        { step: 'Identity Systems', description: 'Building a cohesive ecosystem for all digital and physical touchpoints.' }
      ],
      extendedDescription: 'Branding is the DNA of your business. We go beyond aesthetics to build identities that tell a story, evoke emotion, and command presence. From sketches to comprehensive brand systems, we define how the world sees you.'
    }
  }
];

export const PORTFOLIO_ITEMS: DetailedPortfolioItem[] = [
  {
    id: 'the-standard',
    title: 'The Standard',
    category: 'Gym / Fitness Website',
    client: 'The Standard Fitness',
    year: '2025',
    liveUrl: 'https://the-standard-pi.vercel.app/',
    description: 'A bold, performance-driven website designed for a modern gym brand.',
    challenge: 'Digital transformation of a high-performance training facility.',
    solution: 'High-octane UI with motion-first interactions.',
    process: 'Design Systems > Frontend Engineering',
    impact: 'Increased member sign-ups by 40%.',
    tags: ['Fitness', 'Branding', 'High Performance'],
    imageUrl: 'https://i.ibb.co/5xnzPKyK/Screenshot-2026-01-14-171952.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'flesh-metals',
    title: 'Flesh Metals',
    category: 'Tattoo Studio Website',
    client: 'Flesh Metals',
    year: '2025',
    liveUrl: 'https://flesh-metals.vercel.app/',
    description: 'A dark, edgy, and artistic website crafted for a tattoo studio.',
    challenge: 'Capturing the raw essence of tattoo art in a digital space.',
    solution: 'Cinematic layout with high-contrast monochrome tones.',
    process: 'Artistic Direction > UI/UX Prototype',
    impact: 'Elevated studio brand positioning to premium tier.',
    tags: ['Artistic', 'Tattoo', 'Visual Identity'],
    imageUrl: 'https://i.ibb.co/G3C41XMg/Screenshot-2026-01-14-172301.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'blitz-arena',
    title: 'The Blitz Arena',
    category: 'Football Turf Website',
    client: 'Blitz Arena',
    year: '2025',
    liveUrl: 'https://turf-aiff.vercel.app/',
    description: 'A dynamic and energetic website for a football turf arena.',
    challenge: 'Creating a seamless booking-focused landing page.',
    solution: 'Vibrant colors paired with sports-oriented typography.',
    process: 'UX Mapping > Booking Flow > Development',
    impact: 'Streamlined facility discovery for athletes.',
    tags: ['Sports', 'Football', 'Booking UX'],
    imageUrl: 'https://i.ibb.co/zW6XqX6r/Screenshot-2026-01-16-225431.png',
    gridSpan: 'col-span-1',
  },
];

export const SOCIAL_PORTFOLIO: DetailedPortfolioItem[] = [
  {
    id: 'social-1',
    title: 'Cafe Nuha',
    category: 'Mango Tart',
    client: 'Cafe Nuha',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Strategic handles for a premier lifestyle brand.',
    challenge: 'Growing engagement across high-competition niches.',
    solution: 'Curated aesthetic and rhythmic posting schedules.',
    process: 'Content Audit > Brand Voice > Management',
    impact: '200% growth in organic reach.',
    tags: ['SMM', 'Lifestyle', 'Engagement'],
    imageUrl: 'https://res.cloudinary.com/dt9sjix9r/image/upload/v1769269493/IMG_7224e_hbtmd7.jpg',
    gridSpan: 'col-span-1',
  },
  {
    id: 'social-2',
    title: 'The Reservoir',
    category: 'Bao',
    client: 'The Reservoir',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Mouth-watering content strategy for the modern foodie.',
    challenge: 'Making food look as good as it tastes digitally.',
    solution: 'High-contrast food photography and interactive stories.',
    process: 'Visual Design > Content Strategy',
    impact: 'Viral reach on culinary reels.',
    tags: ['Content', 'Food', 'Social'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770140621/Tasty_BAO_1080_x_1440_px_ojllgv.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'social-3',
    title: 'Kreme Kultura',
    category: 'Social Media Brand Management',
    client: 'Kreme Kultura',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Premium culinary content for high-end dessert branding.',
    challenge: 'Capturing textures and luxury appeal for high-end patisserie.',
    solution: 'Studio lighting and macro photography techniques.',
    process: 'Styling > Production > Management',
    impact: 'Significant lift in social referral traffic.',
    tags: ['Culinary', 'Luxury', 'Visuals'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770141318/New_York_Cheesecake_qzhkj3.jpg',
    gridSpan: 'col-span-1',
  },
];

export const VIDEO_PORTFOLIO: DetailedPortfolioItem[] = [
  {
    id: 'video-1',
    title: 'Cinematic Reel',
    category: 'Video Production',
    client: 'Studio Echelon',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    videoUrl: 'https://res.cloudinary.com/dt9sjix9r/video/upload/v1769269249/IMG_5282_1_kdaqcy.mov',
    description: 'High-end cinematic video production for brand storytelling.',
    challenge: 'Stopping the scroll with premium visuals.',
    solution: 'High-FPS slow motion and color grading.',
    process: 'Pre-Prod > Shoot > Post',
    impact: '10M+ aggregate views across campaigns.',
    tags: ['Cinematic', 'Reels', 'Brand Film'],
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
    gridSpan: 'col-span-1',
  },
  {
    id: 'video-2',
    title: 'Dynamic Ads',
    category: 'Content Creation',
    client: 'Echelon',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    videoUrl: 'https://res.cloudinary.com/dt9sjix9r/video/upload/v1769269253/IMG_5324_1_k05kpp.mov',
    description: 'Fast-paced dynamic advertisements for digital platforms.',
    challenge: 'Capturing attention in under 3 seconds.',
    solution: 'Rhythmic editing and high-energy soundtracks.',
    process: 'Brief > Motion Graphics > Delivery',
    impact: 'Significant boost in CTR for paid ads.',
    tags: ['Ads', 'Creative', 'Motion'],
    imageUrl: 'https://res.cloudinary.com/dt9sjix9r/image/upload/v1769622062/WhatsApp_Image_2026-01-28_at_9.28.27_PM_3_jj1la4.jpg',
    gridSpan: 'col-span-1',
  },
  {
    id: 'video-3',
    title: 'Atmospheric Story',
    category: 'Cinematic Creation',
    client: 'Echelon Partners',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    videoUrl: 'https://res.cloudinary.com/dt9sjix9r/video/upload/v1769269254/IMG_7196_x1fqfu.mov',
    description: 'Immersive visual narrative capturing the essence of brand culture.',
    challenge: 'Translating complex brand values into silent visual cues.',
    solution: 'Atmospheric lighting and deliberate camera movement.',
    process: 'Conceptualization > Production > Grading',
    impact: 'Established a new benchmark for brand visual quality.',
    tags: ['Storytelling', 'Atmosphere'],
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
    gridSpan: 'col-span-1',
  },
];

export const INFLUENCER_PORTFOLIO: DetailedPortfolioItem[] = [
  {
    id: 'inf-1',
    title: 'Influencer Strategy',
    category: 'Influencer Marketing',
    client: 'Echelon Global',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Comprehensive influencer mapping and strategy framework.',
    challenge: 'Aligning brand voice with high-authority creators.',
    solution: 'Niche-specific creator selection and outcome modeling.',
    process: 'Analysis > Strategy > Deployment',
    impact: 'Coordinated reach exceeding 5M+ targeted users.',
    tags: ['Strategy', 'Creators', 'Reach'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770790692/Screenshot_2026-02-11_114643_vrslbd.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'inf-2',
    title: 'Brand Partnerships',
    category: 'Influencer Marketing',
    client: 'Premium Partners',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'High-trust brand advocacy through long-term creator ties.',
    challenge: 'Maintaining authenticity during rapid market scaling.',
    solution: 'Relationship-first onboarding and creative freedom.',
    process: 'Networking > Alignment > Growth',
    impact: '2.5x increase in brand sentiment scores.',
    tags: ['Partnerships', 'Advocacy'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771321118/1000246885_v3xdyr.jpg',
    gridSpan: 'col-span-1',
  },
  {
    id: 'inf-3',
    title: 'Creator Network',
    category: 'Influencer Marketing',
    client: 'Growth Hub',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Scalable community seeding and micro-influencer management.',
    challenge: 'Managing fragmented campaigns at high volume.',
    solution: 'Centralized management dashboard and automated reporting.',
    process: 'Scouting > Automation > ROI Analysis',
    impact: 'Consistent month-on-month engagement growth.',
    tags: ['Community', 'Scale', 'Marketing'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771321118/1000246897_v0yjcw.jpg',
    gridSpan: 'col-span-1',
  },
];

export const BRANDING_PORTFOLIO: DetailedPortfolioItem[] = [
  {
    id: 'brand-1',
    title: 'Creative Coffeeheads',
    category: 'Branding & Identity',
    client: 'Coffeeheads Inc.',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Iconic visual identity for a premium urban coffee brand.',
    challenge: 'Defining a unique visual voice in a saturated market.',
    solution: 'High-contrast typography and minimalist logo design.',
    process: 'Discovery > Visual Synthesis > Systems',
    impact: 'Established immediate brand recognition and presence.',
    tags: ['Identity', 'Logo', 'Visuals'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877326/Creative_Coffeeheads_1_ewhui9.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'brand-2',
    title: 'Muniya Fastfood',
    category: 'Visual Design',
    client: 'Muniya Foods',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Vibrant and energetic branding for a modern fast-food chain.',
    challenge: 'Scaling a local favorite into a recognizable franchise brand.',
    solution: 'Playful color palettes and rhythmic graphic patterns.',
    process: 'Brand Audit > Design Development',
    impact: '30% increase in brand-driven customer traffic.',
    tags: ['Franchise', 'Colors', 'Patterns'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877327/Muniya_Fastfood_1_uc8jjd.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'brand-3',
    title: 'Identity Systems',
    category: 'Branding',
    client: 'Echelon Creative',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Comprehensive design guidelines and visual systems.',
    challenge: 'Ensuring absolute consistency across digital and print.',
    solution: 'Modular design frameworks and atomic asset libraries.',
    process: 'Synthesis > Guidelines > Deployment',
    impact: 'Halved brand-related production turnaround times.',
    tags: ['Systems', 'Guidelines', 'Design'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770882832/Screenshot_2026-02-12_132326_f7jns2.png',
    gridSpan: 'col-span-1',
  },
];

export const SEO_PORTFOLIO: DetailedPortfolioItem[] = [
  {
    id: 'seo-1',
    title: 'Conversion Strategy',
    category: 'SEO & Performance',
    client: 'Echelon Tech',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'High-intent search optimization for conversion-focused sites.',
    challenge: 'Targeting low-volume, high-value conversion keywords.',
    solution: 'Technical SEO audits and long-tail content strategy.',
    process: 'Indexing > Audit > Content Growth',
    impact: '45% increase in organic leads within 6 months.',
    tags: ['Search', 'Conversions', 'Audit'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1770877324/Google_Ads_Tips_for_Higher_Conversions_ep0f1d.jpg',
    gridSpan: 'col-span-1',
  },
  {
    id: 'seo-2',
    title: 'Market Penetration',
    category: 'SEO Strategy',
    client: 'Kerala Marketers',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Strategic search positioning for regional market leaders.',
    challenge: 'Disrupting established competitors in regional search.',
    solution: 'Localized SEO and high-authority link building.',
    process: 'Local Analysis > Backlink Strategy',
    impact: 'Top 3 rankings for all primary industry keywords.',
    tags: ['Local SEO', 'Growth', 'Keywords'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771349070/IMG_4734_ohity1.png',
    gridSpan: 'col-span-1',
  },
  {
    id: 'seo-3',
    title: 'Strategic Growth',
    category: 'Performance Marketing',
    client: 'Goal Oriented Labs',
    year: '2025',
    liveUrl: INSTAGRAM_LINK,
    description: 'Outcome-based SEO and multi-channel search strategy.',
    challenge: 'Aligning SEO results with direct business KPIs.',
    solution: 'Data-driven content cycles and rhythmic optimization.',
    process: 'Analysis > Deployment > Monitoring',
    impact: 'Sustainable double-digit organic growth YoY.',
    tags: ['Data', 'KPIs', 'Sustainability'],
    imageUrl: 'https://res.cloudinary.com/dy6mwk08r/image/upload/v1771349068/IMG_4749_1_vyhu5t.jpg',
    gridSpan: 'col-span-1',
  },
];
