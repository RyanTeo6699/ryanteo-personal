export type PageDirectoryEntry = {
  id: string;
  label: string;
  to: string;
  summary: string;
};

export type QuickLink = {
  id: string;
  index: string;
  label: string;
  description: string;
  to?: string;
  targetId?: string;
};

export type Capability = {
  id: string;
  label: string;
  shortLabel?: string;
  description: string;
  relatedProjectIds: string[];
};

export type Project = {
  id: string;
  index: string;
  title: string;
  positioning: string;
  whyItMatters: string;
  angle: string;
  role: string;
  relatedCapabilityIds: string[];
};

export type ContactLink = {
  id: 'email' | 'linkedin' | 'github';
  label: string;
  href: string;
};

type CapabilityRecord = Omit<Capability, 'relatedProjectIds'>;
type ProjectRecord = Omit<Project, 'relatedCapabilityIds'>;

export const siteIdentity = {
  name: 'Ryan',
  tagline: 'Building AI products, systems, and leverage.',
};

export const avatarImageUrl = new URL('../../素材/头像.JPG', import.meta.url).href;

export const pageDirectory: PageDirectoryEntry[] = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    summary:
      'Primary surface for positioning, selected work, capability mapping, and the core signal of how Ryan builds.',
  },
  {
    id: 'projects',
    label: 'Projects',
    to: '/projects',
    summary:
      'A dedicated archive of product systems, workflow platforms, consumer utility, and digital presence work.',
  },
  {
    id: 'about',
    label: 'About',
    to: '/about',
    summary:
      'A grounded personal page focused on product judgment, systems thinking, and execution across web, iOS, and applied AI.',
  },
  {
    id: 'contact',
    label: 'Contact',
    to: '/contact',
    summary:
      'Direct contact channels for selected conversations around products, systems, and applied AI.',
  },
];

export const systemRailRows = [
  {
    label: 'Positioning',
    value: 'AI products, systems, leverage.',
  },
  {
    label: 'Bias',
    value: 'Workflow over novelty.',
  },
  {
    label: 'Surfaces',
    value: 'Web, iOS, automation, applied AI.',
  },
];

export const heroContent = {
  name: 'Ryan',
  primaryLine: 'Building AI products, systems, and leverage.',
  supportingLines: [
    'I build products where workflow matters more than novelty.',
    'My work sits at the intersection of AI, execution, product systems, and real-world usability.',
  ],
  primaryCta: {
    label: 'View Work',
    targetId: 'selected-work',
  },
  secondaryCta: {
    label: 'Get in Touch',
    targetId: 'contact-preview',
  },
  statusRows: [
    {
      label: 'Current focus',
      value: 'Products that move from suggestion to action.',
    },
    {
      label: 'Operating range',
      value: 'Product framing, workflow design, web, iOS, execution.',
    },
    {
      label: 'Core thesis',
      value: 'Utility compounds when systems actually hold together.',
    },
  ],
};

export const quickLinks: QuickLink[] = [
  {
    id: 'selected-work',
    index: '01',
    label: 'Selected Work',
    description: 'Jump to the real project surface: AI workflow, iOS utility, web systems, and execution.',
    targetId: 'selected-work',
  },
  {
    id: 'capability-map',
    index: '02',
    label: 'Capability Map',
    description: 'Trace how each capability connects to shipped work instead of reading a static skills list.',
    targetId: 'capability-map',
  },
  {
    id: 'projects-page',
    index: '03',
    label: 'Projects',
    description: 'Open the dedicated project archive with full context, role, and capability framing.',
    to: '/projects',
  },
  {
    id: 'about-page',
    index: '04',
    label: 'About',
    description: 'See the personal context behind the work, systems bias, and execution style.',
    to: '/about',
  },
  {
    id: 'contact-page',
    index: '05',
    label: 'Contact',
    description: 'Open the compact contact surface for direct email, LinkedIn, and GitHub links.',
    to: '/contact',
  },
];

const capabilityRecords: CapabilityRecord[] = [
  {
    id: 'product-systems',
    label: 'Product Systems',
    shortLabel: 'Systems',
    description:
      'Connects user flow, decision logic, and product structure into one operating model.',
  },
  {
    id: 'ai-workflow-design',
    label: 'AI Workflow Design',
    shortLabel: 'AI Workflow',
    description:
      'Uses AI inside structured flow, review logic, and real execution instead of generic prompts.',
  },
  {
    id: 'swiftui-ios',
    label: 'SwiftUI / iOS',
    shortLabel: 'iOS',
    description:
      'Builds native product loops with clarity, release discipline, and useful interaction design.',
  },
  {
    id: 'nextjs-web',
    label: 'Next.js / Web',
    shortLabel: 'Web',
    description:
      'Turns positioning and product logic into coherent web surfaces that feel sharp and legible.',
  },
  {
    id: 'automation',
    label: 'Automation',
    shortLabel: 'Automation',
    description:
      'Creates repeatable operating leverage where manual follow-through would normally break down.',
  },
  {
    id: 'strategy',
    label: 'Strategy',
    shortLabel: 'Strategy',
    description:
      'Frames sequence, scope, and product direction around what can survive contact with real use.',
  },
  {
    id: 'execution',
    label: 'Execution',
    shortLabel: 'Execution',
    description:
      'Carries the thread from product framing into the shipped surface without losing coherence.',
  },
  {
    id: 'llm-productization',
    label: 'LLM Productization',
    shortLabel: 'LLM',
    description:
      'Turns model capability into interfaces, workflows, and loops that people can actually use.',
  },
];

const projectRecords: ProjectRecord[] = [
  {
    id: 'immi-pilot',
    index: '01',
    title: 'ImmiPilot',
    positioning: 'A compliance-driven workflow platform for immigration execution.',
    whyItMatters:
      'It treats complex immigration work as a structured operating flow with checkpoints, review, and accountability instead of a loose AI chat experience.',
    angle:
      'Built around structured workflows, consultant review, and execution logic rather than generic AI chat.',
    role:
      'Product framing, workflow logic, LLM system design, and web execution.',
  },
  {
    id: 'shiok',
    index: '02',
    title: 'Shiok',
    positioning: 'An AI-assisted dining and behavioral bookkeeping product.',
    whyItMatters:
      'It uses constrained decisions and post-meal feedback loops to make dining data more useful than passive logging.',
    angle:
      'Designed around real user behavior, constrained decision-making, and post-meal feedback loops.',
    role:
      'Consumer product framing, native loop design, AI utility shaping, and execution.',
  },
  {
    id: 'you-wife-list',
    index: '03',
    title: 'You Wife List',
    positioning: 'A closed-loop shopping and home inventory system.',
    whyItMatters:
      'It connects planning, purchasing, storage, and consumption into a single household workflow instead of isolated list features.',
    angle:
      'Built to connect planning, purchasing, inventory, and consumption into one usable household workflow.',
    role:
      'Systems design, iOS utility thinking, workflow simplification, and execution.',
  },
  {
    id: 'bento-aiii',
    index: '04',
    title: 'Bento AIII',
    positioning: 'A digital presence system for an AI-native company.',
    whyItMatters:
      'It turns positioning, technical direction, and capability into a web system that can communicate clearly without startup filler.',
    angle:
      'A brand-facing and narrative-facing web system designed to express positioning, capability, and technical direction with clarity.',
    role:
      'Narrative system design, web experience architecture, automation thinking, and execution.',
  },
];

const relationshipPairs = [
  { capabilityId: 'product-systems', projectId: 'immi-pilot' },
  { capabilityId: 'ai-workflow-design', projectId: 'immi-pilot' },
  { capabilityId: 'strategy', projectId: 'immi-pilot' },
  { capabilityId: 'execution', projectId: 'immi-pilot' },
  { capabilityId: 'llm-productization', projectId: 'immi-pilot' },
  { capabilityId: 'nextjs-web', projectId: 'immi-pilot' },
  { capabilityId: 'product-systems', projectId: 'shiok' },
  { capabilityId: 'ai-workflow-design', projectId: 'shiok' },
  { capabilityId: 'swiftui-ios', projectId: 'shiok' },
  { capabilityId: 'execution', projectId: 'shiok' },
  { capabilityId: 'llm-productization', projectId: 'shiok' },
  { capabilityId: 'product-systems', projectId: 'you-wife-list' },
  { capabilityId: 'swiftui-ios', projectId: 'you-wife-list' },
  { capabilityId: 'execution', projectId: 'you-wife-list' },
  { capabilityId: 'strategy', projectId: 'you-wife-list' },
  { capabilityId: 'nextjs-web', projectId: 'bento-aiii' },
  { capabilityId: 'automation', projectId: 'bento-aiii' },
  { capabilityId: 'strategy', projectId: 'bento-aiii' },
  { capabilityId: 'execution', projectId: 'bento-aiii' },
];

export const projects: Project[] = projectRecords.map((project) => ({
  ...project,
  relatedCapabilityIds: relationshipPairs
    .filter((pair) => pair.projectId === project.id)
    .map((pair) => pair.capabilityId),
}));

export const capabilities: Capability[] = capabilityRecords.map((capability) => ({
  ...capability,
  relatedProjectIds: relationshipPairs
    .filter((pair) => pair.capabilityId === capability.id)
    .map((pair) => pair.projectId),
}));

export const selectedWorkContent = {
  title: 'Selected Work',
  intro:
    'A selection of products, systems, and platforms I have been shaping across AI, workflow, consumer utility, and digital presence.',
};

export const capabilityMapContent = {
  title: 'Capability Map',
  intro: 'A structured view of how I work across product, systems, and execution.',
  supportingCopy:
    'Click a capability to see how it connects to selected work. I do not treat capabilities as isolated tools. I treat them as parts of systems that need to ship, hold together, and create leverage.',
};

export const projectsPageContent = {
  title: 'Projects',
  intro:
    'A dedicated project surface for the products, systems, and web platforms Ryan has been shaping across AI, utility, and digital presence.',
};

export const aboutContent = {
  title: 'About',
  intro: 'I work on products that sit between software, behavior, and decision systems.',
  paragraphs: [
    'My interest is not in making things look AI-powered. It is in designing products that help people act more clearly, move through messy processes, and build better systems around real use cases.',
    'Across web, iOS, workflow design, and applied AI, I focus on products that can move beyond novelty and become structurally useful.',
    'I care about front ends that feel sharp and desirable, and back ends that quietly become systems of record through actual use.',
  ],
  metadata: [
    {
      label: 'Focus',
      value: 'AI products, workflow systems, consumer utility.',
    },
    {
      label: 'Surfaces',
      value: 'Web, iOS, automation, product systems.',
    },
    {
      label: 'Bias',
      value: 'Clarity, utility, leverage, execution.',
    },
    {
      label: 'Working mode',
      value: 'Product framing through shipping.',
    },
  ],
};

export const contactContent = {
  title: 'Contact',
  intro:
    'I am open to selected conversations around products, systems, and applied AI.',
};

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:ryanteo0628@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryanteo101/',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/RyanTeo6699',
  },
];

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}

export function getCapabilityById(capabilityId: string) {
  return capabilities.find((capability) => capability.id === capabilityId);
}

export function getProjectsForCapability(capabilityId: string) {
  return projects.filter((project) => project.relatedCapabilityIds.includes(capabilityId));
}

export function getCapabilitiesForProject(projectId: string) {
  return capabilities.filter((capability) => capability.relatedProjectIds.includes(projectId));
}

export function getPageByPath(pathname: string) {
  return pageDirectory.find((page) => page.to === pathname) ?? pageDirectory[0];
}
