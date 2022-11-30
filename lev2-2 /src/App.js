import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pets from "./pages/Pets";


function App() {
  return (
    <div className="asdfF" >
      <Router >
        <Navigation />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<About />} />
             <Route path="/pets" element={<Pets />} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
