import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { QueryProvider, StyledComponentsRegistry } from "shared/lib";

import { GlobalStyle } from "./GlobalStyles";
import { ResetStyle } from "./ResetStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Матч трекер",
  description: "Match tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ResetStyle />
          <GlobalStyle />
          <QueryProvider>{children}</QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
