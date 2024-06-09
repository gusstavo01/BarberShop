import { MainLayoutDashboard } from "../../components/Dashboard"
import { Box, BoxWithoutImg, CardContainer, Information } from "./style"

export const LoyaltyCard = () => {
    return(
        
            <MainLayoutDashboard profile="customer">
                <Information>
                            Acompanhe seus agendamentos e verifique o status do seu cartão fidelidade. 
                            Mantenha-se atualizado com todas as suas atividades e benefícios em um só lugar. 
                            Confira seus compromissos futuros, gerencie suas reservas e aproveite ao máximo nosso programa de fidelidade.
                </Information>
                <CardContainer>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <BoxWithoutImg/> 
                <BoxWithoutImg/> 
                <Box></Box> 
                <Box></Box>
                <BoxWithoutImg/> 
                <BoxWithoutImg/> 
                <BoxWithoutImg/> 
            </CardContainer>
            </MainLayoutDashboard>
    )
}
