import React from 'react';
import styled from 'styled-components';

 
export const Input = styled.input`
  
  height:45px;
  padding: 10px;
  margin-bottom: 1rem;
  background-color: #D9D9D9;
  border-radius: 20px;
  width: 100%;
  color:#0E1027;
  box-sizing: border-box;
  font-size: 16px;
  &::placeholder {
    color: #0E1027;  
      
  }
  &:focus {
    outline: none;
    border-color: none;
    
  }
`;

interface Props {
  type: string;
  placeholder: string;

}

const StyledInput = ({type, placeholder}: Props) => {
    return (
      
        <Input type={type} placeholder={placeholder} />
      
    )
}

export default StyledInput;