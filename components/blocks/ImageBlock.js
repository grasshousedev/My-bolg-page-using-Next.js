import ReactMarkdown from 'react-markdown'
import CloudinaryImage from '../CloudinaryImage'

export default function ImageBlock({text,image}) {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <CloudinaryImage
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={image}
            alt=""
            width={800}
            height={800}
            ariaHidden={true}
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="prose prose-lg text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <ReactMarkdown children={text}/>
          </div>
        </div>
      </div>
    </div>
  )
}
