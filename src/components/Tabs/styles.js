import styled from "styled-components";
import * as pallete from "../../utils/varibles";


export const TabCardsPreviewMain = styled.div`
display: grid;
gap: 20px;
margin-top: 30px;
grid-template-columns: 375px 375px 375px;

`
export const TabsSectionPreview = styled.div`
  .tabsec_title {
    font-size: 20px;
    font-weight: 500;
    color: ${pallete.BUTTON_COLOR_BLACK};
  }
  .ant-tabs-nav-list {
    gap: 50px !important;
  }
  .ant-tabs-tab-btn {
    font-size: 18px !important;
    font-weight: 400 !important;
    color: ${pallete.BUTTON_COLOR_BLACK} !important;
  }
  .ant-tabs-ink-bar {
    background: ${pallete.ICON_COLOR_RED} !important;
  }
`;

export const TabCardsPreview = styled.div`
  border: 1px solid ${pallete.MENU_OPTIONS_COLOR};
  border-radius: 8px;
  padding: 8px 25px;
  .card_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card_title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      gap: 8px;
      color: ${pallete.BUTTON_COLOR_BLACK};
      .title_icon {
        width: 25px;
      }
    }
    .edit_icon {
      font-size: 18px;
      cursor: pointer;
      color: ${pallete.ICON_COLOR_RED};
      margin-top: 13px;
    }
  }

  .card_body {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    .mail_sec {
      display: flex;
      align-items: center;
      gap: 10px;
      .mail_icon {
        font-size: 15px;
        color: ${pallete.MENU_OPTIONS_COLOR};
      }
      .mails {
        font-size: 15px;
        font-weight: 500;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
    }

    .number_badge {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 600;
      color: ${pallete.SELECTED_MENU_OPTIONS_COLOR};
      background: ${pallete.SELECTED_MENU_BACKGROUND_COLOR};
    }
  }

  .card_footer {
    display: flex;
        align-items: center;
    gap: 10px;
    .phone_icon {
      font-size: 15px;
      color: ${pallete.MENU_OPTIONS_COLOR};
    }
    .phone {
      font-size: 15px;
      font-weight: 500;
      color: ${pallete.BUTTON_COLOR_BLACK};
    }
  }

  .card_body_single {
    font-size: 15px;
        font-weight: 400;
        margin-top: 40px;
        color: ${pallete.BUTTON_COLOR_BLACK};
  }

  .card_body_icons {
    display: flex;
    gap: 30px;
    width: fit-content;
    margin: 40px auto 0 auto;
    .icon_cont {
      display: flex;
      gap: 5px;
      flex-direction: column;
      font-size: 10px;
    align-items: center;
    font-weight: 600;
        color: ${pallete.BUTTON_COLOR_BLACK};
      .icon {
      width: 30px;
      }
    }
  }
`;
