import { css, keyframes, styled } from "styled-components";
import { StyledButton } from "shared/ui";

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
