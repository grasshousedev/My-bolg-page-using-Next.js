import React from 'react';
import LogoBlock from './LogoBlock'
import IconBlock from './IconBlock'
import SalesFunnel from './SalesFunnelBlock'
import ImageBlock from './ImageBlock'

const getComponentName = (template) => {
  let cName = ''
  template.split("-").forEach( word => {
    cName += word.replace(/^\w/, (c) => c.toUpperCase())
  });
  return cName
}

const renderBlocks = (blocks) => {
  return blocks.map( block=> {
    switch (block.template) {
      case 'logo-block':
        return <LogoBlock heading={block.heading} logos={block.logos}/>
      case 'block-icons':
        return <IconBlock overview={block.overview_text} iconBlocks={block.icon_blocks}/>
      case 'sales-funnel-block':
        return <SalesFunnel text={block.text}/>
      case 'image-block':
        return <ImageBlock text={block.text} image={block.image}/>
      default:
        return <p>{getComponentName(block.template)}</p>
    }
  })
}

function Blocks({blocks}) {
  console.log(blocks)
  return (
    <div id="blocks">
      {renderBlocks(blocks)}
    </div>
  );
}

export default Blocks;