import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBars from "./components/NavBar";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import ContectForm from "./components/ContectForm";

import "aos/dist/aos.css";
import Footer from "./components/Footer";
// import "./styles.css";
import './styles.scss'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <Router>
    <NavBars />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ContectForm" element={<ContectForm />} />
    </Routes>
    <Footer />
  </Router>
);
