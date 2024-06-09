import styled from "styled-components";

export const CardDashboard = styled.div`
background-color:#ECEDEE;
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
font-size: 20px;
margin: 10px auto;
`;

export const Service = styled.h3`
color:#1A1C48;
font-weight: 700;
font-size: 20px;

`;
export const ServiceItem = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;

  span {
    margin: 20px ;
    font-weight: 300;
    color: #1A1C48;
    font-size:17px;
   
  }
`;