import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import SocialIcon from '@/components/social-icons'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import type { Authors } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

const MAX_DISPLAY = 5

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Home({
  posts,
  author,
  authorContent,
}: {
  posts: unknown
  author: Authors
  authorContent: CoreContent<Authors>
}) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <section className="space-y-6">
          <div className="flex items-center gap-6">
            {authorContent.avatar && (
              <Image
                src={authorContent.avatar}
                width={120}
                height={120}
                alt={authorContent.name}
                className="rounded-2xl transition-all duration-300 hover:scale-105"
                priority
              />
            )}
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {authorContent.name}
              </h1>

              <div className="flex items-center gap-4">
                <SocialIcon kind="mail" href={`mailto:${authorContent.email}`} />
                <SocialIcon kind="github" href={authorContent.github} />
                <SocialIcon kind="linkedin" href={authorContent.linkedin} />
                <SocialIcon kind="x" href={authorContent.twitter} />
                {authorContent.bluesky && (
                  <SocialIcon kind="bluesky" href={authorContent.bluesky} />
                )}
              </div>
            </div>
          </div>

          <div className="prose dark:prose-invert text-muted-foreground max-w-none space-y-4 leading-relaxed">
            <MDXLayoutRenderer code={author.body.code} />
          </div>

          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              download
              className="bg-primary-600 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
              aria-label="Download Resume"
            >
              {/* Download Icon SVG */}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </section>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            Projects
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A showcase of my development projects and technical explorations
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-col gap-8">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tags={d.tags}
                githubUrl={d.githubUrl}
                demoUrl={d.demoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
