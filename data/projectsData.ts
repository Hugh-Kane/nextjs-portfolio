interface LocalizedText {
  en: string
  ja: string
}

interface Project {
  title: LocalizedText
  description: LocalizedText
  href?: string
  imgSrc?: string
  tags?: string[] // Add this
  githubUrl?: string // Add this
  demoUrl?: string // Add this
  category?: string // Add this (optional for future)
  featured?: boolean // Add this (optional for future)
  date?: string // Add this (optional for future)
}

const projectsData: Project[] = [
  {
    title: {
      en: 'Neuchi (値打ち) — Community Bargain-Deals Platform',
      ja: 'Neuchi（値打ち）— コミュニティ型お得情報共有プラットフォーム',
    },
    description: {
      en: `A full-stack, Japanese-language community platform for discovering and sharing bargain deals.
Users post and vote on deals, earning reputation through a tiered, transaction-safe scoring system.
Features multi-provider OAuth (GitHub, Google, and LINE), a dynamic sortable/filterable feed,
a TipTap rich-text editor, and SEO engineering with structured data. Live at neuchi.jp.`,
      ja: `特売情報の発見・共有ができるフルスタックな日本語コミュニティプラットフォーム。
ユーザーは特売情報を投稿・投票し、段階的でトランザクション保証されたスコアリングを通じて
評価ポイントを獲得します。GitHub・Google・LINE によるマルチプロバイダー OAuth 認証、
並び替え・絞り込みに対応した動的フィード、TipTap によるリッチテキスト編集、構造化データによる
SEO 対応を備えています。neuchi.jp で公開中。`,
    },
    imgSrc: '/static/images/neuchi.png',
    tags: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'NextAuth.js',
      'Tailwind CSS',
      'shadcn/ui',
      'TipTap',
      'Vercel',
    ],
    demoUrl: 'https://neuchi.jp',
  },
  {
    title: {
      en: 'Automated Ad Creative Upload System',
      ja: '広告クリエイティブ自動アップロードシステム',
    },
    description: {
      en: `Created an internal JupyterHub workflow to automate video uploads for ad campaigns
  using Meta and TikTok APIs. Integrated real-time Slack status notifications,
  reducing campaign setup time from 3 days to under 1 hour and tripling weekly launch volume.`,
      ja: `Meta・TikTok APIを用いて広告キャンペーンの動画アップロードを自動化する社内向け
  JupyterHubワークフローを構築。Slackへのリアルタイム通知を統合し、キャンペーンの
  設定時間を3日から1時間未満に短縮、週あたりの配信数を3倍に拡大しました。`,
    },
    imgSrc: '/static/images/ad-automation.png',
    tags: [
      'Python',
      'Meta API',
      'TikTok API',
      'Slack SDK',
      'Dropbox SDK',
      'Google Sheets API',
      'Automation',
    ],
  },
  {
    title: {
      en: 'Ski Resort Lift Status iOS App',
      ja: 'スキー場リフト運行状況 iOSアプリ',
    },
    description: {
      en: `Independently developed an iOS app in SwiftUI to display real-time ski lift status.
  Implemented state management, responsive UI design, and ongoing stability improvements
  in preparation for App Store release.`,
      ja: `リアルタイムのスキーリフト運行状況を表示するiOSアプリをSwiftUIで個人開発。
  状態管理やレスポンシブなUI設計を実装し、App Storeリリースに向けて
  継続的に安定性を改善しています。`,
    },
    imgSrc: '/static/images/LSJ.png',
    tags: ['SwiftUI', 'iOS', 'Personal Project'],
  },
  {
    title: {
      en: 'Clinic Website (Next.js App Router)',
      ja: 'クリニック公式サイト（Next.js App Router）',
    },
    description: {
      en: `Designed and developed an official website for a real Japanese medical clinic
  using Next.js (App Router). Focused on responsive design, SEO-friendly structure,
  and UI/UX suited for medical institutions. Ongoing paid engagement.`,
      ja: `Next.js（App Router）を用いて、実在する日本の医療クリニックの公式サイトを
  設計・開発。レスポンシブデザイン、SEOに配慮した構造、医療機関に適した
  UI/UXを重視しました。現在も継続中の有償案件です。`,
    },
    imgSrc: '/static/images/tajima-clinic.png',
    tags: ['Next.js', 'React', 'SEO', 'Web Development'],
    demoUrl: 'https://next-js-clinic.vercel.app/',
  },
  {
    title: {
      en: 'Scalable Marketing Analytics Data Pipeline',
      ja: 'スケーラブルなマーケティング分析データパイプライン',
    },
    description: {
      en: `Designed and implemented a production-grade data platform handling end-to-end
ingestion, orchestration, and analytics for multi-channel marketing data.
Integrated multiple external APIs and scraping jobs into a unified schema,
orchestrated via Airflow with retries, backfills, SLA monitoring, and Slack alerts.
Deployed on GCP using GCS and BigQuery, eliminating ~25 hours of manual processing
per week and scaling analytics coverage across multiple platforms.`,
      ja: `マルチチャネルのマーケティングデータを対象に、データの取り込みからオーケストレーション、
分析までを一貫して扱う本番品質のデータ基盤を設計・構築。複数の外部APIやスクレイピング
ジョブを統一スキーマに統合し、Airflowでリトライ・バックフィル・SLA監視・Slack通知を
含むオーケストレーションを実現。GCS・BigQueryを用いてGCP上にデプロイし、週あたり
約25時間の手作業を削減、複数プラットフォームへ分析範囲を拡大しました。`,
    },
    imgSrc: '/static/images/airflow.png',
    tags: [
      'Python',
      'BigQuery',
      'Airflow',
      'GCP',
      'ETL',
      'Data Engineering',
      'REST API',
      'Slack',
      'Google Cloud Storage',
      'Apple Developer API',
    ],
  },
]

export default projectsData
