import React from 'react'
//import photo for about me
import personalPhoto from '../assets/images/about-me-image.jpg'
import ArrowBar from '../components/ArrowBar'

//about me component function
function About(){
  return(
  <section id="about" className="container pt-4">
    <ArrowBar page='aboutme'/>
    <div className="row">
        <h3 className="pink-text text-center large-text col-12">About me</h3>

        <div className="about-me-text text-center">
          <img src={personalPhoto}  alt='Mark Carriveau' className="img-style mt-2"/>
    
          <p className="m-0 py-5 white-text fs-5">
            Hey how's it going I'm Mark Carriveau. 
            <br/>
            • a Current CNC machinist and Front-End Developer/Aspiring Full-Stack Developer, know as a fast learner, 
            clever, organized and exceptional at problem solving.
            <br/>
            • I am a very passionate, hardworking person who takes pride in my work and I am always trying to further my 
            knowledge in any field/hobby I undertake .
            <br/>
            • I have past experience working in a team setting, and leading a team from my experience in FLL(First Lego 
            League). 
            <br/>
            • I gained the fundamental skill of how to problem solve, stay organized and learn at a fast pace when I 
            attended college for CNC machining when I was just 16.
            <br/>
          </p>
        </div>
      </div>    
  </section>
  )
}

export default About