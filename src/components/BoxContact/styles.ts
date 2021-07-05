import styled, { css } from 'styled-components'
import { BoxContactProps } from '.'

export const Wrapper = styled.main<BoxContactProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    border: 1px solid ${theme.colors.mainTxt};
    padding: ${theme._d.spacings.xxsmall};
    margin: ${theme._d.spacings.xxsmall};
    width: 100%;
    max-width: 350px;
  `}
`
