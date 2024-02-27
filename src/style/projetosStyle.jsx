import styled from "styled-components";

export const ProjetosContainer = styled.section`
  text-align: center;
  padding: 20px;
`;

export const Titulo = styled.h1`
  color: #f2f2f2;
`;

export const Subtitulo = styled.h2`
  color: #f2f2f2;
  margin-bottom: 30px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #09e32a;
  border: 3px solid #ddd;
  border-radius: 12px;
  padding: 25px;
  margin: 15px;
  width: 300px;
  transition: 2s ease-in-out;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  &:hover {
    transform: scale(1.1);
  }

  h3 {
    color: #f2f2f2;
  }

  p {
    color: #1C1C1C;
    background-color: #00FF7F;
    text-align: center;
    font-size: 20px;
    padding: 8px;
    
  }

  button {
    background-color: #008000;
    color: #f2f2f2;
    padding: 10px;
    margin-top: 8px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #333;
    }
  }

  a {
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
`;

