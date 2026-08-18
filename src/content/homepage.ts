const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type HeroSlide = {
  id: string;
  enabled?: boolean;
  eyebrow: string;
  headline: string;
  headlineLead?: string;
  headlineRest?: string;
  headlineFinal?: string;
  description: string;
  video: string;
  poster: string;
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Quality', href: '#quality' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const configuredHeroSlides: HeroSlide[] = [
  {
    id: 'rfq',
    enabled: true,
    eyebrow: 'MADE TO SPEC • READY FOR REVIEW',
    headline: 'YOUR REQUIREMENTS. OUR MANUFACTURING FOCUS.',
    headlineLead: 'YOUR REQUIREMENTS.',
    headlineRest: 'OUR MANUFACTURING FOCUS.',
    description:
      'Share your drawing, part number, material, finish, quantity, and delivery needs for a focused RFQ review.',
    video: assetPath('assets/media/hero/Video-081826-V1.mp4'),
    poster: assetPath('assets/media/hero/precision-fasteners-poster.webp'),
  },
  {
    id: 'precision',
    enabled: true,
    eyebrow: 'AEROSPACE • DEFENSE • PRECISION',
    headline: 'MISSION-CRITICAL FASTENERS. BUILT WITH PRECISION.',
    description:
      'Precision manufacturing backed by controlled processes, in-process inspection, and dependable execution.',
    video: assetPath('assets/media/hero/Video-081826-V2.mp4'),
    poster: assetPath('assets/media/hero/precision-fasteners-poster.webp'),
  },
  {
    id: 'control',
    enabled: true,
    eyebrow: 'CONTROLLED PROCESSES • VISIBLE QUALITY',
    headline: 'PRECISION AT EVERY PRODUCTION STAGE.',
    description:
      'Structured routing and dimensional checks keep requirements visible from material review through final release.',
    video: assetPath('assets/media/hero/Video-081826-V3.mp4'),
    poster: assetPath('assets/media/hero/precision-fasteners-poster.webp'),
  },
];

export const heroSlides = configuredHeroSlides.filter(
  (slide) => slide.enabled !== false,
);

export const trustItems = [
  'Precision Manufacturing',
  'Process-Controlled Inspection',
  'Responsive RFQ Support',
];

export type CapabilityIcon =
  | 'forming'
  | 'threading'
  | 'drilling'
  | 'heat'
  | 'passivation'
  | 'finishes';

export const capabilities: Array<{
  number: string;
  title: string;
  description: string;
  icon: CapabilityIcon;
}> = [
  {
    number: '01',
    title: 'Hot and Cold Forming',
    description: 'Forming requirements reviewed around geometry, material behavior, and intended application.',
    icon: 'forming',
  },
  {
    number: '02',
    title: 'Pointing and Threading',
    description: 'Thread and point configurations aligned to drawing requirements and functional fit.',
    icon: 'threading',
  },
  {
    number: '03',
    title: 'Precision Drilling',
    description: 'Controlled drilling approaches for features where location and dimensional consistency matter.',
    icon: 'drilling',
  },
  {
    number: '04',
    title: 'Heat Treating',
    description: 'Heat-treatment requirements coordinated against material, specification, and performance needs.',
    icon: 'heat',
  },
  {
    number: '05',
    title: 'Passivation',
    description: 'Passivation requirements reviewed as part of the complete material and finish specification.',
    icon: 'passivation',
  },
  {
    number: '06',
    title: 'Plating and Specialized Finishes',
    description: 'Finish requirements evaluated for compatibility, protection, and drawing compliance.',
    icon: 'finishes',
  },
];

export const qualitySteps = [
  {
    number: '01',
    title: 'Material Verification',
    description: 'Review incoming material identity and applicable order requirements before production begins.',
  },
  {
    number: '02',
    title: 'Process Router Control',
    description: 'Maintain a clear production path with defined operations and review points.',
  },
  {
    number: '03',
    title: 'In-Process Dimensional Inspection',
    description: 'Check critical dimensions during manufacturing—not only after completion.',
  },
  {
    number: '04',
    title: 'Final Quality Review',
    description: 'Evaluate finished parts against applicable drawing and order requirements.',
  },
  {
    number: '05',
    title: 'Documentation and Release',
    description: 'Complete the required production record review before authorized release.',
  },
];

export const industries = [
  {
    number: '01',
    title: 'Aerospace',
    description: 'Precision fastener requirements for demanding airborne and space-related applications.',
    image: assetPath('assets/images/industries/aerospace.webp'),
    alt: 'A technician dimensionally inspecting a precision threaded component',
  },
  {
    number: '02',
    title: 'Defense',
    description: 'Made-to-spec manufacturing support for controlled, mission-focused supply programs.',
    image: assetPath('assets/images/industries/defense.webp'),
    alt: 'Organized trays of precision fasteners beside inspection tools',
  },
  {
    number: '03',
    title: 'Precision Industrial Manufacturing',
    description: 'Consistent components for engineered equipment and exacting industrial assemblies.',
    image: assetPath('assets/images/industries/precision-industrial.webp'),
    alt: 'Precision machined components arranged in front of a modern CNC machine',
  },
];

export const differentiators = [
  {
    number: '01',
    title: 'Manufacturing Discipline',
    description: 'A production mindset centered on requirements, repeatable execution, and documented review points.',
  },
  {
    number: '02',
    title: 'Dimensional Consistency',
    description: 'Attention to the features, tolerances, and fit that make every component perform as intended.',
  },
  {
    number: '03',
    title: 'Process Visibility',
    description: 'Clear routing and inspection touchpoints that keep quality connected to production.',
  },
  {
    number: '04',
    title: 'Responsive Communication',
    description: 'Focused RFQ review and direct communication around the details that shape manufacturability.',
  },
  {
    number: '05',
    title: 'Made-to-Spec Production',
    description: 'Every conversation starts with the drawing, material, finish, quantity, and delivery requirement.',
  },
];
