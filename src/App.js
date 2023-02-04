import React from "react";
import Drawer from './component/Home/Drawer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Services from './component/Services/Services'
import Resume from "./component/Resume/Resume";
import Projects from './component/Portfolio/Projects';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
