import { useState } from 'react';
import { MDXRemote,MDXContent } from 'next-mdx-remote'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import ButtonLink from '../components/basic/ButtonLink'
import shortcodes from '../utils/shortcodes'


function getNoteStyles(note){
  switch(note.type){
    case 'danger':
      return 'bg-red-700 text-white'
    case 'success':
      return 'bg-green-400 text-black'
    case 'warning':
      return 'bg-yellow-500 text-black'
    case 'info':
    default:
      return 'bg-blue-300 text-black'
  }
}

function closeNote(){

}

export default function Notification(props) {
  const [open, setOpen] = useState(true);
  const { note } = props
  closeNote = () => {
    setOpen(false)
  }
  return note ? (
    <div className={`${getNoteStyles(note)}`}style={{display: open ? 'block' : 'none'}}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span className="pl-2">
              <MDXRemote {...note.processed} components={shortcodes}/>
            </span>
          </div>
          <div className="order-3 pl-4mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <ButtonLink href={note.link.url}>
              {note.link.text}
            </ButtonLink>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={closeNote}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : ''
}