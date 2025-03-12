import { FC } from "react";
import Image from "next/image";

import AlertIcon from "./assets/alert-icon.svg";
import { StyledParagraphBig } from "../styled/styled";
import { ImageContainer, StyledAlert } from "./styled";
import { AlertProps } from "./types";

export const Alert: FC<AlertProps> = ({ message }) => {
  return (
    <StyledAlert>
      <ImageContainer>
        <Image src={AlertIcon} alt="alert-icon" />
      </ImageContainer>

      <StyledParagraphBig>{message}</StyledParagraphBig>
    </StyledAlert>
  );
};
