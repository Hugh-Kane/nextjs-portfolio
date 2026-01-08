import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs, Authors } from 'contentlayer/generated'
import Main from './Main'
import { coreContent } from 'pliny/utils/contentlayer'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <Main posts={posts} author={author} authorContent={mainContent} />
    </>
  )
}
