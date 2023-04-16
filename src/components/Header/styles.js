import styled from "styled-components";
import * as pallete from "../../utils/varibles";
import { convertPixlPopup } from "../../utils/functions";

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  padding: ${convertPixlPopup(5)} ${convertPixlPopup(35)};
  background: ${pallete.BACKGROUND_COLOR_WHITE};
  justify-content: space-between;
  .headerSection {
    display: flex;
    align-items: center;
    .logo {
      width: ${convertPixlPopup(50)};
      height: ${convertPixlPopup(50)};
    }
    .header_search {
      display: flex;
      align-items: center;
      background: ${pallete.BACKGROUND_COLOR};
      border-radius: ${convertPixlPopup(5)};
      width: ${convertPixlPopup(557)};
      height: ${convertPixlPopup(42)};
      padding: 0 ${convertPixlPopup(10)};
      margin-left: 150px;
      .SearchOutlined {
        font-size: ${convertPixlPopup(20)};
        color: #c4c4c4;
      }
      .search_input {
        border: none;
        outline: none;
        background: transparent;
        font-size: 12px;
        font-weight: 550;
        margin-left: ${convertPixlPopup(10)};
      }
    }
  }

  .checkout_btn {
    display: flex;
    align-items: center;
    .check_out {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 203px;
      height: 38px;
      gap: ${convertPixlPopup(10)};
      color: ${pallete.BACKGROUND_COLOR_WHITE};
      ${'' /* padding: ${convertPixlPopup(10)} ${convertPixlPopup(30)};
      height: ${convertPixlPopup(40)};
      font-size: ${convertPixlPopup(15)}; */}
      font-size: ${convertPixlPopup(12)}; 
      font-weight: 550;
      background: ${pallete.BUTTON_COLOR_BLACK};
      border-radius: ${convertPixlPopup(8)};
      border: none;
      outline: none;
      margin-right: ${convertPixlPopup(80)};
      cursor: pointer;
      .cart {
        font-size: ${convertPixlPopup(20)};
      }
    }

    .user_container {
      display: flex;
      align-items: center;
      .user_image {
        width: ${convertPixlPopup(41)};
        height: ${convertPixlPopup(41)};
        border-radius: 50%;
        ${'' /* border: ${convertPixlPopup(3)} solid gray; */}
      }
      .user_name {
        font-weight: 550;
        font-size: ${convertPixlPopup(13)};
        line-height: auto;
        color: #000000;
        margin: 0 ${convertPixlPopup(10)};
      }
      .dropdown_icon {
        cursor: pointer;
      }
    }
  }
`;
