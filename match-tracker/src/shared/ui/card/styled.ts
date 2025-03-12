import { styled } from "styled-components";

import { flex, StyledH2 } from "../styled";

export const StyledCard = styled.div`
  height: auto;
  padding: var(--space-8);
  background: var(--dark-blue-black);
  border-radius: var(--border-radius-1);
  margin-top: var(--space-4);
`;

export const StyledCardSkeleton = styled(StyledCard)`
  height: 91px;
  background: var(--skeleton-gradient);
`;

export const CardHeader = styled.div`
  ${flex({ g: "var(--space-6)" })}
  cursor: pointer;
`;

export const HeaderContent = styled.div`
  width: 100%;
  ${flex({ g: 0 })};
`;

export const CardBody = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--space-12);

  transition: max-height 0.3s ease;
  max-height: ${({ $isOpen }) => ($isOpen ? `300px` : "0")};
  overflow: hidden;

  @media (max-width: 1800px) {
    ${flex({ g: 0, fd: "column" })}
  }
`;

export const TeamTitleBlock = styled.div`
  ${flex({ g: "var(--space-7)" })}
`;

export const TeamAvatarContainer = styled.div`
  width: 48px;
  height: 48px;
`;

export const ArrowIconContainer = styled.div<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;

  transition: transform 0.3s ease;
  ${({ $isOpen }) => ($isOpen ? `transform: rotate(180deg);` : "")};
`;

export const StatusContainer = styled.div<{ $color?: string }>`
  min-width: 92px;
  ${flex({ jc: "center" })}

  padding: var(--space-3) var(--space-1);

  background: var(--${(props) => props.$color});
  border-radius: 4px;
  margin-top: 4px;
`;

export const StatusTitle = styled(StyledH2)`
  text-align: center;
`;
