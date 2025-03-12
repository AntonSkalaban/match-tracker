import { css, keyframes, styled } from "styled-components";

import { flex } from "../styled";

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

export const StyledRefreshButton = styled(StyledButton)`
  &:hover,
  &:focus {
    background-color: var(--red-pressed);
  }

  &:disabled {
    background-color: var(--red-disabled);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const RefreshImageContainer = styled.div<{ $isFetching: boolean }>`
  width: 26px;
  height: 26px;

  ${({ $isFetching }) =>
    $isFetching &&
    css`
      animation: ${rotate} 1.5s linear infinite;
    `}
`;
