import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after{
      box-sizing: inherit;
    }

  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      background-color: ${theme.colors.mainBg};
      font-family: ${theme._d.font.family};
      font-size: ${theme._d.font.sizes.medium};
    }
  `}
`

export default GlobalStyle
