import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import ProjectsDisplay from "./component/Portfolio/ProjectsDisplay";
import Skills from "./component/Services/Skills";
import DrawerAppBar from './component/Menubar/MenuBar'
import DrawerAbout from "./component/Home/Home";
import Footer from "./component/footer/Footer";
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
              <Resume />
              <ProjectsDisplay />
            </>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
