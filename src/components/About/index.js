import React from 'react'
//import photo for about me
import personalPhoto from '../../assets/images/about-me-image.jpg'

//about me component function
function About(){
  return(
    <section id="about" className="container pt-4">
    <div className="row">
      <h3 className="pink-text text-center large-text col-12">About me</h3>

      <div className="about-me-text text-center">
        <img src={personalPhoto}  alt='Mark Carriveau' className="img-style mt-2"/>
  
        <p className="m-0 py-5 black-text fs-5">
        Hey, how's it going I'm Mark Carriveau a current CNC Machinist, looking at getting into the 
        full stack web development field.
        I am currently finishing up a MERN Fullstack boot camp at the University of Minnesota.
        Once I have finished the boot camp, then I will see where web development takes.
        I have a love for anything cars or mechanical/logical.
        I love to learn and am known as someone who can catch on pretty quick.
        </p>
      </div>
      </div>    
  </section>
  )
}

export default About