import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
       
      </div>
    </Router>
  );
}

export default App;