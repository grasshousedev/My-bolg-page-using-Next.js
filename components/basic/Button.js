export default function Button(props){
  return <Button
          onClick={props.onClick}
          onFocus={props.onFocus}
          role={props.role}
          className="-mr-1 flex p-2 rounded-md hover:bg-brand-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
         >{props.text}</Button>
}