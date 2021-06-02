const fs = require('fs');
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
import ShareButtons from '../components/ShareButtons'
const PAGE_DIR = '/'

export default function PostPage({ source, data, url }) {
  return (
    <Layout note={note}>
      <Hero hero={data.hero}>
      <div  className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8">
        <main className="prose prose-brand-secondary relative z-20">
          <article>
            <header>
              <h1>{data.title}</h1>
            </header>
            <div className="post-header">
              {data.description && (
                <p className="description">{data.description}</p>
              )}
            </div>
            <MDXRemote {...source} components={shortcodes} />
            <hr/>
            <Blocks blocks={data.content_blocks} landingPage={false}/>
            <footer>
                <ShareButtons url={url} title={data.title}/>
            </footer>
          </article>
        </main>
      </div>
      </Hero>
    </Layout>

  )
}

export const getStaticProps = async (context) => {
  const {params} = context
  const postFilePath = path.join(`${CONTENT_PATH}${PAGE_DIR}`, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const pageSource = await serialize(content)

  return {
    props: {
      slug: params.slug,
      url: process.env.BASE_URL+PAGE_DIR+'/'+params.slug,
      note: note,
      source: pageSource,
      data: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths(PAGE_DIR,fs)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.(md|mdx)$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
