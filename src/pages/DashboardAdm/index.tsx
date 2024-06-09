import { useEffect } from "react";
import { MainLayoutDashboard } from "../../components/Dashboard"
import { useProfile } from "../../contexts/ProfileContext";
import { CardDashboard, CardDashboardData, CardDashboardTitle, CardsContainer, Welcome } from "./style"

export const DashboardAdm = () => {
     const { setProfile } = useProfile();

    useEffect(() => {
        setProfile('admin');
    }, [setProfile]);
    return(
       <MainLayoutDashboard profile="admin">
             <Welcome>Olá, Gustavo</Welcome>
       
             <CardsContainer>
                 <CardDashboard>
                     <CardDashboardTitle>Quantidade de usuários</CardDashboardTitle>
                     <CardDashboardData>70</CardDashboardData>
                </CardDashboard>  
                <CardDashboard>
                     <CardDashboardTitle>Agendamentos</CardDashboardTitle>
                     <CardDashboardData>20</CardDashboardData>
                </CardDashboard> 
                <CardDashboard>
                     <CardDashboardTitle>Atendimentos Realizados</CardDashboardTitle>
                     <CardDashboardData>14</CardDashboardData>
                </CardDashboard> 
             </CardsContainer>
       </MainLayoutDashboard>
    )
}