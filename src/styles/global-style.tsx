import 'normalize.css';
import { createGlobalStyle, css } from 'styled-components';

import { pxToRem } from '../utils/functions';
import SROnlyStyle from './common/sr-only-style';
import { fontWeights } from './sizes';

const resets = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:not(dialog) {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

const base = css`
  /* Added style to all focusable elements when using tab or keyboard selection */
  *:focus-visible {
    outline: ${pxToRem(2)} solid ${({ theme }) => theme.colors.accent.main};
  }

  .no-js body > *:not(noscript) {
    display: none;
  }

  .sr-only {
    ${SROnlyStyle};
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.secondary.main};
    font-family: Outfit, sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: ${fontWeights.light};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${resets}
  ${base}
`;

export default GlobalStyle;
