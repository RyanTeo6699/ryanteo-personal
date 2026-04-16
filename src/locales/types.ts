export type Locale = 'en' | 'zh-SG' | 'ja';

export type LocaleMetadataRow = {
  label: string;
  value: string;
};

export type LocaleCapabilityCopy = {
  label: string;
  shortLabel?: string;
  description: string;
};

export type LocaleProjectCopy = {
  title: string;
  summary: string;
  detail: string;
};

export type LocaleMessages = {
  site: {
    name: string;
    metaTitle: string;
    metaDescription: string;
    skipToContent: string;
    footerAriaLabel: string;
    homeAriaLabel: string;
    primaryNavigationAriaLabel: string;
  };
  navigation: {
    work: string;
    capability: string;
    about: string;
    contact: string;
  };
  languageSwitcher: {
    ariaLabel: string;
  };
  profile: {
    metadata: LocaleMetadataRow[];
    capabilitiesLabel: string;
    primaryAction: string;
    secondaryAction: string;
    actionsAriaLabel: string;
    portraitAlt: string;
  };
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
  };
  capabilityMap: {
    title: string;
    subtitle: string;
    defaultSummary: string;
    activeProjectSummary: (projectTitle: string) => string;
    activeCapabilitySummary: (capabilityLabel: string) => string;
    resetAction: string;
    projectsLabel: string;
    capabilitiesLabel: string;
    linkedCapabilitiesLabel: (count: number) => string;
    linkedProjectsLabel: (count: number) => string;
  };
  selectedWork: {
    title: string;
    capabilityTagsAriaLabel: (projectTitle: string) => string;
  };
  contact: {
    title: string;
    subtitle: string;
    linksAriaLabel: string;
    labels: {
      email: string;
      linkedin: string;
      github: string;
    };
  };
  capabilities: Record<string, LocaleCapabilityCopy>;
  projects: Record<string, LocaleProjectCopy>;
};
