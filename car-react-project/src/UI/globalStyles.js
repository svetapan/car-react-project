import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    --body-font-size: 16px;
    --body-font-weight: 300;
    --body-line-height: 1.5;
    --body-font-family: Arial, sans-serif;
    --heading-font-family: "Quicksand", sans-serif;
    --gap: 1.5rem;
  }

  ::before,*::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    color: #121417;
    font: var(--body-font-weight) var(--body-font-size)/var(--body-line-height) var(--body-font-family);
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  section {
    max-width: 1128px;
    margin: 0 auto;
  }
`;
