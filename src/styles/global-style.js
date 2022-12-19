import appConfig from 'roadmap-config'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  // Global css reset.
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  // Default css.
  body {
    background-color: ${appConfig.palette.default['300'].value};
    color: ${appConfig.palette.default['000'].value};
    font-family: 'Times New Roman', Times, serif;
  }
`
