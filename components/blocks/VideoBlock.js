import React from 'react'
import Vimeo from '../shortcodes/Vimeo'
import { MDXRemote } from 'next-mdx-remote'
import ReactMarkdown from 'react-markdown'

function VideoBlock({video,videoText}) {
  console.log(videoText)
  return (
    <>
        {video ?
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="prose prose-md">
                <ReactMarkdown
                  children={videoText}
                />
              </div>
            </div>
            <div className="flex items-center">
              <Vimeo video_id={video}/>
            </div>
          </div>
        : ''}

    </>
  )
}

export default VideoBlock;

const Shortcode = (props => {
  /*
  props will looks something like:
    {
      "type": "shortcode",
      "identifier": "MailchimpForm",
      "attributes": { "id": "chfk2" }
    }
  see: https://github.com/djm/remark-shortcodes
  */
  switch (props.identifier) {
    case 'table':
      return 'table'
    default:
      console.error('unknown shortcode')
  }
})
