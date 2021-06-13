import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 130rem;
    background: ${`linear-gradient(0deg, ${theme.colors.mainTxt}00  0%, ${theme.colors.mainBg} 45%)`};
    height: 11rem;
    z-index: ${theme._d.layers.base};
    .logo {
      float: left;
      padding: 0.8rem;
    }
  `}
`
