import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { postFilePaths, CONTENT_PATH } from '../utils/mdxSections'
import shortcodes from '../utils/shortcodes'
import note from '../_data/notification.json'
import Blocks from '../components/blocks/Blocks'

const PAGE_DIR = '/'

export default function PostPage({ source, data, heroSource }) {
  return (
    <Layout note={note}>
      <Hero
        title={data.title}
        hero={data.hero}
        heroSource={heroSource}/>
        <MDXRemote {...source} components={shortcodes} />
        <Blocks blocks={data.content_blocks}/>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const {params} = context
  const postFilePath = path.join(`${CONTENT_PATH}${PAGE_DIR}`, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const pageSource = await serialize(content)
  const heroSource = await serialize(data.hero.hero_text)
  return {
    props: {
      note: note,
      source: pageSource,
      data: data,
      heroSource: heroSource,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths(PAGE_DIR)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.(md|mdx)$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
