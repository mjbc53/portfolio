import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){

  const navBarElements = [
    'About Me',
    'Portfolio',
    'Contact Me',
    'Resume'
  ]

  return (
    <header className="h-50">
    <div className="header-coloring">
      <div className="container">
        <div className="row g-0">

            <h2 className="fs-1 col-4">Mark Carriveau</h2>
  
          <ul className="col row w-100">
            
          {
            navBarElements.map(element => (
              <li className='col' key={element}>
                <Link to='/' style={{textDecoration: 'none'}}>
                  <h3 className='nav-text'>{element}</h3>
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