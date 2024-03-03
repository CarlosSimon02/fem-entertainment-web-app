import 'normalize.css';
import { createGlobalStyle, css } from 'styled-components';

import { pxToRem } from '../utils/functions';
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
    line-height: 1.5;
    overflow-wrap: break-word;
  }
`;

const base = css`
  /* Added style to all focusable elements when using tab or keyboard selection */
  *:focus-visible {
    outline: ${pxToRem(2)} solid ${({ theme }) => theme.color.focusOutline};
  }

  .no-js body > *:not(noscript) {
    display: none;
  }

  .sr-only {
    border: 0 !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }

  body {
    background-color: ${({ theme }) => theme.color.bodyBg};
    color: ${({ theme }) => theme.color.bodyText};
    font-family: Outfit, sans-serif;
    font-family: Manrope, sans-serif;
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
