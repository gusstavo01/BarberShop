import styled from "styled-components";
import logo from '../../assets/images/logoBarber.png';
import LogoMenu from '../../assets/images/menu.png';
import { Link } from "react-router-dom";

export const SidedMenu = styled.aside`
  background-color: #142453;
  color: white;
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* overflow: hidden; */
  position: relative;

`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px; 
`;

export const Logo = styled.img`
  width: 190px;
  height: 180px;
  display: block;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

`
export const Menu = styled.img`
width: 35px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
 
  
`;
export const LogoMenuComponent = () => {
  return <Menu src={LogoMenu} alt="logo" />
}
export const LogoComponent = () => {
    return <Logo src={logo} alt="logo" />
}

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  

  ul {
    margin: 20px;
    width: 100%; 
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
  li {
    width: 100%;
    margin: 10px;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    padding: 20px;  

    &:hover {
      background-color: #16172E;
      margin: 10px;
      border-radius:5px;
      padding: 20px;
    }
  }
  `;
export const LinkStyled = styled(Link)`
color: inherit;
text-decoration: none;
width: 100%;
margin: 10px;
font-size: 17px;
text-align: center;
cursor: pointer;
padding: 20px;

 
`;





