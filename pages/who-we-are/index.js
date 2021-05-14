import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import Hero from '../../components/Hero'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../../components/Layout'
import CloudinaryImage from '../../components/CloudinaryImage'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxSections'

import note from '../../_data/notification.json'
import shortcodes from '../../utils/shortcodes'

const PAGE_DIR = '/who-we-are/'


export default function Index({posts,source,data,note,heroSource,pagePath}) {
  // //console(posts,source,data,note)
  // Order by Weight
  posts.sort(function (a, b) {
    return a.data.order - b.data.order;
  });
  return (
    <Layout note={note}>
      <Hero
        hero={data.hero}
        heroSource={heroSource}
        title={data.title}/>
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8">
        <ul className="mt-20 space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-24">
            {posts.map((post) => {
              const {featured_image,layout,title,email,twitter,linkedin,hero,position,draft,degrees} = post.data
              return layout === 'profile' && !draft?
              <li key={title}>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <Link href={post.pagePath ? post.pagePath : "#"}>
                    <a>
                      <CloudinaryImage
                        className="object-cover shadow-lg"
                        src={featured_image}
                        alt=""
                        height={500}
                        width={500}
                      />
                    </a>
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>
                      {title}
                      <small className="block font-normal">{degrees}</small>
                    </h3>
                    <p className="text-indigo-600">{position}</p>
                  </div>
                  <ul className="flex space-x-5 list-none">
                    <li className="list-none">
                      <a href={twitter} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={linkedin} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li> : ''
            })}
          </ul>
        </main>
    </Layout>
  )
}

export async function getStaticProps(context){
  // import note
  // const note = await import('../_data/notification.json')
  note.processed = await serialize(note.content)

  const { params } = context
  // Get Posts
  const posts = postFilePaths(PAGE_DIR).map((filePath) => {
    //console('filePath',filePath)
    const source = fs.readFileSync(path.join(`${POSTS_PATH}${PAGE_DIR}`, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      pagePath: `${PAGE_DIR}${filePath.replace(/\.(md|mdx)$/, '')}`
    }
  })

  const postFilePath = path.join(`${POSTS_PATH}${PAGE_DIR}`, `index.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const pageSource = await serialize(content)
  const heroSource = await serialize(data.hero.hero_text)
  const heroVideo = await serialize(data.hero.video_emebed)
  //console(heroVideo)
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