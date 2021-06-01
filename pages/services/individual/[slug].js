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

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
import shortcodes from '../../../utils/shortcodes'

const PAGE_DIR = '/services/individual'


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

            <div className="block icon-block py-8">
              <div className="container">
                <div className="w-15 mx-auto">
                  <img className="aos-init lazyloaded aos-animate max-w-xs mx-auto mb-8" data-src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980904/icon-financial-advice.svg" alt="" data-aos="zoom-in-down" src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980904/icon-financial-advice.svg"/>
                </div>
                <h2 className="text-center font-bold text-xl mb-8">
                    <a href="https://navalign.com/why-navalign">
                      Trusted Financial Advice
                    </a>
                </h2>
                <div className="row">
                  <div className="col-12">
                    We believe financial advice should always be in your best interest. The important financial decisions in your life are more than just numbers, it’s your emotions, your values and your goals. That’s why Navalign partners with you, as a fiduciary financial advisor, to help you navigate important life decisions. If you’re searching for answers to your financial questions, our team of financial experts are here to help.
                  </div>
                </div>
              </div>
            </div>
            <div className="block icon-block py-8">
  <div className="container">
    <div className="w-15 mx-auto">
      <img className="aos-init lazyloaded aos-animate block w-full max-w-xs mx-auto mb-8" data-src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980908/icon-financial-planning.svg" alt="" data-aos="zoom-in-down" src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980908/icon-financial-planning.svg"/>
    </div>
    <h2 className="text-center font-bold text-xl mb-8">


         <a href="https://navalign.com/what-we-do/financial-planning">
           Financial Planning
         </a>

    </h2>
    <div className="row">
      <div className="col-12">
        Financial planning is more than just a report and recommendations. Financial planning is a process, a discipline we can help you develop to achieve your financial goals. We believe in holistic financial life planning, this encompasses all aspects of your personal finances; cash flow, investments, taxes, risk management, legacy planning, philanthropy and more. Let us show you how fiduciary financial planning can help you understand the future impact of the important decisions you are considering today.
      </div>
    </div>
  </div>
  <div className="block icon-block py-8">
  <div className="container">
    <div className="w-15 mx-auto">
      <img className="aos-init lazyloaded aos-animate max-w-xs mx-auto mb-8" data-src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980918/icon-investment-services.svg" alt="" data-aos="zoom-in-down" src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980918/icon-investment-services.svg"/>
    </div>
    <h2 className="text-center font-bold text-xl mb-8">


         <a href="https://navalign.com/what-we-do/investment-services">
           Investment Services
         </a>

    </h2>
    <div className="row">
      <div className="col-12">
        Successful investing requires a disciplined approach with a long-term perspective. Our team of fiduciary investment advisors has experience managing all types of accounts and can customize an investment plan specifically for you. Let us show you how to align your investment portfolio with your personal financial goals and timelines.
      </div>
    </div>
  </div>

</div>
</div>
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
