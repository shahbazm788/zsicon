import { Row, Col, Container, Button, ProgressBar } from "react-bootstrap";

const Skills = () => {
  const now = 100;
  return (
    <>
      <section id="skills" className="skills">
        <Container className="aos-init aos-animate" data-aos="fade-up">
          <Row>
            <Col
              lg={6}
              className="d-flex align-items-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src="./img/skills.png" className="img-fluid" alt="" />
            </Col>
            <Col
              lg={6}
              className="pt-4 pt-lg-0 content aos-init aos-animate"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="skills_h3">We are Really Care of Our Client</h3>
              <p className="fst-italic">Responsive to Provide Services.</p>

              <div className="skills-content">
                <div>
                  <p className="skill">
                    Cloud Base Web Designing and Developement Solution
                    <i className="val">100%</i>
                  </p>
                  <ProgressBar now={now} />
                </div>
                <div>
                  <p className="skill">
                    CMS (Content Management System) Like ,WordPress, Shopify,
                    Joomla
                    <i className="val">100%</i>
                  </p>
                  <ProgressBar now={now} />
                </div>
                <div>
                  <p className="skill">
                    SEO (Search Engin Optimization)
                    <i className="val">100%</i>
                  </p>
                  <ProgressBar now={now} />
                </div>
                <div>
                  <p className="skill">
                    Support 24/7
                    <i className="val">100%</i>
                  </p>
                  <ProgressBar now={now} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Skills;
