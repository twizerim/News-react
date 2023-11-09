import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Wellcome from "./pages/wellcome";
import About from "./pages/about";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wellcome/>}></Route>
        <Route path="/ok" element={<About/>}></Route>
      </Routes>
    </Router>
  )
}
export default App