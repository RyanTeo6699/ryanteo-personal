import type { LocaleMessages } from './types';

const zhSG: LocaleMessages = {
  site: {
    name: 'Ryan Teo',
    metaTitle: 'Ryan Teo | AI 产品、系统与杠杆的个人界面',
    metaDescription:
      'Ryan Teo 通过以工作流为核心的产品系统，在 Web、iOS、自动化和应用型 AI 之间构建 AI 产品、系统与杠杆。',
    skipToContent: '跳到内容',
    footerAriaLabel: '网站页脚',
    homeAriaLabel: 'Ryan Teo 首页',
    primaryNavigationAriaLabel: '主导航',
  },
  navigation: {
    work: '项目',
    capability: '能力',
    about: '关于我',
    contact: '联系',
  },
  languageSwitcher: {
    ariaLabel: '语言切换',
  },
  themeSwitcher: {
    ariaLabel: '主题切换',
    light: '☀︎',
    dark: '☾',
    system: 'Auto',
    lightAriaLabel: '浅色模式',
    darkAriaLabel: '深色模式',
    systemAriaLabel: '跟随系统',
  },
  profile: {
    metadata: [
      {
        label: 'Focus',
        value: 'AI 产品、工作流系统、消费工具。',
      },
      {
        label: 'Surfaces',
        value: 'Web、iOS、自动化、产品系统。',
      },
      {
        label: 'Bias',
        value: '清晰、实用、杠杆、执行。',
      },
      {
        label: 'Working mode',
        value: '通过持续交付来完成产品定义。',
      },
    ],
    capabilitiesLabel: 'Capabilities',
    primaryAction: '查看项目',
    secondaryAction: '联系我',
    actionsAriaLabel: '主要操作',
    portraitAlt: 'Ryan Teo 头像',
  },
  about: {
    title: '关于我',
    intro: '我更关注工作流，而不是只追求新奇。',
    paragraphs: [
      '我的工作主要围绕 AI 产品、工作流系统、消费型工具，以及以执行为导向的产品设计。我在意的是让软件更清楚、更好用，也能随着时间累积出更强的结构价值。',
      '我最感兴趣的是那些能够从建议走向行动、从界面走向系统的产品。',
    ],
  },
  capabilityMap: {
    title: '能力映射',
    subtitle: '用结构化方式展示能力如何连接到真实项目。',
    defaultSummary: '选择一个项目或能力，查看这些工作如何相互关联。',
    activeProjectSummary: (projectTitle) => `正在显示与 ${projectTitle} 相关联的能力。`,
    activeCapabilitySummary: (capabilityLabel) => `正在显示与 ${capabilityLabel} 相关联的作品。`,
    resetAction: '清除选择',
    projectsLabel: '项目',
    capabilitiesLabel: '能力',
    linkedCapabilitiesLabel: (count) => `关联能力 ${count} 项`,
    linkedProjectsLabel: (count) => `关联项目 ${count} 个`,
  },
  selectedWork: {
    title: '代表项目',
    capabilityTagsAriaLabel: (projectTitle) => `${projectTitle} 的能力标签`,
  },
  contact: {
    title: '联系',
    subtitle: '如果你想交流产品、系统或应用型 AI，可以直接联系我。',
    linksAriaLabel: '联系链接',
    labels: {
      email: '电子邮件',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  capabilities: {
    'product-systems': {
      label: '产品系统',
      shortLabel: '系统',
      description: '把用户流程、决策逻辑和产品结构连接成一个统一的运行模型。',
    },
    'ai-workflow-design': {
      label: 'AI 工作流设计',
      shortLabel: 'AI 工作流',
      description: '把 AI 放进结构化流程、审核逻辑与真实执行中，而不是停留在泛化提示词层面。',
    },
    'swiftui-ios': {
      label: 'SwiftUI / iOS',
      shortLabel: 'iOS',
      description: '以清晰度、发布纪律和有用的交互设计构建原生产品循环。',
    },
    'nextjs-web': {
      label: 'Next.js / Web',
      shortLabel: 'Web',
      description: '把定位与产品逻辑转化成清晰、锋利且易读的 Web 界面。',
    },
    automation: {
      label: '自动化',
      shortLabel: '自动化',
      description: '在人工跟进容易断裂的地方建立可复用的运营杠杆。',
    },
    strategy: {
      label: '策略',
      shortLabel: '策略',
      description: '围绕真实使用环境来定义顺序、范围和产品方向。',
    },
    execution: {
      label: '执行',
      shortLabel: '执行',
      description: '把产品定义一路带到最终交付的界面，不让整体性在过程中丢失。',
    },
    'llm-productization': {
      label: 'LLM 产品化',
      shortLabel: 'LLM',
      description: '把模型能力转化为用户真正能使用的界面、流程与循环。',
    },
  },
  projects: {
    'immi-pilot': {
      title: 'ImmiPilot',
      summary: '一个面向移民执行流程的合规工作流平台。',
      detail: '核心不是泛化 AI 聊天，而是围绕结构化流程、顾问复核与执行逻辑来构建。',
    },
    shiok: {
      title: 'Shiok',
      summary: '一个结合 AI 的外食与行为记账产品。',
      detail: '围绕真实用户行为、受约束决策，以及餐后反馈回路来设计。',
    },
    'you-wife-list': {
      title: 'You Wife List',
      summary: '一个闭环式购物与家庭库存系统。',
      detail: '把计划、购买、库存与消耗连接成一个可实际使用的家庭工作流。',
    },
    'bento-aiii': {
      title: 'Bento AIII',
      summary: '一个面向 AI 公司的数字化品牌呈现系统。',
      detail: '这是一个面向品牌与叙事的 Web 系统，用来更清楚地表达定位、能力与技术方向。',
    },
  },
};

export default zhSG;
