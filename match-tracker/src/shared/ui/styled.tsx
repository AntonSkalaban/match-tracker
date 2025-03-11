import { styled } from "styled-components";
export const colors = {
  green: "#43ad28",
  red: "#EB0237",
  orange: "#EB6402",
  white: "#FFFFFF",
};

export const flex = ({ jc = "space-between", ai = "center", g = 0 }) => `
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  gap: ${g}px;
`;

export const bordersRadius = {
  1: "4px",
};

export const spaces = {
  1: "2px",
  2: "4px",
  3: "6px",
  4: "8px",
  5: "12px",
  6: "14px",
  7: "16px",
  8: "32px",
};

export const StyledH2 = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  color: #ffffff;
`;

export const StyledParagraphMedium = styled.p`
  /* Base/14px - Medium */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  text-align: right;

  color: rgba(250, 250, 250, 0.4);
`;

export const StyledParagraphSmall = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #ffffff;
`;
