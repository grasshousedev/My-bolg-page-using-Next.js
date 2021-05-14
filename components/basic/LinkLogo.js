import Link from 'next'

export default function LogoLink(props){
  return (
    <a href={props.url}>
      <img
        className="h-8 w-auto sm:h-10"
        src={props.img}
        alt=""
      />
    </a>
  )
}