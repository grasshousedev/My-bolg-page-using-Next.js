import React from 'react';

function EMAPlan(props) {
  return (
    <button
      className="max-w-1/2 mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-brand-blue bg-brand-secondary text-white hover:bg-brand-blue-light md:py-4 md:text-lg md:px-10"
      href="https://connect.emaplan.com/6p"
      target="_new"
      rel="noopener noreferrer"
      // onClick={/*open new window*/}
    >
      Check Your Progress
    </button>
  );
}

export default EMAPlan;