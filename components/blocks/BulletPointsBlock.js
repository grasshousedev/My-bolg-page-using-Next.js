import React from 'react';
import ReactMarkdown from 'react-markdown';
import CloudinaryImage from '../CloudinaryImage';
import Block from './Block';
import BlockContainer from './BlockContainer';

function BulletPoinstBlock({bulletPoints,landingPage,headerText,headerIcon,}) {
  return (
    <Block>
      <BlockContainer>
        <div className="rounded rounded-xl bg-brand-blue-light px-8 pb-8">
          <CloudinaryImage
            src={headerIcon}
            width={300}
            height={300}
            className="max-w-1/3 mx-auto"
          />
          <h2 className="text-center">{headerText}</h2>
          { bulletPoints ? (
            <ol className="list-inside text-left block max-w-md mx-auto">
              {bulletPoints.map(bullet => (
                <li>
                  <ReactMarkdown children={bullet.text}/>
                </li>
              ))}
            </ol>
          ) : ''}
        </div>
      </BlockContainer>
    </Block>
  );
}

export default BulletPoinstBlock;