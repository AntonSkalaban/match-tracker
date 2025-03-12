"use client";
import { FC } from "react";

import { Card } from "shared/ui/Card";

import { CardsListProps } from "./types";

export const CardsList: FC<CardsListProps> = ({ matches }) => {
  return (
    <div>
      {matches.map((data) => (
        <Card key={data.title} matchData={data} />
      ))}
    </div>
  );
};
