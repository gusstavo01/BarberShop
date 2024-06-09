import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
 background-color: #0b1533;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  width: 300px;
  height: auto;
  
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
export const Title = styled.h2`
color:white;
font-weight: 300;
font-size: 22px;
padding: 20px;
`
export const LoginAccount = styled(Link)`
color: white;
font-size: 15px;
margin-top: 15px;
text-decoration: none;

&:hover {
  text-decoration: underline;
  color:#4462CA;
}
`;