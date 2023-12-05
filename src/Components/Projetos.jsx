import React from "react"
import { ProjetosContainer, Titulo, Subtitulo, CardsContainer, Card } from "../style/projetosStyle";

function Projetos() {
  const projetos = [
    {
      nome: "Busca de jogos",
      descricao: "Aqui neste projeto feito em HTML5, CSS3 & Javascript, é um projeto em que o usuário pode pesquisar qualquer tipo de jogo que ele deseja. A pesquisa dos jogos é feita através de uma API.",
      githubUrl: "https://github.com/Lsantana95/Busca-de-jogos",
      deployUrl: "https://busca-de-jogos.vercel.app/",
    },
    {
      nome: "Pesquisa de imagens",
      descricao: "Nesse projeto feito em HTML5, CSS3 & Javascript, aqui o usuário pode pesquisar qualquer imagem. A pesquisa das imagens é feita através da API do site de imagens gratuitas Unsplash.",
      githubUrl: "https://github.com/Lsantana95/Pesquisa-de-imagens",
      deployUrl: "https://pesquisa-de-imagens.vercel.app/",
    },
    {
     nome: "Landing Page - Site de advogacia",
     descricao: "Nesse projeto feito em HTML5, CSS3 & Javascript, é uma landing page fictícia de um site para entrar em contato com advogados",
     githubUrl: "https://github.com/Lsantana95/Landing-Page-Site-de-advogacia",
     deployUrl: "https://landing-page-site-de-advogacia.vercel.app/"
    },
    {
      nome: "Calculadora - React",
      descricao: "Nesse projeto é o desafio 3 do curso de formação front end da escola Vai na Web. O  desafio do módulo 2 que pedia para desenvolver uma Calculadora em ReactJS para treinar  o uso de styled components para estilizar a Calculadora.",
      githubUrl: "https://github.com/Lsantana95/Calculadora",
      deployUrl: "https://lsantana95.github.io/Calculadora/"
    },
    {
      nome: "Buscador de CEP - React",
      descricao: "Nesse projeto desenvolvido em ReactJS, o obejtivo é fazer pesquisa por qualquer cep de 					qualquer região do Brasil.A busca dos cep's é feita consumindo a API do viacep.com.",
      githubUrl: "https://github.com/Lsantana95/Buscador-de-Cep",
      deployUrl: "https://buscador-de-cep-eta.vercel.app/"
    },
    {
      nome: "Sistema Financeiro - React",
      descricao: "Nesse projeto desenvolvido em ReactJS, o objetivo é fazer um controle financeiro de despesas,ou seja, o usuário entra com uma valor de entrada, o sistema calcula e gera uma saída referente ao que o usuário adiciono na entrada.",
      githubUrl: "https://github.com/Lsantana95/Controle-Financeiro",
      deployUrl: "https://controle-financeiro-psi-seven.vercel.app/"
    },
  ];

  const abrirLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ProjetosContainer>
      <Titulo>Bem vindo a seção dos meus projetos</Titulo>
      <Subtitulo> Aqui estão os meus melhores projetos</Subtitulo>

      <CardsContainer>
        {projetos.map((projeto, index) => (
          <Card key={index}>
            <h3>{`Projeto ${index + 1}: ${projeto.nome}`}</h3>
            <p>{projeto.descricao}</p>
            <button onClick={() => abrirLink(projeto.githubUrl)}>Ver projeto no github</button>
            <button onClick={() => abrirLink(projeto.deployUrl)}>Ver projeto no ar</button>
          </Card>
        ))}
      </CardsContainer>
    </ProjetosContainer>
  )
}
export default Projetos