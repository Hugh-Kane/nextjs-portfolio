interface Project {
  title: string
  description: string
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
    title: 'Automated Ad Creative Upload System',
    description: `Created an internal JupyterHub workflow to automate video uploads for ad campaigns
  using Meta and TikTok APIs. Integrated real-time Slack status notifications,
  reducing campaign setup time from 3 days to under 1 hour and tripling weekly launch volume.`,
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
    title: 'Ski Resort Lift Status iOS App',
    description: `Independently developed an iOS app in SwiftUI to display real-time ski lift status.
  Implemented state management, responsive UI design, and ongoing stability improvements
  in preparation for App Store release.`,
    imgSrc: '/static/images/LSJ.png',
    tags: ['SwiftUI', 'iOS', 'Personal Project'],
  },
  {
    title: 'Clinic Website (Next.js App Router)',
    description: `Designed and developed an official website for a real Japanese medical clinic
  using Next.js (App Router). Focused on responsive design, SEO-friendly structure,
  and UI/UX suited for medical institutions. Ongoing paid engagement.`,
    imgSrc: '/static/images/tajima-clinic.png',
    tags: ['Next.js', 'React', 'SEO', 'Web Development'],
    demoUrl: 'https://next-js-clinic.vercel.app/',
  },
  {
    title: 'Scalable Marketing Analytics Data Pipeline',
    description: `Designed and implemented a production-grade data platform handling end-to-end
ingestion, orchestration, and analytics for multi-channel marketing data.
Integrated multiple external APIs and scraping jobs into a unified schema,
orchestrated via Airflow with retries, backfills, SLA monitoring, and Slack alerts.
Deployed on GCP using GCS and BigQuery, eliminating ~25 hours of manual processing
per week and scaling analytics coverage across multiple platforms.`,
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
