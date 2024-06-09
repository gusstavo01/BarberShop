import styled from "styled-components";

export const Body = styled.body `
background-color:#E3E3E3;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column; /* Ajusta a direção dos itens */
overflow: hidden; 
`

export const Container = styled.div `
 display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  width: calc(100% - 250px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinha o conteúdo ao centro */
  margin-top: 20px; /* Espaço entre o menu e o conteúdo */
`;

export const Welcome = styled.h1`
font-size:40px;
color: #1A1C48;
font-weight:300;
width: 100%;
margin-bottom: 20px;
`;
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima dos cartões */
  margin-top: 20px; /* Espaço entre o título e os cartões */
`;