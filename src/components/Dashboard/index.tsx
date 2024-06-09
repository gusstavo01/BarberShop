
import { MenuBarComponent } from "../MenuBar"
import { SideMenuComponent } from "../SideMenu"
import { Body, Container, MainContent  } from "../LayoutDashboard/style"
interface MainLayoutDashboardProps {
     children: React.ReactNode;
     profile: string;
 }

export const MainLayoutDashboard  = ({children, profile }:MainLayoutDashboardProps) => {
    return (
        <Body>
         <MenuBarComponent  profile={profile}/>
         <Container>
           <SideMenuComponent  profile={profile}/>
           <MainContent>
                {children}
           </MainContent>
         </Container>
        </Body>
     )
}