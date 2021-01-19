import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    width: 100vw;
    height: 100vh;
  `}
`
export const Descriptions = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    color: ${theme.colors.mainTxt};
  `}
`
