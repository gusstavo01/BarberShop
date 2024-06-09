import styled from "styled-components";
import bell from "../../assets/images/notification.png";
import { Link } from "react-router-dom";
export const MenuBar = styled.div`
width: 100%;
background-color: #142453;
height: auto ;
display: flex;

justify-content: flex-end;
color:white;
ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}
li {
    margin: 10px;
    list-style: none;
    padding: 10px;
    font-size: 17px;
    
    cursor: pointer;   
    &:hover{
        color:#72BCF2;
    } 
 
}
`;

export const IconNotification = styled.img`
width: 25px;
cursor: pointer;
height: auto;

`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    
    li {
        margin: 10px;
        list-style: none;
        padding: 10px;
        font-size: 17px;
        cursor: pointer;   
        
        &:hover {
            color: #72BCF2;
        }
    }
`;

export const IconNotificationComponent = () => {
    return <IconNotification src={bell} alt="notification" />
}