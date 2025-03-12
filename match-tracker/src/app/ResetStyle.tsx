"use client";
import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
li,
ol {
  padding: 0;
  list-style-type: none;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  border: none;
  padding: 0;
  margin: 0;
  background: none;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
