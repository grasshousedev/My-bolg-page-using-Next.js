import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../../components/Layout'
import { postFilePaths, CONTENT_PATH } from '../../utils/mdxSections'
import {useState,useEffect} from 'react'
import ArticleSummaryLink from '../../components/basic/ArticleSummaryLink'
import Pagination from '../../components/basic/Pagination'
import note from '../../_data/notification.json'

const PAGE_DIR = '/services/'
export default function Index({posts,source,data,note,heroSource}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE
  const currentPageData = pages
      .slice(offset, offset + PER_PAGE)

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const pageCount = Math.ceil(data.length / PER_PAGE)

  //console(posts,source,data,note)
  const sorted = posts.sort(function (a, b) {
    return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
  }).reverse();

  useEffect(() => {
    setPages(sorted)
  }, []);

  return (
    <Layout note={note}>
        <div  className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8 grid grid-cols-12">
          <main className="col-span-8">
            <Pagination
              data={sorted}
              RenderComponent={ArticleSummaryLink}
              title="Posts"
              pageLimit={5}
              dataLimit={10}
            />
            <ul>
              {currentPageData.map((post) => (
                <li key={post.filePath}>
                  <Link
                    as={`${PAGE_DIR}${post.filePath.replace(/\.md?$/, '')}`}
                    href={`${PAGE_DIR}[slug]`}
                  >
                    <a>{post.data.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </main>
          <aside className="col-span-4">
            sidebar
          </aside>
        </div>
    </Layout>
  )
}


export async function getStaticProps(context){
  // import note
  // const note = await import('../_data/notification.json')
  note.processed = await serialize(note.content)

  const getPostSource = async (content) => {
    return await serialize(content)
  }


  const { params } = context
  // Get Posts
  const posts = postFilePaths(PAGE_DIR,fs).map((filePath) => {
    //console('filePath',filePath)
    const source = fs.readFileSync(path.join(`${CONTENT_PATH}${PAGE_DIR}`, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath: `${PAGE_DIR}${filePath.replace(/\.(md|mdx)$/, '')}`,
    }
  })

  const postFilePath = path.join(`${CONTENT_PATH}${PAGE_DIR}`, `index.md`)

  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const pageSource = await serialize(content)
  return {
    props: {
      note: note,
      posts: posts,
      source: pageSource,
      data: data,
    },
  }
}