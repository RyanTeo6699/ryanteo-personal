export type Skill = {
  id: string;
  label: string;
  shortLabel?: string;
  level?: string;
  relatedProjectIds: string[];
};

export type Project = {
  id: string;
  title: string;
  eyebrow?: string;
  summary: string;
  tags?: string[];
  relatedSkillIds: string[];
};

type SkillRecord = Omit<Skill, 'relatedProjectIds'>;
type ProjectRecord = Omit<Project, 'relatedSkillIds'>;

const skillRecords: SkillRecord[] = [
  {
    id: 'ai-workflow-design',
    label: 'AI Workflow Design',
    shortLabel: 'AI Workflows',
    level: 'Core',
  },
  {
    id: 'llm-productization',
    label: 'LLM Productization',
    shortLabel: 'LLM Systems',
    level: 'Core',
  },
  {
    id: 'product-systems',
    label: 'Product Systems',
    shortLabel: 'Systems',
    level: 'Core',
  },
  {
    id: 'swiftui-ios',
    label: 'SwiftUI / iOS',
    shortLabel: 'iOS',
    level: 'Build',
  },
  {
    id: 'web-platforms',
    label: 'Next.js / Web',
    shortLabel: 'Web',
    level: 'Build',
  },
  {
    id: 'automation-ops',
    label: 'Automation',
    shortLabel: 'Automation',
    level: 'Operator',
  },
  {
    id: 'interaction-architecture',
    label: 'Interaction Architecture',
    shortLabel: 'Interaction',
    level: 'Craft',
  },
  {
    id: 'shipping-discipline',
    label: 'Shipping Discipline',
    shortLabel: 'Shipping',
    level: 'Execution',
  },
  {
    id: 'product-strategy',
    label: 'Product Strategy',
    shortLabel: 'Strategy',
    level: 'Decision',
  },
];

const projectRecords: ProjectRecord[] = [
  {
    id: 'founder-studio-systems',
    eyebrow: 'Independent product loops',
    title: 'Founder Studio Systems',
    summary:
      'Frames ambiguous ideas into structured product bets with enough rigor to test positioning, build the first version, and learn quickly from real usage.',
    tags: ['Direction', 'Build Scope', 'Decision Loops'],
  },
  {
    id: 'native-ios-releases',
    eyebrow: 'Mobile execution',
    title: 'Native iOS Release Cycles',
    summary:
      'Moves SwiftUI concepts into polished flows with clear state handling, tactile interactions, and a release mindset instead of prototype drift.',
    tags: ['SwiftUI', 'Interaction', 'Release Quality'],
  },
  {
    id: 'web-experience-architecture',
    eyebrow: 'Web systems',
    title: 'Web Experience Architecture',
    summary:
      'Builds high-signal web surfaces where hierarchy, motion, and performance support the product story instead of fighting it.',
    tags: ['Frontend', 'Performance', 'Narrative'],
  },
  {
    id: 'automation-command-layer',
    eyebrow: 'Operational leverage',
    title: 'Automation Command Layer',
    summary:
      'Designs repeatable internal systems that turn manual follow-through into reliable prompts, handoffs, reviews, and execution loops.',
    tags: ['Automation', 'Ops', 'System Design'],
  },
  {
    id: 'product-framing-engine',
    eyebrow: 'Strategic product depth',
    title: 'Product Framing Engine',
    summary:
      'Translates strategy, market sense, and scope choices into concrete product directions that teams can actually ship and iterate.',
    tags: ['Strategy', 'Positioning', 'Roadmapping'],
  },
];

const relationshipPairs = [
  { projectId: 'founder-studio-systems', skillId: 'ai-workflow-design' },
  { projectId: 'founder-studio-systems', skillId: 'llm-productization' },
  { projectId: 'founder-studio-systems', skillId: 'product-systems' },
  { projectId: 'founder-studio-systems', skillId: 'shipping-discipline' },
  { projectId: 'founder-studio-systems', skillId: 'product-strategy' },
  { projectId: 'native-ios-releases', skillId: 'swiftui-ios' },
  { projectId: 'native-ios-releases', skillId: 'interaction-architecture' },
  { projectId: 'native-ios-releases', skillId: 'shipping-discipline' },
  { projectId: 'web-experience-architecture', skillId: 'web-platforms' },
  { projectId: 'web-experience-architecture', skillId: 'interaction-architecture' },
  { projectId: 'web-experience-architecture', skillId: 'product-systems' },
  { projectId: 'web-experience-architecture', skillId: 'shipping-discipline' },
  { projectId: 'automation-command-layer', skillId: 'automation-ops' },
  { projectId: 'automation-command-layer', skillId: 'ai-workflow-design' },
  { projectId: 'automation-command-layer', skillId: 'llm-productization' },
  { projectId: 'automation-command-layer', skillId: 'shipping-discipline' },
  { projectId: 'product-framing-engine', skillId: 'product-strategy' },
  { projectId: 'product-framing-engine', skillId: 'product-systems' },
  { projectId: 'product-framing-engine', skillId: 'llm-productization' },
];

export const projects: Project[] = projectRecords.map((project) => ({
  ...project,
  relatedSkillIds: relationshipPairs
    .filter((pair) => pair.projectId === project.id)
    .map((pair) => pair.skillId),
}));

export const skills: Skill[] = skillRecords.map((skill) => ({
  ...skill,
  relatedProjectIds: relationshipPairs
    .filter((pair) => pair.skillId === skill.id)
    .map((pair) => pair.projectId),
}));

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}

export function getSkillById(skillId: string) {
  return skills.find((skill) => skill.id === skillId);
}

export function getProjectsForSkill(skillId: string) {
  return projects.filter((project) => project.relatedSkillIds.includes(skillId));
}

export function getSkillsForProject(projectId: string) {
  return skills.filter((skill) => skill.relatedProjectIds.includes(projectId));
}

