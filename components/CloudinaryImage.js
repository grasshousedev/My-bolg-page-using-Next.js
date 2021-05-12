import Image from 'next/image'

export default function CloudinaryImage({src,alt,width,height,layout,transform = ''}){
  const CLOUDINARY_URL = 'https://res.cloudinary.com/navalign/image/upload';
  const convertImage = () => {
    switch(true){
      case src.includes('cloudinary'):
        return src
      case !src.includes('http'):
        return CLOUDINARY_URL+transform+src
      default:
        return src
    }
  }
  return (
    <picture>

      <Image
        src={convertImage()}
        alt={alt}
        width={width}
        height={height}
        layout={layout ? layout : ''}/>
    </picture>
  )
}