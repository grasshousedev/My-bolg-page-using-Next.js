export default function Button(props){
  return <Button
          onClick={props.onClick}
          onFocus={props.onFocus}
          role={props.role}
          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:text-brand-blue bg-brand-blue hover:bg-white"
          >{props.text}</Button>
}