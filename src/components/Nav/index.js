import React from 'react'

function Nav(props){
  //decontrust the props
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

            <h2 className="fs-1 col-4">Mark Carriveau</h2>
  
          
          <ul className="col row w-100">
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
          </ul>
  
        </div>
  
      </div>
    </div>

    
  </header>
  )
}

export default Nav