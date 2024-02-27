import styled from "styled-components";

export const Img = styled.img`
    width: 18vw;
    border: 4px solid #09e32a;
    border-radius: 50%;

    @media (max-width: 800px) {
        width: 46vw;
    }
`
export const IconList = styled.div`
 display: grid;
 grid-template-columns: repeat(6, 1fr);
 justify-content: space-between;
 align-items: center;
 width: 100%;
 padding: 20px 0;
 font-size: 2rem;
 gap: 20px;
 padding: 10px 0;

 > :hover {
    color: #09e32a; 
    transform: scale(1.4);
  }

  @media (max-width: 680px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        
    }
    @media (max-width: 550px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
    } 
    @media (max-width: 290px) {
        grid-template-columns: repeat(4, 2fr);
        gap: 10px;
    }
`;

export const ProfileContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 color: #1c1c1c;
 font-size: 1.3rem;

 @media (max-width: 800px) {
    font-size: 1rem;
    text-align: center;
    }
`;

export const Sessao = styled.section`
    display: flex;
    align-items: center;
    border: solid;
    height: 100vh;
    justify-content: center;

    @media (max-width: 800px){
        flex-direction: column;

    }
`
export const Div = styled.div`
    margin-left: 30px;
    font-size: 1.2rem;
    text-align: center;
    padding: 10px 0;
    color: #f2f2f2;

    @media (max-width: 800px) {
    width: 40vw;
    text-align: center;
    }
`
