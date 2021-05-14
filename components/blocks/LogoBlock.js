/* This example requires Tailwind CSS v2.0+ */
export default function LogoBlock() {
  return (
    <div className="bg-brand-blue-light">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-brand-blue">
        We work hard to do right by our clients. Apparently when you do, word gets out.
      </h2>
      <div className="flow-root mt-8 lg:mt-10">
        <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:justify-between lg:-ml-4">
          <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
          <img
            className="h-7"
            src="https://res.cloudinary.com/navalign/image/upload/c_scale,w_300,q_auto:good/v1546980898/Los_Angeles_Times_logo.svg"
            alt="Los Angeles Times Logo in Black"
            />
          </div>
          <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
          <img className="h-7" src="https://res.cloudinary.com/navalign/image/upload/c_scale,w_300,q_auto:good/v1549431422/IN-Logo-New-2013.png" alt="Tuple" />
          </div>
          <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
          <img className="h-7" src="https://res.cloudinary.com/navalign/image/upload/c_scale,w_300,q_auto:good/v1546980898/The_Wall_Street_Journal_Logo.svg" alt="Level" />
          </div>
          <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
            <img className="h-7" src="https://res.cloudinary.com/navalign/image/upload/c_scale,w_300,q_auto:good/v1546980898/Investopedia-logo.png" alt="Level" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
