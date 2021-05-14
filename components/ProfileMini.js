import React from 'react';
import ReactMarkdown from 'react-markdown'
import CloudinaryImage from '../components/CloudinaryImage'
import LinkEmail from '../components/basic/LinkEmail'

function ProfileMini({name,position,image,email}) {
  return (
    <article className="text-center">
      {image ?
        <CloudinaryImage
          width={300}
          height={300}
          src={image}
          className="rounded-full mx-auto"/>
      : ''}
      <header className="text-xl my-8">
        {name}
        <small>{position}</small>
      </header>
      <footer>
        {/* <LinkEmail email={email}/> */}
      </footer>
    </article>
  );
}

export default ProfileMini;