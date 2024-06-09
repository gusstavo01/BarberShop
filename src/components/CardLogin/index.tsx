import React from "react";
import { Card, LogoComponent, LogoRodapeComponent, LogoWrapper } from "./style";
import StyledInput  from "../InputLogin/styledInputLogin";
import { BtnInput } from "../BtnInput";


export const CardLogin = () => {
    
    return(
       <Card>
            <LogoWrapper>
              <LogoComponent/>
            </LogoWrapper>
            <StyledInput type="email" placeholder="Email"/> 
            <StyledInput type="password" placeholder="Senha"/>
            <BtnInput/>
            <LogoRodapeComponent/>
       </Card>
    )
}