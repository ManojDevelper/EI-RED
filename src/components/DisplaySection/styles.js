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