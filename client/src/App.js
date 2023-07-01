import NavBar from "./shared/components/NavBar";
import Home from "./Home";
import './App.css';
import React from "react";

import SignIn from './shared/components/SignIn.js';

import Education from "./education/Education";
import EducationPlant from "./EducationPlant";
import EducationBug from "./EducationBug";
import Grid from "./Grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/learn" element={<Education />} />
          <Route exact path="/grid" element={<Grid />} />
          <Route exact path="/learn/bug/:bugName" element={<EducationBug />} />
          <Route exact path="/learn/plant/:plantName" element={<EducationPlant />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;