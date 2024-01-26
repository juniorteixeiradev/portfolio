import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Opa! Eaí, deixa eu me aprensentar, Eu sou <span className="purple"><b>Junior Teixeira</b> </span>
            tenho 27 anos, e atualmente moro em <span className="purple"> Santa Quitéria - CE.</span>
            <br />
            Estudante do 3° Período de <span className="purple"><b>Análise e Desenvolvimento de Sistemas na Uniasselvi</b></span>.
            <br />
            Desde o começo da graduação crio soluções para empresas que me contratam como freelancer.
            <br />
            Minha missão é compreender, o que meus clientes procuram, e tornar isso tangível,
          
            Da melhor forma, usando tecnologia é claro :)
            <br />
          </p>


          <p style={{ fontSize: "12px"}}>
            "Seja forte e corajoso!<br /> Não se apavore nem desanime,<br />  
            pois o Senhor, o seu Deus, <br /> 
            estará com você por onde você andar"{" "}
          </p>
          <footer style={{ fontSize: "12px"}}>JOSUÉ 1:9</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
