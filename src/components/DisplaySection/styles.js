import styled from "styled-components";
import * as pallete from "../../utils/varibles";
import { convertPixlPopup } from "../../utils/functions";

export const DisplaySectionPreview = styled.div`
  background: white;
  width: 100%;
  border-radius: ${convertPixlPopup(15)};
  padding: ${convertPixlPopup(15)} ${convertPixlPopup(30)};
`;

export const DiaplayHeader = styled.div`
  .tab_title {
    font-size: ${convertPixlPopup(30)};
    font-weight: 600;
    color: ${pallete.BUTTON_COLOR_BLACK};
  }
  .logo_sec {
    display: flex;
    .logo {
      width: ${convertPixlPopup(50)};
      height: ${convertPixlPopup(50)};
      border: ${convertPixlPopup(1)} solid ${pallete.MENU_OPTIONS_COLOR};
      border-radius: ${convertPixlPopup(50)};
      padding: ${convertPixlPopup(5)};
    }
    .comp_details_wrap {
      margin-left: ${convertPixlPopup(20)};
      .comp_title {
        font-size: ${convertPixlPopup(20)};
        font-weight: 600;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
      .compo_desc {
        font-size: ${convertPixlPopup(18)};
        color: ${pallete.MENU_OPTIONS_COLOR};
      }
    }

    .verify_btn {
      display: flex;
      align-items: center;
      gap: ${convertPixlPopup(10)};
      margin-left: ${convertPixlPopup(40)};
      cursor: pointer;
      font-weight: 500;
      color: ${pallete.LINK_COLORS};
      text-decoration: underline;
      .verify_icon {
        width: ${convertPixlPopup(30)};
      }
    }
  }

  .compo_edit_wrapper {
    display: flex;
    max-width: ${convertPixlPopup(900)};
    .comp_description {
      color: ${pallete.MENU_OPTIONS_COLOR};
      font-size: ${convertPixlPopup(16)};
    }
    .edit_icon {
      font-size: ${convertPixlPopup(25)};
      cursor: pointer;
      color: ${pallete.ICON_COLOR_RED};
      margin: ${convertPixlPopup(13)} 0 0 ${convertPixlPopup(10)};
    }
  }
`;

export const EditMenuPreview = styled.div`
  border-radius: ${convertPixlPopup(15)};
  padding: ${convertPixlPopup(15)} ${convertPixlPopup(30)};
`;

export const EditMenuBody = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .addressModalHeader {
    margin-bottom: ${convertPixlPopup(30)};
    .modal_head_title_wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .addButton {
        color: ${pallete.ICON_COLOR_RED};
      }
    }
    .modal_header {
      display: flex;
      gap: ${convertPixlPopup(10)};
      align-items: center;
      font-size: ${convertPixlPopup(20)};
      font-weight: 500;
      .drawer_memu_back {
        cursor: pointer;
      }
    }
    .modal_desc {
      font-size: ${convertPixlPopup(15)};
      font-weight: 400;
      color: ${pallete.MENU_OPTIONS_COLOR};
    }
  }
  .menu_cards {
    display: flex;
    gap: ${convertPixlPopup(20)};
    flex-direction: column;
    height: ${convertPixlPopup(500)};
    overflow: scroll;
    overflow-x: hidden;
    /* width */
    ::-webkit-scrollbar {
      width: ${convertPixlPopup(10)};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${pallete.ICON_COLOR_RED};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .save_btn {
    width: 100%;
    height: ${convertPixlPopup(50)};
    border-radius: ${convertPixlPopup(8)};
    font-size: ${convertPixlPopup(15)};
    color: ${pallete.BACKGROUND_COLOR_WHITE};
    background: ${pallete.ICON_COLOR_RED};
    border: none;
    outline: none;
  }
`;

export const TabCardsPreview = styled.div`
  border: ${convertPixlPopup(1)} solid ${pallete.MENU_OPTIONS_COLOR};
  border-radius: ${convertPixlPopup(8)};
  padding: ${convertPixlPopup(8)} ${convertPixlPopup(25)};
  .card_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card_title {
      display: flex;
      align-items: center;
      font-size: ${convertPixlPopup(15)};
      font-weight: 500;
      gap: ${convertPixlPopup(8)};
      color: ${pallete.BUTTON_COLOR_BLACK};
      .title_icon {
        width: ${convertPixlPopup(20)};
      }
    }
    .card_icons {
      display: flex;
      gap: ${convertPixlPopup(8)};
      .edit_icon {
        font-size: ${convertPixlPopup(18)};
        cursor: pointer;
        color: ${pallete.ICON_COLOR_RED};
        margin-top: ${convertPixlPopup(13)};
      }
    }
  }

  .card_body {
    display: flex;
    margin-top: ${convertPixlPopup(20)};
    justify-content: space-between;
    .mail_sec {
      display: flex;
      align-items: center;
      gap: ${convertPixlPopup(10)};
      .mail_icon {
        font-size: ${convertPixlPopup(15)};
        color: ${pallete.MENU_OPTIONS_COLOR};
      }
      .mails {
        font-size: ${convertPixlPopup(15)};
        font-weight: 400;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
    }

    .number_badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${convertPixlPopup(40)};
      height: ${convertPixlPopup(40)};
      border-radius: ${convertPixlPopup(50)};
      font-size: ${convertPixlPopup(12)};
      font-weight: 600;
      color: ${pallete.SELECTED_MENU_OPTIONS_COLOR};
      background: ${pallete.SELECTED_MENU_BACKGROUND_COLOR};
    }
  }

  .card_footer {
    display: flex;
    align-items: center;
    gap: ${convertPixlPopup(10)};
    margin-top: ${convertPixlPopup(10)};
    .phone_icon {
      font-size: ${convertPixlPopup(15)};
      color: ${pallete.MENU_OPTIONS_COLOR};
    }
    .phone {
      font-size: ${convertPixlPopup(15)};
      font-weight: 400;
      color: ${pallete.BUTTON_COLOR_BLACK};
    }
  }

  .card_body_single {
    font-size: ${convertPixlPopup(15)};
    font-weight: 400;
    margin-top: ${convertPixlPopup(40)};
    color: ${pallete.BUTTON_COLOR_BLACK};
  }

  .card_body_icons {
    display: flex;
    gap: ${convertPixlPopup(30)};
    width: fit-content;
    margin: ${convertPixlPopup(40)} auto 0 auto;
    .icon_cont {
      display: flex;
      gap: ${convertPixlPopup(5)};
      flex-direction: column;
      font-size: ${convertPixlPopup(10)};
      align-items: center;
      font-weight: 600;
      color: ${pallete.BUTTON_COLOR_BLACK};
      .icon {
        width: ${convertPixlPopup(30)};
      }
    }
  }
`;

export const EditCardData = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .addressModalHeader {
    margin-bottom: ${convertPixlPopup(30)};
    .modal_head_title_wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .addButton {
        color: ${pallete.ICON_COLOR_RED};
      }
    }
    .modal_header {
      display: flex;
      gap: ${convertPixlPopup(10)};
      align-items: center;
      font-size: ${convertPixlPopup(20)};
      font-weight: 500;
      .drawer_memu_back {
        cursor: pointer;
      }
    }
    .modal_desc {
      font-size: ${convertPixlPopup(15)};
      font-weight: 400;
      color: ${pallete.MENU_OPTIONS_COLOR};
    }
  }
  .editcard_sec_list {
    border: ${convertPixlPopup(1)} solid ${pallete.MENU_OPTIONS_COLOR};
    overflow: scroll;
    max-height: ${convertPixlPopup(80)};
    border-radius: ${convertPixlPopup(8)};
    ::-webkit-scrollbar {
      width: ${convertPixlPopup(5)};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${pallete.ICON_COLOR_RED};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .edit_card_data_main {
    height: ${convertPixlPopup(480)};
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: ${convertPixlPopup(5)};
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${pallete.ICON_COLOR_RED};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .edit_main_sec {
      display: flex;
      margin-top: ${convertPixlPopup(20)};
      flex-direction: column;
      .input_label {
        font-size: ${convertPixlPopup(12)};
        font-weight: 600;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
      .input {
        margin-top: ${convertPixlPopup(10)};
      }
      input {
        height: ${convertPixlPopup(40)};
        border-radius: ${convertPixlPopup(4)};
        border: none;
        outline: none;
        padding: 0 0 0 ${convertPixlPopup(10)};
        background: ${pallete.BACKGROUND_COLOR};
      }
    }

    .team_name_div {
      margin-bottom: ${convertPixlPopup(10)};
    }

    .add_more_btn {
      width: 100%;
      height: ${convertPixlPopup(40)};
      border-radius: ${convertPixlPopup(8)};
      border: none;
      outline: none;
      font-size: ${convertPixlPopup(12)};
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${convertPixlPopup(10)};
      margin: ${convertPixlPopup(10)} 0;
      cursor: pointer;
      color: ${pallete.SELECTED_MENU_OPTIONS_COLOR};
      background: ${pallete.SELECTED_MENU_BACKGROUND_COLOR};
    }
  }

  .add_more_btn_dis {
    cursor: not-allowed !important;
    background: ${pallete.MENU_OPTIONS_COLOR} !important;
  }

  .save_btn {
    width: 100%;
    height: ${convertPixlPopup(50)};
    border-radius: ${convertPixlPopup(8)};
    font-size: ${convertPixlPopup(15)};
    border: none;
    outline: none;
    cursor: pointer;
    color: ${pallete.BACKGROUND_COLOR_WHITE};
    background: ${pallete.ICON_COLOR_RED};
  }
`;
