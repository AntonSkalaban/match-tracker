"use client";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

import { Card } from "shared/ui/card";
import { MatchesResponse } from "shared/ui/types";

const baseUrl = "https://app.ftoyd.com/fronttemp-service";

export const CardsList: FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["fronttemp"],
    queryFn: () => fetch(baseUrl + "/fronttemp").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data.ok) return "An error";

  return (
    <>
      {(data as MatchesResponse).data.matches.map((data) => (
        <Card key={data.title} matchData={data} />
      ))}
    </>
  );
};
