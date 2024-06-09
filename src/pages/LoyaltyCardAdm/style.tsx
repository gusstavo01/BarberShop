import styled from "styled-components";

 export const Title = styled.h1`
font-size: 40px;
font-weight: 300;
color:#373A43;
display: flex;
width: 100%;
`;

export const Form = styled.form`
display: flex;
width: 100%;
margin: 50px;

`;

export const InputWrapper = styled.div`
    display: flex;
    width: 40%;
    position: relative;
`;
export const Input = styled.input`
    background-color: #FBFBFB;
    width: 100%;
    height: 50px;
    border-radius: 30px;
    border: none;
    padding: 10px 60px 10px 20px; 
    outline: none;
    color: #373A43;
`;
export const Button = styled.button`
    background-color: #252738;
    color: white;
    height: 50px;
    width: 90px;
    border-radius: 30px;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 20px; 
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 45px; 
    
    height: 30px;
`;
export const CardDashboard = styled.div`
background-color:#ECEDEE;
width: 400px;
height: 300px;
margin-top: 20px;
display: flex;
flex-direction: column;
padding: 10px;
border-radius: 25px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
 
`;
export const TypeData = styled.h1 `
color: #1A1C48;
font-weight: 700;
font-size: 18px;
margin-right: 10px;
`;
export const Data = styled.p`
font-weight: 300;
font-size: 18px;
`;
export const DataRow = styled.div`
    display: flex;
    align-items: center;
    margin: 15px;
    
`;
export const CardDashboardTitle = styled.h1`
color:#1A1C48;
text-align: center;
font-weight: 700;
font-size: 25px;
margin-bottom: 35px;
`;

export const WrapperContainer = styled.div`
display: flex;
width:100%;
`;

export const WrapperBtn = styled.div`
display: flex;
margin:30px;
align-items: center;
justify-content: space-around;
flex-direction: column;
`;

export const BtnReset = styled.button`
background-color: #D33B3B;
font-weight: 300;
width: 180px;
border-radius:25px;
height: 45px;
cursor: pointer;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
border: none;
color:white;
font-size: 18px;

&:hover {
    background-color: #b12424;
   
}
`;

export const BtnAdd = styled.button`
background-color:#3DDCA3;
font-size: 18px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
font-weight: 300;
width: 180px;
border-radius:25px;
height: 45px;
cursor: pointer;
border: none;
color:white;
&:hover {
    background-color: #2dc78f;
}
`;