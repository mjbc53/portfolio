import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        {/* <ContactPage></ContactPage> */}
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
