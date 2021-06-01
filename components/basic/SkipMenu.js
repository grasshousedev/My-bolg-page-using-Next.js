import React from 'react';
import BlockContainer from '../blocks/BlockContainer';

function SkipMenu({directions}) {
  return (
    <div id="skip-menu" className="fixed w-full z-0 focus-within:z-50 bg-brand-blue-light p-8">
      <BlockContainer landingPage={true}>
        <a href="#content" tabIndex="0">Skip to Content</a>
      </BlockContainer>
    </div>
  );
}

export default SkipMenu;