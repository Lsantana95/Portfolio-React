import React from "react";
import SocialMedia from "./SocialMedia";
import { FotoPerfil, TextAbout, SobreContainer } from "../style/sobreStyles";

function Sobre() {
  return (
    <SobreContainer className="sobre-mim">
      <FotoPerfil className="foto-perfil">
        <img src="./src/assets/minha-foto.png" alt="minha foto de perfil" />
      </FotoPerfil>
      <div>
       
        <TextAbout className="about-text">
          <p>
            Olá, me chamo Leonardo e sou desenvolvedor{" "}
            <strong>Front End</strong>. Apaixonado por tecnologia e soluções
            criativas. Sempre disposto por criar soluções tecnológicas que
            resolvam problemas reais e que agregam valor aos usuários. Com mais
            de 3 anos de experiência em desenvolvimento web front end, estou
            sempre buscando trazer soluções robustas e escaláveis que atendam às
            necessidades dos clientes. Atualmente estou aprimorando minhas
            habilidades nas tecnologias front end com <strong>ReactJS</strong>,{" "}
            <strong>Styled Components</strong>, <strong>Sass</strong>, e{" "}
            <strong>NextJS</strong> com o objetivo de me especializar em{" "}
            <strong>Fron-end</strong>.
          </p><hr />
          <p>Acesse meu Github e entre em contato comigo através do Linkedin e E-mail:</p>
          <SocialMedia />
        </TextAbout>
      </div>
    </SobreContainer>
  );
}
export default Sobre;
