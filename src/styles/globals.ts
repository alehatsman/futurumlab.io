import { css } from '@emotion/react'
import colors from '@/styles/colors'

export const globalStyles = css`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Raleway", sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 1.6rem;
    color: ${colors.font};
    margin: 0;
    padding: 0;
    max-width: 1800px;
    margin: 0 auto;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:active {
    color: inherit;
  }
`
