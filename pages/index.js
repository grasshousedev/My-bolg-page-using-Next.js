const fs = require('fs');
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import RecentPosts from '../components/blocks/RecentPosts'
import { postFilePaths, CONTENT_PATH } from '../utils/mdxSections'
import note from '../_data/notification.json'
import VideoBlock from '../components/blocks/VideoBlock'
import {useSelector} from 'react-redux'
import {wrapper, State} from '../redux/store';
import Blocks from '../components/blocks/Blocks'

const PAGE_DIR = '/'

export default function Index({posts,source,data,note,heroSource,heroVideo}) {
  return (
    <Layout note={note}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Hero
        hero={data.hero}
        heroSource={heroSource}
        video={data.video}
        videoText={data.video_text ? data.video_text : ''}/>
      <Blocks blocks={data.content_blocks}/>
      <RecentPosts posts={posts}/>
    </Layout>
  )
}

export async function getStaticProps(context){
  note.processed = await serialize(note.content)

  const { params } = context

  // Get Posts
  const posts = postFilePaths(`${PAGE_DIR}/posts/`).map((filePath) => {
    //console.log(`${CONTENT_PATH}/posts/${filePath}`)
    const source = fs.readFileSync(path.join(`${CONTENT_PATH}/posts/`, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })

  const postFilePath = path.join(`${CONTENT_PATH}`, `index.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  // maybe remove? home is alwasy a landing page and never has content
  // const pageSource = await serialize(content)
  const heroSource = await serialize(data.hero.hero_text)

  // const serializeText = async (text) => await serialize(text)

  // //serialize all the content block text
  // const serializedBlocks = []
  // data.content_blocks.forEach(element => {
  //   element.serialzed = element.text ? serializeText(element.text) : ''
  //   serializedBlocks.push(element)
  // });


  // console.log(serializedBlocks)

  return {
    props: {
      note: note,
      posts: posts,
      // source: pageSource,
      data: data,
      heroSource: heroSource,
    },
  }
}