import { Row, Col, Container, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

import Skills from "./Skills";
const About = () => {
  return (
    <>
      <section id="about" className="about">
        <Container
          className="container aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="section-title">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-12">
              <p>
                ZSIcon is a custom software and Web, CMS development company,
                founded in 2012. ZSIcon Head Office in Haroon Bahria, karachi,
                we facilitate to our Employee to work remotly from different
                cities. ZSIcon strives to ensure a better tomorrow for everyone
                on the team and take on challenges that help us grow one step
                closer to our mission
              </p>
              <ul className="about_ul">
                <li>
                  <Icon icon="ri:check-double-line" className="li_icon" />
                  Ideas that connect | Innovation that delivers
                </li>
                <li>
                  <Icon icon="ri:check-double-line" className="li_icon" /> we
                  excel in the planning and delivery of comprehensive IT
                  solutions for Business
                </li>
                <li>
                  <Icon icon="ri:check-double-line" className="li_icon" />{" "}
                  ZSIcon offers its employees the knowledge, skills and proper
                  training enabling them to perform better and grow.
                </li>
              </ul>
            </div>
          </div>
          <Skills />
        </Container>
      </section>
      
    </>
  );
};

export default About;
