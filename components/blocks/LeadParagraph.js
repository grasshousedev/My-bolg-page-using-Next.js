import React from 'react';
import ReactMarkdown from 'react-markdown';
import Block from './Block';
import BlockContainer from './BlockContainer';

function LeadParagraph({text,landingPage}) {
  console.log(landingPage)
  return (
    <Block>
      <BlockContainer>
        <div className={`${landingPage ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''} py-8sm:py-20 prose-xl`}>
          <ReactMarkdown children={text}/>
        </div>
      </BlockContainer>
    </Block>
  );
}

export default LeadParagraph;