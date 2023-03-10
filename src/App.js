import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import AllProject from "./component/Portfolio/AllProject";
import Responsive from './component/Skills/SkillSlider'
import DrawerAppBar from './component/Menubar/MenuBar'
import DrawerAbout from "./component/Home/Home";
import Footer from "./component/footer/Footer";
import MainAbout from "./component/About/MainAbout";
import HomePageProjects from "./component/Portfolio/HomePageProjects";
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
              <Responsive />
              <HomePageProjects />
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
