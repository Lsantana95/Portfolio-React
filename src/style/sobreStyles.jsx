import styled from "styled-components";

export const FotoPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 980px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid #09e32a;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const TextAbout = styled.div`
  font-size: 22px;
  color: #f2f2f2;
  text-align: left;
  margin-left: 20px;
`;

export const SobreContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;

    ${FotoPerfil} {
      margin-left: 0;
    }
  }
`;
