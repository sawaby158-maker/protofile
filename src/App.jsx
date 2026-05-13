import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import Skills from "./components/features/feature.jsx";
import MyProjects from "./components/projects/project.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Skills />
      <MyProjects />
      <Footer />
    </>
  );
}

export default App;
