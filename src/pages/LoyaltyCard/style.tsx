import styled from "styled-components";
import img from "../../assets/images/check.png";

export const Information = styled.p `
font-size: 18px;
color:#022788;
width: 50%;
display: flex;
line-height: 30px;
align-items: center;
justify-content: center;
text-align: center;
`;

export const CardContainer = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    width: auto;
    padding: 20px;
    justify-content: center;
    align-items: center;
    background-color: #6E73E2;
    height: 350px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;


export const Box = styled.div`
    display: flex;
    background-color: #FDEFEF;
    height: 100px;
    width: 100px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
`;

export const BoxWithoutImg = styled.div`
    display: flex;
    background-color: #FDEFEF;
    height: 100px;
    width: 100px;
    margin: 10px;
    justify-content: center;
    align-items: center;
`;