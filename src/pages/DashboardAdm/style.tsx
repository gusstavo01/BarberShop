import styled from "styled-components";

export const Welcome = styled.h1 `
font-size: 35px;
color: #1A1C48;
width:100%;
font-weight: 300;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Limita a largura máxima dos cartões */
  margin-top: 20px; /* Espaço entre o título e os cartões */
`;

export const CardDashboard = styled.div`
background-color:#eeecec;
width: 300px;
height: 300px;
margin-top: 20px;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 10px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const CardDashboardTitle = styled.h1`
color:#1A1C48;
font-weight: 700;
font-size: 25px;
text-align:center;
`;

export const CardDashboardData = styled.h3`
color:#1A1C48;
font-weight: 700;
font-size: 20px;
text-align:center;
font-size: 80px;
margin: 70px;
`;