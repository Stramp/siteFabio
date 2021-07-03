import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme._d.spacings.medium};
    color: ${theme.colors.mainTxt};
  `}
`
