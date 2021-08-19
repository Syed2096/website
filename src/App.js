import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NavbarNew from './components/NavbarNew';
// import Footer from './components/Footer';


function App() {
  return (
    <>
     <NavbarNew/>
      <Router basename='/'>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/skills'>
          <Skills/>
        </Route>
        <Route path='/experience'>
          <Experience/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>        
      </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;

