/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { data } from 'autoprefixer'
import { MDXRemote } from 'next-mdx-remote'
import shortcodes from '../utils/shortcodes'
import CloudinaryImage from '../components/CloudinaryImage'

shortcodes.h1 = (props) => {
  return <h1 className="text-4xl font-bold mb-4 text-brand-blue">{props.children}</h1>
}

export default function Hero(props) {
  //console(props.heroVideo)
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 w-48 text-white transform translate-x-1/2"
            height={510}
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          { props.heroSource ?
          (<div className="mt-0 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative z-20">
            <div className="sm:text-center lg:text-left">
              <h1>{props.title}</h1>
              <MDXRemote {...props.heroSource} components={shortcodes}/>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>) : props.children }
          { props.heroVideo ? <MDXRemote {...props.heroVideo} components={shortcodes}/> : 'not here'}
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <CloudinaryImage
          src={props.hero.hero_image}
          alt={props.hero.hero_alt}
          width={608}
          height={510}
          transform="/w_608,h_510,c_fill,g_auto"
          layout="responsive"
        />
      </div>
    </div>
  )
}
