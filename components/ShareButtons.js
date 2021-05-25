import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share"

import Envelope from './icons/fa-envelope'
import Facebook from './icons/fa-facebook'
import LinkedIn from './icons/fa-linkedin'
import Twitter from './icons/fa-twitter'

import React from 'react';


function ShareButtons({url,title}) {
  const subject = `Checkout this page: ${title}`
  const body = `I thought you'd like this page.`

  return (
    <div className="flex my-8">
      <div className="mr-4">
        Share
      </div>
      <EmailShareButton url={url} subject={subject} body={body}>
        <Envelope className="mr-4 text-brand-secondary hover:text-brand-blue" width={30} height={30}/>
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <Facebook className="mr-4 text-brand-secondary hover:text-brand-blue" width={30} height={30}/>
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} source={'Sitename'} summary={'summary'}>
        <LinkedIn className="mr-4 text-brand-secondary hover:text-brand-blue" width={30} height={30}/>
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <Twitter className="mr-4 text-brand-secondary hover:text-brand-blue" width={30} height={30}/>
      </TwitterShareButton>
    </div>
  );
}

export default ShareButtons;