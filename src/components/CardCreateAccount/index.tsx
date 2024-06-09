import { Button } from "../BtnInput/style"
import { LogoComponent, LogoRodapeComponent, LogoWrapper } from "../CardLogin/style"
import StyledInput from "../InputLogin/styledInputLogin"
import { Card, LoginAccount, Title } from "./style"


export const CreateAccountComponent = () => {
    return (
        <Card>
            <LogoWrapper>
              <LogoComponent/>
            </LogoWrapper>
            <Title>Crie a sua conta!</Title>
            <StyledInput placeholder="Nome completo" type="name"/>
            <StyledInput placeholder="Email" type="email"/>
            <StyledInput placeholder="Senha" type="password"/>
            <StyledInput placeholder="Confirmação da senha" type="password"/>
            <Button>Criar conta</Button>
            <LoginAccount to="/">
                Fazer login
            </LoginAccount>
            <LogoRodapeComponent/>
        </Card>
    )
}