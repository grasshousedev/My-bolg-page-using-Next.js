import React from 'react';
import Link from 'next'
import ArticleSummary from './ArticleSummary'

function ArticleSummaryLink({post}) {
  //console.log(post)
  const {content,data,filePath} = post
  const stripped = content.replace(/(<([^>]+)>)/gi, "");
  return (
    <a href={filePath}>
      <ArticleSummary post={post}/>
    </a>
  );
}

export default ArticleSummaryLink;