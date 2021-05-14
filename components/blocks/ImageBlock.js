/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ]
  }
  ```
*/
export default function ImageBlock() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://res.cloudinary.com/navalign/image/upload/q_auto:good/v1546980898/iStock-872825130.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="prose text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2>
              We never lose sight of why we started in the first place, your success. And we do that with…
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fiduciary Advisors
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              In all situations we are fiduciary financial advisors, that means we have a legal obligation to act in your best interest and provide objective advice. We are advocates for helping you achieve your financial, and more importantly, your life goals.
            </p>

            <h3>Holistic Investment Philosophy</h3>
            <p>
              There is only one you, and your portfolio reflects that. Your investment plan is an important component of your financial plan. It’s custom designed with a variety of low cost and tax efficient investments to help grow and preserve your wealth.
            </p>
            <h3>
              Fee-Only Structure
            </h3>
            <p>
              Our service model is 100% fee-only. This means our fees are transparent and we are never compensated by outside parties or through commissions. This helps to reduce conflicts of interest, so we remain clearly aligned with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
