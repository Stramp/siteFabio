import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 130rem;
    background: ${`linear-gradient(0deg, ${theme.colors.mainTxt}00  0%, ${theme.colors.mainBg} 60%)`};
    height: 10rem;
    z-index: 1;
    .logo {
      float: left;
      padding: 0.8rem;
    }
  `}
`
