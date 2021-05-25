import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxSections'
import shortcodes from '../../utils/shortcodes'
import note from '../../_data/notification.json'
import { MDXRemote } from 'next-mdx-remote'

const PAGE_DIR = '/what-we-do/'

export default function PostPage({ source, data, heroSource, blocks }) {
  return (
    <Layout note={note}>
      <Hero
        title={data.title}
        hero={data.hero}>
          <main className="prose">
          <MDXRemote {...heroSource} components={shortcodes} />
          <MDXRemote {...source} components={shortcodes} />
          </main>
      </Hero>
    </Layout>
  )
}

function getContentBlocks(blocks){
  const renderedBlocks = []
  blocks.map(block => {
    // //console.log(block)
    const rb = {}
    rb.template = block.template
    switch(block.template){
      case 'lead-paragraph':
        rb.headingText = block.header_text
        rb.text = serialize(block.text)
        break;
      case 'call-to-action-button':
        rb.leadingText = serialize(block.leading_text)
        rb.buttonText = block.button_options.button_text
        rb.url = block.button_options.url
        rb.newWindow = block.button_options.new_window
      case 'bullet-points-block':

    }
    renderedBlocks.push({
      template: rb
    })
  })
  return renderedBlocks;
}

export const getStaticProps = async (context) => {
  const {params} = context
  const postFilePath = path.join(`${POSTS_PATH}${PAGE_DIR}`, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const pageSource = await serialize(content)
  const heroSource = await serialize(data.hero.hero_text)
  // //console.log(data.content_blocks)
  const blocks = data.content_blocks ? getContentBlocks(data.content_blocks) : 'no blocks'
  //console.log(blocks)


  return {
    props: {
      note: note,
      source: pageSource,
      data: data,
      heroSource: heroSource,
      // blocks: blocks,
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
