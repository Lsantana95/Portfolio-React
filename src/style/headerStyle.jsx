import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: #1c1c1c;
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s ease-in-out;
`;

export const Navegacao = styled.ul`
  display: flex;
  list-style: none;
  font-size: 25px;
  width: 40vw;
  border: solid;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 80vw;
  }

  li {
    a {
      text-decoration: none;
      color: #f2f2f2;

      &:hover {
        transform: scale(1.2);
        background-color: #09e32a;
      }
    }
  }
`;
