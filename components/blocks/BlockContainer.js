import React from 'react';

function BlockContainer({children, landingPage, className = ''}) {
  return (
    <div
      className={`${landingPage ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default BlockContainer;