import React from "react";
import { Img, Sessao, Div, IconList, ProfileContainer} from "../style/inicioStyle";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function Inicio() {

  return (
    <Sessao>
      <ProfileContainer>
        <Img src="./src/assets/Dev.jpeg" alt="dev programando" />
        
        <div>
        <IconList className="icons">
          <FaHtml5 />
          <FaCss3Alt />
          <IoLogoJavascript />
          <SiTypescript />
          <FaSass />
          <FaBootstrap />
          <FaReact />
          <SiStyledcomponents />
          <TbBrandNextjs />
          <FaNpm />
          <SiVite />
          <TbBrandVscode />
        </IconList>
      </div>
      </ProfileContainer>
      <Div>
        <h1>Olá, me chamo Leonardo</h1>
        <h3>Desenvolvedor Front End</h3>
      </Div>
    </Sessao>
  );
}

export default Inicio;
