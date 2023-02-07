import styled from "styled-components";
import Jost from "@assets/Jost/Jost-VariableFont_wght.ttf";
import JostBold from "@assets/Jost/static/Jost-Bold.ttf";

export default styled.div`
  width: 100vw;
  overflow: hidden;
  @font-face {
    font-family: Jost;
    src: url(${Jost});
  }
  @font-face {
    font-family: JostBold;
    src: url(${JostBold});
  }
  font-family: "Jost";
`;

export const mainColor = "#c91961";
