import React, { useState, Children } from 'react';
import SalesFunnel from './SalesFunnel'
import CloudinaryImage from '../components/CloudinaryImage'
import funnels from '../_data/funnels'

function SalesFunnels({selected = 'default'}) {

  const [current,setCurrent] = useState({name:selected})


  const showFunnels = () => {
    return funnels.map( (funnel, i) => {
      console.log(current.name === funnel.name)
      return funnel.children ?
        // render a funnel
        (<SalesFunnel key={i} funnel={funnel} def={current.name === funnel.name ? true : false} setCurrent={setCurrent}/>)
      : (
        // render a link
        <div key={i} className="col-span-1 text-center">
          <a href={funnel.href} className="block mb-4">
            <CloudinaryImage
              src={funnel.icon}
              className="block w-full h-20 mx-auto object-scale-down"
              width={40}
              height={40}
            />
            {funnel.name}
          </a>
        </div>
      )
    })
  }

  return (
    <div>
      <p className="text-bold font-size-lg text-center mb-4">Let’s get started by finding the services best suited to your individual needs.</p>
      <div className="grid grid-cols-4 gap-16">
        {showFunnels()}
      </div>
    </div>
  );
}

export default SalesFunnels;