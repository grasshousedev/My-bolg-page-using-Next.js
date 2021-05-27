/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { data } from 'autoprefixer'
import { MDXRemote } from 'next-mdx-remote'
import shortcodes from '../utils/shortcodes'
import CloudinaryImage from '../components/CloudinaryImage'
import HeroButtons from '../components/HeroButtons'
import Vimeo from '../components/shortcodes/Vimeo'
import VideoBlock from '../components/blocks/VideoBlock'

shortcodes.h1 = ({children}) => {
  return <h1 className="text-4xl font-bold mb-4 text-brand-blue">{children}</h1>
}

export default function Hero({heroSource,children,video,videoText,title,hero}) {
  ////console.log(props)
  return (
    <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pt-8 bg-white sm:pb-8 md:pb-8 lg:max-w-2xl lg:w-full">
          <svg
            className="hidden lg:block absolute -right-0 inset-y-0 w-48 text-white transform translate-x-1/2"
            height={700}
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          { heroSource ?
          (
          <div className="mt-0 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative z-20">
            <div className="sm:text-center">
              <MDXRemote {...heroSource} components={shortcodes}/>
            </div>
          </div>) : children }
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 max-h-96">
        <CloudinaryImage
          src={hero.hero_image}
          alt={hero.hero_alt}
          width={608}
          height={510}
          className="block w-full h-full object-cover max-h-hero object-top"
          transform="/w_1400,h_1200,c_fill,g_auto"
          layout="responsive"
          ariaHidden={true}
        />
      </div>
    </div>
    <VideoBlock video={video} videoText={videoText}/>
    </>
  )
}
