import React from 'react'
import rightArrow from '../../assets/images/icons/right-arrow.png'
import whiteRightArrow from '../../assets/images/icons/right-arrow-white.png'
import leftArrow from '../../assets/images/icons/left-arrow.png'
import whiteLeftArrow from '../../assets/images/icons/left-arrow-white.png'
import { Link } from 'react-router-dom'

function ArrowBar(props){
  let leftArrowLink
  let rightArrowLink

  switch (props.page) {
    case 'home':
      leftArrowLink = '/resume'
      rightArrowLink = '/about'
      break;
    case 'aboutme':
      leftArrowLink = '/portfolio'
      rightArrowLink = '/port'
      break;
    case 'portfolio':
      leftArrowLink = '/about'
      rightArrowLink = '/contact'
      break;
    case 'contact':
      leftArrowLink = '/port'
      rightArrowLink = '/resume'
      break;
    case 'resume':
      leftArrowLink = '/contact'
      rightArrowLink = '/portfolio'
      break;
  
    default:
      leftArrowLink ='/portfolio'
      rightArrowLink ='/portfolio'
      break;
  }

  function changeIconColorWhite(evt){
    const hoveredIcon = evt.target.alt

    if(hoveredIcon === 'left arrow'){
      evt.target.src = whiteLeftArrow
    } else if(hoveredIcon === 'right arrow'){
      evt.target.src = whiteRightArrow
    }
  }

  function changeIconColorBlack(evt){
    const hoveredIcon = evt.target.alt

    if(hoveredIcon === 'left arrow'){
      evt.target.src = leftArrow
    } else if(hoveredIcon === 'right arrow'){
      evt.target.src = rightArrow
    }
  }
  
  console.log(props.page)

  return(
    <div className='row justify-content-between ab-show-text'>
      <Link to={leftArrowLink} className='col-1'>
        <img alt='left arrow' src={leftArrow} className='arrow-size'
        onMouseEnter={changeIconColorWhite}
        onMouseLeave={changeIconColorBlack}/>
      </Link>
      <div className='col-8 align-self-center'>
        <span className='ab-msg-text text-center'>Click an arrow<br/> to go to the next page or use the navbar above</span>
      </div>
      <Link  to={rightArrowLink} className='col-1'>
        <img alt='right arrow' src={rightArrow} className='arrow-size'
        onMouseEnter={changeIconColorWhite}
        onMouseLeave={changeIconColorBlack}/>
      </Link>
    </div>
  )
}

export default ArrowBar