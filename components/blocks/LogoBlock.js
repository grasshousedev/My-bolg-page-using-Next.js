import CloudinaryImage from "../CloudinaryImage"
import Block from "./Block"
import BlockContainer from "./BlockContainer"

export default function LogoBlock({heading,logos}) {
  return (
    <Block>
      <BlockContainer>
        <div className="bg-brand-blue-light">
          <div className="max-w-7xl mx-auto py-8px-4 sm:py-20 sm:px-6 lg:px-8 ">
            {
              heading ? (
                <h2 className="text-3xl font-extrabold text-brand-blue text-center">
                  {heading}
                </h2>
              ) : ''
            }
            <div className="flow-root mt-8 lg:mt-10">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:justify-between lg:-ml-4">
                { logos ? logos.map(
                  (logo, i) => {
                    return (
                      <div key={i} className="mt-4 ml-8 flex-1 lg:ml-4">
                        <CloudinaryImage
                          src={logo.image}
                          className="h-7 w-full block object-contain"
                          // width={200}
                          height={50}
                          alt={`${logo.name} Logo`}
                        />
                      </div>
                    )
                  }
                ) : '' }
              </div>
            </div>
          </div>
        </div>
      </BlockContainer>
    </Block>
  )
}
