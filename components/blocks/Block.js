import React from 'react';

function Block({children,className}) {
  return (
    // <div className={`${landingPage ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''} py-8 sm:py-20 prose prose-lg p-8`}></div>
    <div className={`py-8  ${className}`}>
      {children}
    </div>
  );
}

export default Block;