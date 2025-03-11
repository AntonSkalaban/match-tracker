import { styled } from "styled-components";
import { flex } from "shared/ui/styled";

export const TextContainer = styled.div`
  ${flex({ jc: "start", g: 8 })}
`;

export const StyledTeamInfo = styled.div`
  width: 50%;
  padding-top: 32px;
`;

export const CardBlock = styled.div`
  width: 100%;
  ${flex({ jc: "start", g: 8 })}

  padding: 8px 24px;

  background: #101318;
  border-radius: 4px;
`;

export const TopRow = styled(CardBlock)`
  justify-content: space-between;
`;

export const TopItem = styled.div`
  ${flex({})}
`;

export const PlayerTitleContainer = styled.div`
  width: 150px;
  ${flex({ jc: "start", g: 8 })}
`;

export const PlayerAvatarContainer = styled.div`
  width: 36px;
  height: 36px;
`;

export const BottomRow = styled(CardBlock)`
  ${flex({ g: 16 })}

  margin-top: 8px;
`;

export const BottomItem = styled.div`
  width: 100%;
  ${flex({})}
`;
