export default function Button({onClick,onFocus,role,className,text,children,selected = false}){
  return <button
          onClick={onClick}
          onFocus={onFocus}
          role={role}
          className={`${selected ? 'text-brand-blue bg-brand-blue-light' : 'bg-brand-blue text-white'} my-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  hover:text-brand-blue hover:bg-brand-blue-light`}
          >{text ? text : children}</button>
}