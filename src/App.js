import React from "react";
import Header from "./components/Header";  
import './App.css';
import Body from "./components/Body";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div id="app" className="App" role="main" aria-label="Main content">
      <Header />
      <Body />
      <About />
      <Projects />
      <Skills />
      <Footer /> 
    </div>
  )
}


export default App;

