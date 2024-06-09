import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(180deg, #4462CA, #223064);
  width: 70%;
  height: 40px;  // Adicione altura para o botão
  color: white; // Cor do texto do botão
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

`;
 
export const BtnForgotPassword = styled.button`
  width: 90%;
  height: 40px;
  background-color: transparent;
  border: 3px solid #564D48;
  color: white;
  margin-top: 15px;
  border-radius: 17px;
  cursor: pointer;
`;

export const CreateAccount = styled(Link)`
  color: white;
  font-size: 15px;
  margin-top: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color:#4462CA;
  }
`;