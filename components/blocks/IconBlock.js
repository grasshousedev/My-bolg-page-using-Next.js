/* This example requires Tailwind CSS v2.0+ */
import ReactMarkdown from 'react-markdown';


import Icon401k from '../../components/icons/Icon401k'
import IconFinancialPlanning from '../../components/icons/IconFinancialPlanning'
import IconInvestmentServices from '../../components/icons/IconInvestmentServices'
import IconRetirement from '../../components/icons/IconRetirement'
import CloudinaryImage from '../CloudinaryImage';


const features = [
  { name: 'Financial Planning', icon: IconFinancialPlanning, text: 'Prioritize your financial goals and understand how decisions you are considering today can impact your future.'},
  { name: 'Investment Services', icon: IconInvestmentServices, text: 'Find the optimal balance in your portfolio of risk and reward to ensure the money you invest is working for you' },
  { name: 'Retirement Strategies', icon: IconRetirement, text: 'Whether you’re 25, 45 or 65, achieving financial independence and planning for retirement is just plain smart.'},
  { name: '401(k) & Pension Plans', icon: Icon401k, text: 'We setup and manage successful retirement benefit programs for businesses of all sizes.'},
  // { name: 'Powerful API', icon: CogIcon },
  // { name: 'Database Backups', icon: ServerIcon },
]

export default function IconBlock({iconBlocks,overview}) {
  console.log(iconBlocks)
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="prose prose-lg text-center mx-auto max-w-5xl">
          { overview ? <ReactMarkdown children={overview}/> : ''}
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {iconBlocks.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <CloudinaryImage
                        src={feature.icon}
                        className="-mt-8 h-24 w-24 mx-auto text-white"
                        width={24}
                        height={24}
                        ariaHidden={true}
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      <ReactMarkdown children={feature.text}/>
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
