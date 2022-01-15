import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Home";



function App() {

  const navElements = [
    {
      name:'About Me'
    },
    {
      name:'Portfolio'
    },
    {
      name:'Contact Me'
    },
    {
      name:'Resume'
    }
    ]
  
  const [currentNavElement, setCurrentNavElement] = useState(navElements[0])
  


  return (
    <div className="App">
      <Nav
      navElements={navElements}
      currentNavElement={currentNavElement}
      setCurrentNavElement={setCurrentNavElement}
      ></Nav>
      <main>
        <Homepage currentNavElement={currentNavElement}></Homepage>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
