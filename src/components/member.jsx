import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Member = () => {
  const [teamMenber, setTeamMenber] = useState([
    {
      img: "w.jpg",
      name: "WASIQ KHAN",
      role: "Chief Executive Officer",
      info: "OUR AIM IS TO PROVIDE BETTER SOLUTION"
    },
    {
      img: "nasir.jpg",
      name: "NASIR ABBAS",
      role: "Chief Technical Officer",
      info: "We Build a easy Solution for your complex Business"
    },
    {
      img: "faheem.png",
      name: "MUHAMMAD FAHEEM",
      role: "DEVELOPMENT MANAGER",
      info: "Empowering Businesses through Technology"
    },
    {
      img: "fahad.png",
      name: "MUHAMMAD FAHAD",
      role: "SR. FRONTEND DEVELOPER",
      info: "Unlocking Solutions through Cutting-Edge Code"
    },
    {
      img: "haziq.jpg",
      name: "HAZIQ AHMED",
      role: "MANAGER",
      info: "The joy of Tech Spirit"
    },
    {
      img: "adeel.jpg",
      name: "ADEEL SUBHAN",
      role: "UI/UX DesignerR",
      info: "Technology made simple"
    }
  ]);

  const [socile, setSociol] = useState([
    "ri:twitter-fill",
    "ri:facebook-fill",
    "ri:instagram-fill",
    "ri:linkedin-box-fill"
  ]);
  return (
    <>
      {teamMenber.map((menber, i) => {
        return (
          <Col md={6} className="menber_col">
            <div
              className="member d-flex align-items-start aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="pic">
                <img src={`./img/${menber.img}`} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>{menber.name}</h4>
                <span>{menber.role}</span>
                <p>{menber.info}</p>
                <div className="social">
                  {socile.map((item, i) => {
                    return (
                      <a href="https://www.facebook.com/wasiq.khan.IT/">
                        <Icon icon={item} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Member;
