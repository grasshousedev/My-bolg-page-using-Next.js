import React from 'react';
import CalendyButton from '../components/shortcodes/CalendyButton'

function HeroButtons(props) {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="text-center">
        <small className="block mb-2 text-sm">Not sure what to do?</small>
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-brand-blue bg-brand-blue hover:bg-brand-blue-light md:py-4 md:text-lg md:px-10"
        >
          Get started
        </a>
      </div>
      <div className="text-center mt-3 sm:mt-0 sm:ml-3">
      <small className="block mb-2 text-sm">Let's get acquainted</small>
        <CalendyButton/>
      </div>
    </div>
  );
}

export default HeroButtons;