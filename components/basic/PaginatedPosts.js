import {useState} from 'react'
import Button from './Button'
import Pagination from './Pagination'

export default function PaginatedPosts({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.ceil(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)
  const [filter,setFilter] = useState('')

  const hasCat = (cats,cat) => {
    let has = false
    cats.forEach( el => el.toLowerCase().trim() === cat.toLowerCase().trim() ? has = true : null)
    return has
  }

  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return posts.slice(startIndex, endIndex);
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const posts = filter ? data.filter( post => post.data.categories && hasCat(post.data.categories,filter) ? true : false ) : data

  const getCategories = () => {
    let cats = new Set()
    data.forEach(element => {
      element.data.categories ? element.data.categories.forEach(cat => {
        cats.add(cat.toLowerCase().trim())
      }) : ''
    })
    return [...cats].filter(onlyUnique).sort()
  }


  return (
    <>
      <main className="col-span-8">
        <Pagination
          posts={posts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={data}
          RenderComponent={RenderComponent}
          title={title}
          pageLimit={pageLimit}
          dataLimit={dataLimit}
          pages={pages}
          filter={filter ? filter : ''}
          />
      {/* show the posts, 10 posts at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} post={d} />
        ))}
      </div>
      <Pagination
        posts={posts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
        RenderComponent={RenderComponent}
        title={title}
        pageLimit={pageLimit}
        dataLimit={dataLimit}
        pages={pages}
        />
      </main>
      <aside className="col-span-4">
        <h2>Filter by category</h2>
        <button
          onClick={ e => {setFilter('')}}
          style={ {display: filter.length ? 'block' : 'none'} }
          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-secondary"
        >
            Clear Filter
        </button>
        {getCategories().map( cat => {
          return (
            <>
            <Button
              key={cat}
              onClick={ e => {setFilter(cat); setCurrentPage(1)}}
              selected={filter === cat ? true : false}
            >
              {titleCase(cat)}
            </Button>
            </>
          )
        })}
      </aside>
   </>
  )
}