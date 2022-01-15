import React from 'react'

function Nav(props){
    const {
      navElements = [],
      setCurrentNavElement,
      currentNavElement
    } = props

    


  return (
    <header className="h-50">
    <div className="header-coloring">
      <div className="container">
        <div className="row g-0">

          <div className="col-4">
            <h2 className="large-text">Mark Carriveau</h2>
          </div>
          
          <ul className="col row align-items-center w-100">
            {navElements.map( (element) => (
                <li 
                className={`col ${currentNavElement === element.name && 'navActive'}`}
                key={element.name}
                >
                <span onClick={() => {
                  setCurrentNavElement(element)
                }}>
                  <h3>{element.name}</h3>
                </span>
              </li>
            ))}
          
            {/* <li className="col">
              <span><h3>Portfolio</h3></span>
            </li>
            <li className="col">
              <span><h3>Contact</h3></span>
            </li>
            <li className="col">
              <span><h3>Resume</h3></span>
            </li> */}
          </ul>
  
        </div>
  
      </div>
    </div>

    
  </header>
  )
}

export default Nav