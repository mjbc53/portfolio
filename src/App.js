import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ResumePage from "./pages/Resume";
import Home from "./pages/Home.js";
import NoMatch from "./pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <main>
          <Routes>
            <Route excat path="/" element={<Home/>}/>
            <Route excat path="/about" element={<About/>}/>
            <Route excat path="/port" element={<Portfolio/>} />
            <Route excat path="/contact" element={<ContactPage/>} />
            <Route excat path="resume" element={<ResumePage/>} />
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
