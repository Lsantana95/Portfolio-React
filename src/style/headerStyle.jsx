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
  background-color: #1c1c1c;
  display: flex;
  list-style: none;
  font-size: 1.2rem;
  width: 40vw;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 80vw;
    gap: 14px;
  }

  li {
    a {
      text-decoration: none;
      color: #f2f2f2;
      padding: 14px;
      border-radius: 36px;
      border: 3px solid #f2f2f2;

      &:hover {
        transform: scale(1.2);
        background-color: #09e32a;
      }
    }
  }
`;
