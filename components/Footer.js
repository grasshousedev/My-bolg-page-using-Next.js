import LinkedIn from './icons/fa-linkedin'
import Facebook from './icons/fa-facebook'
import Map from './icons/fa-map'
/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Services', href: '/services' },
    { name: 'Why Navalign', href: '/why-navalign' },
    { name: 'Updates', href: '/updates' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Directions',
      href: 'https://goo.gl/maps/cLPgccbYRfk',
      icon: (props) => (
        <div>
          <Map className="text-brand-blue" width={40} height={40}/>
        </div>),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <div>
          <Facebook  className="text-brand-blue" width={40} height={40}/>
        </div>),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <div>
          <LinkedIn className="text-brand-blue" width={40} height={40}/>
        </div>),
    },
  ],
}

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="flex justify-center items-center py-8 w-full">
				<ul className="flex justify-between items-center w-1/2">
            <li>
              <span className="text-brand-blue font-bold text-xl">Lets's Talk</span>
            </li>
						<li className="">
							<a className="bg-brand-secondary text-white p-2 rounded hover:bg-brand-blue-light hover:text-brand-blue" href="tel:855.360.1080">855.360.1080</a>
						</li>

						<li className="">

							<a className="bg-brand-secondary text-white p-2 rounded hover:bg-brand-blue-light hover:text-brand-blue" href="mailto:info@navalign.com">Email Us</a>
						</li>

					<li className="">
						<button data-toggle="modal" data-target="#setup-meeting-form" className="bg-brand-secondary text-white p-2 rounded hover:bg-brand-blue-light hover:text-brand-blue">Setup a Meeting</button>
					</li>
					<li className="">
						<a className="bg-brand-secondary text-white p-2 rounded hover:bg-brand-blue-light hover:text-brand-blue" href="https://www.uberconference.com/navalign" target="_blank">Join a Meeting</a>
					</li>
				</ul>
			</div>
        <div className="mt-8 flex justify-center space-x-6">
          <img src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980899/navalign-logo-bottom.svg"/>
          <div>
          15910 Ventura Boulevard, Suite 1605<br/>
          Encino, CA 91436
          </div>
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <nav className="-mx-5 my-8 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-brand-secondary text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-600">Financial planning and investment management services offered through Navalign, LLC a Registered Investment Adviser.<br/>
        &copy;2019 Navalign, LLC | Disclosures | Form CRS | Privacy Policy | TD Advisor Client Login | Portfolio Tracker Login</p>
      </div>
    </footer>
  )
}
