import { styled } from "styled-components";

import { bordersRadius, flex, StyledH2 } from "../styled";

export const StyledCard = styled.div`
  height: auto;
  padding: 16px;
  background: #0b0e12;
  border-radius: ${bordersRadius[1]};
  margin-top: 8px;
`;

export const CardHeader = styled.div`
  ${flex({ g: 12 })}
  cursor: pointer;
`;

export const HeaderContent = styled.div`
  width: 100%;
  ${flex({ g: 0 })};
`;

export const CardBody = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  ${flex({ g: 32 })}

  transition: max-height 0.3s ease;
  max-height: ${(props) => (props.$isOpen ? `140px` : "0")};
  overflow: hidden;
`;

export const TeamTitleBlock = styled.div`
  ${flex({ g: 14 })}
`;

export const TeamAvatarContainer = styled.div`
  width: 48px;
  height: 48px;
`;

export const ArrowIconContainer = styled.div<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;

  transition: transform 0.3s ease;
  ${(props) => (props.$isOpen ? `transform: rotate(180deg);` : "")};
`;

export const StatusContainer = styled.div<{ $color?: string }>`
  ${flex({ jc: "center" })}

  padding: 6px 2px;

  background: ${(props) => props.$color};
  border-radius: 4px;
`;

export const StatusTitle = styled(StyledH2)`
  text-align: center;
`;
