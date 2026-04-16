import type { LocaleMessages } from '../locales';

export type SiteNavLink = {
  id: string;
  label: string;
  href: string;
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
  summary: string;
  detail: string;
  relatedCapabilityIds: string[];
};

export type ContactLink = {
  id: 'email' | 'linkedin' | 'github';
  label: string;
  href: string;
};

export type SiteData = ReturnType<typeof createSiteData>;

type CapabilityRecord = {
  id: string;
};

type ProjectRecord = {
  id: string;
  index: string;
};

const capabilityRecords: CapabilityRecord[] = [
  { id: 'product-systems' },
  { id: 'ai-workflow-design' },
  { id: 'swiftui-ios' },
  { id: 'nextjs-web' },
  { id: 'automation' },
  { id: 'strategy' },
  { id: 'execution' },
  { id: 'llm-productization' },
];

const projectRecords: ProjectRecord[] = [
  { id: 'immi-pilot', index: '01' },
  { id: 'shiok', index: '02' },
  { id: 'you-wife-list', index: '03' },
  { id: 'bento-aiii', index: '04' },
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

const contactLinkRecords = [
  {
    id: 'email' as const,
    href: 'mailto:ryanteo0628@gmail.com',
  },
  {
    id: 'linkedin' as const,
    href: 'https://www.linkedin.com/in/ryanteo101/',
  },
  {
    id: 'github' as const,
    href: 'https://github.com/RyanTeo6699',
  },
];

export const avatarImageUrl = new URL('../../素材/头像.JPG', import.meta.url).href;

export function createSiteData(messages: LocaleMessages) {
  const siteNavLinks: SiteNavLink[] = [
    {
      id: 'work',
      label: messages.navigation.work,
      href: '#work',
    },
    {
      id: 'capability',
      label: messages.navigation.capability,
      href: '#capability',
    },
    {
      id: 'about',
      label: messages.navigation.about,
      href: '#about',
    },
    {
      id: 'contact',
      label: messages.navigation.contact,
      href: '#contact',
    },
  ];

  const projects: Project[] = projectRecords.map((project) => {
    const projectCopy = messages.projects[project.id];

    return {
      ...project,
      title: projectCopy.title,
      summary: projectCopy.summary,
      detail: projectCopy.detail,
      relatedCapabilityIds: relationshipPairs
        .filter((pair) => pair.projectId === project.id)
        .map((pair) => pair.capabilityId),
    };
  });

  const capabilities: Capability[] = capabilityRecords.map((capability) => {
    const capabilityCopy = messages.capabilities[capability.id];

    return {
      ...capability,
      label: capabilityCopy.label,
      shortLabel: capabilityCopy.shortLabel,
      description: capabilityCopy.description,
      relatedProjectIds: relationshipPairs
        .filter((pair) => pair.capabilityId === capability.id)
        .map((pair) => pair.projectId),
    };
  });

  const contactLinks: ContactLink[] = contactLinkRecords.map((contactLink) => ({
    ...contactLink,
    label: messages.contact.labels[contactLink.id],
  }));

  const getProjectById = (projectId: string) =>
    projects.find((project) => project.id === projectId);

  const getCapabilityById = (capabilityId: string) =>
    capabilities.find((capability) => capability.id === capabilityId);

  const getProjectsForCapability = (capabilityId: string) =>
    projects.filter((project) => project.relatedCapabilityIds.includes(capabilityId));

  const getCapabilitiesForProject = (projectId: string) =>
    capabilities.filter((capability) => capability.relatedProjectIds.includes(projectId));

  return {
    seo: {
      title: messages.site.metaTitle,
      description: messages.site.metaDescription,
    },
    chrome: {
      skipToContent: messages.site.skipToContent,
      footerAriaLabel: messages.site.footerAriaLabel,
      homeAriaLabel: messages.site.homeAriaLabel,
      primaryNavigationAriaLabel: messages.site.primaryNavigationAriaLabel,
      languageSwitcherAriaLabel: messages.languageSwitcher.ariaLabel,
    },
    themeContent: messages.themeSwitcher,
    siteIdentity: {
      name: messages.site.name,
    },
    siteNavLinks,
    avatarImageUrl,
    profileContent: {
      metadata: messages.profile.metadata,
      capabilitiesLabel: messages.profile.capabilitiesLabel,
      primaryAction: messages.profile.primaryAction,
      secondaryAction: messages.profile.secondaryAction,
      actionsAriaLabel: messages.profile.actionsAriaLabel,
      portraitAlt: messages.profile.portraitAlt,
    },
    aboutContent: messages.about,
    selectedWorkContent: messages.selectedWork,
    capabilityMapContent: messages.capabilityMap,
    contactContent: messages.contact,
    contactLinks,
    projects,
    capabilities,
    getProjectById,
    getCapabilityById,
    getProjectsForCapability,
    getCapabilitiesForProject,
  };
}
