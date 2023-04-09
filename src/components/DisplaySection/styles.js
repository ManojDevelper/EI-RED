import styled from "styled-components";
import * as pallete from "../../utils/varibles";

export const DisplaySectionPreview = styled.div`
  background: white;
  width: 100%;
  border-radius: 15px;
  padding: 15px 30px;
`;

export const DiaplayHeader = styled.div`
  .tab_title {
    font-size: 30px;
    font-weight: 600;
    color: ${pallete.BUTTON_COLOR_BLACK};
  }
  .logo_sec {
    display: flex;
    .logo {
      width: 50px;
      height: 50px;
      border: 1px solid ${pallete.MENU_OPTIONS_COLOR};
      border-radius: 50px;
      padding: 5px;
    }
    .comp_details_wrap {
      margin-left: 20px;
      .comp_title {
        font-size: 20px;
        font-weight: 600;
        color: ${pallete.BUTTON_COLOR_BLACK};
      }
      .compo_desc {
        font-size: 18px;
        color: ${pallete.MENU_OPTIONS_COLOR};
      }
    }

    .verify_btn {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: 40px;
      cursor: pointer;
      font-weight: 500;
      color: ${pallete.LINK_COLORS};
      text-decoration: underline;
      .verify_icon {
        width: 30px;
      }
    }
  }

  .compo_edit_wrapper {
    display: flex;
    max-width: 900px;
    .comp_description {
      color: ${pallete.MENU_OPTIONS_COLOR};
      font-size: 16px;
    }
    .edit_icon {
      font-size: 25px;
      cursor: pointer;
      color: ${pallete.ICON_COLOR_RED};
      margin-top: 13px;
    }
  }
`;


export const EditMenuPreview = styled.div`
  background: white;
  width: 100%;
  border-radius: 15px;
  padding: 15px 30px;
`;

export const EditMenuBody = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-between;
.menu_cards {
  display: flex;
  gap: 20px;
  flex-direction: column;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:  ${pallete.ICON_COLOR_RED};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
}
  .save_btn {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-size: 15px;
    color: ${pallete.BACKGROUND_COLOR_WHITE};
    background: ${pallete.ICON_COLOR_RED};
    border: none;
    outline: none;
  }
`

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
      font-size: 15px;
      font-weight: 500;
      gap: 8px;
      color: ${pallete.BUTTON_COLOR_BLACK};
      .title_icon {
        width: 20px;
      }
    }
    .card_icons {
      display: flex;
      gap: 8px;
    .edit_icon {
      font-size: 18px;
      cursor: pointer;
      color: ${pallete.ICON_COLOR_RED};
      margin-top: 13px;
    }
    }
  }

  .card_body {
    display: flex;
    margin-top: 20px;
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
        font-weight: 400;
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
    margin-top: 10px;
    .phone_icon {
      font-size: 15px;
      color: ${pallete.MENU_OPTIONS_COLOR};
    }
    .phone {
      font-size: 15px;
      font-weight: 400;
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

export const EditCardData = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-between;
.editcard_sec_list {
  border: 1px solid ${pallete.MENU_OPTIONS_COLOR};
  overflow: scroll;
  max-height: 80px;
  border-radius: 8px;
  ::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:  ${pallete.ICON_COLOR_RED};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
}
.edit_card_data_main {
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

.team_name_div {
  margin-bottom: 10px;
}

.add_more_btn {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  cursor: pointer;
  color: ${pallete.SELECTED_MENU_OPTIONS_COLOR};
  background: ${pallete.SELECTED_MENU_BACKGROUND_COLOR};
}
}

.add_more_btn_dis {
  cursor:  not-allowed !important; 
  background: ${pallete.MENU_OPTIONS_COLOR} !important; 
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
`