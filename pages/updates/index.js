import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxSections'

import note from '../../_data/notification.json'
import shortcodes from '../../utils/shortcodes'

const PAGE_DIR = '/updates/'


export default function Index({posts,source,data,note,heroSource}) {
  // console.log(posts,source,data,note)
  return (
    <Layout note={note}>
        <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`${PAGE_DIR}${post.filePath.replace(/\.md?$/, '')}`}
              href={`${PAGE_DIR}[slug]`}
            >
              <a>{post.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context){
  // import note
  // const note = await import('../_data/notification.json')
  note.processed = await serialize(note.content)

  const { params } = context
  // Get Posts
  const posts = postFilePaths(PAGE_DIR).map((filePath) => {
    console.log('filePath',filePath)
    const source = fs.readFileSync(path.join(`${POSTS_PATH}${PAGE_DIR}`, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })

  const postFilePath = path.join(`${POSTS_PATH}${PAGE_DIR}`, `index.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const pageSource = await serialize(content)
  return {
    props: {
      note: note,
      posts: posts,
      source: pageSource,
      data: data,
    },
  }
}

// export const getStaticPaths = async () => {
//   const paths = postFilePaths
//     // Remove file extensions for page paths
//     .map((path) => path.replace(/\.(md|mdx)$/, ''))
//     // Map the path into the static paths object required by Next.js
//     .map((slug) => ({ params: { slug } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }