import Image from 'next/image'

export default function CloudinaryImage({src = '',alt,width,height,layout,className,transform = '',ariaHidden = false}){
  const CLOUDINARY_URL = 'https://res.cloudinary.com/navalign/image/upload';

  const getTransform = () => {
    const h = height ? `h_${height},` : ''
    const w = width ? `w_${width},` : ''
    const t = transform ? transform : ''
    return `/c_fill,${h}${w}${t}`
  }
  const convertImage = (props) => {
    switch(true){
      case src.includes('cloudinary'):
        const path = src.split('')
        return src
      case !src.includes('http'):
        return CLOUDINARY_URL+getTransform()+src
      default:
        return src
    }
  }
  return (
    <picture>
      <img
        src={convertImage()}
        aria-hidden={ariaHidden}
        alt={alt}
        width={width}
        height={height}
        layout={layout ? layout : ''}
        className={`${className ? className : ''}`}/>
    </picture>
  )
}