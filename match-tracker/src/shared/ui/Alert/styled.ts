import { styled } from "styled-components";

import { flex } from "../styled";

export const StyledAlert = styled.div`
  ${flex({ g: "var(--space-5)" })}

  padding: var(--space-7);

  background: var(--deepest-dark-grey);
  border-radius: var(--border-radius-1);
`;

export const ImageContainer = styled.div`
  width: 28px;
  height: 28px;
`;
