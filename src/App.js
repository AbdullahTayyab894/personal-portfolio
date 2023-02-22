import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import ProjectsDisplay from "./component/Portfolio/ProjectsDisplay";
import AllProject from "./component/Portfolio/AllProject";
import Skills from "./component/Services/Skills";
import DrawerAppBar from './component/Menubar/MenuBar'
import DrawerAbout from "./component/Home/Home";
import Footer from "./component/footer/Footer";
import MainAbout from "./component/About/MainAbout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={
            <>
              <DrawerAbout />
              <About />
              <Skills />
              <ProjectsDisplay />
            </>} />
            <Route path="/project" element={<AllProject />}/>
            <Route path="/about" element={<MainAbout />}/>
            <Route path="/resume" element={<Resume />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
