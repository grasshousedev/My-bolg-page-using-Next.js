import React from 'react'
import ReactMarkdown from 'react-markdown'
import { MDXRemote } from 'next-mdx-remote'
import shortcodes from '../../utils/shortcodes'

function FeaturedContent(props) {
  //console.log(props.children)
  return (
    <div className="prose prose-xl p-4 bg-gray-100">
      <ReactMarkdown children={props.children}/>
    </div>
  );
}

export default FeaturedContent