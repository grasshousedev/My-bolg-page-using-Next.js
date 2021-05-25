import SiteHeader from '../components/SiteHeader'
import Notifictation from '../components/Notification'
import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'
import Head from 'next'

export default function Layout(props) {
  const { children,note } = props
  ////console(children,note)
  return (
    <>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      <Notifictation note={note}/>
      <SiteHeader/>
      <div className="">{children}</div>
      <Footer/>
    </>
  )
}
