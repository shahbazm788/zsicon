import { Row, Col, Container, Button, Card } from "react-bootstrap";

const Cta = () => {
  return (
    <>
      <Container fluid className="cta_fluid">
        <section id="cta" className="cta">
          <Container className="aos-init aos-animate" data-aos="zoom-in">
            <Row>
              <Col lg={9} className="text-center text-lg-start">
                <h3 className="cta_h3">
                  <a className="nav-link scrollto" href="#contact">
                    Call To Action
                  </a>
                </h3>
                <p className="cta_p">
                  Let's Talk About Your Project, We are here to Provide Software
                  for your Business in the digital world
                </p>
              </Col>
              <Col lg={3} className="cta-btn-container text-center">
                <Button
                  variant="outline-info"
                  className="cta-btn align-middle"
                  href="#contact"
                >
                  Call To Action
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};
export default Cta;
