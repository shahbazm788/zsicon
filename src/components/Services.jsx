import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Cards from "./Card";
import { useState, useEffect } from "react";
import AOS from "aos";
const Services = () => {
  const [cardData, setCardData] = useState([
    {
      heading: "Cloud Base Applications",
      img: "CloudServices.png"
    },
    {
      heading: "24/7 Technical Supports",
      img: "247.jpg"
    },
    {
      heading: "Desktop Application",
      img: "desktop-applications.png"
    },
    {
      heading: "CMS (Content Management System)",
      img: "CMS.png"
    }
  ]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section id="services" className="about">
        <Container className="aos-init aos-animate" data-aos="fade-up">
          <Row className="content">
            <Col ld={12}>
              <div class="section-title">
                <h2>Services</h2>
                <p>
                  We are the leading Nearshore and onshore Technology Solutions
                  company. We architect and engineer scalable and
                  high-performing software solutions to meet the business
                  challenges of our clients.
                </p>
                <p>
                  Using our tech expertise and cross-industry experience, we
                  evolve digital transformation into digital acceleration. Our
                  ultimate goal is to create lasting value throughout the entire
                  digital transformation journey.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {cardData.map((item, i) => {
              return (
                <Col lg={3} md={6}>
                  <Cards item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
