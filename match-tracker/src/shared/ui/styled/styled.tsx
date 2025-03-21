import { styled } from "styled-components";

import { flex } from "../styled";

export const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: var(--font-title-big);
  line-height: 120%;
`;

export const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: var(--font-title-medium);
  line-height: 150%;
`;

export const StyledParagraphBig = styled.p`
  font-weight: 500;
  font-size: var(--font-big);
  line-height: 120%;
`;

export const StyledParagraphMedium = styled.p`
  font-weight: 500;
  font-size: var(--font-medium);
  line-height: 150%;
  text-align: right;

  color: var(--transparent-white);
`;

export const StyledParagraphSmall = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: var(--font-small);
`;

export const Wrapper = styled.div`
  margin: 0 var(--space-12);
`;

export const StyledButton = styled.button`
  ${flex({ jc: "center", g: "var(--space-5)" })};

  background-color: var(--red);
  border-radius: 4px;

  transition: background-color 0.3s ease-in-out;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: var(--white);

  cursor: pointer;
  padding: 16px;
`;
