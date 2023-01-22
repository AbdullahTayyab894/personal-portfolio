import React from "react";
import Drawer from './component/Home/Drawer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Services from './component/Services/Services'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
