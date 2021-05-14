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
      <div className="">{children}</div>
      <Footer/>
    </>
  )
}
