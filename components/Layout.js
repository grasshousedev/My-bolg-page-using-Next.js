import SiteHeader from '../components/SiteHeader'
import Notifictation from '../components/Notification'
import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

export default function Layout(props) {
  const { children,note } = props
  ////console(children,note)
  return (
    <>
      <Notifictation note={note}/>
      <SiteHeader/>
      <div className="max-w-7xl mx-auto pb-3 px-3 sm:px-6 lg:px-8">{children}</div>
      <Footer/>
    </>
  )
}
