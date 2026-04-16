import type { LocaleMessages } from './types';

const en: LocaleMessages = {
  site: {
    name: 'Ryan Teo',
    metaTitle: 'Ryan Teo | Personal system for AI products, systems, and leverage.',
    metaDescription:
      'Ryan Teo builds AI products, systems, and leverage through workflow-driven product systems across web, iOS, automation, and applied AI.',
    skipToContent: 'Skip to content',
    footerAriaLabel: 'Site footer',
    homeAriaLabel: 'Ryan Teo home',
    primaryNavigationAriaLabel: 'Primary',
  },
  navigation: {
    work: 'Work',
    capability: 'Capability',
    about: 'About',
    contact: 'Contact',
  },
  languageSwitcher: {
    ariaLabel: 'Language switcher',
  },
  profile: {
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
    capabilitiesLabel: 'Capabilities',
    primaryAction: 'View Work',
    secondaryAction: 'Get in Touch',
    actionsAriaLabel: 'Primary actions',
    portraitAlt: 'Ryan Teo portrait',
  },
  about: {
    title: 'About Me',
    intro: 'I build products where workflow matters more than novelty.',
    paragraphs: [
      'My work sits across AI products, workflow systems, consumer utility, and execution-heavy product design. I care about making software clearer, more usable, and more structurally valuable over time.',
      'I am most interested in products that move from suggestion to action, and from interface to system.',
    ],
  },
  capabilityMap: {
    kicker: 'Capability map',
    title: 'Capability Map',
    intro:
      'This is the working model. Click a capability or project to trace how the relationships actually connect.',
    supportingCopy:
      'I do not present skills as a static stack. I present the links between systems thinking, execution, and shipped work.',
    defaultSummary: 'Select a project or capability to see how the work connects.',
    activeProjectSummary: (projectTitle) =>
      `Showing the capabilities connected to ${projectTitle}.`,
    activeCapabilitySummary: (capabilityLabel) =>
      `Showing the work connected to ${capabilityLabel}.`,
    resetAction: 'Clear selection',
    projectsLabel: 'Projects',
    capabilitiesLabel: 'Capabilities',
    linkedCapabilitiesLabel: (count) => `${count} linked capabilities`,
    linkedProjectsLabel: (count) => `${count} linked projects`,
  },
  selectedWork: {
    kicker: 'Selected work',
    title: 'Selected Work',
    intro:
      'A relationship-driven archive of products, systems, and platforms I have been shaping across AI, workflow, consumer utility, and digital presence.',
    moduleLabel: 'Selected work',
    whyItMattersLabel: 'Why it matters',
    angleLabel: "Ryan's angle",
    roleLabel: 'Role',
    capabilityTagsAriaLabel: (projectTitle) => `${projectTitle} capability tags`,
  },
  contact: {
    kicker: 'Contact',
    title: 'Contact',
    intro: 'Direct channels for selected conversations around products, systems, and applied AI.',
    linksAriaLabel: 'Contact links',
    labels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  capabilities: {
    'product-systems': {
      label: 'Product Systems',
      shortLabel: 'Systems',
      description:
        'Connects user flow, decision logic, and product structure into one operating model.',
    },
    'ai-workflow-design': {
      label: 'AI Workflow Design',
      shortLabel: 'AI Workflow',
      description:
        'Uses AI inside structured flow, review logic, and real execution instead of generic prompts.',
    },
    'swiftui-ios': {
      label: 'SwiftUI / iOS',
      shortLabel: 'iOS',
      description:
        'Builds native product loops with clarity, release discipline, and useful interaction design.',
    },
    'nextjs-web': {
      label: 'Next.js / Web',
      shortLabel: 'Web',
      description:
        'Turns positioning and product logic into coherent web surfaces that feel sharp and legible.',
    },
    automation: {
      label: 'Automation',
      shortLabel: 'Automation',
      description:
        'Creates repeatable operating leverage where manual follow-through would normally break down.',
    },
    strategy: {
      label: 'Strategy',
      shortLabel: 'Strategy',
      description:
        'Frames sequence, scope, and product direction around what can survive contact with real use.',
    },
    execution: {
      label: 'Execution',
      shortLabel: 'Execution',
      description:
        'Carries the thread from product framing into the shipped surface without losing coherence.',
    },
    'llm-productization': {
      label: 'LLM Productization',
      shortLabel: 'LLM',
      description:
        'Turns model capability into interfaces, workflows, and loops that people can actually use.',
    },
  },
  projects: {
    'immi-pilot': {
      title: 'ImmiPilot',
      positioning: 'A compliance-driven workflow platform for immigration execution.',
      whyItMatters:
        'It treats complex immigration work as a structured operating flow with checkpoints, review, and accountability instead of a loose AI chat experience.',
      angle:
        'Built around structured workflows, consultant review, and execution logic rather than generic AI chat.',
      role: 'Product framing, workflow logic, LLM system design, and web execution.',
    },
    shiok: {
      title: 'Shiok',
      positioning: 'An AI-assisted dining and behavioral bookkeeping product.',
      whyItMatters:
        'It uses constrained decisions and post-meal feedback loops to make dining data more useful than passive logging.',
      angle:
        'Designed around real user behavior, constrained decision-making, and post-meal feedback loops.',
      role: 'Consumer product framing, native loop design, AI utility shaping, and execution.',
    },
    'you-wife-list': {
      title: 'You Wife List',
      positioning: 'A closed-loop shopping and home inventory system.',
      whyItMatters:
        'It connects planning, purchasing, storage, and consumption into a single household workflow instead of isolated list features.',
      angle:
        'Built to connect planning, purchasing, inventory, and consumption into one usable household workflow.',
      role: 'Systems design, iOS utility thinking, workflow simplification, and execution.',
    },
    'bento-aiii': {
      title: 'Bento AIII',
      positioning: 'A digital presence system for an AI-native company.',
      whyItMatters:
        'It turns positioning, technical direction, and capability into a web system that can communicate clearly without startup filler.',
      angle:
        'A brand-facing and narrative-facing web system designed to express positioning, capability, and technical direction with clarity.',
      role: 'Narrative system design, web experience architecture, automation thinking, and execution.',
    },
  },
};

export default en;
