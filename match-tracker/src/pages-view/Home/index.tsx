"use client";
import { FC } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { CardsList, CardsListSkeleton } from "widgets";
import { getData } from "shared/api";
import { Alert, RefreshButton, Wrapper } from "shared/ui";

import Logo from "./assets/logo.svg";
import { ButtonContainer, HeaderContent, LogoImageContainer } from "./styled";

export const HomePage: FC = () => {
  const { isFetching, error, data, refetch } = useQuery({
    queryKey: ["matches"],
    queryFn: getData,
  });

  return (
    <>
      <header>
        <Wrapper>
          <HeaderContent>
            <LogoImageContainer>
              <Image src={Logo} alt="logo" />
            </LogoImageContainer>

            <ButtonContainer>
              {error && <Alert message={"Ошибка: не удалось загрузить информацию"} />}

              <RefreshButton isFetching={isFetching} onClick={refetch} />
            </ButtonContainer>
          </HeaderContent>
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          {isFetching ? (
            <CardsListSkeleton />
          ) : data && data.data.matches.length > 0 ? (
            <CardsList matches={data.data.matches} />
          ) : (
            <p>Список матчей пуст</p>
          )}
        </Wrapper>
      </main>
    </>
  );
};
