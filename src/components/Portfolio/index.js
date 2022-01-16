import React from "react";

// protfolio component
function Portfolio(){

  //set projects so they can be mapped over
  const projects = [
    {
      name: 'Capital Opulence',
      deployedAt: 'https://capital-opulence.herokuapp.com/',
      githubRepo: 'https://github.com/Collin-W/Capital-Opulence',
      cssClass: 'capOpBGImg'
    },
    {
      name: 'Movies & Munchies',
      deployedAt: 'https://ahmed-sajjad111.github.io/Munchies-and-Movies/',
      githubRepo: 'https://github.com/Ahmed-Sajjad111/Munchies-and-Movies',
      cssClass: 'MandMImg'
    },
    {
      name: 'The FullStack Block',
      deployedAt: 'https://the-fullstack-blog.herokuapp.com/',
      githubRepo: 'https://github.com/mjbc53/fullstack-blog',
      cssClass: 'FSBlogImg'
    },
    {
      name: 'Weather DashBoard',
      deployedAt: 'https://mjbc53.github.io/weather-dashboard/',
      githubRepo: 'https://github.com/mjbc53/weather-dashboard',
      cssClass: 'WeathDashImg'
    },
    {
      name: 'Daily Scheduler',
      deployedAt: 'https://mjbc53.github.io/daily-scheduler/',
      githubRepo: 'https://github.com/mjbc53/daily-scheduler',
      cssClass: 'DaySchedImg'
    },
  ]
  return(
    <section id="portfolio" alt='project' className="container pt-4">
    <div className="row justify-content-center">
      <h3 className="pink-text text-center large-text col-12">Portfolio</h3>
      {projects.map ( project => (
         <div className={`${project.cssClass} col-5 mt-3  d-flex justify-content-center align-items-center `} key={project.name}>
         <div className="hide row">
         <a href={project.deployedAt} target='_blank' rel="noreferrer" className="port-a">{project.name}</a>
         <a href={project.githubRepo} target='_blank' rel="noreferrer" className="port-a">GitHub</a>
         </div>
       </div>
      ))}

    </div>  
  </section>

  )
}


export default Portfolio