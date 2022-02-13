import React from "react";
//import gihub and linkedin icons
import githubIcon from '../../assets/images/icons/github.png'
import linkedInIcon from '../../assets/images/icons/linkedin-logo.png'
import emailIcon from '../../assets/images/icons/email.png'
import whiteGithubIcon from '../../assets/images/icons/github_white.png'
import whiteLinkedInicon from '../../assets/images/icons/linkedin-logo-white.png'
import whiteEmailIcon from '../../assets/images/icons/email_white.png'

//footer component
function Footer(){

  const footerIcons = [
    {
      src: githubIcon,
      alt: 'github icon',
      href: 'https://github.com/mjbc53' ,
    },
    {
      src: linkedInIcon,
      alt: 'linkedIn icon',
      href: 'https://www.linkedin.com/in/mark-carriveau-6a9516217/' ,
    },
    {
      src: emailIcon,
      alt: 'email icon',
      href: 'mailto:mjbc53@gmail.com',
    },
  ]

  function changeIconColorWhite(evt){
    const hoveredIcon = evt.target.alt

    if(hoveredIcon === 'github icon'){
      evt.target.src = whiteGithubIcon
    } else if(hoveredIcon === 'linkedIn icon'){
      evt.target.src = whiteLinkedInicon
    } else if(hoveredIcon === 'email icon'){
      evt.target.src = whiteEmailIcon
    }
  }

  function changeIconColorBlack(evt){
    const hoveredIcon = evt.target.alt

    if(hoveredIcon === 'github icon'){
      evt.target.src = githubIcon
    } else if(hoveredIcon === 'linkedIn icon'){
      evt.target.src = linkedInIcon
    } else if(hoveredIcon === 'email icon'){
      evt.target.src = emailIcon
    }

  }


  return (
    <footer className="d-flex justify-content-center py-4 flex-wrap">
      {footerIcons.map(icon => (
         <a  href={icon.href}  rel="noreferrer" className="px-5 mb-2" target="_blank" key={icon.alt}>
         <img className="icon-size" src={icon.src} alt={icon.alt} onMouseEnter={changeIconColorWhite}
         onMouseLeave={changeIconColorBlack}/>
       </a>
      ))}
    <p className="w-100 text-center py-3 fs-4 black-text">
      Made by Mark Carriveau. Thank you for visiting!
    </p>
</footer>
  )
}

export default Footer