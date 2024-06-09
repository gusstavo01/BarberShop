
import { MenuBarComponent } from "../../components/MenuBar"
import { SideMenuComponent } from "../../components/SideMenu"
import { useProfile } from "../../contexts/ProfileContext";
import { Body, BtnInput, CardChangeData, CardData, CardsContainer, Container, Form, GroupCE, GroupItems, H3Component,  InputComponent, MainContent, Span, Title, TitlePassword, TituleInput, WelcomeComponent } from "./style"



export const MyAccount = () => {
    const { profile } = useProfile();
    return(
        <Body>
        <MenuBarComponent  profile={profile}/>
        <Container>
          <SideMenuComponent  profile={profile}/>
          <MainContent>
            <WelcomeComponent>
                Olá,Gustavo Parente Aguiar
            </WelcomeComponent>
           <CardsContainer>
            <Title>Dados Cadastrais</Title>
            <CardData>
                <GroupItems>
                     <H3Component>Nome:</H3Component> <Span>Gustavo Parente Aguiar</Span>
                </GroupItems>
                <GroupItems>
                    <H3Component>Email:</H3Component> <Span>teste@gmail.com</Span>
                </GroupItems>
                <GroupItems>
                    <H3Component>Contato:</H3Component> <Span>0000000000</Span>
                </GroupItems>
            </CardData>

            <CardChangeData>
                <Form> 
                 <GroupCE>
                    <TituleInput>Nome</TituleInput>
                 <InputComponent type="text" placeholder="Nome"/>
                 <TituleInput>Email</TituleInput>
                 <InputComponent type="email" placeholder="Email"/>
                 <BtnInput>Alterar dados</BtnInput>
                 </GroupCE>
                 <GroupCE>
                    <TitlePassword >Alterar senha</TitlePassword>
                    <TituleInput>Senha atual</TituleInput>
                 <InputComponent type="password" placeholder="Senha atual"/>
                 <TituleInput>Nova senha</TituleInput>
                 <InputComponent type="password" placeholder="Nova senha"/>
                 <TituleInput>Confirme a nova senha</TituleInput>
                 <InputComponent type="password" placeholder="Confirme a nova senha"/>
                 <BtnInput>Alterar senha</BtnInput>
                 </GroupCE>
                </Form>
            </CardChangeData>
 
           </CardsContainer>
          </MainContent>
        </Container>
       </Body>
    )
}