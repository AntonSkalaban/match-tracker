import { styled } from "styled-components";
import { flex } from "shared/ui/styled";

export const TextContainer = styled.div`
  ${flex({ jc: "start", g: "var(--space-4)" })}
`;

export const StyledTeamInfo = styled.div`
  width: 100%;
  padding-top: 32px;
`;

export const CardBlock = styled.div`
  width: 100%;
  ${flex({ jc: "start", g: "var(--space-4)" })}

  padding: var(--space-4) var(--space-10);

  background: var(--deep-dark-grey);
  border-radius: var(--border-radius-1);
`;

export const TopRow = styled(CardBlock)`
  justify-content: space-between;
`;

export const TopItem = styled.div`
  ${flex({})}
`;

export const PlayerTitleContainer = styled.div`
  width: 150px;
  ${flex({ jc: "start", g: "var(--space-4)" })}
`;

export const PlayerAvatarContainer = styled.div`
  width: 36px;
  height: 36px;
`;

export const BottomRow = styled(CardBlock)`
  ${flex({ g: "var(--space-8)" })}

  margin-top: var(--space-4);
`;

export const BottomItem = styled.div`
  width: 264px;
  ${flex({ jc: "center" })}
`;
