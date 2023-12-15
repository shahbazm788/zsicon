import { Row, Col, Container, Button, Card } from "react-bootstrap";

import Member from "./member";
const Team = () => {
  return (
    <>
      <Container fluid className="section-bg">
        <Container>
          <div class="section-title">
            <h2>Team</h2>
            <p>
              Our Technical Team Experts would Provide you best solution for
              your business, it makes your business process efficient and
              Perfect.
            </p>
          </div>
        </Container>
        <Container>
          <Row>
            <Member />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Team;
