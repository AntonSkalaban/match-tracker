export const flex = ({
  jc = "space-between",
  ai = "center",
  g = 0,
  fd = "row",
}: {
  jc?: string;
  ai?: string;
  g?: string | number;
  fd?: string;
}) => `
  display: flex;
  flex-direction: ${fd};
  justify-content: ${jc};
  align-items: ${ai};
  gap: ${typeof g === "string" ? g : `${g}px`};
`;
