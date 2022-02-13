import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){

  //set navbar elements to be mapped over
  const navBarElements = [
    {link:'/about', name: 'About Me'},
    {link:'/port', name: 'Portfolio'},
    {link:'/contact', name: 'Contact Me'},
    {link:'/resume', name: 'Resume'},
  ]

  return (
    <header className="h-50">
    <div className="header-coloring">
      <div className="container">
        <div className="row g-0 ">

            <Link to='/portfolio' className='col-md-4 col-sm-12' style={{textDecoration: 'none'}}>
            <h2 className="fs-1 nav-text">Mark Carriveau</h2>
            </Link>
  
          <ul className="col row w-100 ">
            
          {
            navBarElements.map(element => (
              <li className='col-md col-sm-12' key={element.name}>
                <Link to={element.link} style={{textDecoration: 'none'}}>
                  <h3 className='nav-text'>{element.name}</h3>
                </Link>
              </li>
            ))
          }
          </ul>
  
        </div>
  
      </div>
    </div>

    
  </header>
  )
}

export default Nav