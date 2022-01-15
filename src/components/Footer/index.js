import React from "react";
import githubIcon from '../../assets/images/icons/github.png'
import linkedInIcon from '../../assets/images/icons/linkedin-logo.png'

function Footer(){
  return (
    <footer class="d-flex justify-content-center py-4 flex-wrap">
    <a  href="https://github.com/mjbc53"  rel="noreferrer" class="px-5" target="_blank">
      <img class="icon-size-96px" src={githubIcon} alt="github icon"/>
    </a>
    <a href="https://www.linkedin.com/in/mark-carriveau-6a9516217/"  rel="noreferrer" class="px-5" target="_blank">
      <img class="icon-size-96px" src={linkedInIcon} alt="linkedIn icon" />
    </a>
    <p class="w-100 text-center py-3 fs-4 black-text">
      Made by Mark Carriveau. Thank you for visiting!
    </p>
</footer>
  )
}

export default Footer