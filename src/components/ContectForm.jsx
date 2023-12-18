import { Row, Col, Container, Button, Form, Card } from "react-bootstrap";

const ContectForm = () => {
  const sendEmail = () => {};
  return (
    <>
      <section id="contact" className="contact">
        <Container>
          <div className=" aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>

            <Row>
              <Col lg={12} className=" mt-4 mt-lg-0 d-flex align-items-stretch">
                <Form className="php-email-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label for="name">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="FirstName"
                          id="name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label for="name">Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="SenderEmail"
                          id="email"
                          required=""
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Label for="name">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="Subject"
                      id="subject"
                      required=""
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="name">Message</Form.Label>
                    <Form.Control
                      id="txt-message"
                      as="textarea"
                      name="Body"
                      rows={10}
                      required=""
                    ></Form.Control>
                  </Form.Group>
                  {/* <Form.Group>
                    <Form.Lable style={{ color: "red" }} id="lbl-error"></Form.Label>
                  </Form.Group> */}
                  <div className="text-center">
                    <Button
                      onclick={sendEmail}
                      style={{
                        background: "#47b2e4",
                        color: "white;",
                        margin: "15px 0"
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContectForm;
