import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs, Authors } from 'contentlayer/generated'
import Main from './Main'
import { coreContent } from 'pliny/utils/contentlayer'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const authorEn = allAuthors.find((p) => p.slug === 'default') as Authors
  const authorJa = allAuthors.find((p) => p.slug === 'default-ja') as Authors
  const mainContent = coreContent(authorEn)

  return (
    <>
      <Main posts={posts} authorEn={authorEn} authorJa={authorJa} authorContent={mainContent} />
    </>
  )
}
