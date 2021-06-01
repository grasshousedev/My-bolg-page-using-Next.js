export default function Button({onClick,onFocus,role,className,text,children,ring = false}){
  return <button
          onClick={onClick}
          onFocus={onFocus}
          role={role}
          className={`${ring ? 'ring ring-md' : ''} my-2 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:text-brand-blue bg-brand-blue hover:bg-brand-blue-light`}
          >{text ? text : children}</button>
}