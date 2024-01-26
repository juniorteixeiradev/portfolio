import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import Tilt from "react-parallax-tilt";
import {
  DiJava,
} from "react-icons/di";
import { CSSIcon, HTMLIcon, JavaScriptIcon, LaravelIcon, NextIcon, NodeIcon, PhpIcon, ReactIcon, SQLIcon } from "./TechIcons";

function Techstack() {
  return (
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , display:"flex", gap:"1rem"}} className="card-tech">

      <Col xs={4} md={2} >
        <Tilt><JavaScriptIcon /></Tilt>
      </Col>

      <Col xs={4} md={2} >
      <Tilt><NodeIcon /></Tilt>
      </Col>
      <Col xs={4} md={2}>
      <Tilt><ReactIcon /></Tilt>
      </Col>

      <Col xs={4} md={2}>
      <Tilt><NextIcon /></Tilt>
      </Col>
      <Col xs={4} md={2}>
      <Tilt><LaravelIcon /></Tilt>
      </Col>
      <Col xs={4} md={2}>
      <Tilt><SQLIcon /></Tilt>
      </Col>
      <Col xs={4} md={2}>
      <Tilt><HTMLIcon /></Tilt>
      </Col>
      <Col xs={4} md={2}>
      <Tilt><CSSIcon /></Tilt>
      </Col>
      <Col xs={4} md={2}>
      <Tilt><PhpIcon /></Tilt>
      </Col>
    </Row>
    </Container>
  );
}

export default Techstack;
