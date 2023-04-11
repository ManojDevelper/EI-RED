import styled from "styled-components";
import * as pallete from "../../utils/varibles";
import { convertPixlPopup } from "../../utils/functions";

export const TabCardsPreviewMain = styled.div`
  display: grid;
  gap: ${convertPixlPopup(20)};
  margin-top: ${convertPixlPopup(30)};
  grid-template-columns: ${convertPixlPopup(360)} ${convertPixlPopup(360)} ${convertPixlPopup(
  360
)};
  .ant-drawer-header {
    display: none !important;
  }
`;
export const TabsSectionPreview = styled.div`
  .tabsec_title {
    font-size: ${convertPixlPopup(20)};
    font-weight: 500;
    color: ${pallete.BUTTON_COLOR_BLACK};
  }
  .ant-tabs-nav-list {
    gap: ${convertPixlPopup(50)} !important;
  }
  .ant-tabs-tab-btn {
    font-size: ${convertPixlPopup(18)} !important;
    font-weight: 400 !important;
    color: ${pallete.BUTTON_COLOR_BLACK} !important;
  }
  .ant-tabs-ink-bar {
    background: ${pallete.ICON_COLOR_RED} !important;
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
      font-size: ${convertPixlPopup(18)};
      font-weight: 600;
      gap: ${convertPixlPopup(8)};
      color: ${pallete.BUTTON_COLOR_BLACK};
      .title_icon {
        width: ${convertPixlPopup(25)};
        margin-right: ${convertPixlPopup(5)};
      }
    }
    .edit_icon {
      font-size: ${convertPixlPopup(18)};
      cursor: pointer;
      color: ${pallete.ICON_COLOR_RED};
      margin-top: ${convertPixlPopup(13)};
    }
  }

  .card_body {
    display: flex;
    margin-top: ${convertPixlPopup(40)};
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
        font-weight: 500;
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
    .phone_icon {
      font-size: ${convertPixlPopup(15)};
      color: ${pallete.MENU_OPTIONS_COLOR};
    }
    .phone {
      font-size: ${convertPixlPopup(15)};
      font-weight: 500;
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
      .icon {
        width: ${convertPixlPopup(30)};
      }
      a {
        color: ${pallete.BUTTON_COLOR_BLACK};
        &:hover {
          color: ${pallete.LINK_COLORS};
        }
      }
    }
  }
`;

export const AddressModalStyle = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .textArea {
    width: 95%;
    height: ${convertPixlPopup(106)};
    padding: ${convertPixlPopup(10)};
    border-radius: ${convertPixlPopup(8)};
    background: ${pallete.BACKGROUND_COLOR};
    border: none;
    outline: none;
  }
  .modal_total_wrapper {
    .addressModalHeader {
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

    .modal_body {
      height: ${convertPixlPopup(450)};
      overflow: scroll;
      overflow-x: hidden;
      ::-webkit-scrollbar {
        width: 10px;
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
      .modal_body_input {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
    .edit_main_sec {
      display: flex;
      margin-top: 20px;
      flex-direction: column;
      .input_label {
        font-size: 12px;
        font-weight: 600;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
      .input {
        margin-top: 10px;
      }
      input {
        height: 40px;
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 0 0 0 10px;
        background: ${pallete.BACKGROUND_COLOR};
      }
    }

    ${"" /* CSS for Edit statement modal */}

    .address_cards {
      border: 1px solid ${pallete.MENU_OPTIONS_COLOR};
      border-radius: 8px;
      padding: 15px;
      margin-top: 20px;
      .edit_statement_input {
        width: 95%;
        height: 40px;
        border-radius: 4px;
        border: none;
        outline: none;
        padding: 5px;
        margin-top: 20px;
        background: ${pallete.BACKGROUND_COLOR};
      }
      .card_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .quotes_icon {
          width: 20px;
        }
        .card_action_btns {
          display: flex;
          gap: 10px;
          font-size: 19px;
          cursor: pointer;
          color: ${pallete.ICON_COLOR_RED};
        }
      }
      .card_desc {
        font-size: 15px;
        font-weight: 500;
        margin-top: 20px;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
    }
  }
  .save_btn {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${pallete.BACKGROUND_COLOR_WHITE};
    background: ${pallete.ICON_COLOR_RED};
  }
`;

export const ContentPreviewStyle = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${pallete.MENU_OPTIONS_COLOR};
  .tab_container_contant {
    width: 75%;
    height: 285px;
    overflow: scroll;

    .tab_title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 20px;
      font-weight: 500;
      color: ${pallete.BUTTON_COLOR_BLACK};
      .edit_icon {
        color: ${pallete.ICON_COLOR_RED};
        cursor: pointer;
      }
    }
    ::-webkit-scrollbar {
      width: 5px;
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
    .tab_details {
      .tab_details_header {
        font-size: 16px;
        font-weight: 500;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
      .tab_details_desc {
        font-size: 15px;
        line-height: 25px;
        color: ${pallete.MENU_OPTIONS_COLOR};
      }
    }
  }
  .tab_container_wrapper {
    .tab_container_wrapper_main {
      border: 1px solid ${pallete.MENU_OPTIONS_COLOR};
      padding: 10px 30px;
    }
    .tab_title {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 20px;
      color: ${pallete.BUTTON_COLOR_BLACK};
    }
    .side_links_wrapper {
      padding: 0;
      .side_links {
        margin-top: 10px;
        cursor: pointer;
        list-style-type: none;
        font-size: 15px;
        font-weight: 400;
        color: ${pallete.BUTTON_COLOR_BLACK};
        transition: 0.5s in-out;
      }
      .side_links_active {
        font-weight: 500;
      }
    }
  }
`;

export const EditInfoPreview = styled.div`
  .info_preview_main {
    .edit_preview {
      display: flex;
      margin-top: 20px;
      flex-direction: column;
      .edit_preview_title {
        border-radius: 4px;
        padding: 10px;
        font-size: 15px;
        font-weight: bold;
        border: none;
        outline-color: ${pallete.ICON_COLOR_RED};
        background: ${pallete.BACKGROUND_COLOR};
      }
      .edit_preview_desc {
        margin-top: 10px;
        border-radius: 4px;
        height: 200px;
        padding: 10px;
        line-height: 20px;
        border: none;
        background: ${pallete.BACKGROUND_COLOR};
        outline-color: ${pallete.ICON_COLOR_RED};
      }
    }
  }
  .add_text_block {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    gap: 30px;
    margin-top: 20px;
    color: ${pallete.BACKGROUND_COLOR_WHITE};
    background: ${pallete.ICON_COLOR_RED};
    .plus_icon {
      margin-right: 10px;
    }
  }
`;
