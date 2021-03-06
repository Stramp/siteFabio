import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
export const Descriptions = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    color: ${theme.colors.mainTxt};
  `}
`
