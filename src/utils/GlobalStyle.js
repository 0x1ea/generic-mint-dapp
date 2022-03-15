import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-size: 62.5%;
}

:root {
  --sm: 1rem;
  --md: 1.2rem;
  --lg: 2.4rem;
  --xl: 3.4rem;

  /* Black theme */
  --primary-color : #121212;
  --secondary-color: #1e1e1e;
  --font-color: #f1f1f1;
  --action-color: #9259BA;
}

body {
  background-color: var(--primary-color);
  color: var(--font-color);
}
`;