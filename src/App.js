import { Row, Col, Container, Button } from "react-bootstrap";
import About from "./components/About";
import Cta from "./components/Cta";
import Home from "./components/Home";
import Faq from "./components/faq";
import ContectForm from "./components/ContectForm";
import Services from "./components/Services";
import Team from "./components/Team";


function App() {
  return (
    <>
    
      <Home /> 
      <About /> 
      <Services />
      <Cta />
      <Team />
      <Faq />
      <ContectForm />
      
    </>
  );
}

export default App;
