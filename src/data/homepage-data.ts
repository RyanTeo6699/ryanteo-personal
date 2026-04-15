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
  angle: string;
  relatedCapabilityIds: string[];
};

export type ThinkingEntry = {
  id: string;
  text: string;
};

export type ContactLink = {
  id: string;
  label: string;
  href?: string;
  value: string;
};

type CapabilityRecord = Omit<Capability, 'relatedProjectIds'>;
type ProjectRecord = Omit<Project, 'relatedCapabilityIds'>;

export const heroContent = {
  name: 'Ryan',
  primaryLine: 'Building AI products, systems, and leverage.',
  supportingLines: [
    'I build products where workflow matters more than novelty.',
    'My work sits at the intersection of AI, execution, product systems, and real-world usability.',
  ],
  primaryCta: {
    label: 'View Work',
    href: '#selected-work',
  },
  secondaryCta: {
    label: 'Get in Touch',
    href: '#contact',
  },
  asideTitle: 'Working across',
  asideItems: [
    'AI workflow products',
    'Consumer utility',
    'iOS and web systems',
    'Narrative digital presence',
  ],
};

const capabilityRecords: CapabilityRecord[] = [
  {
    id: 'product-systems',
    label: 'Product Systems',
    shortLabel: 'Systems',
    description: 'Connects user flow, product logic, and decision structure into one usable system.',
  },
  {
    id: 'ai-workflow-design',
    label: 'AI Workflow Design',
    shortLabel: 'AI Workflows',
    description: 'Shapes AI around operational flow, review logic, and action instead of novelty chat.',
  },
  {
    id: 'swiftui-ios',
    label: 'SwiftUI / iOS',
    shortLabel: 'iOS',
    description: 'Builds native product experiences with clear state, useful loops, and release discipline.',
  },
  {
    id: 'nextjs-web',
    label: 'Next.js / Web',
    shortLabel: 'Web',
    description: 'Designs web surfaces that carry story, positioning, and system clarity without noise.',
  },
  {
    id: 'automation',
    label: 'Automation',
    shortLabel: 'Automation',
    description: 'Turns manual follow-through into repeatable, structured operating leverage.',
  },
  {
    id: 'strategy',
    label: 'Strategy',
    shortLabel: 'Strategy',
    description: 'Frames product direction through constraints, sequencing, and what will hold in use.',
  },
  {
    id: 'execution',
    label: 'Execution',
    shortLabel: 'Execution',
    description: 'Moves from framing to shipped product without losing the thread in implementation.',
  },
  {
    id: 'llm-productization',
    label: 'LLM Productization',
    shortLabel: 'LLM',
    description: 'Turns language-model capability into interfaces and flows that can actually be used.',
  },
];

const projectRecords: ProjectRecord[] = [
  {
    id: 'immi-pilot',
    index: '01',
    title: 'ImmiPilot',
    positioning: 'A compliance-driven workflow platform for immigration execution.',
    angle:
      'Built around structured workflows, consultant review, and execution logic rather than generic AI chat.',
  },
  {
    id: 'shiok',
    index: '02',
    title: 'Shiok',
    positioning: 'An AI-assisted dining and behavioral bookkeeping product.',
    angle:
      'Designed around real user behavior, constrained decision-making, and post-meal feedback loops.',
  },
  {
    id: 'you-wife-list',
    index: '03',
    title: 'You Wife List',
    positioning: 'A closed-loop shopping and home inventory system.',
    angle:
      'Built to connect planning, purchasing, inventory, and consumption into one usable household workflow.',
  },
  {
    id: 'bento-aiii',
    index: '04',
    title: 'Bento AIII',
    positioning: 'A digital presence system for an AI-native company.',
    angle:
      'A brand-facing and narrative-facing web system designed to express positioning, capability, and technical direction with clarity.',
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
    'Click a capability to see how it connects to selected work. I do not treat skills as isolated tools. I treat them as parts of systems that need to ship, hold together, and create leverage.',
};

export const thinkingEntries: ThinkingEntry[] = [
  { id: 'generic-ai-wrappers', text: 'I do not build generic AI wrappers.' },
  { id: 'execution-vs-advice', text: 'Advice is easy to copy. Execution is harder.' },
  { id: 'friction-before-features', text: 'Good products reduce friction before they add features.' },
  {
    id: 'workflow-retention',
    text: 'A real moat is built through workflow, retention, and accumulated structure.',
  },
  {
    id: 'front-end-back-end',
    text: 'The front end should feel clear and desirable. The back end should quietly become a system of record.',
  },
  {
    id: 'suggestion-to-action',
    text: 'I am interested in products that move from suggestion to action.',
  },
];

export const aboutContent = {
  title: 'About',
  paragraphs: [
    'I work on products that sit between software, behavior, and decision systems.',
    'My interest is not in making things look “AI-powered.” It is in designing products that help people act more clearly, move through messy processes, and build better systems around real use cases.',
    'Across web, iOS, workflow design, and applied AI, I focus on products that can move beyond novelty and become structurally useful.',
  ],
};

export const contactContent = {
  title: 'Contact',
  intro: 'I am open to selected conversations around products, systems, and applied AI.',
};

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:iceray0628@gmail.com',
    value: 'iceray0628@gmail.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/RyanTeo6699',
    value: 'RyanTeo6699',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'available on request',
  },
  {
    id: 'x',
    label: 'X',
    value: 'available on request',
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
