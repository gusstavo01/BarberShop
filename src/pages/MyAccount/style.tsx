import styled from "styled-components";

export const WelcomeComponent = styled.h1`
font-weight: 700;
font-size: 26px;

`;
export const Title = styled.h1`
color: #1A1C48;
width: 100%;
text-align:center;
font-weight: 700;
font-size: 25px;
`;

export const TitlePassword = styled.h1`
color: #1A1C48;
width: 100%;
text-align:center;
font-weight: 700;
font-size: 19px;
`;
export const Body = styled.body `
background-color:#E3E3E3;
width: 100%;
height:auto;
margin: 0;
display: flex;
flex-direction: column; /* Ajusta a direção dos itens */
/* overflow: hidden; */
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
  align-items: flex-start; /* Alinha o conteúdo ao centro */
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
width: 100%;
flex-wrap: wrap;
margin-top: 20px;
gap: 20px; /* Espaçamento entre os cartões */
`;
export const CardData = styled.div`
 background-color: #FCFCFD;
 width: 100%; /* Ajuste aqui */
    max-width: 400px; /* Limite máximo */
height: 200px;
  padding: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px; 
`;
export const GroupItems = styled.div`
display: flex;
align-items: center;

  flex-direction: row;
  gap: 15px; /* Espaçamento entre o título e o valor */

`;
export const H3Component = styled.h3`
  color: #1A1C48;
  font-weight: 700;
  margin: 0;
  font-size: 18px;
`;

export const Span = styled.span`
  color: #1A1C48;
  font-weight: 400;
  margin-left: 5px;
`;

export const CardChangeData = styled.div`
width: 60%;
background-color: #FCFCFD;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
border-radius: 10px;
 
`;

export const Input = styled.input`
width: 240px;
height: 40px;
border-radius: 15px;
outline: none;
background-color: #D6D8DA;
border: 0;
padding-left: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
color:#44a6ec;
margin: 10px;
`;
interface InpuType {
    type: string;
    placeholder: string;
}
export const InputComponent = ({type, placeholder}:InpuType) => {
    return (
        <Input type={type} placeholder={placeholder}/>
    )
}
export const Form = styled.form`
display: flex;
margin: 20px;
justify-content: space-around;
align-items: center;
`;

export const GroupCE = styled.div `
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
flex-direction: column;

`
export const TituleInput = styled.h3`
color: #1a1c48;
font-size: 17px;
text-align: center;
margin: 10px;
`;

export const BtnInput = styled.button`
background-color:  #72BCF2;
width:200px;
display: flex;
align-items: center;
justify-content: center;
 
height: 44px;
 border-radius: 30px;
border: none;
box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
cursor: pointer;
font-size: 15px;
color: #1A1C48;
margin-top: 15px;
 
`