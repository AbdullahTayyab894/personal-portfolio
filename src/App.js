import React from "react";
import Drawer from './component/Home/Drawer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import ProjectsDisplay from "./component/Portfolio/ProjectsDisplay";
import Skills from "./component/Services/Skills";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<ProjectsDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
