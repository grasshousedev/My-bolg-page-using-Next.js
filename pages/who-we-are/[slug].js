const fs = require('fs');
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
import { postFilePaths, CONTENT_PATH } from '../../utils/mdxSections'
import shortcodes from '../../utils/shortcodes'
import ShareButtons from '../../components/ShareButtons'
import ContactBlock from '../../components/ContactBlock'
import note from '../../_data/notification.json'
const PAGE_DIR = '/who-we-are/'

export default function PostPage({ url, source, heroSource, data }) {
  return (
    <Layout note={note}>
      <HeroProfile hero={data.hero}>
        <main className="prose relative z-20">
          <article>
            <header className="text-center">
              <h1 className="text-brand-blue">{data.title}</h1>
              { data.hero.hero_text ? <div className="prose-xl">
                <ReactMarkdown children={data.hero.hero_text}/>
              </div> : ''}
              <ContactBlock
                email={data.email}
                phone={data.phone}
                linkedin={data.linked_in}
                facebook={data.facebook}
                twitter={data.twitter}
                address={data.address}
                name={data.title}
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
  const postFilePath = path.join(`${CONTENT_PATH}${PAGE_DIR}`, `${params.slug}.md`)
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