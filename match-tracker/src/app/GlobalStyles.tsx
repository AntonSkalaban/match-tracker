"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #43ad28; 
    --red: #EB0237; 
    --red-pressed: #A01131;
    --red-disabled: #701328;

    --orange: #EB6402; 
    --white: #FFFFFF; 
    --transparent-white: #FAFAFA66;
    --dark-blue-black: #0b0e12;
    --deep-dark-blue: #06080C;
    --deep-dark-grey: #101318;
    --deepest-dark-grey:#0f1318;
    --skeleton-gradient: linear-gradient(90deg, #0f1318 0%, #0a0e12 100%);

    --font-title-big: 20px;
    --font-title-medium: 16px;
    --font-big: 18px;
    --font-medium: 14px;
    --font-small: 12px;

    --space-1: 2px;
    --space-2: 4px;
    --space-3: 6px;
    --space-4: 8px;
    --space-5: 10px;
    --space-6: 12px;
    --space-7: 14px;
    --space-8: 16px;
    --space-9: 20px;
    --space-10: 24px;
    --space-12: 32px;
    --space-12: 42px;

    --border-radius-1:  4px;
  }

  body {
    color: var(--white);
    font-style: normal;
    line-height: 120%;
    background-color: var(--deep-dark-blue);
  }
`;
