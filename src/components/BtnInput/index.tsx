import React from 'react';
import { BtnForgotPassword, Button, CreateAccount} from './style';


export const BtnInput: React.FC = () => {
  return (
    <>
     <Button>
      Login
    </Button>
    <BtnForgotPassword>
        ESQUECEU A SENHA ?
    </BtnForgotPassword>
    <CreateAccount to="/createAccount">
        Criar conta
      </CreateAccount>
    </>
   
  );
};
