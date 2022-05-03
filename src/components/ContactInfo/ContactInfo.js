import React from "react";
//import gihub and linkedin icons
import emailIcon from '../../assets/images/icons/email.png'
import whiteEmailIcon from '../../assets/images/icons/email_white.png'

//footer component
function ContactInfo(){

  const ContactIcons = [
    {
      src: emailIcon,
      alt: 'email icon',
      href: 'mailto:mjbc53@gmail.com',
    },
  ]

  function changeIconColorWhite(evt){
    const hoveredIcon = evt.target.alt

   if(hoveredIcon === 'email icon'){
      evt.target.src = whiteEmailIcon
    }
  }

  function changeIconColorBlack(evt){
    const hoveredIcon = evt.target.alt
    
    if(hoveredIcon === 'email icon'){
      evt.target.src = emailIcon
    }

  }


  return (
    <footer className="d-flex justify-content-center py-4 flex-wrap">
      {ContactIcons.map(icon => (
         <a  href={icon.href}  rel="noreferrer" className="px-5 mb-2" target="_blank" key={icon.alt}>
         <img className="icon-size" src={icon.src} alt={icon.alt} onMouseEnter={changeIconColorWhite}
         onMouseLeave={changeIconColorBlack}/>
       </a>
      ))}
</footer>
  )
}

export default ContactInfo