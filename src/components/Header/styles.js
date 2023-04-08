import styled from "styled-components";
import * as pallete from "../../utils/varibles";

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 35px;
  background: ${pallete.BACKGROUND_COLOR_WHITE};
  justify-content: space-between;
  .headerSection {
    display: flex;
    align-items: center;
    .logo {
      width: 50px;
      height: 50px;
    }
    .header_search {
      display: flex;
      align-items: center;
      background: ${pallete.BACKGROUND_COLOR};
      border-radius: 8px;
      width: 411px;
      height: 40px;
      padding: 0 10px;
      margin-left: 150px;
      .SearchOutlined {
        font-size: 20px;
        color: #c4c4c4;
      }
      .search_input {
        border: none;
        outline: none;
        background: transparent;
        margin-left: 10px;
      }
    }
  }

  .checkout_btn {
    display: flex;
    align-items: center;
    .check_out {
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${pallete.BACKGROUND_COLOR_WHITE};
      padding: 10px 30px;
      height: 40px;
      font-size: 15px;
      font-weight: 600;
      background: ${pallete.BUTTON_COLOR_BLACK};
      border-radius: 8px;
      border: none;
      outline: none;
      margin-right: 80px;
      cursor: pointer;
      .cart {
        font-size: 20px;
      }
    }

    .user_container {
      display: flex;
      align-items: center;
      .user_image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid gray;
      }
      .user_name {
        font-weight: 600;
        font-size: 15px;
        line-height: auto;
        color: #000000;
        margin: 0 10px;
      }
      .dropdown_icon {
        cursor: pointer;
      }
    }
  }
`;
