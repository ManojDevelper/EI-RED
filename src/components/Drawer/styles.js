import styled from "styled-components";
import * as pallete from "../../utils/varibles";
import { convertPixlPopup } from "../../utils/functions";

export const DrawerSection = styled.div`
width: fit-content;
padding: ${convertPixlPopup(20)} ${convertPixlPopup(10)};
display: flex;
flex-direction: column;
background: ${pallete.BACKGROUND_COLOR_WHITE};
border-radius: ${convertPixlPopup(15)};
.drawer_logo {
width: ${convertPixlPopup(140)};
margin-left: ${convertPixlPopup(20)};
}
`;

export const DrawerMenu = styled.div`
display: flex;
flex-direction: column;
margin-top: ${convertPixlPopup(30)};
gap: ${convertPixlPopup(10)};
.active_btn {
    background: #FEF2F2;
    color: #C8434A;
        transition: 0.5s ease-in-out;
    }
`

export const DrawerButton = styled.div`
display: flex;
align-items: center;
gap: ${convertPixlPopup(10)};
.btn_logo {
    width: ${convertPixlPopup(20)};
    transition: 0.5s ease-in-out;
}
font-style: normal;
font-weight: 500;
font-size: ${convertPixlPopup(15)};
letter-spacing: ${convertPixlPopup(0.2)};
color: #BABABA;
    padding: ${convertPixlPopup(16)} ${convertPixlPopup(47)} ${convertPixlPopup(16)} ${convertPixlPopup(19)};
    border-radius: ${convertPixlPopup(10)};
    cursor: pointer;
`

export const NoteSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: ${convertPixlPopup(200)};
border: ${convertPixlPopup(3)} solid #C4C4C4;
border-radius: ${convertPixlPopup(10)};
padding: ${convertPixlPopup(10)};
margin-top: ${convertPixlPopup(50)};
.note_icon {
    width: ${convertPixlPopup(40)};
}
.help {
    font-size: ${convertPixlPopup(15)};
    color: #BABABA;
    font-weight: 500;
    margin-top: ${convertPixlPopup(20)};
}
.notes_description {
    font-size: ${convertPixlPopup(15)};
    color: #000000;
    text-align: center;
    margin: ${convertPixlPopup(5)};
    font-weight: 500;
}
.get_help_button {
background: #000000;
border-radius: ${convertPixlPopup(8)};
color: #FFFFFF;
padding: ${convertPixlPopup(10)} ${convertPixlPopup(40)};
border: none;
outline: none;
cursor: pointer;
margin-top: ${convertPixlPopup(10)};
}
`
