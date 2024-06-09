
import { LogoComponent, LogoMenuComponent, LogoWrapper, Nav, SidedMenu, LinkStyled} from "./style"
import { useNavigate } from "react-router-dom"

interface MenuBarComponentProps {
  profile: string;
}

export const SideMenuComponent = ({profile}: MenuBarComponentProps) => {
  const navigate = useNavigate();
  const handleClickSchedule = () => {
    if (profile === 'admin') {
        navigate('/LoyaltyCardAdm');
    } else {
        navigate('/dashboard');
    }
  }
  
  const handleInicioClick = () => {
    if (profile === 'admin') {
        navigate('/dashboardAdm');
    } else {
        navigate('/dashboard');
    }
    

    
};
  return (
    <SidedMenu>
      <LogoMenuComponent/>
        <LogoWrapper>
              <LogoComponent/>
        </LogoWrapper>
        <Nav>
            <ul>
                <li onClick={handleInicioClick}>Início</li>
                <li onClick={handleClickSchedule}> Agendamentos</li>
                <li>
            <LinkStyled to='/loyaltyCard'>Cartão fidelidade</LinkStyled>
          </li>
           
            </ul>
           
        </Nav>
    </SidedMenu>
  )
}

 