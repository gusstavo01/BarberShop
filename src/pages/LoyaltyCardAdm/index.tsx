import { MainLayoutDashboard } from "../../components/Dashboard"
import { BtnAdd, BtnReset, Button, CardDashboard, CardDashboardTitle, Data, DataRow, Form, Icon, Input, InputWrapper, Title, TypeData, WrapperBtn, WrapperContainer } from "./style"
import icone from "../../assets/images/search.png";
export const LoyaltyCardAdm = () => {
    return(
        <MainLayoutDashboard profile="admin">
            <Title>Adicionar Pontos</Title>
            <Form>
            <InputWrapper>
                    <Input type="text" placeholder="Email" />
                    <Button type="submit"><Icon src={icone} alt="lupa"/></Button>
                </InputWrapper>
            </Form>
            <WrapperContainer>
                <CardDashboard>
                    <CardDashboardTitle>Cliente</CardDashboardTitle>
                    <DataRow>
                        <TypeData>Nome:</TypeData><Data>Gustavo Parente Aguiar</Data>
                    </DataRow>
                    <DataRow>
                        <TypeData>Email:</TypeData><Data>teste@gmail.com</Data>
                    </DataRow>
                    <DataRow>
                        <TypeData>Contato:</TypeData><Data>(00) 99999-0000</Data>
                    </DataRow>
                    <DataRow>
                        <TypeData>Pontos:</TypeData><Data>0</Data>
                    </DataRow>
                </CardDashboard>
                <WrapperBtn>
                    <BtnReset>Remover</BtnReset>
                    <BtnAdd>Adicionar</BtnAdd>
                </WrapperBtn>
            </WrapperContainer>
        </MainLayoutDashboard>
    )
}