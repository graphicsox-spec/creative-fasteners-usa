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
    id: 'cold-heading',
    enabled: true,
    eyebrow: 'COLD HEADING • PRECISION FORMING',
    headline: 'PRECISION FASTENERS. FORMED FOR PERFORMANCE.',
    headlineLead: 'PRECISION FASTENERS.',
    headlineRest: 'FORMED FOR PERFORMANCE.',
    description:
      'Cold heading capabilities supported by controlled tooling, progressive forming and responsive made-to-spec manufacturing.',
    video: assetPath('assets/media/hero/Video-01.mp4'),
    poster: assetPath('assets/media/hero/precision-fasteners-poster.webp'),
  },
  {
    id: 'thread-rolling',
    enabled: true,
    eyebrow: 'THREAD ROLLING • CONTROLLED THREADING',
    headline: 'ACCURATE THREADS. CONSISTENT PERFORMANCE.',
    headlineLead: 'ACCURATE THREADS.',
    headlineRest: 'CONSISTENT PERFORMANCE.',
    description:
      'Precision thread rolling and threading processes engineered for consistent profiles, dimensional accuracy and dependable fit.',
    video: assetPath('assets/media/hero/Video-02.mp4'),
    poster: assetPath('assets/media/hero/precision-fasteners-poster.webp'),
  },
  {
    id: 'tooling-dies',
    enabled: true,
    eyebrow: 'COLD HEADING DIES • PUNCH DIES • TRIMMING',
    headline: 'CONTROLLED TOOLING AT EVERY FORMING STAGE.',
    headlineLead: 'CONTROLLED TOOLING',
    headlineRest: 'AT EVERY FORMING STAGE.',
    description:
      'Cold heading dies, punch dies and trimming operations support repeatable geometry from initial forming through final production.',
    video: assetPath('assets/media/hero/Video-03.mp4'),
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
  | 'dies'
  | 'tooling'
  | 'trimming'
  | 'heat'
  | 'passivation'
  | 'finishes'
  | 'drilling';

export const capabilities: Array<{
  number: string;
  title: string;
  description: string;
  icon: CapabilityIcon;
}> = [
  {
    number: '01',
    title: 'Cold Heading',
    description:
      'Progressive cold forming processes that shape solid metal into strong, dimensionally consistent precision fasteners.',
    icon: 'forming',
  },
  {
    number: '02',
    title: 'Thread Rolling & Threading',
    description:
      'Controlled rolling and threading processes that produce accurate thread profiles, consistent pitch and improved material strength.',
    icon: 'threading',
  },
  {
    number: '03',
    title: 'Cold Heading Dies',
    description:
      'Cold heading die requirements reviewed around fastener geometry, material flow, dimensional accuracy and production repeatability.',
    icon: 'dies',
  },
  {
    number: '04',
    title: 'Punch Dies & Tooling',
    description:
      'Precision punch dies and forming tooling support accurate head development across successive cold-heading stages.',
    icon: 'tooling',
  },
  {
    number: '05',
    title: 'Trimming & Secondary Operations',
    description:
      'Controlled trimming removes excess formed material and creates clean, consistent head profiles according to drawing requirements.',
    icon: 'trimming',
  },
  {
    number: '06',
    title: 'Heat Treatment & Specialized Finishes',
    description:
      'Heat treatment, passivation, plating and specialized finishes coordinated around material, performance and specification requirements.',
    icon: 'heat',
  },
  {
    number: '07',
    title: 'Precision Drilling',
    description:
      'Controlled drilling approaches for features where location and dimensional consistency matter.',
    icon: 'drilling',
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
