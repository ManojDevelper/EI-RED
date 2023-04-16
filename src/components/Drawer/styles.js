import styled from "styled-components";
import * as pallete from "../../utils/varibles";
import { convertPixlPopup } from "../../utils/functions";

export const DrawerSection = styled.div`
  width: 290px;
  padding: ${convertPixlPopup(40)} ${convertPixlPopup(10)};
  display: flex;
  flex-direction: column;
  background: ${pallete.BACKGROUND_COLOR_WHITE};
  border-radius: ${convertPixlPopup(10)};
  .drawer_logo {
    width: ${convertPixlPopup(92)};
    margin-left: ${convertPixlPopup(20)};
  }
`;

export const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${convertPixlPopup(30)};
  gap: ${convertPixlPopup(10)};
  .active_btn {
    background: #fef2f2;
    color: #c8434a;
    transition: 0.5s ease-in-out;
  }
`;

export const DrawerButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${convertPixlPopup(10)};
  .btn_logo {
    width: ${convertPixlPopup(23)};
    transition: 0.5s ease-in-out;
  }
  font-style: normal;
  font-weight: 500;
  font-size: ${convertPixlPopup(12)};
  letter-spacing: ${convertPixlPopup(0.2)};
  color: #bababa;
  padding: ${convertPixlPopup(16)} 0
    ${convertPixlPopup(16)} ${convertPixlPopup(19)};
  border-radius: ${convertPixlPopup(10)};
  cursor: pointer;
`;

export const NoteSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${convertPixlPopup(193)};
  height: ${convertPixlPopup(175)};
  ${'' /* border: ${convertPixlPopup(3)} solid #c4c4c4; */}
  border-radius: ${convertPixlPopup(8)};
  padding: ${convertPixlPopup(10)} 0 0 0;
  margin-top: ${convertPixlPopup(30)};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  .note_icon {
    width: ${convertPixlPopup(35)};
  }
  .help {
    font-size: ${convertPixlPopup(15)};
    color: ${pallete.BUTTON_COLOR_BLACK};
    font-weight: 550;
    margin-top: ${convertPixlPopup(5)};
  }
  .notes_description {
    font-size: ${convertPixlPopup(12.5)};
    color: #000000;
    text-align: center;
    margin: ${convertPixlPopup(5)};
    font-weight: 400;
    width: ${convertPixlPopup(128)};
  }
  .get_help_button {
    width: ${convertPixlPopup(118)};
    height: ${convertPixlPopup(32)};
    font-size: ${convertPixlPopup(12.5)};
    background: #000000;
    border-radius: ${convertPixlPopup(8)};
    color: ${pallete.BACKGROUND_COLOR_WHITE};
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: ${convertPixlPopup(10)};
  }
`;
