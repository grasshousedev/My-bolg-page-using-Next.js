export default function ButtonLink(props){
  //console.log(props)
  return (
    <a
      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-blue hover:text-white bg-white hover:bg-brand-blue"
      href="#" target="">{props.text ? props.text : props.children}</a>
  )
}