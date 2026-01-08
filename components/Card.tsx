import Image from './Image'
import Link from './Link'
import { Github } from './social-icons/icons'
import { ExternalLink } from './social-icons/icons'
import { TechIcon } from './tech-icons'

const Card = ({ title, description, imgSrc, href, tags, githubUrl, demoUrl }) => (
  <div className="w-full p-4">
    <div className="flex flex-col gap-6 overflow-hidden rounded-xl p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg md:flex-row dark:bg-transparent dark:hover:bg-indigo-900">
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="flex flex-grow flex-col p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>

        {/* Tech Stack Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                <TechIcon kind={tag} className="h-3.5 w-3.5" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {(githubUrl || demoUrl) && (
          <div className="mt-auto flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary-500 dark:hover:border-primary-400 inline-flex items-center gap-2 rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
                aria-label={`View ${title} code on GitHub`}
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
                aria-label={`View ${title} demo`}
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
