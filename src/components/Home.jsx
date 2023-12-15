import { Row, Col, Container, Button, Card } from "react-bootstrap";
import React, { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Container fluid className="hero_div">
        {/* <div className="container-flude hero_div"> */}
        {/* <div className="container hero_div"> */}
        <Container className="hero_div">
          {/* <div className="row"> */}
          <Row>
            <Col
              lg={6}
              className=" d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
            >
              {/* <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            > */}
              <div
                className="header_col"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h1 className="hero_h1">Better Solutions for Your Business</h1>
                <h2 className="hero_h2">
                  We Are a Team of Talented Developers and Designers Making
                  Websites and Providing Software Services for Your Business.
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#about" className="btn-get-started scrollto">
                    Get Started
                  </a>
                </div>
              </div>
            </Col>
            {/* </div> */}
            <Col
              lg={6}
              className=" order-1 order-lg-2 hero-img aos-init aos-animate"
            >
              {/* <div
              className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            > */}

              <img
                data-aos="fadge-left"
                data-aos-delay="500"
                src="./img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </Col>
          </Row>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </Container>
      </Container>
    </>
  );
};

export default Home;
