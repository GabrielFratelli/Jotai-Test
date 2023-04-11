import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  --full-width: calc(100vw - 20px);

  --color-background: #241F1F;
  --color-white: #fff;
  --color-gray: #CCCCCC;
  --color-dark: #000;
  --color-dark-secondary: #423D3D;

  --spacing-sm: 8px;
  --spacing-md: 14px;
  --spacing-lg: 20px;
  --spacing-xl: 26px;

  --font-size-sm: 0.9rem;
  --font-size-md: 1.1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;

  --font-weight-normal: 400;
  --font-weight-bold: 700;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}

a,
b,
u {
  color: inherit;
  font-size: inherit;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
}

form {
  display: contents;
}
`;
