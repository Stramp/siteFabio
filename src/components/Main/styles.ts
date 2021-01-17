import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    background-color: ${theme.colors.mainBg};
    width: 100vw;
    height: 100vh;
  `}
`
export const Descriptions = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    color: ${theme.colors.mainTxt};
  `}
`
