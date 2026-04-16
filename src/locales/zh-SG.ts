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
    work: '作品',
    capability: '能力',
    about: '关于',
    contact: '联系',
  },
  languageSwitcher: {
    ariaLabel: '语言切换',
  },
  profile: {
    metadata: [
      {
        label: '聚焦',
        value: 'AI 产品、工作流系统、消费型工具。',
      },
      {
        label: '载体',
        value: 'Web、iOS、自动化、产品系统。',
      },
      {
        label: '偏好',
        value: '清晰、实用、杠杆、执行。',
      },
      {
        label: '工作方式',
        value: '从产品定义一路做到上线。',
      },
    ],
    capabilitiesLabel: '能力',
    primaryAction: '查看作品',
    secondaryAction: '联系我',
    actionsAriaLabel: '主要操作',
    portraitAlt: 'Ryan Teo 头像',
  },
  about: {
    title: '关于我',
    intro: '我打造的产品里，工作流比新奇感更重要。',
    paragraphs: [
      '我的工作横跨 AI 产品、工作流系统、消费型工具，以及强调执行力的产品设计。我关注的是让软件更清晰、更好用，并且随着时间推移拥有更强的结构价值。',
      '我最感兴趣的是那些能从建议走向行动、从界面走向系统的产品。',
    ],
  },
  capabilityMap: {
    kicker: '能力地图',
    title: '能力地图',
    intro: '这是我的工作模型。点击一项能力或项目，就能追踪它们之间实际如何连接。',
    supportingCopy:
      '我不会把能力呈现成一套静态技能栈，而是把系统思考、执行力与已交付作品之间的联系展示出来。',
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
    kicker: '精选作品',
    title: '精选作品',
    intro: '这是一个由关系驱动的作品档案，涵盖我在 AI、工作流、消费工具与数字化呈现上的产品与系统实践。',
    moduleLabel: '精选作品',
    whyItMattersLabel: '为什么重要',
    angleLabel: 'Ryan 的视角',
    roleLabel: '角色',
    capabilityTagsAriaLabel: (projectTitle) => `${projectTitle} 的能力标签`,
  },
  contact: {
    kicker: '联系',
    title: '联系',
    intro: '如果你想聊产品、系统或应用型 AI，可以通过以下渠道直接联系我。',
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
      positioning: '一个面向移民执行场景、以合规为核心的工作流平台。',
      whyItMatters:
        '它把复杂的移民工作视为带有检查点、审核与责任链的结构化流程，而不是松散的 AI 聊天体验。',
      angle: '核心构建点是结构化工作流、顾问审核与执行逻辑，而不是泛化 AI 对话。',
      role: '产品定义、工作流逻辑、LLM 系统设计，以及 Web 端执行。',
    },
    shiok: {
      title: 'Shiok',
      positioning: '一个结合 AI 辅助推荐与行为记账的餐饮产品。',
      whyItMatters: '它利用受限决策与餐后反馈循环，让用餐数据比被动记录更有价值。',
      angle: '围绕真实用户行为、受限决策以及餐后反馈循环来设计。',
      role: '消费产品定义、原生循环设计、AI 实用性塑造与执行。',
    },
    'you-wife-list': {
      title: 'You Wife List',
      positioning: '一个闭环式购物与家庭库存系统。',
      whyItMatters:
        '它把计划、采购、存储与消耗连接成一个统一的家庭工作流，而不是零散的清单功能。',
      angle: '目标是把计划、采购、库存和消耗整合成一个真正可用的家庭流程。',
      role: '系统设计、iOS 工具思维、工作流简化与执行。',
    },
    'bento-aiii': {
      title: 'Bento AIII',
      positioning: '一个面向 AI 原生公司的数字化呈现系统。',
      whyItMatters:
        '它把定位、技术方向与能力组织成一个表达清晰的 Web 系统，而不是塞满创业套话的展示页。',
      angle: '这是一个围绕品牌叙事与能力表达设计的 Web 系统，用来清晰传达定位、能力与技术方向。',
      role: '叙事系统设计、Web 体验架构、自动化思考与执行。',
    },
  },
};

export default zhSG;
