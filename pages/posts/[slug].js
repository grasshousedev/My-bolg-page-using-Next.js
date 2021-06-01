const fs = require('fs');
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import ShareButtons from '../../components/ShareButtons'
import { postFilePaths, CONTENT_PATH } from '../../utils/mdxSections'
import note from '../../_data/notification.json'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
import shortcodes from '../../utils/shortcodes'

const PAGE_DIR = '/posts'

export default function PostPage({ source, data, slug, url }) {
  const hero = {hero_image: data.featured_image ? data.featured_image : ''} //possibly add default image?
  return (
    <Layout note={note}>
      <Hero hero={hero}>
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
