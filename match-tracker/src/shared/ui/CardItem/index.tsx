"use client";
import { FC, useState } from "react";
import Image from "next/image";

import Arrow from "./assets/arrow.svg";
import TeamAvatar from "./assets/team.png";
import { StyledH2, StyledParagraphSmall } from "../styled";
import { statusData } from "./constants";
import {
  ArrowIconContainer,
  CardBody,
  CardHeader,
  HeaderContent,
  StatusContainer,
  StatusTitle,
  StyledCard,
  TeamAvatarContainer,
  TeamTitleBlock,
} from "./styled";
import { TeamInfo } from "./TeamInfo";
import { CardProps } from "./types";

export const CardItem: FC<CardProps> = ({ matchData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { homeTeam, awayTeam, status } = matchData;
  const { bgColor, title } = statusData[status];

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledCard>
      <CardHeader onClick={toggle}>
        <HeaderContent>
          <TeamTitleBlock>
            <TeamAvatarContainer>
              <Image src={TeamAvatar} alt="team-avatar" width={48} height={48} />
            </TeamAvatarContainer>
            <StyledH2>{homeTeam.name}</StyledH2>
          </TeamTitleBlock>

          <div>
            <StatusTitle>
              {homeTeam.points} : {awayTeam.points}
            </StatusTitle>

            <StatusContainer $color={bgColor}>
              <StyledParagraphSmall>{title}</StyledParagraphSmall>
            </StatusContainer>
          </div>

          <TeamTitleBlock>
            <StyledH2>{homeTeam.name}</StyledH2>
            <TeamAvatarContainer>
              <Image src={TeamAvatar} alt="team-avatar" width={48} height={48} />
            </TeamAvatarContainer>
          </TeamTitleBlock>
        </HeaderContent>

        <ArrowIconContainer $isOpen={isOpen}>
          <Image src={Arrow} alt="dropdown-arrow" width={48} height={48} />
        </ArrowIconContainer>
      </CardHeader>

      <CardBody $isOpen={isOpen}>
        <TeamInfo team={homeTeam} />
        <TeamInfo team={awayTeam} />
      </CardBody>
    </StyledCard>
  );
};
