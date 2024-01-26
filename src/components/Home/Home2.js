import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Avatar from "./Avatar";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ME <span className="purple"> CONHEÇA </span>
            </h1>
            <p className="home-about-body">
            Acadêmico do 3° período de Análise e
            Desenvolvimento de Sistemas na
            Uniasselvi, onde minha paixão por
            tecnologia se alia ao comprometimento
            constante com o aprimoramento de
            minhas habilidades.
              <br />
              <br />Eu sou
              <i>
                <b className="purple"> Desenvolvedor Full stack web</b>
              </i>
              <br />
              <br />
              Minha Principal Stack é <b className="purple">Node.js / JavaScript / PHP, </b>
              <i>
                <b className="purple">
                  {" "}
                 também tenho conhecimento de  frameworks  
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js, Next.js e Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
    
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <Avatar />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>REDES SOCIAIS</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juniorteixeiradev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/junior-teixeiradev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juniorteixeirab_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
