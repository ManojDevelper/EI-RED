import styled from "styled-components";
import * as pallete from "../../utils/varibles";

export const ComingSoonPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .smileIcon {
    color: ${pallete.ICON_COLOR_RED} !important;
  }
`;
