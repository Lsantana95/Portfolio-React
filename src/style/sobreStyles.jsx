import styled from "styled-components";

export const FotoPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 4px solid #09e32a;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 20px;

  img {
    height: 32vh;
  }
`;

export const TextAbout = styled.div`
  font-size: 1.1rem;
  color: #f2f2f2;
  text-align: center;
  margin-left: 20px;
`;

export const SobreContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 22px;
  margin-left: 20px;
  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    font-size: 1rem;

    img {
      width: 100%;
      height:100%;
  }

    ${FotoPerfil} {
      margin-left: 0;
      width: 50vw;
      height: 46vh;
    }
  }

  @media (max-width: 670px) {
    flex-direction: column;
    text-align: center;
    font-size: 1rem;

    img {
      width: 100%;
      height:100%;
  }

    ${FotoPerfil} {
      margin-left: 0;
      width: 45vw;
      height: 40vh;
    }
  }

  @media (max-width: 580px) {
    flex-direction: column;
    text-align: center;
    font-size: 1rem;

    img {
      width: 100%;
      height:100%;
  }

    ${FotoPerfil} {
      margin-left: 0;
      width: 45vw;
      height: 40vh;
    }
  }
`;
