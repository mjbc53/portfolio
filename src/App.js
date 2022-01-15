import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        {/* <ContactPage></ContactPage> */}
        {/* <About></About> */}
        <Portfolio/>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
