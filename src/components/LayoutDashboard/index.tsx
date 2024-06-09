import { CardDashboardComponent } from "../CardDashboard"
import { MenuBarComponent } from "../MenuBar"
import { SideMenuComponent } from "../SideMenu"
import { Body, CardsContainer, Container, MainContent, Welcome  } from "./style"


export const LayoutDashboardComponemt = () => {
  const profile = "customer";
    return (
        <Body>
         <MenuBarComponent profile={profile}/>
         <Container>
           <SideMenuComponent profile={profile}/>
           <MainContent>
             {/* Aqui você pode adicionar o conteúdo principal */}
             <Welcome>Bem vindo!</Welcome>
             <CardsContainer>
            <CardDashboardComponent
            title="Serviços"
            service1={{name:"Corte",content:"R$ 35"}}
            service2={{name:"Barba",content:"R$ 45"}}
            service3={{name:"Corte + Barba",content:"R$ 65"}}
           />

            <CardDashboardComponent
            title="Total de atendimentos"
            service1={{name:"Corte",content:"1"}}
            service2={{name:"Barba",content:"2"}}
            service3={{name:"Corte + Barba",content:"3"}}
           />
            <CardDashboardComponent
            title="Ultimo Atendimento"
            service1={{name:"Data",content:"R$ 35"}}
            service2={{name:"Profissional",content:"Teste"}}
            service3={{name:"Serviço",content:"Corte"}}
           />
     </CardsContainer>
           </MainContent>
         </Container>
        </Body>
     )
}