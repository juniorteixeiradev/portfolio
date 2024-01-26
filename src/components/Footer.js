import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container className="">
      <Col>
        <Row className="  ">
          <h5 className="text-white" style={{fontWeight: 300}}>Desenvolvido por <a className="text-decoration-none" style={{fontWeight: 400, color: "#6320ee"}} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/junior-teixeiradev/"> Junior Teixeira</a> &copy; {year}</h5>
        </Row>
      </Col>
    </Container>
  );
}

export default Footer;
