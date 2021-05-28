/* This example requires Tailwind CSS v2.0+ */
import ReactMarkdown from 'react-markdown';


import Icon401k from '../icons/Icon401k'
import IconFinancialPlanning from '../icons/IconFinancialPlanning'
import IconInvestmentServices from '../icons/IconInvestmentServices'
import IconRetirement from '../icons/IconRetirement'
import CloudinaryImage from '../CloudinaryImage';
import Block from './Block';
import BlockContainer from './BlockContainer';


const features = [
  { name: 'Financial Planning', icon: IconFinancialPlanning, text: 'Prioritize your financial goals and understand how decisions you are considering today can impact your future.'},
  { name: 'Investment Services', icon: IconInvestmentServices, text: 'Find the optimal balance in your portfolio of risk and reward to ensure the money you invest is working for you' },
  { name: 'Retirement Strategies', icon: IconRetirement, text: 'Whether you’re 25, 45 or 65, achieving financial independence and planning for retirement is just plain smart.'},
  { name: '401(k) & Pension Plans', icon: Icon401k, text: 'We setup and manage successful retirement benefit programs for businesses of all sizes.'},
  // { name: 'Powerful API', icon: CogIcon },
  // { name: 'Database Backups', icon: ServerIcon },
]

export default function FeatureBlock({features,overview}) {
  console.log(features)
  return (
    <Block>
      <BlockContainer>
        <div className="relative">
          <div className="mx-auto max-w-md px-4  sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="prose prose-lg  mx-auto max-w-5xl text-center">
              { overview ? <ReactMarkdown children={overview}/> : ''}
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
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
      </BlockContainer>
    </Block>
  )
}
