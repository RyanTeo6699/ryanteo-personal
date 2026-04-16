import type { LocaleMessages } from './types';

const ja: LocaleMessages = {
  site: {
    name: 'Ryan Teo',
    metaTitle: 'Ryan Teo | AIプロダクト、システム、レバレッジのための個人サイト',
    metaDescription:
      'Ryan Teo は、ワークフロー中心のプロダクトシステムを通じて、Web、iOS、自動化、応用AIにまたがる AIプロダクト、システム、レバレッジを構築しています。',
    skipToContent: 'コンテンツへ移動',
    footerAriaLabel: 'サイトフッター',
    homeAriaLabel: 'Ryan Teo ホーム',
    primaryNavigationAriaLabel: '主要ナビゲーション',
  },
  navigation: {
    work: '実績',
    capability: 'ケイパビリティ',
    about: 'About Me',
    contact: '連絡先',
  },
  languageSwitcher: {
    ariaLabel: '言語切り替え',
  },
  profile: {
    metadata: [
      {
        label: 'Focus',
        value: 'AIプロダクト、ワークフロー設計、コンシューマーユーティリティ。',
      },
      {
        label: 'Surfaces',
        value: 'Web、iOS、自動化、プロダクトシステム。',
      },
      {
        label: 'Bias',
        value: '明快さ、実用性、レバレッジ、実行。',
      },
      {
        label: 'Working mode',
        value: '実際に出荷しながらプロダクトを定義していく。',
      },
    ],
    capabilitiesLabel: 'Capabilities',
    primaryAction: '作品を見る',
    secondaryAction: '連絡する',
    actionsAriaLabel: '主要アクション',
    portraitAlt: 'Ryan Teo portrait',
  },
  about: {
    title: 'About Me',
    intro: '私は、新しさそのものよりも、ワークフローが機能することを重視します。',
    paragraphs: [
      '私の仕事領域は、AIプロダクト、ワークフローシステム、コンシューマーユーティリティ、そして実行志向のプロダクト設計にまたがっています。ソフトウェアをより明快に、使いやすく、時間とともに構造的な価値を持つものにすることに関心があります。',
      '特に興味があるのは、提案で終わらず行動へ進み、インターフェースからシステムへ発展していくプロダクトです。',
    ],
  },
  capabilityMap: {
    title: 'ケイパビリティ・マップ',
    subtitle: '能力が実際のプロダクトにどう結びついているかを構造的に示します。',
    defaultSummary: 'プロジェクトまたは能力を選ぶと、仕事のつながりが表示されます。',
    activeProjectSummary: (projectTitle) => `${projectTitle} に関連する能力を表示しています。`,
    activeCapabilitySummary: (capabilityLabel) =>
      `${capabilityLabel} に関連する仕事を表示しています。`,
    resetAction: '選択を解除',
    projectsLabel: 'プロジェクト',
    capabilitiesLabel: '能力',
    linkedCapabilitiesLabel: (count) => `関連する能力 ${count} 件`,
    linkedProjectsLabel: (count) => `関連するプロジェクト ${count} 件`,
  },
  selectedWork: {
    title: '主要プロジェクト',
    capabilityTagsAriaLabel: (projectTitle) => `${projectTitle} の能力タグ`,
  },
  contact: {
    title: '連絡先',
    subtitle: 'プロダクト、システム、応用AIに関する対話は歓迎します。',
    linksAriaLabel: '連絡リンク',
    labels: {
      email: 'メール',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  capabilities: {
    'product-systems': {
      label: 'プロダクトシステム',
      shortLabel: 'システム',
      description: 'ユーザーフロー、意思決定ロジック、プロダクト構造をひとつの運用モデルとして接続します。',
    },
    'ai-workflow-design': {
      label: 'AIワークフロー設計',
      shortLabel: 'AIワークフロー',
      description:
        'AIを汎用的なプロンプトではなく、構造化されたフロー、レビュー判断、実際の実行の中に組み込みます。',
    },
    'swiftui-ios': {
      label: 'SwiftUI / iOS',
      shortLabel: 'iOS',
      description:
        '明快さ、リリースの規律、有用なインタラクション設計を備えたネイティブなプロダクトループを構築します。',
    },
    'nextjs-web': {
      label: 'Next.js / Web',
      shortLabel: 'Web',
      description:
        'ポジショニングとプロダクトロジックを、鋭く読みやすいWeb体験へと落とし込みます。',
    },
    automation: {
      label: '自動化',
      shortLabel: '自動化',
      description: '手作業のフォローが途切れやすい箇所に、再現可能な運用レバレッジをつくります。',
    },
    strategy: {
      label: '戦略',
      shortLabel: '戦略',
      description: '実際の利用に耐えられるものを前提に、順序、スコープ、方向性を定めます。',
    },
    execution: {
      label: '実行',
      shortLabel: '実行',
      description: 'プロダクト定義から出荷された表面まで、整合性を失わずにつなぎます。',
    },
    'llm-productization': {
      label: 'LLMプロダクト化',
      shortLabel: 'LLM',
      description: 'モデルの能力を、人が実際に使えるインターフェース、フロー、ループへと変換します。',
    },
  },
  projects: {
    'immi-pilot': {
      title: 'ImmiPilot',
      summary: '移民業務の実行を支える、コンプライアンス重視のワークフロープラットフォーム。',
      detail:
        '汎用的なAIチャットではなく、構造化されたフロー、コンサルタントレビュー、実行ロジックを中心に設計されています。',
    },
    shiok: {
      title: 'Shiok',
      summary: 'AIを活用した外食支援と行動記帳のプロダクト。',
      detail:
        '実際のユーザー行動、制約のある意思決定、食後のフィードバックループを前提に設計されています。',
    },
    'you-wife-list': {
      title: 'You Wife List',
      summary: '買い物と家庭内在庫を閉ループでつなぐシステム。',
      detail:
        '計画、購入、在庫、消費を一つの実用的な家庭ワークフローとしてつなげることを目指しています。',
    },
    'bento-aiii': {
      title: 'Bento AIII',
      summary: 'AIネイティブ企業のためのデジタルプレゼンスシステム。',
      detail:
        'ポジショニング、ケイパビリティ、技術的方向性を明快に伝えるためのブランド向けWebシステムです。',
    },
  },
};

export default ja;
