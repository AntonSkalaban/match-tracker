import { styled } from "styled-components";
import { flex } from "shared/ui";

export const HeaderContent = styled.div`
  ${flex({ jc: "space-between" })}
  margin: var(--space-12) 0  var(--space-9) 0;
`;

export const LogoImageContainer = styled.div`
  width: 257px;
  height: 32px;
`;

export const ButtonContainer = styled.div`
  height: 56px;
  ${flex({ g: "var(--space-6)" })}
`;
