import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import CloudinaryImage from '../CloudinaryImage'
import ReactMarkdown from 'react-markdown'
import Summary from '../basic/Summary'

function ArticleSummary({post}) {
  const {content,data,filePath} = post
  const stripped = content;
  const {title,featured_image} = data
  return (
    <article className="grid grid-cols-12 gap-4 mb-8">
      {featured_image ?
      <div className="col-span-3">
        <CloudinaryImage
          className="object-cover shadow-lg mr-4"
          src={data.featured_image}
          alt=""
          height={300}
          width={300}
        />
      </div>
      : ''}
      <div className="col-span-9">
        <header className="text-xl font-bold">{data.title}</header>
        <Summary>
          <ReactMarkdown children={content}/>
        </Summary>
      </div>
    </article>
  );
}

export default ArticleSummary;