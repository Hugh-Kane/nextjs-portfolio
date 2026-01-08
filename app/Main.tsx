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

const MAX_DISPLAY = 5

export default function Home({
  posts,
  author,
  authorContent,
}: {
  posts: any
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
              <h1 className="text-2xl font-bold">{authorContent.name}</h1>

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
            {/* <Button variant="outline" asChild>
              <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </section>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
