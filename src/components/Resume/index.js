import React from "react";
//import resume pdf
import Resume from '../../assets/resume.pdf'


//resumepage portfolio
function ResumePage(){

  //frontend proficiencies to map over
  const frontEndPro = [
    'Html', 
    'CSS', 
    'Bootstrap', 
    'JavaScript', 
    'React', 
    'Page Design', 
    'Responsive Design'
  ]

  //backend proficiencies to map over
  const backEndPro = [
    'Express.js',
    'Node.js',
    'MongoDB, mongoose',
    'JavaScript',
    'APIs, RestFul Apis',
    'Mysql, Squelize',
    'GrahpQL'
  ]

  return (
    <section id="resume" className="container">
      <div className="row">
        <h3 className="pink-text text-center large-text col-12">Resume</h3>

        <h4 className="res-titles text-center">Resume</h4>  
        <span className="res-span pb-3">Download my Resume 
         <a href={Resume} className='res-a' download> Download</a>
        </span>
        
        <h4 className="res-titles">Front-end Proficiencies</h4>
        <ul className="res-ul">
        {frontEndPro.map( pro => (
          <li className="res-li">
            •{pro}
          </li>
        ))}
        </ul>


        <h4 className="res-titles">Back-end Proficiencies</h4>

        <ul className="res-ul">
        {backEndPro.map( pro => (
          <li className="res-li">
            •{pro}
          </li>
        ))}
        </ul>
      </div>
    </section>

  )
}


export default ResumePage