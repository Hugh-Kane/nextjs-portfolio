import {
  Python,
  Swift,
  React,
  NextJS,
  Meta,
  TikTok,
  ApacheAirflow,
  iOS,
  GCP,
  Slack,
  BigQuery,
  Dropbox,
  GSheets,
  GCS,
  apple,
  // Import all your icon functions here
} from './icons'

// Map lowercase tag names to icon components
const components = {
  python: Python,
  swift: Swift,
  swiftui: Swift, // SwiftUI uses Swift icon
  react: React,
  'next.js': NextJS, // You'll add actual Next.js icon later
  nextjs: React,
  metaapi: Meta,
  tiktokapi: TikTok,
  airflow: ApacheAirflow,
  ios: iOS,
  gcp: GCP,
  slacksdk: Slack,
  slack: Slack,
  bigquery: BigQuery,
  dropboxsdk: Dropbox,
  googlesheetsapi: GSheets,
  googlecloudstorage: GCS,
  appledeveloperapi: apple,
  // Add more mappings...
}

interface TechIconProps {
  kind?: string
  className?: string
}

export function TechIcon({ kind, className = 'h-4 w-4' }: TechIconProps) {
  if (!kind) return null

  // Normalize the tag name (lowercase, handle special cases)
  const iconKey = kind.toLowerCase().replace(/\s/g, '')

  const IconComponent = components[iconKey]

  // If no icon found, return null (just show text)
  if (!IconComponent) return null

  return <IconComponent className={className} />
}
