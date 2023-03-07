import React from "react";
import Header from "./components/Header";
import project from "./components/project";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
export default function App() {
  return (
    <main>
      <Header />
      <Homepage />
      <project />
      <Projects />
      <Contact />
      

    </main>
  );
}


