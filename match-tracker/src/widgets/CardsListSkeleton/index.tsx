import { FC } from "react";

import { StyledCardSkeleton } from "shared/ui";

export const CardsListSkeleton: FC = () => {
  return (
    <div>
      {Array.from({ length: 7 }).map((_el, i) => (
        <StyledCardSkeleton key={i} />
      ))}
    </div>
  );
};
