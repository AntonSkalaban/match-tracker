import { FC } from "react";
import Image from "next/image";

import Refresh from "./assets/refresh.svg";
import { RefreshImageContainer, StyledRefreshButton } from "./styled";
import { RefreshButtonProps } from "./types";

export const RefreshButton: FC<RefreshButtonProps> = ({ isFetching, onClick }) => {
  return (
    <StyledRefreshButton disabled={isFetching} onClick={onClick}>
      Обновить
      <RefreshImageContainer $isFetching={isFetching}>
        <Image src={Refresh} alt="refresh-icon" />
      </RefreshImageContainer>
    </StyledRefreshButton>
  );
};
