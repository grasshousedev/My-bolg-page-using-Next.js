const fs = require('fs');
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import Hero from '../../../components/Hero'
import Layout from '../../../components/Layout'
import ShareButtons from '../../../components/ShareButtons'
import { postFilePaths, CONTENT_PATH } from '../../../utils/mdxSections'
import note from '../../../_data/notification.json'
import Blocks from '../../../components/blocks/Blocks'
import ServicePoints from '../../../components/ServicePoints'


// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
import shortcodes from '../../../utils/shortcodes'

const PAGE_DIR = '/services/family'


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
      case 'ema-call-to-action':
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

export default function PostPage({ source, data, slug, url, heroSource }) {
  const hero = {hero_image: data.featured_image ? data.featured_image : ''} //possibly add default image?
  return (
    <Layout note={note}>
      <Hero
        title={data.title}
        hero={data.hero}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-8">

        <main className="relative z-20">
           <MDXRemote {...heroSource} components={shortcodes}/>
          <article>
            <header className={`${heroSource ? 'sr-only' : ''}`}>
              {data.title}
            </header>
            <div className="post-header">
              {data.description && (
                <p className="description">{data.description}</p>
              )}
            </div>
            <div className="prose prose-brand-secondary ">
            <MDXRemote {...source} components={shortcodes} />
            </div>
            <Blocks blocks={data.content_blocks} landingPage={false}/>
            <footer>
              <ServicePoints/>
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
  const heroSource = await serialize(data.hero.hero_text)
  // //console.log(data.content_blocks)
  const blocks = data.content_blocks ? getContentBlocks(data.content_blocks) : 'no blocks'
  //console.log(blocks)

  return {
    props: {
      slug: params.slug,
      url: process.env.BASE_URL+PAGE_DIR+'/'+params.slug,
      note: note,
      source: pageSource,
      heroSource: heroSource,
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
