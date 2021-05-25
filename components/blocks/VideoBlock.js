import React from 'react'
import Vimeo from '../shortcodes/Vimeo'

function VideoBlock({video}) {
  return (
    <>
        {video ?
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div>
                <h3 className="text-brand-blue text-2xl mb-4 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ex accumsan, aliquam leo et, luctus lectus.</h3>
                <p>Pellentesque molestie tempor ligula sit amet fermentum. Etiam eu rutrum nibh, sed luctus justo. Nulla semper sem velit, in gravida lacus posuere nec. Morbi molestie libero a eros tristique, nec interdum ante accumsan. Vestibulum in felis ut lorem egestas tempor. Mauris ac libero leo. Pellentesque sit amet tellus quam.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Vimeo video_id={video}/>
            </div>
          </div>
        : 'no id'}

    </>
  )
}

export default VideoBlock;