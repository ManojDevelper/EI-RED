import styled from "styled-components";
import * as pallete from "../../utils/varibles";

export const DrawerSection = styled.div`
width: fit-content;
padding: 20px 10px;
display: flex;
flex-direction: column;
background: ${pallete.BACKGROUND_COLOR_WHITE};
border-radius: 15px;
.drawer_logo {
width: 140px;
margin-left: 20px;
}
`;

export const DrawerMenu = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
gap: 10px;
.active_btn {
    background: #FEF2F2;
    color: #C8434A;
        transition: 0.5s ease-in-out;
    }
`

export const DrawerButton = styled.div`
display: flex;
align-items: center;
gap: 10px;
.btn_logo {
    width: 20px;
    transition: 0.5s ease-in-out;
}
font-style: normal;
font-weight: 500;
font-size: 15px;
letter-spacing: 0.2px;
color: #BABABA;
    padding: 16px 57px 16px 19px;
    border-radius: 10px;
    cursor: pointer;
`

export const NoteSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
border: 3px solid #C4C4C4;
border-radius: 10px;
padding: 10px;
margin-top: 50px;
.note_icon {
    width: 40px;
}
.help {
    font-size: 15px;
    color: #BABABA;
    font-weight: 500;
    margin-top: 20px;
}
.notes_description {
    font-size: 15px;
    color: #000000;
    text-align: center;
    margin: 5px;
    font-weight: 500;
}
.get_help_button {
background: #000000;
border-radius: 8px;
color: #FFFFFF;
padding: 10px 40px;
border: none;
outline: none;
cursor: pointer;
margin-top: 10px;
}
`