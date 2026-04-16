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
    work: '作品',
    capability: '能力',
    about: '概要',
    contact: '連絡',
  },
  languageSwitcher: {
    ariaLabel: '言語切り替え',
  },
  profile: {
    metadata: [
      {
        label: '注力領域',
        value: 'AIプロダクト、ワークフローシステム、コンシューマーユーティリティ。',
      },
      {
        label: '対応領域',
        value: 'Web、iOS、自動化、プロダクトシステム。',
      },
      {
        label: '判断軸',
        value: '明快さ、実用性、レバレッジ、実行。',
      },
      {
        label: '進め方',
        value: 'プロダクト定義から出荷まで一気通貫。',
      },
    ],
    capabilitiesLabel: 'ケイパビリティ',
    primaryAction: '作品を見る',
    secondaryAction: '連絡する',
    actionsAriaLabel: '主要アクション',
    portraitAlt: 'Ryan Teo portrait',
  },
  about: {
    title: '私について',
    intro: '新しさよりも、ワークフローが意味を持つプロダクトをつくっています。',
    paragraphs: [
      '私の仕事は、AIプロダクト、ワークフローシステム、コンシューマーユーティリティ、そして実行力の高いプロダクトデザインにまたがっています。ソフトウェアをより明快に、より使いやすく、時間とともにより構造的な価値を持つものにすることを重視しています。',
      '私が最も関心を持つのは、提案で終わらず行動につながり、インターフェースからシステムへと進化するプロダクトです。',
    ],
  },
  capabilityMap: {
    kicker: '能力マップ',
    title: '能力マップ',
    intro: 'これが私の作業モデルです。能力またはプロジェクトをクリックすると、実際のつながりをたどれます。',
    supportingCopy:
      '私はスキルを静的なスタックとして見せません。システム思考、実行、そして実際に形になった仕事の関係性を示します。',
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
    kicker: '代表作',
    title: '代表作',
    intro:
      'AI、ワークフロー、コンシューマーユーティリティ、デジタルプレゼンスにまたがって形にしてきたプロダクトとシステムの関係性ベースのアーカイブです。',
    moduleLabel: '代表作',
    whyItMattersLabel: '重要な理由',
    angleLabel: 'Ryanの視点',
    roleLabel: '担当',
    capabilityTagsAriaLabel: (projectTitle) => `${projectTitle} の能力タグ`,
  },
  contact: {
    kicker: '連絡',
    title: '連絡',
    intro: 'プロダクト、システム、応用AIについて話したい場合は、以下のリンクから直接連絡できます。',
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
      positioning: '移民実務の遂行を支える、コンプライアンス重視のワークフロープラットフォーム。',
      whyItMatters:
        '複雑な移民業務を、チェックポイント、レビュー、責任の流れを持つ構造化された運用フローとして扱い、緩いAIチャット体験にしない点に価値があります。',
      angle: '汎用的なAIチャットではなく、構造化ワークフロー、コンサルタントレビュー、実行ロジックを軸に設計しました。',
      role: 'プロダクト定義、ワークフローロジック、LLMシステム設計、Web実装。',
    },
    shiok: {
      title: 'Shiok',
      positioning: 'AI支援の食体験と行動記録を組み合わせたプロダクト。',
      whyItMatters:
        '制約付きの意思決定と食後フィードバックのループにより、食事データを単なる受動的な記録以上のものにします。',
      angle: '実際のユーザー行動、制約付きの意思決定、食後フィードバックのループを前提に設計しました。',
      role: 'コンシューマープロダクト定義、ネイティブループ設計、AIユーティリティ設計、実行。',
    },
    'you-wife-list': {
      title: 'You Wife List',
      positioning: '買い物と家庭内在庫を閉ループでつなぐシステム。',
      whyItMatters:
        '計画、購入、保管、消費をひとつの家庭内ワークフローとしてつなぎ、単発のリスト機能で終わらせません。',
      angle: '計画、購入、在庫、消費をひとつの使える家庭内フローに統合することを狙いました。',
      role: 'システム設計、iOSユーティリティ思考、ワークフロー簡素化、実行。',
    },
    'bento-aiii': {
      title: 'Bento AIII',
      positioning: 'AIネイティブ企業のためのデジタルプレゼンスシステム。',
      whyItMatters:
        'ポジショニング、技術的方向性、能力を、スタートアップ的な余白埋めではなく、明快に伝わるWebシステムへと変換します。',
      angle:
        'ポジショニング、能力、技術的方向性を明快に表現するための、ブランドと物語の両面にまたがるWebシステムとして設計しました。',
      role: 'ナラティブシステム設計、Web体験アーキテクチャ、自動化設計、実行。',
    },
  },
};

export default ja;
