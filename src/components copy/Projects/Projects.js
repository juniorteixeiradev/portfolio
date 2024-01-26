import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jessy from "../../Assets/Projects/jessy.png";
import mypackage from "../../Assets/Projects/mypackage.png";
import meu from "../../Assets/Projects/meu.png";
import conversor from "../../Assets/Projects/conversor.png";
import cadastro from "../../Assets/Projects/cadastro.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ultimos projetos que eu trabalhei
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jessy}
              isBlog={false}
              title="Site Psicologa Jessy Magalhães"
              description="Site institucional para psicóloga Jessica, com otimização SEO, com objeto de caputra de possiveis clientes, totalmente desenvolvido utilizando React.JS"
              ghLink="https://github.com/juniorteixeiradev/jessymagalhaes"
              demoLink="https://jessymagalhaespsi-sandbox.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mypackage}
              isBlog={false}
              title="MyPackage BR"
              description="Projeto pessoal para rastreio de encomendas correios, consumindo uma API REST via axios, foi utilizado React.JS"
              ghLink="https://github.com/juniorteixeiradev/mypackagebr"
              demoLink="https://mypackagebr.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meu}
              isBlog={false}
              title="Portfolio Junior Teixeira"
              description="Meu próprio portfolio, utilizando tecnologias como React.js + Bootstrap"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conversor}
              isBlog={false}
              title="Conversor de Videos do Youtube em MP3"
              description="Conversor de videos do Youtube em MP3, solução simples utilizando React.js + Axios para consumo de API"
              demoLink="https://convertemeuvideoemmp3.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cadastro}
              isBlog={false}
              title="Sistema de Cadastro de Produtos"
              description="Pequeno sistema para gerenciamento de estoque de empresa, utilizando Next.JS + FireBase + Tailwind"
              demoLink="https://sis-cadastro-products.vercel.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
