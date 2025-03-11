import { FC } from "react";
import Image from "next/image";

import { StyledH3, StyledParagraphMedium } from "shared/ui/styled";

import PlayerAvatar from "./assets/playerAvatar.png";
import {
  BottomItem,
  BottomRow,
  PlayerAvatarContainer,
  PlayerTitleContainer,
  StyledTeamInfo,
  TextContainer,
  TopItem,
  TopRow,
} from "./styled";
import { TeamInfoProps } from "./types";

export const TeamInfo: FC<TeamInfoProps> = ({ team }) => {
  const { players, place, points, total_kills } = team;
  return (
    <StyledTeamInfo>
      <TopRow>
        {players.map(({ username, kills }) => (
          <TopItem key={username}>
            <PlayerTitleContainer>
              <PlayerAvatarContainer>
                <Image src={PlayerAvatar} alt="user-avatar" />
              </PlayerAvatarContainer>
              <StyledH3>{username}</StyledH3>
            </PlayerTitleContainer>

            <TextContainer>
              <StyledParagraphMedium>Убийств:</StyledParagraphMedium>
              <StyledH3>{kills}</StyledH3>
            </TextContainer>
          </TopItem>
        ))}
      </TopRow>

      <BottomRow>
        <BottomItem>
          <TextContainer>
            <StyledParagraphMedium>Points:</StyledParagraphMedium>
            <StyledH3>{points}</StyledH3>
          </TextContainer>
        </BottomItem>
        <BottomItem>
          <TextContainer>
            <StyledParagraphMedium>Место:</StyledParagraphMedium>
            <StyledH3>{place}</StyledH3>
          </TextContainer>
        </BottomItem>
        <BottomItem>
          <TextContainer>
            <StyledParagraphMedium>Всего убийств:</StyledParagraphMedium>
            <StyledH3>{total_kills}</StyledH3>
          </TextContainer>
        </BottomItem>
      </BottomRow>
    </StyledTeamInfo>
  );
};
