import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){

  const navBarElements = [
    {link:'/', name: 'About Me'},
    {link:'/portfolio', name: 'Portfolio'},
    {link:'/contactme', name: 'Contact Me'},
    {link:'/resume', name: 'Resume'},
  ]

  return (
    <header className="h-50">
    <div className="header-coloring">
      <div className="container">
        <div className="row g-0 ">

            <h2 className="fs-1 col-md-4 col-sm-12 nav-name">Mark Carriveau</h2>
  
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