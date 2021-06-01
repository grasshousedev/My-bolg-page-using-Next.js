import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../../components/Layout'
import ReactPaginate from 'react-paginate'
import {useState,useEffect} from 'react'
import ArticleSummaryLink from '../../components/basic/ArticleSummaryLink'
import PaginatedPosts from '../../components/basic/PaginatedPosts'
import { getPosts, CONTENT_PATH } from '../../utils/mdxSections'

import note from '../../_data/notification.json'
import shortcodes from '../../utils/shortcodes'

const PAGE_DIR = '/updates/'

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

  // const pageCount = Math.ceil(data.length / PER_PAGE)

  //console(posts,source,data,note)
  const sorted = posts.sort(function (a, b) {
    return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
  }).reverse();

  useEffect(() => {
    setPages(sorted)
  }, []);

  return (
    <Layout note={note}>
        <div  className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8 grid grid-cols-12 gap-16">
            <PaginatedPosts
              data={sorted}
              RenderComponent={ArticleSummaryLink}
              title="Posts"
              pageLimit={5}
              dataLimit={10}
            />
        </div>
    </Layout>
  )
}


export async function getStaticProps(context){
  // import note
  // const note = await import('../_data/notification.json')
  note.processed = await serialize(note.content)

  const { params } = context
  // Get Posts
  const posts = getPosts(PAGE_DIR,CONTENT_PATH)

  const postFilePath = path.join(`${CONTENT_PATH}${PAGE_DIR}`, `index.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const pageSource = await serialize(content)
  //console(heroVideo)
  return {
    props: {
      note: note,
      posts: posts,
      source: pageSource,
      data: data,
    },
  }
}