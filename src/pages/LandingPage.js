import React from 'react'
import gif from '../assets/gifs/cyberpunk.gif'

function LandingPage(){
  return(
    <section id='landing' className='container pt-4'>
      <div className='row'>
        <h3 className='pink-text text-center large-text col-12'>Welcome!</h3>
      
        <div className='text-center land-text'>
          <p className='m-0 py-5 black-text fs-5'>
            Welcome to my personal portfolio and Thank you for visiting!<br/>
            If you have any questions for me on the page or myself please shoot
            me an email in the contact me section of the page.
          </p>
          <img src={gif} className="mb-5 gif-style" alt='gif of a cyber punk city'/>
        </div>
      </div>
    </section>
  )
}


export default LandingPage