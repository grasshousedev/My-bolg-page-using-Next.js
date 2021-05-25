import { useState } from 'react';
import CalendyButton from '../components/shortcodes/CalendyButton'
import Modal from '../components/basic/Modal'
import SalesFunnels from './SalesFunnels';

function HeroButtons(props) {
  const [open, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(!open)
  }

  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center pb-16">
      <div className="text-center">
        <small className="block mb-2 text-sm">Not sure what to do?</small>
        <button
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-brand-blue bg-brand-secondary hover:bg-brand-blue-light md:py-4 md:text-lg md:px-10"
          onClick={toggleModal}
        >
          Get started
        </button>
        <Modal open={open} toggleModal={toggleModal}>
          <SalesFunnels/>
        </Modal>
      </div>
      <div className="text-center mt-3 sm:mt-0 sm:ml-3">
      <small className="block mb-2 text-sm">Let's get acquainted</small>
        <CalendyButton/>
      </div>
    </div>
  );
}

export default HeroButtons;