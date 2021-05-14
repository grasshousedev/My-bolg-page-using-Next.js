import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import ReactMarkdown from 'react-markdown'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import HeroProfile from '../../components/HeroProfile'
import path from 'path'
import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxSections'
import shortcodes from '../../utils/shortcodes'
import ShareButtons from '../../components/ShareButtons'
import ContactBlock from '../../components/ContactBlock'

const PAGE_DIR = '/who-we-are/'

export default function PostPage({ url, source, heroSource, data }) {
  return (
    <Layout>
      <HeroProfile hero={data.hero}>
        <main className="prose prose-blue relative z-20">
          <article>
            <header>
              <h1>{data.title}</h1>
              { data.hero.hero_text ? <div className="prose prose-blue prose-xl">
                <ReactMarkdown children={data.hero.hero_text}/>
              </div> : ''}
              <ContactBlock
                email={data.email}
                phone={data.phone}
                linkedIn={data.linkedin}
                facebook={data.facebook}
                twitter={data.twitter}
                address={data.address}
              />
            </header>
            <div className="">
              {data.description && (
                <p className="description">{data.description}</p>
              )}
            </div>
            <MDXRemote {...source} components={shortcodes} />
            <footer>
                <ShareButtons url={url} title={data.title}/>
            </footer>
          </article>
        </main>
       </HeroProfile>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const {params} = context
  const postFilePath = path.join(`${POSTS_PATH}${PAGE_DIR}`, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const pageSource = await serialize(content)

  return {
    props: {
      slug: params.slug,
      url: process.env.BASE_URL+PAGE_DIR+'/'+params.slug,
      source: pageSource,
      data: data,
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