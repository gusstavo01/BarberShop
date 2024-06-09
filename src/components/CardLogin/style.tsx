import styled from "styled-components";
import logo from '../../assets/images/logo.png';
import rodape from '../../assets/images/rodape.png';
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

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px; 
`;

export const Logo = styled.img`
  width: 270px;
  height: 210px;
  display: block;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;

`
export const LogoComponent = () => {
    return <Logo src={logo} alt="logo" />
}

export const LogoRodape = styled.img`
  margin-top: 5px;
  width: 270px;
  height: 100px;
`;

export const LogoRodapeComponent = () => {
    return <LogoRodape src={rodape} alt="logo" />
}