import { Accordion } from "react-bootstrap";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Faq = () => {
  const [faqData, setFaqData] = useState([
    {
      q: "Is there a Demo available of your software's ? ",
      a:
        "Sure, you just need to Contact us When you Would need ,Our Team is there for your Support. "
    },
    {
      q: "Would You Get Backup on Daily Basis of Software Database? ",
      a:
        "Yes, Our Team Maintain Data Backup on Daily Basis, or Our System Auto take Backup Of Your Data. "
    },
    {
      q: "Would You Provide 24/7 Support of your Client ? ",
      a: "Sure, We Will Facilitate Our Client 24/7. "
    },
    {
      q:
        "Could you Please let us know , Would You do Setup Remotely, Your Software's ? ",
      a: "Yes, We Can Setup Our Software Remotely. "
    }
  ]);

  return (
    <>
      <section id="faq" className="faq section-bg">
        <Container className="aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            <Accordion
              defaultActiveKey="0"
              className="aos-init aos-animate"
              data-aos="fade-down"
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ color: "#47b2e4 !important" }}>
                  How can we contact for website or software solution for our
                  business ?
                </Accordion.Header>
                <Accordion.Body>
                  <Icon icon="bx:help-circle" /> You can Contact Provided
                  <b style={{ color: "midnightblue" }}>
                    Mobile No +92-343-8063996 or +92-316-2867017
                  </b>
                  or you can just
                  <b style={{ color: "midnightblue" }}>
                    Email us <a>Support@zsicon.com</a> .
                  </b>{" "}
                  We will be there for your help as soon as possible.
                </Accordion.Body>
              </Accordion.Item>
              {faqData.map((item, i) => {
                return (
                  <Accordion.Item
                    eventKey={i + 1}
                    className="aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <Accordion.Header className="accord_header">
                      <Icon icon="bx:help-circle" />
                      {item.q}
                    </Accordion.Header>
                    <Accordion.Body>{item.a}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>

            {/* <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                className="aos-init aos-animate"
              >
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  className="collapse collapsed"
                  data-bs-target="#faq-list-1"
                  aria-expanded="false"
                >
                  How can we contact for website or software solution for our
                  business ? <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-show"></i>
                </a>
                <div
                  id="faq-list-1"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    You can Contact Provided{" "}
                    <b style={{ color: "midnightblue" }}>
                      Mobile No +92-343-8063996 or +92-316-2867017
                    </b>{" "}
                    or you can just{" "}
                    <b style={{ color: "midnightblue" }}>
                      Email us Support@zsicon.com .
                    </b>{" "}
                    We will be there for your help as soon as possible.
                  </p>
                </div>
              </li>

              <li
                data-aos="fade-up"
                data-aos-delay="200"
                className="aos-init aos-animate"
              >
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Is there a Demo available of your software's ?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Sure, you just need to Contact us When you Would need ,Our
                    Team is there for your Support.
                  </p>
                </div>
              </li>

              <li
                data-aos="fade-up"
                data-aos-delay="300"
                className="aos-init aos-animate"
              >
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  Would You Get Backup on Daily Basis of Software Database?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Yes, Our Team Maintain Data Backup on Daily Basis, or Our
                    System Auto take Backup Of Your Data.
                  </p>
                </div>
              </li>

              <li
                data-aos="fade-up"
                data-aos-delay="400"
                className="aos-init aos-animate"
              >
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  Would You Provide 24/7 Support of your Client ?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>Sure, We Will Facilitate Our Client 24/7.</p>
                </div>
              </li>

              <li
                data-aos="fade-up"
                data-aos-delay="500"
                className="aos-init aos-animate"
              >
                <i className="bx bx-help-circle icon-help"></i>{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  Could you Please let us know , Would You do Setup Remotely,
                  Your Software's ?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>Yes, We Can Setup Our Software Remotely.</p>
                </div>
              </li>
            </ul> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Faq;
