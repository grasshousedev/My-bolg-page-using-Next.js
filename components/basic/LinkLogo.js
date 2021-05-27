import Link from 'next'

export default function LogoLink({url,image,text}){
  return (
    <a href={url}>
      <img
        className="h-8 w-auto sm:h-10"
        src={image}
        alt={text}
      />
    </a>
  )
}