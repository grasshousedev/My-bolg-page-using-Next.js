import {useEffect, useState} from 'react';
import CloudinaryImage from '../components/CloudinaryImage'

function SalesFunnel({funnel,def,setCurrent}) {
  const [open,setOpen] = useState(false)
  const [active,setActive] = useState(def)

  const children = funnel.children ? Object.values(funnel.children) : []

  const setShow = () => {
    setCurrent(funnel)
    setOpen(true)
    //console.log(def,open)
  }



  useEffect(() => {
    //console.log(def)
    if(!def){
      setOpen(false)
    }else{
      setActive(true)
    }
  })

  return (
    <div className="col-span-1 text-center">
      <button
        className="relative z-50"
        onClick={setShow}
      >
        <CloudinaryImage
          src={funnel.icon}
          className="block w-auto h-20 mx-auto"
          width={40}
          height={40}
        />
      </button>
      {funnel.name}
      <div className={`transition duration-300 ease-in-out grid grid-cols-3 rounded-lg bg-white mt-8 left-1/2 transform -translate-x-1/2 p-4 w-full fixed ${active && open ? 'z-50 opacity-100' : 'z-20 opacity-0'}`}>
        {children.length ?
          children.map(page => {
            return (
              <a
                href={page.href}
                className="block mb-4"
              >
                <CloudinaryImage
                  src={page.icon}
                  className="block w-full h-20 mx-auto object-scale-down"
                  width={40}
                  height={40}
                />
                {page.name}
              </a>
            )
          })
        : ''}
      </div>
    </div>
  );
}

export default SalesFunnel;