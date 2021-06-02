import React from 'react';
import ButtonLink from '../basic/ButtonLink';
import BulletPointsBlock from './BulletPointsBlock'
import EMACallToAction from './EMACallToAction'
import FeatureBlock from './FeatureBlock'
import IconBlock from './IconBlock'
import ImageBlock from './ImageBlock'
import LeadParagraph from './LeadParagraph'
import LogoBlock from './LogoBlock'
import ProseBlock from './ProseBlock'
import SalesFunnel from './SalesFunnelBlock'
import VideoBlock from './VideoBlock'

const getComponentName = (template) => {
  let cName = ''
  template.split("-").forEach( word => {
    cName += word.replace(/^\w/, (c) => c.toUpperCase())
  });
  return cName
}

const renderBlocks = (blocks,landingPage) => {
  return  blocks.map( (block, i) => {
    switch (block.template) {
      case 'bullet-points-block':
        return <BulletPointsBlock
                key={i}
                landingPage={landingPage}
                bulletPoints={block.bullet_points}
                headerText={block.header_text}
                headerIcon={block.header_icon}
                />
      case 'ema-call-to-action':
        return <EMACallToAction
                key={i}
                landingPage={landingPage}
                text={block.leading_text}/>
      case 'featured-block':
        return <FeatureBlock
                key={i}
                landingPage={landingPage}
                overview={block.overview_text}
                features={block.icon_blocks}/>
      case 'icon-block':
        return <IconBlock
                key={i}
                landingPage={landingPage}
                icon={block.icon}
                text={block.text}/>
      case 'image-block':
        return <ImageBlock
                key={i}
                landingPage={landingPage}
                text={block.text}
                image={block.image}/>
      case 'lead-paragraph':
        return <LeadParagraph
                key={i}
                landingPage={landingPage}
                text={block.text}/>
      case 'logo-block':
        return <LogoBlock
                key={i}
                landingPage={landingPage}
                heading={block.heading}
                logos={block.logos}/>
      case 'prose-block':
        return <ProseBlock
                key={i}
                landingPage={landingPage}
                text={block.text}/>
      case 'sales-funnel-block':
        return <SalesFunnel
                key={i}
                landingPage={landingPage}
                text={block.text}/>
      case 'video-block':
        return <VideoBlock
                key={i}
                landingPage={landingPage}
                text={block.text}
                video={block.video}/>
      default:
        return <p key={i}>{getComponentName(block.template)}</p>
    }
  })
}

function Blocks({blocks,landingPage = true}) {
  console.log(landingPage)
  return (
    <div id="blocks">
      {renderBlocks(blocks,landingPage)}
    </div>
  );
}

export default Blocks;