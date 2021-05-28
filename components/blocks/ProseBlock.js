import React from 'react';
import ReactMarkdown from 'react-markdown';
import Block from './Block';
import BlockContainer from './BlockContainer';

function ProseBlock({text,landingPage}) {
  return (
    <Block>
      <BlockContainer>
        <div className="prose prose-xl">
          <ReactMarkdown children={text}/>
        </div>
      </BlockContainer>
    </Block>
  );
}

export default ProseBlock;