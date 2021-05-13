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

import React from 'react';


function ShareButtons({url,title}) {
  const subject = `Checkout this page: ${title}`
  const body = `I thought you'd like this page.`

  return (
    <div>
      <EmailShareButton url={url} subject={subject} body={body}>
        Email
      </EmailShareButton>
      <FacebookShareButton url={url}>
        Facebook
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} source={'Sitename'} summary={'summary'}>
        LinkedIn
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        Twitter
      </TwitterShareButton>
    </div>
  );
}

export default ShareButtons;