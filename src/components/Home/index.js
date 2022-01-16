import React from "react";
import About from '../About'
import Portfolio from '../Portfolio'
import ContactPage from "../Contact";
import ResumePage from "../Resume";


function Homepage(props) {
  const {currentNavElement} = props

  let render = ''

  switch (currentNavElement.name){
    case 'About Me':
      render = <About/>
      break;
    case 'Portfolio':
      render = <Portfolio/>
      break;
    case 'Contact Me':
      render = <ContactPage/>
      break;
    case 'Resume':
      render = <ResumePage/>
      break;
    default:
    render = <About/>
  }

  return(
  <>
    {render}
  </>
  )
}

export default Homepage