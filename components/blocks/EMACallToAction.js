import React from 'react';
import ReactMarkdown from 'react-markdown';
import EMAPlan from '../shortcodes/EMAPlan'
import Block from './Block';
import BlockContainer from './BlockContainer';
function EMACallToAction({text = 'Are you on track to achieve your financial goals?',landingPage}) {
  return (
    <Block>
      <BlockContainer className="text-center">
        <ReactMarkdown children={text}/>
        <EMAPlan/>
      </BlockContainer>
    </Block>
  );
}

export default EMACallToAction;