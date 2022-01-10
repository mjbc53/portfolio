import React from 'react'

function Nav(){
  return (
    <header className="h-50">
    <div className="header-coloring">
      <div className="container">
        <div className="row g-0">

          <div className="col-4">
            <h2 className="large-text">Mark</h2>
          </div>
          
          <ul className="col row align-items-center">
            <li className="col">
              <span><h3>About me</h3></span>
            </li>
            <li className="col">
              <span><h3>Portfolio</h3></span>
            </li>
            <li className="col">
              <span><h3>Contact</h3></span>
            </li>
            <li className="col">
              <span><h3>Resume</h3></span>
            </li>
          </ul>
  
        </div>
  
      </div>
    </div>

    
  </header>
  )
}

export default Nav