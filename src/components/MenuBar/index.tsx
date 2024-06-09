import { IconNotificationComponent, MenuBar, StyledLink } from "./style"
import { useNavigate } from 'react-router-dom';

interface MenuBarComponentProps {
    profile: string;
}

export const MenuBarComponent  = ({ profile }: MenuBarComponentProps) => {
    const navigate = useNavigate();

    const handleInicioClick = () => {
        if (profile === 'admin') {
            navigate('/dashboardAdm');
        } else {
            navigate('/dashboard');
        }
    };
    return (
        <MenuBar>
            <ul>
                <IconNotificationComponent/>
                <li onClick={handleInicioClick}>Início</li>
                <StyledLink to="/myAccount"><li>Minha conta</li></StyledLink>
                <li>Sair</li>
            </ul>
        </MenuBar>
    )
}