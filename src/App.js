import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ResumePage from "./pages/Resume";



function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <main>
          <Routes>
            {/* <Route excat path="/" element={ <Homepage/>}/> */}
            <Route excat path="/" element={ <About />}/>
            <Route excat path="/portfolio" element={ <Portfolio/>} />
            <Route excat path="/contactme" element={<ContactPage/>} />
            <Route excat path="resume" element={<ResumePage/>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
