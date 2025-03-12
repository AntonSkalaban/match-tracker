"use client";
import { FC } from "react";

import { CardItem } from "shared/ui";

import { CardsListProps } from "./types";

export const CardsList: FC<CardsListProps> = ({ matches }) => {
  return (
    <div>
      {matches.map((data) => (
        <CardItem key={data.title} matchData={data} />
      ))}
    </div>
  );
};
