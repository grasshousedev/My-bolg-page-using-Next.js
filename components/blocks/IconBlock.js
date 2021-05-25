/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

import Icon401k from '../../components/icons/Icon401k'
import IconFinancialPlanning from '../../components/icons/IconFinancialPlanning'
import IconInvestmentServices from '../../components/icons/IconInvestmentServices'
import IconRetirement from '../../components/icons/IconRetirement'

const features = [
  { name: 'Financial Planning', icon: IconFinancialPlanning, text: 'Prioritize your financial goals and understand how decisions you are considering today can impact your future.'},
  { name: 'Investment Services', icon: IconInvestmentServices, text: 'Find the optimal balance in your portfolio of risk and reward to ensure the money you invest is working for you' },
  { name: 'Retirement Strategies', icon: IconRetirement, text: 'Whether you’re 25, 45 or 65, achieving financial independence and planning for retirement is just plain smart.'},
  { name: '401(k) & Pension Plans', icon: Icon401k, text: 'We setup and manage successful retirement benefit programs for businesses of all sizes.'},
  // { name: 'Powerful API', icon: CogIcon },
  // { name: 'Database Backups', icon: ServerIcon },
]

export default function IconBlock() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-brand-blue uppercase">Robust Services</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          We’ve created a package of wealth management services specially tailored for you to achieve your goals.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          The way we see it, most financial goals are rarely your ultimate goals. More often they are the means to an end. As a fiduciary financial advisor, we work together to make sure your important life goals remain achievable and within reach.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <feature.icon className="-mt-8 h-24 w-24 mx-auto text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
