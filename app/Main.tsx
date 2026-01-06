import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Hugh
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <section className="space-y-6">
          <div className="flex items-center gap-6">
            <Image
              src="/static/images/avatar.png"
              width={120}
              height={120}
              alt="Adarsha Acharya"
              className="rounded-2xl transition-all duration-300 hover:scale-105"
              priority
            />
            <div className="flex-1 space-y-4">
              <h1 className="text-2xl font-bold">Adarsha Acharya</h1>

              <div className="flex items-center gap-4">
                {/* {SOCIALS.map((social) => (
                  <SocialLink
                    key={social.label}
                    aria-label={`Follow on ${social.label}`}
                    href={social.href}
                    icon={social.icon}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  />
                ))} */}
              </div>
            </div>
          </div>

          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
              I&apos;m a fullstack software engineer specializing in building web applications
              powered by modern JavaScript technologies and AI-driven features.
            </p>
            <p>
              Over the years, I&apos;ve worked on multiple startups to build and launch end-to-end
              products in insurance, iGaming, and video streaming domains, and have actively
              contributed to various open source projects.
            </p>
            <p>
              If you have an exciting project or role that aligns with my expertise, please reach
              out at{' '}
              <a
                href="mailto:hi@adarsha.dev"
                className="text-foreground hover:text-primary font-medium underline underline-offset-4 transition-colors"
              >
                hi@adarsha.dev
              </a>{' '}
              or through any of my social channels.
            </p>
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
