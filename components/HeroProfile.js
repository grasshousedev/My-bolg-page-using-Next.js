/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { data } from 'autoprefixer'
import { MDXRemote } from 'next-mdx-remote'
import shortcodes from '../utils/shortcodes'
import CloudinaryImage from './CloudinaryImage'
import HeroButtons from './HeroButtons'
import Vimeo from './shortcodes/Vimeo'

shortcodes.h1 = (props) => {
  return <h1 className="text-4xl font-bold mb-4 text-brand-blue">{props.children}</h1>
}

export default function Hero(props) {
  //console.log(props)
  return (
    <div className="relative bg-white overflow-hidden">
      <div class="mt-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative z-10 py-8 bg-white sm:pb-16 md:pb-20 lg:max-w-md lg:w-full lg:pb-28 xl:max-w-2xl xl:pb-32">
          <svg
            className="hidden lg:block absolute right-3/4 inset-y-0 text-white transform w-full h-auto translate-x-full"
            height={2500}
            width={2000}
            fill="currentColor"
            viewBox="0 0 2067 1591"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
          <g transform="matrix(1,0,0,1,-227.322,-957.032)">
              <g transform="matrix(0.888395,0,-0.19914,1.00785,406.349,79.7285)">
                  <rect x="347.425" y="870.472" width="1972.16" height="1578.45" style={{fill:'white'}}/>
              </g>
          </g>
          </svg>
          { props.children }
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 max-h-96">
        <CloudinaryImage
          src={props.hero.hero_image}
          alt={props.hero.hero_alt}
          width={800}
          height={800}
          className="block w-full object-cover max-h-lg xl:max-h-hero"
          transform="/w_800,h_650,c_fill,g_auto"
          layout="responsive"
        />
      </div>
    </div>
  )
}
