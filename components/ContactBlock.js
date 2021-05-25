import React from 'react';
import Envelope from '../components/icons/fa-envelope'
import AddressCard from '../components/icons/fa-address-card'
import Twitter from '../components/icons/fa-twitter'
import LinkedIn from '../components/icons/fa-linkedin'

function ContactBlock({twitter,linkedin,email,name,vCardLink}) {
  return (
    <div className="">
      <div className="my-8 flex space-x-5 justify-center list-none">
        { email ?
        <div className="list-none">
          <a href={`mailto:${email}`} className="block">
            <span className="sr-only">Email {name}</span>
            <Envelope className="" width={40} height={40}/>
          </a>
        </div>
        : ''}
        <div className="list-none">
          <a href={"#"} className="block  hover:text-gray-500">
            <span className="sr-only">Download vcard for {name} </span>
            <AddressCard className="" width={40} height={40}/>
          </a>
        </div>
        { twitter ?
        <div className="list-none">
          <a href={twitter} className="block">
            <span className="sr-only">Follow {name} on Twitter</span>
            <Twitter className="" width={40} height={40}/>
          </a>
        </div>
        : ''}
        {linkedin ?
        <div>
          <a href={linkedin} className="block">
          <span className="sr-only">Follow {name} on LinkedIn</span>
            <LinkedIn className="" width={40} height={40}/>
          </a>
        </div>
        : ''}
      </div>
    </div>
  );
}

export default ContactBlock;