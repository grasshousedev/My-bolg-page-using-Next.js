import React from 'react';
import ReactMarkdown from 'react-markdown';
import CloudinaryImage from '../CloudinaryImage';
import Block from './Block';
import BlockContainer from './BlockContainer';

function IconBlock({icon,text,title,landingPage}) {
  return (
    <Block>
      <BlockContainer>
        <CloudinaryImage
          src={icon}
          width={200}
          height={200}
          ariaHidden={true}
        />
        <div className="prose prose-lg">

        </div>
        <ReactMarkdown children={text}/>
      </BlockContainer>
    </Block>
  );
}

export default IconBlock;