import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LogoBlock from '../components/blocks/LogoBlock'
import IconBlock from '../components/blocks/IconBlock'
import ImageBlock from '../components/blocks/ImageBlock'
import RecentPosts from '../components/blocks/RecentPosts'
import { postFilePaths, POSTS_PATH } from '../utils/mdxSections'
import note from '../_data/notification.json'
import VideoBlock from '../components/blocks/VideoBlock'

const PAGE_DIR = '/'

export default function Index({posts,source,data,note,heroSource,heroVideo}) {
  return (
    <Layout note={note}>
      <Hero
        hero={data.hero}
        heroSource={heroSource}
        video={data.video}/>
      <VideoBlock video={data.video}/>
      <LogoBlock/>
      <IconBlock/>
      <ImageBlock/>
      <RecentPosts posts={posts}/>
    </Layout>
  )
}

export async function getStaticProps(context){

  note.processed = await serialize(note.content)

  const { params } = context

  // Get Posts
  const posts = postFilePaths(`${PAGE_DIR}/updates/`).map((filePath) => {
    console.log(`${POSTS_PATH}/updates/${filePath}`)
    const source = fs.readFileSync(path.join(`${POSTS_PATH}/updates/`, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })

  const postFilePath = path.join(`${POSTS_PATH}`, `index.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const pageSource = await serialize(content)
  const heroSource = await serialize(data.hero.hero_text)
  const heroVideo = await serialize(data.hero.video_embed)
  return {
    props: {
      note: note,
      posts: posts,
      source: pageSource,
      data: data,
      heroSource: heroSource,
      heroVideo: heroVideo
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