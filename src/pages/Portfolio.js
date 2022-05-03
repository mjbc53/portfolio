import React from "react";
import ArrowBar from '../components/ArrowBar'

// protfolio component
function Portfolio(){

  //set projects so they can be mapped over
  const projects = [
    {
      name: 'Mantis Mocha',
      deployedAt: 'https://mantismocha.herokuapp.com/',
      githubRepo: 'https://github.com/Ahmed-Sajjad111/mantis-mocha',
      cssClass: 'MantisMochaImg',
      description: 'Coffee shop E-commerce. Welcome to Mantis Mocha your new favorite e-commerce coffee shop'
    },
    {
      name: 'Movies & Munchies',
      deployedAt: 'https://ahmed-sajjad111.github.io/Munchies-and-Movies/',
      githubRepo: 'https://github.com/Ahmed-Sajjad111/Munchies-and-Movies',
      cssClass: 'MandMImg',
      description: 'Movie and restaurant finder for your next big date night.'
    },
    {
      name: 'Capital Opulence',
      deployedAt: 'https://capital-opulence.herokuapp.com/',
      githubRepo: 'https://github.com/Collin-W/Capital-Opulence',
      cssClass: 'capOpBGImg',
      description: 'Personal finance tracker. Track your spending and income with this personal finance tracker'
    },
    {
      name: 'The FullStack Block',
      deployedAt: 'https://the-fullstack-blog.herokuapp.com/',
      githubRepo: 'https://github.com/mjbc53/fullstack-blog',
      cssClass: 'FSBlogImg',
      description: 'Fullstack fully functioning blog for anyone to use.'
    },
    {
      name: 'Daily Scheduler',
      deployedAt: 'https://mjbc53.github.io/daily-scheduler/',
      githubRepo: 'https://github.com/mjbc53/daily-scheduler',
      cssClass: 'DaySchedImg',
      description: 'Daily planner. This planner allows you to plan out your day hour by hour'
    },
  ]
  return(
    <section id="portfolio" alt='project' className="container pt-4">
    <ArrowBar page='portfolio'/>
    <div className="row justify-content-center ">
      <h3 className="pink-text text-center large-text col-12">Portfolio</h3>
      {projects.map ( project => (
        <div className={`${project.cssClass} col-md-10 col-10 mt-3 d-flex justify-content-center align-items-center port-shadow`} key={project.name}>
         <div className="row">
         <a href={project.deployedAt} target='_blank' rel="noreferrer" className="port-a hide text-center mb-3">{project.name}</a>
         <a href={project.githubRepo} target='_blank' rel="noreferrer" className="port-a hide text-center mb-3">GitHub</a>
         <p className="port-p hide text-center">{project.description}</p>
         </div>
       </div>
      ))}

    </div>  
  </section>

  )
}


export default Portfolio